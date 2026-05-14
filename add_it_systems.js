const fs = require('fs');

const files = ['blog.html', 'blog/index.html', 'web-design-blog/index.html'];

files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        
        // 1. Add IT Systems to filter list
        const newsFilter = `<li class="mr-4 | lg:mr-10">
        <a href="javascript:void(0)" x-on:click.prevent="blogCategory = 'news'"
            x-bind:class="{ 'text-gray-600': blogCategory === 'news', 'text-gray-200': blogCategory !== 'news' }"
            class="inline-flex items-end group duration-200">
            <div class="
text-2xl | md:text-4vw | xl:text-3vw
font-sans-primary tracking-tight
leading-tighter
text-balance
lowercase transition | xl:group-hover:text-gray-600 lg:dark:group-hover:text-white
">News</div>
            <div class="text-sm ml-1 transition mb-0.5 | lg:mb-2"
                x-bind:class="{ 'text-gray-600': blogCategory === 'news', 'text-gray-200': blogCategory !== 'news' }">
                1</div>
        </a>
    </li>
    <li class="mr-4 | lg:mr-10">
        <a href="javascript:void(0)" x-on:click.prevent="blogCategory = 'it-systems'"
            x-bind:class="{ 'text-gray-600': blogCategory === 'it-systems', 'text-gray-200': blogCategory !== 'it-systems' }"
            class="inline-flex items-end group duration-200">
            <div class="
text-2xl | md:text-4vw | xl:text-3vw
font-sans-primary tracking-tight
leading-tighter
text-balance
lowercase transition | xl:group-hover:text-gray-600 lg:dark:group-hover:text-white
">IT Systems</div>
            <div class="text-sm ml-1 transition mb-0.5 | lg:mb-2"
                x-bind:class="{ 'text-gray-600': blogCategory === 'it-systems', 'text-gray-200': blogCategory !== 'it-systems' }">
                1</div>
        </a>
    </li>`;

        // Match the old news filter (with count 2)
        const oldNewsFilterRegex = /<li class="mr-4 \| lg:mr-10">\s*<a href="javascript:void\(0\)" x-on:click\.prevent="blogCategory = 'news'"\s*x-bind:class="{ 'text-gray-600': blogCategory === 'news', 'text-gray-200': blogCategory !== 'news' }"\s*class="inline-flex items-end group duration-200">\s*<div class="\s*text-2xl \| md:text-4vw \| xl:text-3vw\s*font-sans-primary tracking-tight\s*leading-tighter\s*text-balance\s*lowercase transition \| xl:group-hover:text-gray-600 lg:dark:group-hover:text-white\s*">News<\/div>\s*<div class="text-sm ml-1 transition mb-0\.5 \| lg:mb-2"\s*x-bind:class="{ 'text-gray-600': blogCategory === 'news', 'text-gray-200': blogCategory !== 'news' }">\s*2<\/div>\s*<\/a>\s*<\/li>/g;
        
        content = content.replace(oldNewsFilterRegex, newsFilter);
        
        // 2. Assign article to IT Systems
        // Use double quotes for the outer string or escape the inner ones
        content = content.replace(/x-show="blogCategory === 'all' \|\| blogCategory === 'news'"/, 'x-show="blogCategory === \'all\' || blogCategory === \'it-systems\'"');

        fs.writeFileSync(f, content);
        console.log('Added IT Systems category in:', f);
    }
});
