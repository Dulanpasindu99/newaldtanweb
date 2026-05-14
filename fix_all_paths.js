const fs = require('fs');

const files = ['blog.html', 'blog/index.html', 'web-design-blog/index.html'];

files.forEach(f => {
    if (fs.existsSync(f)) {
        let html = fs.readFileSync(f, 'utf8');
        
        // Fix image/source paths that don't start with /
        // Look for src="/assets/... or srcset="/assets/...
        html = html.replace(/src="assets\//g, 'src="/assets/');
        html = html.replace(/srcset="assets\//g, 'srcset="/assets/');
        
        // Also check for background-image: url('assets/...')
        html = html.replace(/url\('assets\//g, "url('/assets/");
        html = html.replace(/url\("assets\//g, 'url("/assets/');

        // Also check for the logo which might be handled differently
        html = html.replace(/src='assets\//g, "src='/assets/");
        html = html.replace(/srcset='assets\//g, "srcset='/assets/");

        fs.writeFileSync(f, html);
        console.log('Fixed paths in', f);
    }
});
