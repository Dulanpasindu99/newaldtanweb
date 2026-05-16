const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'about.html',
    'work.html',
    'contact.html',
    path.join('blog', 'index.html'),
    'blog.html',
    path.join('web-design-blog', 'index.html'),
];

// Desktop nav: insert Gallery <li> after the Blog <li>
// Matches the closing </li> of the Blog nav item in the desktop nav
// We look for the href="/blog/" anchor inside a nav <li> and add Gallery after its </li>
function insertGalleryDesktop(content) {
    // Find the desktop nav Blog item and append Gallery after it
    // The pattern: </a>\n                            </li>\n                            <li...Contact
    // We use a regex to find Blog link in the desktop nav (inside <nav class="hidden | lg:inline-flex">)
    // Strategy: find the nav block and insert after Blog

    const navStart = content.indexOf('<nav class="hidden | lg:inline-flex">');
    if (navStart === -1) return content;

    // Already has gallery?
    if (content.slice(navStart, navStart + 2000).includes('/gallery.html')) return content;

    const navEnd = content.indexOf('</nav>', navStart);
    const navBlock = content.slice(navStart, navEnd);

    // Find the Blog <li> end within nav block
    const blogLiIdx = navBlock.indexOf('href="/blog/"');
    if (blogLiIdx === -1) return content;

    // Find </li> after Blog link
    const blogLiEnd = navBlock.indexOf('</li>', blogLiIdx) + '</li>'.length;

    // Build Gallery nav item - copy the style from adjacent items
    const galleryLi = `
                            <li class="relative">
                                <a href="/gallery.html" class="
link font-light leading-tight transition-none text-gray-600 | dark:text-white
" x-bind:class="{
'text-gray-600' : !headerSmall,
'text-gray-600' : headerSmall,
}" x-on:mouseenter="menu = false">
                                    Gallery
                                </a>
                            </li>`;

    const newNavBlock = navBlock.slice(0, blogLiEnd) + galleryLi + navBlock.slice(blogLiEnd);
    return content.slice(0, navStart) + newNavBlock + content.slice(navEnd);
}

// Mobile nav: insert Gallery <li> after Blog <li>
function insertGalleryMobile(content) {
    // Already has gallery in mobile?
    const mobileMenuIdx = content.indexOf('js-mobile-menu');
    if (mobileMenuIdx === -1) return content;

    const mobileBlock = content.slice(mobileMenuIdx, mobileMenuIdx + 3000);
    if (mobileBlock.includes('/gallery.html')) return content;

    // Find Blog link in mobile block
    const blogIdx = mobileBlock.indexOf('href="/blog/"');
    if (blogIdx === -1) return content;

    const blogLiEnd = mobileBlock.indexOf('</li>', blogIdx) + '</li>'.length;

    const galleryLiMobile = `
                                    <li class="relative">
                                        <a href="/gallery.html"
                                            class="link text-4xl tracking-tight leading-none transition-none | dark:text-white">
                                            Gallery
                                        </a>
                                    </li>`;

    const newMobileBlock = mobileBlock.slice(0, blogLiEnd) + galleryLiMobile + mobileBlock.slice(blogLiEnd);
    return content.slice(0, mobileMenuIdx) + newMobileBlock + content.slice(mobileMenuIdx + mobileBlock.length);
}

// Footer Explore: add Gallery between Work and Contact
function insertGalleryFooter(content) {
    // Find the Explore footer column
    const exploreIdx = content.indexOf('>Explore<');
    if (exploreIdx === -1) return content;

    // Find the Contact link in footer after Explore heading
    const footerContactSearch = content.indexOf('href="/contact.html"\n                                class="text-white relative link', exploreIdx);
    if (footerContactSearch === -1) return content;

    // Check if gallery already exists after exploreIdx
    const sectionToCheck = content.slice(exploreIdx, footerContactSearch);
    if (sectionToCheck.includes('/gallery.html')) return content;

    // Find the <li> opening tag before the Contact href
    const liBeforeContact = content.lastIndexOf('<li class="flex items-center space-x-2">', footerContactSearch);

    const galleryFooterLi = `<li class="flex items-center space-x-2">
                            <a href="/gallery.html"
                                class="text-white relative link text-sm | md:text-base |  | dark:text-gray-200 lg:dark:hover:text-gray-100 || group">
                                Gallery
                            </a>
                        </li>
                        `;

    return content.slice(0, liBeforeContact) + galleryFooterLi + content.slice(liBeforeContact);
}

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) {
        console.log(`SKIP (not found): ${file}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    content = insertGalleryDesktop(content);
    content = insertGalleryMobile(content);
    content = insertGalleryFooter(content);

    if (content === original) {
        console.log(`NO CHANGE: ${file}`);
        return;
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`UPDATED: ${file}`);
});
