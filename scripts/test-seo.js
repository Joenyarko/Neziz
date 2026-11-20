import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SEO_DATA } from '../src/data/seoData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

console.log('--- Running SEO Pre-rendering & Build Verification Tests ---');

let passed = 0;
let failed = 0;

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function assert(condition, message) {
    if (condition) {
        console.log(`  ✓ PASS: ${message}`);
        passed++;
    } else {
        console.error(`  ✗ FAIL: ${message}`);
        failed++;
    }
}

// 1. Verify dist directory exists
assert(fs.existsSync(distDir), 'Build dist directory exists');

// 2. Test each route in SEO_DATA
for (const [route, meta] of Object.entries(SEO_DATA)) {
    let filePath;
    if (route === '/') {
        filePath = path.join(distDir, 'index.html');
    } else {
        const cleanRoute = route.replace(/^\//, '');
        filePath = path.join(distDir, cleanRoute, 'index.html');
    }

    const fileExists = fs.existsSync(filePath);
    assert(fileExists, `Static HTML exists for route "${route}" at ${path.relative(distDir, filePath)}`);

    if (fileExists) {
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Check title tag matches escaped title
        const expectedTitle = `<title>${escapeHtml(meta.title)}</title>`;
        const hasTitle = content.includes(expectedTitle);
        assert(hasTitle, `Route "${route}" contains pre-rendered title: "${expectedTitle}"`);

        // Check canonical tag
        const hasCanonical = content.includes(`<link rel="canonical" href="${escapeAttr(meta.canonical)}"`);
        assert(hasCanonical, `Route "${route}" contains canonical tag: "${meta.canonical}"`);

        // Check description
        const expectedDesc = escapeAttr(meta.description.slice(0, 30));
        const hasDesc = content.includes(expectedDesc);
        assert(hasDesc, `Route "${route}" contains meta description`);

        // Check Open Graph tags
        const expectedOgTitle = `property="og:title" content="${escapeAttr(meta.ogTitle)}"`;
        const hasOgTitle = content.includes(expectedOgTitle);
        assert(hasOgTitle, `Route "${route}" contains og:title: "${escapeAttr(meta.ogTitle)}"`);
    }
}

console.log('\n--- Test Summary ---');
console.log(`Passed: ${passed}, Failed: ${failed}`);

if (failed > 0) {
    console.error('Test suite failed!');
    process.exit(1);
} else {
    console.log('All SEO pre-rendering and build verification tests PASSED!\n');
}
