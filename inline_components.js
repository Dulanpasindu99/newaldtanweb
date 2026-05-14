const fs = require('fs');

const header = fs.readFileSync('components/header.html', 'utf8');
const footer = fs.readFileSync('components/footer.html', 'utf8');

const files = ['blog.html', 'blog/index.html', 'web-design-blog/index.html', 'about.html', 'work.html'];

files.forEach(f => {
    if (fs.existsSync(f)) {
        let html = fs.readFileSync(f, 'utf8');
        
        // Replace placeholders with actual content
        html = html.replace('<div id="site-header"></div>', header);
        html = html.replace('<div id="site-footer"></div>', footer);
        
        // Remove the component loader script as it's no longer needed for these files
        html = html.replace('<script src="/assets/js/load-components.js"></script>', '');
        html = html.replace('<script src="assets/js/load-components.js"></script>', '');

        fs.writeFileSync(f, html);
        console.log('Inlined components in:', f);
    }
});
