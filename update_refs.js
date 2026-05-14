const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (f === 'node_modules' || f === '.git' || f === '.next') return;
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('.', (filePath) => {
    if (filePath.endsWith('.html') || filePath.endsWith('.js')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Update logo references
        content = content.replace(/ALDTAN Logo org\.png/g, 'aldtan-logo.png');
        content = content.replace(/ALDTAN Logo org white\.png/g, 'aldtan-logo-white.png');
        
        // Ensure absolute paths for assets
        content = content.replace(/src="assets\//g, 'src="/assets/');
        content = content.replace(/srcset="assets\//g, 'srcset="/assets/');
        content = content.replace(/href="assets\//g, 'href="/assets/');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content);
            console.log('Updated references in:', filePath);
        }
    }
});
