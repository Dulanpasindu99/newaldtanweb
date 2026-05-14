const fs = require('fs');
const html = fs.readFileSync('blog.html', 'utf8');

const relSrc = (html.match(/src="/assets/g) || []).length;
const absSrc = (html.match(/src="\/assets/g) || []).length;
const relSrcSet = (html.match(/srcset="/assets/g) || []).length;
const absSrcSet = (html.match(/srcset="\/assets/g) || []).length;

console.log({ relSrc, absSrc, relSrcSet, absSrcSet });
