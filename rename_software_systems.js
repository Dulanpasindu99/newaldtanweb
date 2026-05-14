const fs = require('fs');

const files = ['blog.html', 'blog/index.html', 'web-design-blog/index.html'];

files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        
        // 1. Rename display text
        content = content.replace(/>IT Systems<\/div>/g, '>Software Systems</div>');
        
        // 2. Rename the category slug
        content = content.replace(/blogCategory === 'it-systems'/g, "blogCategory === 'software-systems'");
        content = content.replace(/blogCategory = 'it-systems'/g, "blogCategory = 'software-systems'");
        
        fs.writeFileSync(f, content);
        console.log('Renamed IT Systems to Software Systems in:', f);
    }
});
