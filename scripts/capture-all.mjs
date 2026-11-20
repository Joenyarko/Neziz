import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const artifactsDir = 'C:\\Users\\joeny\\.gemini\\antigravity\\brain\\1a4cd503-da52-46d7-aa75-5d783289befc';
const localScreenshotsDir = path.resolve(__dirname, '../test_artifacts/screenshots');

if (!fs.existsSync(localScreenshotsDir)) {
    fs.mkdirSync(localScreenshotsDir, { recursive: true });
}

// 1. Static file server for dist
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/') reqPath = '/index.html';
    
    let filePath = path.join(distDir, reqPath);
    
    // If directory, look for index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
    }

    // SPA fallback
    if (!fs.existsSync(filePath)) {
        filePath = path.join(distDir, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    try {
        const content = fs.readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    } catch {
        res.writeHead(404);
        res.end('Not found');
    }
});

const PORT = 4173;
server.listen(PORT, async () => {
    console.log(`Preview server listening on http://localhost:${PORT}`);
    try {
        await captureAllScreenshots();
    } catch (err) {
        console.error('Screenshot capture failed:', err);
    } finally {
        server.close();
        console.log('Preview server closed.');
        process.exit(0);
    }
});

async function captureAllScreenshots() {
    const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
    const profileDir = "C:\\Users\\joeny\\AppData\\Local\\Temp\\edge_cdp_profile_screens";

    console.log("Launching Edge headless...");
    const edge = spawn(edgePath, [
        '--headless=new',
        '--disable-gpu',
        '--remote-debugging-port=9222',
        `--user-data-dir=${profileDir}`,
        'about:blank'
    ]);

    await new Promise(r => setTimeout(r, 2000));

    try {
        const res = await fetch('http://127.0.0.1:9222/json');
        const targets = await res.json();
        const page = targets.find(t => t.type === 'page');
        if (!page) throw new Error('No page target found');

        const ws = new WebSocket(page.webSocketDebuggerUrl);
        await new Promise((resolve, reject) => {
            ws.onopen = resolve;
            ws.onerror = reject;
        });

        let msgId = 1;
        const pendingCallbacks = new Map();

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.id && pendingCallbacks.has(data.id)) {
                const cb = pendingCallbacks.get(data.id);
                pendingCallbacks.delete(data.id);
                if (data.error) cb.reject(new Error(data.error.message));
                else cb.resolve(data.result);
            }
        };

        function send(method, params = {}) {
            return new Promise((resolve, reject) => {
                const id = msgId++;
                pendingCallbacks.set(id, { resolve, reject });
                ws.send(JSON.stringify({ id, method, params }));
            });
        }

        await send('Page.enable');
        await send('DOM.enable');

        const takeScreenshot = async (filename) => {
            const { data } = await send('Page.captureScreenshot', { format: 'png' });
            const buf = Buffer.from(data, 'base64');
            const localFile = path.join(localScreenshotsDir, filename);
            const artifactFile = path.join(artifactsDir, filename);
            fs.writeFileSync(localFile, buf);
            fs.writeFileSync(artifactFile, buf);
            console.log(`  ✓ Saved screenshot: ${filename}`);
        };

        const setViewport = async (width, height, isMobile = false) => {
            await send('Emulation.setDeviceMetricsOverride', {
                width,
                height,
                deviceScaleFactor: 1,
                mobile: isMobile
            });
            await send('Emulation.setVisibleSize', { width, height });
        };

        const navigateAndWait = async (url) => {
            await send('Page.navigate', { url });
            await new Promise(r => setTimeout(r, 1500));
        };

        // --- 1. DESKTOP SCREENSHOTS (1280x900) ---
        console.log('\n--- Capturing Desktop Screenshots (1280x900) ---');
        await setViewport(1280, 900, false);

        // Desktop Home (Showing Team Teaser)
        await navigateAndWait(`http://localhost:${PORT}/?no_splash`);
        await send('Runtime.evaluate', {
            expression: `
                const el = document.querySelector('.team-teaser-card');
                if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
            `
        });
        await new Promise(r => setTimeout(r, 500));
        await takeScreenshot('desktop_home_team_teaser.png');

        // Desktop About (Showing Team Section side-by-side cards)
        await navigateAndWait(`http://localhost:${PORT}/about?no_splash#team`);
        await send('Runtime.evaluate', {
            expression: `
                const el = document.querySelector('#team');
                if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
            `
        });
        await new Promise(r => setTimeout(r, 500));
        await takeScreenshot('desktop_about_team_section.png');

        // Desktop Contact Page (Cards + Form)
        await navigateAndWait(`http://localhost:${PORT}/contact?no_splash`);
        await new Promise(r => setTimeout(r, 500));
        await takeScreenshot('desktop_contact_overview.png');

        // Desktop Contact Form Validation Error States
        await send('Runtime.evaluate', {
            expression: `
                const submitBtn = document.querySelector('.project-contact-form button[type="submit"]');
                if (submitBtn) submitBtn.click();
            `
        });
        await new Promise(r => setTimeout(r, 600));
        await takeScreenshot('desktop_contact_validation_errors.png');

        // Desktop Privacy Policy
        await navigateAndWait(`http://localhost:${PORT}/privacy?no_splash`);
        await new Promise(r => setTimeout(r, 500));
        await takeScreenshot('desktop_privacy_policy.png');

        // --- 2. MOBILE SCREENSHOTS (390x844) ---
        console.log('\n--- Capturing Mobile Screenshots (390x844) ---');
        await setViewport(390, 844, true);

        // Mobile Home Teaser
        await navigateAndWait(`http://localhost:${PORT}/?no_splash`);
        await send('Runtime.evaluate', {
            expression: `
                const el = document.querySelector('.team-teaser-card');
                if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
            `
        });
        await new Promise(r => setTimeout(r, 500));
        await takeScreenshot('mobile_home_team_teaser.png');

        // Mobile About (Showing Stacked Team Cards!)
        await navigateAndWait(`http://localhost:${PORT}/about?no_splash#team`);
        await send('Runtime.evaluate', {
            expression: `
                const el = document.querySelector('#team');
                if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
            `
        });
        await new Promise(r => setTimeout(r, 500));
        await takeScreenshot('mobile_about_team_section_stacked.png');

        // Mobile Contact Page (Split Phone & WhatsApp)
        await navigateAndWait(`http://localhost:${PORT}/contact?no_splash`);
        await new Promise(r => setTimeout(r, 500));
        await takeScreenshot('mobile_contact_split_cards.png');

        // Mobile Contact Validation Errors
        await send('Runtime.evaluate', {
            expression: `
                const submitBtn = document.querySelector('.project-contact-form button[type="submit"]');
                if (submitBtn) submitBtn.click();
            `
        });
        await new Promise(r => setTimeout(r, 600));
        await takeScreenshot('mobile_contact_validation_errors.png');

        // Mobile Privacy Policy
        await navigateAndWait(`http://localhost:${PORT}/privacy?no_splash`);
        await new Promise(r => setTimeout(r, 500));
        await takeScreenshot('mobile_privacy_policy.png');

        ws.close();
    } finally {
        edge.kill();
    }
}
