$index = Get-Content "c:\Users\dunis\Documents\aldtanwebtest\index.html" -Encoding UTF8
$work = Get-Content "c:\Users\dunis\Documents\aldtanwebtest\work.html" -Encoding UTF8

# Extract the blog items from index.html
$blogItemsRaw = $index[2861..3384] # This is all 6 items inside the swiper-wrapper
$blogItemsStr = $blogItemsRaw -join "`n"

# Replace the swiper-slide class with grid classes
$blogItemsStr = $blogItemsStr -replace 'px-2 \| lg:px-3 \| xl:px-4 \|\| swiper-slide', 'px-2 | lg:px-3 | xl:px-4 w-full | md:w-8/16 | lg:w-1/3 mb-16'

# Split work.html into top, filter, and bottom
# Line 814 is <div x-data="{ activeCategory: 'all' }" class="...">
# Line 815 is <div class="px-2 ...
# Line 816 is <div class="w-full flex ...
# ...
# The flex grid starts at line 885 in the NEW rebuilt work.html? Wait, I rebuilt work.html recently. 
# Let me just find the markers.
