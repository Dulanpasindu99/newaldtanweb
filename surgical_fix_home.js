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

const desktopLink = `<a href="/" class="
link font-light leading-tight transition-none text-gray-600 | dark:text-white
" x-bind:class="{
'text-gray-600' : !headerSmall,
'text-gray-600' : headerSmall,
}" x-on:mouseenter="menu = false">
                                    Home
                                </a>`;

const mobileLink = `<a href="/" class="link text-4xl tracking-tight leading-none transition-none | dark:text-white">Home</a>`;

files.forEach(f => {
    const fullPath = path.join(process.cwd(), f);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Split content by navigation and mobile menu containers to avoid greedy matching
        // Finding the desktop nav
        const navStart = content.indexOf('<nav class="hidden | lg:inline-flex">');
        const navEnd = content.indexOf('</nav>', navStart);
        
        if (navStart !== -1 && navEnd !== -1) {
            let navContent = content.substring(navStart, navEnd);
            // Replace the Home link in desktop nav
            navContent = navContent.replace(/<a href="\/"[^>]*>[\s\S]*?Home[\s\S]*?<\/a>/, desktopLink);
            content = content.substring(0, navStart) + navContent + content.substring(navEnd);
        }
        
        // Finding the mobile menu
        const mobileStart = content.indexOf('js-mobile-menu');
        if (mobileStart !== -1) {
            // Find the first Home link after js-mobile-menu
            const homeStart = content.indexOf('<a href="/"', mobileStart);
            const homeEnd = content.indexOf('</a>', homeStart) + 4;
            
            if (homeStart !== -1 && homeStart < content.indexOf('js-footer', mobileStart)) {
                content = content.substring(0, homeStart) + mobileLink + content.substring(homeEnd);
            }
        }

        fs.writeFileSync(fullPath, content);
    }
});
