const fs = require('fs');
const path = require('path');

const contactPath = path.join(process.cwd(), 'contact.html');
const indexPath = path.join(process.cwd(), 'index.html');

if (fs.existsSync(contactPath) && fs.existsSync(indexPath)) {
    let contactContent = fs.readFileSync(contactPath, 'utf8');
    const indexContent = fs.readFileSync(indexPath, 'utf8');

    // 1. Extract Header from index.html
    const headerStartTag = '<div class="relative inline-flex justify-center z-20 py-2 | lg:py-3 || js-header-container">';
    const headerEndTag = '</header>';
    
    const indexHeaderStart = indexContent.indexOf(headerStartTag);
    const indexHeaderEnd = indexContent.indexOf(headerEndTag) + headerEndTag.length;
    const indexHeader = indexContent.substring(indexHeaderStart, indexHeaderEnd);

    // 2. Extract Footer from index.html
    const footerStartTag = '<footer';
    const footerEndTag = '</footer>';
    
    const indexFooterStart = indexContent.indexOf(footerStartTag);
    const indexFooterEnd = indexContent.indexOf(footerEndTag) + footerEndTag.length;
    const indexFooter = indexContent.substring(indexFooterStart, indexFooterEnd);

    // 3. Find Header in contact.html and replace
    const contactHeaderStart = contactContent.indexOf(headerStartTag);
    const contactHeaderEnd = contactContent.indexOf(headerEndTag) + headerEndTag.length;
    if (contactHeaderStart !== -1 && contactHeaderEnd !== -1) {
        contactContent = contactContent.substring(0, contactHeaderStart) + indexHeader + contactContent.substring(contactHeaderEnd);
    }

    // 4. Find Footer in contact.html and replace
    const contactFooterStart = contactContent.indexOf(footerStartTag);
    const contactFooterEnd = contactContent.indexOf(footerEndTag) + footerEndTag.length;
    if (contactFooterStart !== -1 && contactFooterEnd !== -1) {
        contactContent = contactContent.substring(0, contactFooterStart) + indexFooter + contactContent.substring(contactFooterEnd);
    }

    // 5. Global text replacements for MadeByShape
    contactContent = contactContent.replace(/MadeByShape/gi, 'ALDTAN');
    contactContent = contactContent.replace(/Shape/gi, 'ALDTAN');
    contactContent = contactContent.replace(/https:\/\/madebyshape\.co\.uk\//gi, '/');
    contactContent = contactContent.replace(/craftcms-tailwind/gi, 'ALDTAN');
    
    // 6. Fix scripts (ensure local scripts are used where possible)
    // contactContent = contactContent.replace(/https:\/\/madebyshape\.co\.uk\/dist\/js\//gi, '/dist/js/');

    fs.writeFileSync(contactPath, contactContent);
    console.log('Successfully ALDTAN-ified contact.html');
}
