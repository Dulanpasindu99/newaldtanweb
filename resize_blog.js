const fs = require('fs');

const files = ['blog.html', 'blog/index.html', 'web-design-blog/index.html'];

files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        content = content.replace(/px-2 \| lg:px-3 \| xl:px-4 w-full \| md:w-8\/16 \| xl:w-1\/3 mb-16/g, 'px-2 | lg:px-3 | xl:px-4 w-full | md:w-1/2 | lg:w-1/3 mb-16');
        fs.writeFileSync(f, content);
        console.log('Updated grid columns in:', f);
    }
});
