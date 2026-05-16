const fs = require('fs');

let content = fs.readFileSync('gallery.html', 'utf8');

// 1. Change grid container
content = content.replace(
    '<div class="columns-2 gap-3 | md:columns-3 | lg:columns-4">',
    '<div class="grid grid-cols-2 gap-3 | md:grid-cols-3">'
);

// 2. Change every image item:
//    Old wrapper:  <div class="break-inside-avoid mb-3" x-show="...">
//    New wrapper:  <div x-show="...">
//    Old inner:    <div class="overflow-hidden rounded-xl">
//    New inner:    <div class="relative overflow-hidden rounded-xl" style="aspect-ratio:4/3">
//    Old img:      class="w-full h-auto block"
//    New img:      class="absolute inset-0 w-full h-full object-cover object-center"

content = content.replace(/class="break-inside-avoid mb-3" (x-show="[^"]*")/g, '$1');

content = content.replace(
    /<div class="overflow-hidden rounded-xl">/g,
    '<div class="relative overflow-hidden rounded-xl" style="aspect-ratio:4/3">'
);

content = content.replace(
    /class="w-full h-auto block"/g,
    'class="absolute inset-0 w-full h-full object-cover object-center"'
);

fs.writeFileSync('gallery.html', content, 'utf8');
console.log('Done.');
