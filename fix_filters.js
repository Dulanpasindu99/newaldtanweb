const fs = require('fs');

const files = ['blog.html', 'blog/index.html', 'web-design-blog/index.html'];

files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        if (!content.includes('x-data="{ activeCategory: \'all\' }"')) {
            content = content.replace('data-router-view="blog"', 'data-router-view="blog" x-data="{ activeCategory: \'all\' }"');
            fs.writeFileSync(f, content);
            console.log('Fixed Alpine data in:', f);
        }
    }
});
