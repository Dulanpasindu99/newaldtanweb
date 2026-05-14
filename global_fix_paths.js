const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('.', (filePath) => {
    if (filePath.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let changed = false;

        // Fix assets/ to /assets/
        // Only if it's not already /assets/ or http...
        // Use a regex that looks for src="/assets/ or href="/assets/ or srcset="/assets/
        const regexes = [
            { search: /src="assets\//g, replace: 'src="/assets/' },
            { search: /srcset="assets\//g, replace: 'srcset="/assets/' },
            { search: /href="assets\//g, replace: 'href="/assets/' },
            { search: /src='assets\//g, replace: "src='/assets/" },
            { search: /srcset='assets\//g, replace: "srcset='/assets/" },
            { search: /href='assets\//g, replace: "href='/assets/" },
            { search: /url\('assets\//g, replace: "url('/assets/" },
            { search: /url\("assets\//g, replace: 'url("/assets/' }
        ];

        regexes.forEach(r => {
            if (r.search.test(content)) {
                content = content.replace(r.search, r.replace);
                changed = true;
            }
        });

        if (changed) {
            fs.writeFileSync(filePath, content);
            console.log('Fixed paths in:', filePath);
        }
    }
});
