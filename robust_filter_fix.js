const fs = require('fs');

const files = ['blog.html', 'blog/index.html', 'web-design-blog/index.html'];

files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        
        // Rename activeCategory to blogCategory to avoid potential global conflicts
        content = content.replace(/activeCategory/g, 'blogCategory');
        
        // Ensure x-on and x-bind are used just in case shorthand is failing
        content = content.replace(/@click=/g, 'x-on:click.prevent=');
        content = content.replace(/:class=/g, 'x-bind:class=');
        
        // Also ensure the starting state is correct
        content = content.replace('x-data="{ blogCategory: \'all\' }"', 'x-data="{ blogCategory: \'all\' }"');

        fs.writeFileSync(f, content);
        console.log('Robust filter fix in:', f);
    }
});
