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
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

if (!fs.existsSync(localScreenshotsDir)) {
    fs.mkdirSync(localScreenshotsDir, { recursive: true });
}

const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.json': 'application/json'
};

const server = http.createServer((req, res) => {
    let cleanUrl = req.url.split('?')[0].split('#')[0];
    let targetFile = path.join(distDir, cleanUrl);

    if (fs.existsSync(targetFile) && fs.statSync(targetFile).isDirectory()) {
        targetFile = path.join(targetFile, 'index.html');
    }

    if (!fs.existsSync(targetFile)) {
        targetFile = path.join(distDir, 'index.html');
    }

    const ext = path.extname(targetFile).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    try {
        const data = fs.readFileSync(targetFile);
        res.writeHead(200, {
            'Content-Type': contentType,
            'Content-Length': data.length
        });
        res.end(data);
    } catch {
        res.writeHead(404);
        res.end('Not found');
    }
});

function runChrome(args, expectedFile) {
    return new Promise((resolve) => {
        if (fs.existsSync(expectedFile)) {
            try { fs.unlinkSync(expectedFile); } catch {}
        }
        const proc = spawn(chromePath, args, { stdio: 'ignore' });
        
        const checkInterval = setInterval(() => {
            if (fs.existsSync(expectedFile) && fs.statSync(expectedFile).size > 5000) {
                clearInterval(checkInterval);
                clearTimeout(timeoutTimer);
                try { proc.kill(); } catch {}
                setTimeout(resolve, 200);
            }
        }, 200);

        const timeoutTimer = setTimeout(() => {
            clearInterval(checkInterval);
            try { proc.kill(); } catch {}
            setTimeout(resolve, 200);
        }, 6000);
    });
}

const PORT = 4173;
server.listen(PORT, '127.0.0.1', async () => {
    console.log(`Server listening on http://127.0.0.1:${PORT}`);
    
    const captures = [
        // Desktop
        { name: 'desktop_home_teaser.png', url: `http://127.0.0.1:${PORT}/?no_splash`, size: '1280,1800' },
        { name: 'desktop_about_team.png', url: `http://127.0.0.1:${PORT}/about/?no_splash`, size: '1280,1800' },
        { name: 'desktop_contact_overview.png', url: `http://127.0.0.1:${PORT}/contact/?no_splash`, size: '1280,1400' },
        { name: 'desktop_privacy_policy.png', url: `http://127.0.0.1:${PORT}/privacy/?no_splash`, size: '1280,1400' },
        { name: 'desktop_security_policy.png', url: `http://127.0.0.1:${PORT}/security/?no_splash`, size: '1280,1400' },
        // Mobile
        { name: 'mobile_home_teaser.png', url: `http://127.0.0.1:${PORT}/?no_splash`, size: '390,2000' },
        { name: 'mobile_about_team_stacked.png', url: `http://127.0.0.1:${PORT}/about/?no_splash`, size: '390,2200' },
        { name: 'mobile_contact_split_cards.png', url: `http://127.0.0.1:${PORT}/contact/?no_splash`, size: '390,1600' },
        { name: 'mobile_privacy_policy.png', url: `http://127.0.0.1:${PORT}/privacy/?no_splash`, size: '390,1600' }
    ];

    let successCount = 0;

    for (const c of captures) {
        const localDest = path.join(localScreenshotsDir, c.name);
        const artifactDest = path.join(artifactsDir, c.name);

        console.log(`Capturing ${c.name}...`);
        try {
            const profileDir = path.resolve(__dirname, '../test_artifacts/chrome_snap_profile');
            await runChrome([
                '--headless=new',
                '--disable-gpu',
                '--no-sandbox',
                `--user-data-dir=${profileDir}`,
                '--no-first-run',
                '--no-default-browser-check',
                '--disable-background-networking',
                `--window-size=${c.size}`,
                '--hide-scrollbars',
                `--screenshot=${localDest}`,
                c.url
            ], localDest);

            if (fs.existsSync(localDest)) {
                fs.copyFileSync(localDest, artifactDest);
                const bytes = fs.statSync(localDest).size;
                console.log(`  ✓ Saved: ${c.name} (${bytes} bytes)`);
                successCount++;
            } else {
                console.error(`  ✗ File not created: ${c.name}`);
            }
        } catch (err) {
            console.error(`  ✗ Error capturing ${c.name}:`, err.message);
        }
    }

    console.log(`\nScreenshot capture finished: ${successCount}/${captures.length} captured successfully.`);
    server.close();
    process.exit(0);
});
