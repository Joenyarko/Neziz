import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SEO_DATA } from '../src/data/seoData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
    console.error('Error: dist directory does not exist. Run "vite build" first.');
    process.exit(1);
}

const baseHtmlPath = path.join(distDir, 'index.html');
const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

console.log('Generating pre-rendered SEO static HTML per route...');

for (const [route, meta] of Object.entries(SEO_DATA)) {
    // Generate route specific head tags
    const titleTag = `<title>${escapeHtml(meta.title)}</title>`;
    
    const tags = [
        titleTag,
        `<meta name="description" content="${escapeAttr(meta.description)}" />`,
        `<link rel="canonical" href="${escapeAttr(meta.canonical)}" />`,
        `<meta property="og:title" content="${escapeAttr(meta.ogTitle)}" />`,
        `<meta property="og:description" content="${escapeAttr(meta.ogDescription)}" />`,
        `<meta property="og:url" content="${escapeAttr(meta.canonical)}" />`,
        `<meta property="og:type" content="${escapeAttr(meta.ogType || 'website')}" />`,
        `<meta property="og:site_name" content="Neziz" />`,
        `<meta property="og:image" content="${escapeAttr(meta.ogImage)}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${escapeAttr(meta.ogTitle)}" />`,
        `<meta name="twitter:description" content="${escapeAttr(meta.ogDescription)}" />`,
        `<meta name="twitter:image" content="${escapeAttr(meta.ogImage)}" />`
    ].join('\n    ');

    // Remove existing title, description, canonical, og, and twitter tags in baseHtml to avoid duplicates
    let html = baseHtml;
    html = html.replace(/<title>.*?<\/title>/is, '');
    html = html.replace(/<meta\s+name="description"[^>]*>/gi, '');
    html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, '');
    html = html.replace(/<meta\s+property="og:[^"]+"[^>]*>/gi, '');
    html = html.replace(/<meta\s+name="twitter:[^"]+"[^>]*>/gi, '');
    
    // Inject our route tags right before </head>
    html = html.replace('</head>', `    ${tags}\n  </head>`);

    // Determine target directory and file
    let targetFile;
    if (route === '/') {
        targetFile = baseHtmlPath;
    } else {
        const cleanRoute = route.replace(/^\//, '');
        const targetDir = path.join(distDir, cleanRoute);
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }
        targetFile = path.join(targetDir, 'index.html');
    }

    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`  ✓ Generated static SEO for ${route} -> ${path.relative(distDir, targetFile)}`);
}

console.log('Static SEO pre-rendering complete! All routes now contain unique title, canonical, and OG tags visible without JavaScript.');

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
