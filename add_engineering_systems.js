const fs = require('fs');

const files = ['blog.html', 'blog/index.html', 'web-design-blog/index.html'];

files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        
        // 1. Add Engineering Systems to filter list
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
    </li>
</ul>`;

        content = content.replace(/<\/ul>/ , engineeringFilter);
        
        // 2. Update Culture count (from 2 to 1)
        content = content.replace(/'culture', 'text-gray-200': blogCategory !== 'culture' }">\s*2<\/div>/, "'culture', 'text-gray-200': blogCategory !== 'culture' }\">\n                1</div>");

        // 3. Assign LabVIEW article to Engineering Systems
        // The LabVIEW article is the SECOND one in the grid.
        // It currently has x-show="blogCategory === 'all' || blogCategory === 'culture'"
        // I'll replace the FIRST occurrence of that string with 'engineering-systems'
        content = content.replace(/x-show="blogCategory === 'all' \|\| blogCategory === 'culture'/, 'x-show="blogCategory === \'all\' || blogCategory === \'engineering-systems\'');

        fs.writeFileSync(f, content);
        console.log('Added Engineering Systems category in:', f);
    }
});
