const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'about.html',
    'blog.html',
    'work.html',
    'blog/index.html',
    'web-design-blog/index.html'
];

files.forEach(f => {
    const fullPath = path.join(process.cwd(), f);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // 1. Fix the double-prefixed x-bindx-bind bug
        if (content.includes('x-bindx-bind:class')) {
            content = content.replace(/x-bindx-bind:class/g, 'x-bind:class');
            console.log(`Fixed x-bindx-bind in ${f}`);
        }

        // 2. Ensure consistency in link casing and paths
        // Replace relative links with absolute ones in the header/nav areas
        content = content.replace(/href="Work\.html"/gi, 'href="/work.html"');
        content = content.replace(/href="work\.html"/gi, 'href="/work.html"');
        content = content.replace(/href="about\.html"/gi, 'href="/about.html"');
        
        fs.writeFileSync(fullPath, content);
    }
});
