const fs = require('fs');

const files = ['blog.html', 'blog/index.html', 'web-design-blog/index.html'];

const engineeringFilter = `    <li class="mr-4 | lg:mr-10">
        <a href="javascript:void(0)" x-on:click.prevent="blogCategory = 'engineering-systems'"
            x-bind:class="{ 'text-gray-600': blogCategory === 'engineering-systems', 'text-gray-200': blogCategory !== 'engineering-systems' }"
            class="inline-flex items-end group duration-200">
            <div class="
text-2xl | md:text-4vw | xl:text-3vw
font-sans-primary tracking-tight
leading-tighter
text-balance
lowercase transition | xl:group-hover:text-gray-600 lg:dark:group-hover:text-white
">Engineering Systems</div>
            <div class="text-sm ml-1 transition mb-0.5 | lg:mb-2"
                x-bind:class="{ 'text-gray-600': blogCategory === 'engineering-systems', 'text-gray-200': blogCategory !== 'engineering-systems' }">
                1</div>
        </a>
    </li>`;

files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        
        // 1. Remove it from the navigation (search for the LI block that was wrongly inserted)
        const wrongPlacementRegex = /<li class="mr-4 \| lg:mr-10">\s*<a href="javascript:void\(0\)" x-on:click\.prevent="blogCategory = 'engineering-systems'"\s*x-bind:class="{ 'text-gray-600': blogCategory === 'engineering-systems', 'text-gray-200': blogCategory !== 'engineering-systems' }"\s*class="inline-flex items-end group duration-200">\s*<div class="\s*text-2xl \| md:text-4vw \| xl:text-3vw\s*font-sans-primary tracking-tight\s*leading-tighter\s*text-balance\s*lowercase transition \| xl:group-hover:text-gray-600 lg:dark:group-hover:text-white\s*">Engineering Systems<\/div>\s*<div class="text-sm ml-1 transition mb-0\.5 \| lg:mb-2"\s*x-bind:class="{ 'text-gray-600': blogCategory === 'engineering-systems', 'text-gray-200': blogCategory !== 'engineering-systems' }">\s*1<\/div>\s*<\/a>\s*<\/li>\s*<\/ul>/g;
        
        if (content.match(wrongPlacementRegex)) {
            // Restore the closing UL that we replaced
            content = content.replace(wrongPlacementRegex, '</ul>');
            console.log('Removed wrong placement in:', f);
        }

        // 2. Put it in the correct place (find the blog filter UL)
        // The blog filter UL ends with 'it-systems' li
        const itSystemsEnd = /<\/a>\s*<\/li>\s*<\/ul>/; // This matches the end of the filter list
        
        // We want to insert BEFORE the last </ul> in the filter section
        // Let's find the filter list specifically
        const filterSectionRegex = /x-on:click\.prevent="blogCategory = 'it-systems'"[\s\S]*?<\/ul>/;
        const match = content.match(filterSectionRegex);
        if (match) {
            const updatedFilterSection = match[0].replace('</ul>', engineeringFilter + '\n</ul>');
            content = content.replace(match[0], updatedFilterSection);
            console.log('Placed correctly in:', f);
        }

        fs.writeFileSync(f, content);
    }
});
