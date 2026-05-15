const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'about.html',
  'work.html',
  'contact.html',
  path.join('blog', 'index.html'),
];

// New Learn column - only valid pages
const newLearnUl = `<ul class="space-y-1">
                        <li class="flex items-center space-x-2">
                            <a href="/about.html"
                                class="text-white relative link text-sm | md:text-base |  | dark:text-gray-200 lg:dark:hover:text-gray-100 || group">
                                About
                            </a>
                        </li>
                        <li class="flex items-center space-x-2">
                            <a href="/blog/"
                                class="text-white relative link text-sm | md:text-base |  | dark:text-gray-200 lg:dark:hover:text-gray-100 || group">
                                Blog
                            </a>
                        </li>
                    </ul>`;

// New Explore column - only valid pages
const newExploreUl = `<ul class="space-y-1">
                        <li class="flex items-center space-x-2">
                            <a href="/"
                                class="text-white relative link text-sm | md:text-base |  | dark:text-gray-200 lg:dark:hover:text-gray-100 || group">
                                Home
                            </a>
                        </li>
                        <li class="flex items-center space-x-2">
                            <a href="/work.html"
                                class="text-white relative link text-sm | md:text-base |  | dark:text-gray-200 lg:dark:hover:text-gray-100 || group">
                                Work
                            </a>
                        </li>
                        <li class="flex items-center space-x-2">
                            <a href="/contact.html"
                                class="text-white relative link text-sm | md:text-base |  | dark:text-gray-200 lg:dark:hover:text-gray-100 || group">
                                Contact
                            </a>
                        </li>
                    </ul>`;

// Regex to match the Learn <ul> block (everything between Learn heading and Explore heading)
const learnUlPattern = /<ul class="space-y-1">[\s\S]*?<\/ul>(?=[\s\S]*?>\s*Explore\s*<)/;

// Regex to match the Explore <ul> block (the ul in the Explore column)
// We find it by looking for the second occurrence of the ul pattern in the Explore column
const exploreUlPattern = /<ul class="space-y-1">[\s\S]*?<\/ul>(?=(?![\s\S]*<ul class="space-y-1">[\s\S]*?<\/ul>[\s\S]*?>\s*Explore\s*<)[\s\S]*?>\s*Get in touch\s*<)/;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP (not found): ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Strategy: find the footer section, then replace the two uls
  // Find the "Learn" label and the "Explore" label positions
  const learnIdx = content.search(/>\s*Learn\s*<\/div>/);
  const exploreIdx = content.search(/>\s*Explore\s*<\/div>/);
  const getInTouchIdx = content.search(/>\s*Get in touch\s*<\/div>/);

  if (learnIdx === -1 || exploreIdx === -1) {
    console.log(`SKIP (footer pattern not found): ${file}`);
    return;
  }

  // Extract the Learn column section (from Learn label to Explore label)
  const learnSection = content.slice(learnIdx, exploreIdx);
  const learnUlMatch = learnSection.match(/<ul class="space-y-1">[\s\S]*?<\/ul>/);

  if (!learnUlMatch) {
    console.log(`SKIP (Learn ul not found): ${file}`);
    return;
  }

  // Replace Learn ul
  const learnUlStart = learnIdx + learnSection.indexOf(learnUlMatch[0]);
  const learnUlEnd = learnUlStart + learnUlMatch[0].length;
  content = content.slice(0, learnUlStart) + newLearnUl + content.slice(learnUlEnd);

  // Recalculate Explore position after replacement
  const exploreIdx2 = content.search(/>\s*Explore\s*<\/div>/);
  const getInTouchIdx2 = content.search(/>\s*Get in touch\s*<\/div>/);

  // Extract the Explore column section
  const endIdx = getInTouchIdx2 !== -1 ? getInTouchIdx2 : content.length;
  const exploreSection = content.slice(exploreIdx2, endIdx);
  const exploreUlMatch = exploreSection.match(/<ul class="space-y-1">[\s\S]*?<\/ul>/);

  if (!exploreUlMatch) {
    console.log(`SKIP (Explore ul not found): ${file}`);
    return;
  }

  const exploreUlStart = exploreIdx2 + exploreSection.indexOf(exploreUlMatch[0]);
  const exploreUlEnd = exploreUlStart + exploreUlMatch[0].length;
  content = content.slice(0, exploreUlStart) + newExploreUl + content.slice(exploreUlEnd);

  if (content === original) {
    console.log(`NO CHANGE: ${file}`);
    return;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`UPDATED: ${file}`);
});
