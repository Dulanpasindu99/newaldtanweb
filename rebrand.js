const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Track replacement counts
let totalReplacements = 0;
function replaceAndCount(content, search, replace) {
    const regex = typeof search === 'string' ? new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g') : search;
    const matches = content.match(regex);
    const count = matches ? matches.length : 0;
    if (count > 0) {
        console.log(`  Replacing "${typeof search === 'string' ? search : search.source}" → ${count} occurrences`);
        totalReplacements += count;
    }
    return content.replace(regex, replace);
}

console.log('=== ALDTAN Rebranding Script ===\n');

// =============================================
// 1. REPLACE CDN IMAGE URLS WITH LOCAL ASSETS
// =============================================
console.log('1. Replacing CDN image URLs with local assets...');

// Team/People images → team-member.png or team-office.png
// Pattern: Any CDN URL in srcset with multiple sizes → single local image
// For <source> with srcset containing CDN URLs, replace entire srcset with local path
// For <img> with src and srcset containing CDN URLs, replace with local paths

// Replace all CDN picture/source/img blocks with simplified local versions
// People/Studio images → team-member.png
html = replaceAndCount(html,
    /srcset="https:\/\/made-byshape\.transforms\.svdcdn\.com\/production\/uploads\/images\/India-2022\/People-in-Studio\/[^"]+"/g,
    'srcset="assets/images/team-member.png"'
);
html = replaceAndCount(html,
    /src="https:\/\/made-byshape\.transforms\.svdcdn\.com\/production\/uploads\/images\/India-2022\/People-in-Studio\/[^"]+"/g,
    'src="assets/images/team-member.png"'
);

// Team member profile photos (Andy, Natasia, Ella, Jason, etc.) → team-member.png
html = replaceAndCount(html,
    /srcset="https:\/\/made-byshape\.transforms\.svdcdn\.com\/production\/uploads\/images\/[^"]*(?:Andy|Natasia|Ella|Jason|team|Team|MadeByShape-icon)[^"]*"/gi,
    'srcset="assets/images/team-member.png"'
);
html = replaceAndCount(html,
    /src="https:\/\/made-byshape\.transforms\.svdcdn\.com\/production\/uploads\/images\/[^"]*(?:Andy|Natasia|Ella|Jason|team|Team|MadeByShape-icon)[^"]*"/gi,
    'src="assets/images/team-member.png"'
);

// Work/portfolio images (Nth-Degree, etc.) → portfolio-showcase.png
html = replaceAndCount(html,
    /srcset="https:\/\/made-byshape\.transforms\.svdcdn\.com\/production\/uploads\/images\/workImages\/[^"]+"/g,
    'srcset="assets/images/portfolio-showcase.png"'
);
html = replaceAndCount(html,
    /src="https:\/\/made-byshape\.transforms\.svdcdn\.com\/production\/uploads\/images\/workImages\/[^"]+"/g,
    'src="assets/images/portfolio-showcase.png"'
);

// Any remaining CDN images → buttonicon.jpg as generic fallback
html = replaceAndCount(html,
    /srcset="https:\/\/made-byshape\.transforms\.svdcdn\.com[^"]+"/g,
    'srcset="assets/images/team-member.png"'
);
html = replaceAndCount(html,
    /src="https:\/\/made-byshape\.transforms\.svdcdn\.com[^"]+"/g,
    'src="assets/images/team-member.png"'
);
html = replaceAndCount(html,
    /url":"https:\/\/made-byshape\.transforms\.svdcdn\.com[^"]+"/g,
    'url":"assets/images/aldtan-og-image.png"'
);

// =============================================
// 2. REPLACE EXTERNAL LINKS
// =============================================
console.log('\n2. Replacing external madebyshape.co.uk links with local paths...');

// Specific page links
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/work\//g, '/work/');
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/about\//g, '/about/');
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/contact\//g, '/contact/');
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/services\//g, '/services/');
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/meet-the-team\//g, '/meet-the-team/');
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/processes\//g, '/processes/');
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/sectors\//g, '/sectors/');
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/culture\//g, '/culture/');
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/craft-cms\//g, '/craft-cms/');
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/frequently-asked-questions\//g, '/frequently-asked-questions/');
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/privacy-policy\//g, '/privacy-policy/');
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/project-planner\//g, '/project-planner/');
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/search-engine-optimisation-manchester\//g, '/seo/');
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/hex-test\//g, '#');

// Blog links → /blog/
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\/web-design-blog\/[^"]+/g, '/blog/');

// Any remaining madebyshape.co.uk links → /
html = replaceAndCount(html, /https:\/\/madebyshape\.co\.uk\//g, '/');
html = replaceAndCount(html, /https:\/\/www\.madebyshape\.co\.uk/g, 'https://www.aldtan.com');
html = replaceAndCount(html, /http:\/\/madebyshape\.madebyshape\.io[^"]+/g, 'assets/images/aldtan-og-image.png');

// =============================================
// 3. REPLACE SOCIAL MEDIA LINKS
// =============================================
console.log('\n3. Replacing social media links...');

html = replaceAndCount(html, /https:\/\/www\.behance\.net\/madebyshape/g, 'https://www.aldtan.com');
html = replaceAndCount(html, /https:\/\/instagram\.com\/madebyshape/g, 'https://www.instagram.com/aldtan');
html = replaceAndCount(html, /https:\/\/github\.com\/madebyshape\//g, 'https://github.com/aldtan/');
html = replaceAndCount(html, /https:\/\/www\.linkedin\.com\/company\/madebyshape\/[^"]+/g, 'https://www.linkedin.com/company/aldtan/');
html = replaceAndCount(html, /https:\/\/twitter\.com\/madebyshape/g, 'https://twitter.com/aldtan');
html = replaceAndCount(html, /https:\/\/x\.com\/madebyshape/g, 'https://x.com/aldtan');

// =============================================
// 4. REPLACE BRAND NAMES IN TEXT CONTENT
// =============================================
console.log('\n4. Replacing brand names...');

// Specific compound phrases first
html = replaceAndCount(html, /MadeByShape/g, 'ALDTAN');
html = replaceAndCount(html, /Made By Shape/g, 'ALDTAN');
html = replaceAndCount(html, /Made by Shape/g, 'ALDTAN');
html = replaceAndCount(html, /madebyshape/g, 'aldtan');

// =============================================
// 5. REPLACE LOCATION & COMPANY SPECIFIC TEXT
// =============================================
console.log('\n5. Replacing location & company descriptions...');

// Replace Manchester references with Kalutara/Sri Lanka
html = replaceAndCount(html, /Manchester Web Design Agency/g, 'Software Development Company');
html = replaceAndCount(html, /Web Design Agency based in Manchester/g, 'Software Development Company based in Sri Lanka');
html = replaceAndCount(html, /Manchester specialising in Web Design/g, 'Sri Lanka specialising in Software Development');
html = replaceAndCount(html, /studio just outside of Manchester/g, 'office in Kalutara, Sri Lanka');
html = replaceAndCount(html, /studio outside of Manchester/g, 'office in Kalutara');
html = replaceAndCount(html, /Born in 2010/g, 'Founded in 2022');

// Replace old company description in meta tags
html = replaceAndCount(html,
    /Award-Winning Web Design Agency based in Manchester specialising in Web Design , Branding , eCommerce , Digital Marketing and Organic SEO\. So, if you need a professional Manchester Web Design Agency to support you with your branding or website design, get in touch with us today\. Why our studio outside of Manchester works for us Types of clients we want to work with Why I chose to work for a small design agency/g,
    'A leading Software Development Company based in Sri Lanka specializing in Engineering Solutions, Web Development, Mobile Apps, Cloud Infrastructure, and Digital Transformation.'
);

// Replace phone number
html = replaceAndCount(html, /01942\s*894596/g, '+94 34 222 3456');

// Replace email references
html = replaceAndCount(html, /hello@madebyshape\.co\.uk/g, 'hello@aldtan.com');
html = replaceAndCount(html, /info@madebyshape\.co\.uk/g, 'info@aldtan.com');

// Replace address
html = replaceAndCount(html, /Standish, Wigan/g, 'Kalutara');
html = replaceAndCount(html, /WN6 0[A-Z]{2}/g, '12500');
html = replaceAndCount(html, /United Kingdom/g, 'Sri Lanka');

// =============================================
// 6. REPLACE STRUCTURED DATA (JSON-LD)
// =============================================
console.log('\n6. Updating structured data...');

html = replaceAndCount(html, /"@id":"\/\/#identity"/g, '"@id":"https://www.aldtan.com/#identity"');
html = replaceAndCount(html, /"@id":"\/\/#creator"/g, '"@id":"https://www.aldtan.com/#creator"');
html = replaceAndCount(html, /"priceRange":"\$\$\$"/g, '"priceRange":"$$"');

// =============================================
// 7. REPLACE ALT TEXTS
// =============================================
console.log('\n7. Updating image alt texts...');

html = replaceAndCount(html, /alt="Andy Made By Shape"/g, 'alt="ALDTAN Team Member"');
html = replaceAndCount(html, /alt="Natasia Made By Shape"/g, 'alt="ALDTAN Team Member"');
html = replaceAndCount(html, /alt="Shape April 2022[^"]*"/g, 'alt="ALDTAN Team"');
html = replaceAndCount(html, /alt="Ella-ALDTAN[^"]*"/g, 'alt="ALDTAN Team Member"');

// =============================================
// 8. FIX OG IMAGE TO LOCAL
// =============================================
console.log('\n8. Fixing OG image references...');

html = replaceAndCount(html,
    /content="https:\/\/made-byshape\.transforms\.svdcdn\.com[^"]+"/g,
    'content="assets/images/aldtan-og-image.png"'
);

// =============================================
// 9. CLEAN UP CSRF TOKEN URL
// =============================================
console.log('\n9. Cleaning up CSRF token URLs...');

html = replaceAndCount(html,
    /xhr\.open\("GET", "\/index\.php\/actions\/servd-asset-storage\/csrf-token\/get-token\/"\)/g,
    'xhr.open("GET", "#")'
);

// =============================================
// 10. REMOVE og:see_also REFERENCES TO SOCIAL MEDIA
// =============================================
console.log('\n10. Cleaning up remaining external references...');

// Replace any residual madebyshape references
html = replaceAndCount(html, /Shape /g, function (match) {
    // Only replace if it's clearly a brand reference, not a CSS class
    return match;
});

// Write the result
fs.writeFileSync(filePath, html, 'utf8');

console.log(`\n=== COMPLETE ===`);
console.log(`Total replacements made: ${totalReplacements}`);

// Verify no remaining references
const remaining = html.match(/madebyshape|MadeByShape|Made By Shape|made-byshape\.transforms|svdcdn\.com/gi);
if (remaining) {
    console.log(`\nWARNING: ${remaining.length} remaining references found:`);
    const unique = [...new Set(remaining)];
    unique.forEach(r => console.log(`  - "${r}" (${remaining.filter(x => x === r).length}x)`));
} else {
    console.log('\n✓ No remaining "madebyshape" or CDN references found!');
}
