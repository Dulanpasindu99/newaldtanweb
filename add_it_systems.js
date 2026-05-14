const fs = require('fs');

const files = ['blog.html', 'blog/index.html', 'web-design-blog/index.html'];

files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');

        // 1. Add Software Systems to filter list
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
        <a href="javascript:void(0)" x-on:click.prevent="blogCategory = 'software-systems'"
            x-bind:class="{ 'text-gray-600': blogCategory === 'software-systems', 'text-gray-200': blogCategory !== 'software-systems' }"
            class="inline-flex items-end group duration-200">
            <div class="
text-2xl | md:text-4vw | xl:text-3vw
font-sans-primary tracking-tight
leading-tighter
text-balance
lowercase transition | xl:group-hover:text-gray-600 lg:dark:group-hover:text-white
">Software-systems</div>
            <div class="text-sm ml-1 transition mb-0.5 | lg:mb-2"
                x-bind:class="{ 'text-gray-600': blogCategory === 'software-systems', 'text-gray-200': blogCategory !== 'software-systems' }">
                1</div>
        </a>
    </li>`;

        // Match the old news filter (with count 2)
        const oldNewsFilterRegex = /<li class="mr-4 \| lg:mr-10">\s*<a href="javascript:void\(0\)" x-on:click\.prevent="blogCategory = 'news'"\s*x-bind:class="{ 'text-gray-600': blogCategory === 'news', 'text-gray-200': blogCategory !== 'news' }"\s*class="inline-flex items-end group duration-200">\s*<div class="\s*text-2xl \| md:text-4vw \| xl:text-3vw\s*font-sans-primary tracking-tight\s*leading-tighter\s*text-balance\s*lowercase transition \| xl:group-hover:text-gray-600 lg:dark:group-hover:text-white\s*">News<\/div>\s*<div class="text-sm ml-1 transition mb-0\.5 \| lg:mb-2"\s*x-bind:class="{ 'text-gray-600': blogCategory === 'news', 'text-gray-200': blogCategory !== 'news' }">\s*2<\/div>\s*<\/a>\s*<\/li>/g;

        content = content.replace(oldNewsFilterRegex, newsFilter);

        // 2. Assign article to Software Systems
        // Use double quotes for the outer string or escape the inner ones
        content = content.replace(/x-show="blogCategory === 'all' \|\| blogCategory === 'news'"/, 'x-show="blogCategory === \'all\' || blogCategory === \'it-systems\'"');

        fs.writeFileSync(f, content);
        console.log('Added Software Systems category in:', f);
    }
});
