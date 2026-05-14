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
        
        // 1. Clean up any mess from previous run if necessary
        // (Removing the misplaced desktop structure from the mobile menu)
        // We can detect it by the "link font-light" class inside the list item that has the "13" count nearby
        
        // Let's just normalize the entire nav/header section to be sure.
        
        // Remove the count div from the first li in mobile menu
        content = content.replace(/<div\s+class="absolute\s+-top-3\s+-right-4\s+pointer-events-none\s+rounded-full\s+z-20\s+bg-primary-600\s+text-white\s+text-xs\s+pt-px\s+px-2\s+leading-tight\s+tracking-tight">\s*13<\/div>/g, '');

        // Fix the Home link in mobile menu (it's the one with text-4xl usually)
        // Or if it was replaced by the desktop one, fix it back
        content = content.replace(
            /<a\s+href="\/"\s+class="\s+link\s+font-light\s+leading-tight\s+transition-none\s+text-gray-600\s+\|\s+dark:text-white\s+"[^>]*>[\s\S]*?Home[\s\S]*?<\/a>/g,
            '<a href="/" class="link text-4xl tracking-tight leading-none transition-none | dark:text-white">Home</a>'
        );
        
        // Also ensure the desktop one is correct (it should have the x-bind etc.)
        // But since I'm replacing "Services" with "Home", I should make sure I don't break the desktop one.
        
        // Actually, let's do a more surgical replacement.
        // I'll read the file, find the nav, find the mobile menu, and fix them separately.
        
        fs.writeFileSync(fullPath, content);
    }
});
