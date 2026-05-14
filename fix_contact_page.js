const fs = require('fs');
const path = 'contact.html';

if (fs.existsSync(path)) {
    let html = fs.readFileSync(path, 'utf8');

    // 1. Replace all madebyshape.co.uk links with local ones or root
    html = html.replace(/https:\/\/madebyshape\.co\.uk\//g, '/');
    
    // 2. Fix remaining /dist/ paths to /assets/
    html = html.replace(/\/dist\//g, '/assets/');

    // 3. Specifically fix the Services -> Home change (flexible regex for whitespace)
    html = html.replace(/<a\s+href="\/services\/"[^>]*>[\s\n]*Services[\s\n]*<\/a>/g, '<a href="/" class="link font-light leading-tight transition-none text-gray-600 | dark:text-white" x-on:mouseenter="menu = 7">Home</a>');
    // Also catch any other "Services" text in links
    html = html.replace(/>Services<\/a>/g, '>Home</a>');
    html = html.replace(/href="\/services\/"/g, 'href="/"');
    
    // 4. Update company info to ALDTAN
    html = html.replace(/MadeByShape Ltd 2026/g, 'ALDTAN Team 2026');
    html = html.replace(/Company Reg Number 10529058/g, 'info@aldtan.com');
    html = html.replace(/Web Design Manchester/g, 'ALDTAN');
    
    // 5. Fix logo text
    html = html.replace(/Shape Logo link to home page/g, 'ALDTAN Logo link to home page');

    fs.writeFileSync(path, html);
    console.log('Fixed contact.html successfully with robust regex');
} else {
    console.log('contact.html not found');
}
