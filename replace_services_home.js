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
        
        // 1. Replace "Services" link with "Home" in the desktop nav
        // We look for the specific structure of the Services link
        content = content.replace(
            /<a href="\/services\/"[^>]*>\s*Services\s*<\/a>/g, 
            '<a href="/" class="\nlink font-light leading-tight transition-none text-gray-600 | dark:text-white\n" x-bind:class="{\n\'text-gray-600\' : !headerSmall,\n\'text-gray-600\' : headerSmall,\n}" x-on:mouseenter="menu = false">\n                                    Home\n                                </a>'
        );

        // 2. Replace "Services" link with "Home" in the mobile menu
        // We look for the mobile menu pattern
        content = content.replace(
            /<a href="\/services\/"[^>]*>\s*Services\s*<\/a>/g,
            '<a href="/" class="link text-4xl tracking-tight leading-none transition-none | dark:text-white">\n                                            Home\n                                        </a>'
        );
        
        // Secondary check for any other "Services" text in the nav area if the above regex is too specific
        // but given the minified nature, I should be careful.
        // Let's try a more robust approach for the mobile menu specifically since it has a different class
        content = content.replace(/>\s*Services\s*<\/a>/g, '>Home</a>');
        content = content.replace(/href="\/services\/"/g, 'href="/"');

        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${f}: replaced Services with Home`);
    }
});
