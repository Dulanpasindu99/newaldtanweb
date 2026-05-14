const fs = require('fs');

const files = ['blog.html', 'blog/index.html', 'web-design-blog/index.html'];

// The correct Alpine initialization script from index.html
const initScript = `
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script>
    <script>
        document.addEventListener('alpine:init', () => {
            Alpine.data('app', () => ({
                viewportHeight: null,
                gaEvents() {
                    document.querySelectorAll('a[href^="mailto"]').forEach(element => {
                        element.addEventListener('click', (event) => {
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({'event': 'email_lead'});
                        })
                    });
                },
                baseInit() {
                    viewportHeight = window.innerHeight * 0.01;
                    document.documentElement.style.setProperty('--vh', \`\${viewportHeight}px\`);
                    const darkMode = Cookies.get('darkMode');
                    if (darkMode == 'true') {
                        document.querySelector('html').classList.add('dark');
                    }
                }
            }))
        });
    </script>
    <script src="/assets/js/app.js"></script>
`;

files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        
        // Remove the incorrect/missing scripts
        content = content.replace(/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/js-cookie@3\.0\.1\/dist\/js\.cookie\.min\.js"><\/script>\s*<script src="\/dist\/js\/app\.js"><\/script>/g, '');
        content = content.replace(/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/js-cookie@3\.0\.1\/dist\/js\.cookie\.min\.js"><\/script>\s*<script src="\/assets\/js\/app\.js"><\/script>/g, '');
        
        // Add the correct script block before </body>
        if (!content.includes('Alpine.data(\'app\'')) {
            content = content.replace('</body>', initScript + '\n</body>');
        }

        fs.writeFileSync(f, content);
        console.log('Fixed scripts in:', f);
    }
});
