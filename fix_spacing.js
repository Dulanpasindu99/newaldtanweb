const fs = require('fs');

const files = ['blog.html', 'blog/index.html', 'web-design-blog/index.html'];

files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        
        // 1. Increase side padding and reduce max-width for better spacing
        content = content.replace(/px-2 \| lg:px-4 \| xl:px-8 w-full max-w-10xl mx-auto/g, 'px-8 | lg:px-16 | xl:px-24 w-full max-w-8xl mx-auto');
        
        // 2. Fix the broken container structure (move closing div to after the grid)
        // Find the spot where the container was prematurely closed
        const searchStr = '</ul>\n</div>\n</div>\n\n<div class="flex flex-wrap -mb-16">';
        const fixStr = '</ul>\n\n<div class="flex flex-wrap -mb-16 mt-20">'; // Keep container open
        
        if (content.includes(searchStr)) {
            content = content.replace(searchStr, fixStr);
            // Now find where to close it (before the footer or BLOG_CONTENT_END)
            content = content.replace('<!-- BLOG_CONTENT_END -->', '</div>\n</div>\n<!-- BLOG_CONTENT_END -->');
        }

        fs.writeFileSync(f, content);
        console.log('Fixed spacing and structure in:', f);
    }
});
