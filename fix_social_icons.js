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
  path.join('components', 'footer.html'),
];

// SVG paths (distinctive substrings used to identify icons)
const LINKEDIN_PATH  = 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4';
const TWITTER_PATH   = 'M389.2 48h70.6L305.6 224.2';
const GITHUB_PATH    = 'M165.9 397.4c0 2-2.3 3.6';
const INSTAGRAM_PATH = 'M224.1 141c-63.6 0-114.9 51.3';

// ── NEW icon anchors ─────────────────────────────────────────────────────────
const BTN_CLASS = 'inline-flex items-center justify-center bg-primary-600 text-white translate-z-0 rounded-full w-8 h-8 duration-400 | xl:hover:bg-gray-600 xl:hover:text-white | lg:dark:hover:bg-grayDark-400';
const SR = '<div class="sr-only">ALDTAN</div>';

const LINKEDIN_NEW = `<a href="https://www.linkedin.com/company/aldtan-private-limited/" target="_blank" rel="noreferrer" class="${BTN_CLASS}">${SR}<svg class="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>`;

const YOUTUBE_NEW = `<a href="https://www.youtube.com/@ALDTANPrivateLimited" target="_blank" rel="noreferrer" class="${BTN_CLASS}">${SR}<svg class="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.322 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a>`;

const FACEBOOK_NEW = `<a href="https://www.facebook.com/profile.php?id=61550727777896" target="_blank" rel="noreferrer" class="${BTN_CLASS}">${SR}<svg class="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>`;

const INSTAGRAM_NEW = `<span class="inline-flex items-center justify-center bg-primary-600 text-white translate-z-0 rounded-full w-8 h-8 cursor-default">${SR}<svg class="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></span>`;

// ── Helper: find and replace one social icon group starting at `startIdx` ────
// Returns { newContent, nextSearchFrom } or null if no group found at startIdx
function replaceSocialGroup(content, startIdx) {
  // Find the <a opening tag that starts the LinkedIn icon
  let aStart = content.lastIndexOf('<a', startIdx);
  if (aStart === -1) return null;

  // Now walk forward collecting all consecutive social icon elements
  // They all share bg-primary-600 in their class attribute
  // We use a sliding search: find </a> tags that end social icon anchors
  let pos = aStart;
  let groupEnd = -1;
  let iconCount = 0;

  // Regex to match a single social icon element (<a ...bg-primary-600...>...</a>)
  const singleIconRe = /^<a\s[^>]*bg-primary-600[^>]*>[\s\S]*?<\/a>/;

  while (true) {
    // Skip whitespace
    const slice = content.slice(pos).replace(/^\s+/, '');
    const offset = content.slice(pos).length - slice.length;
    const absolutePos = pos + offset;

    const match = slice.match(singleIconRe);
    if (!match) break;

    iconCount++;
    groupEnd = absolutePos + match[0].length;
    pos = groupEnd;
  }

  if (iconCount < 2) return null; // not a social group

  // Build replacement: LinkedIn + YouTube + Facebook + Instagram(non-clickable)
  const newGroup = LINKEDIN_NEW + YOUTUBE_NEW + FACEBOOK_NEW + INSTAGRAM_NEW;

  const newContent = content.slice(0, aStart) + newGroup + content.slice(groupEnd);
  return { newContent, nextSearchFrom: aStart + newGroup.length };
}

// ── Process each file ────────────────────────────────────────────────────────
files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP (not found): ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Find all occurrences of the LinkedIn path (marks start of each social group)
  let replacements = 0;
  let searchFrom = 0;

  while (true) {
    const linkedinPathIdx = content.indexOf(LINKEDIN_PATH, searchFrom);
    if (linkedinPathIdx === -1) break;

    const result = replaceSocialGroup(content, linkedinPathIdx);
    if (!result) {
      searchFrom = linkedinPathIdx + 1;
      continue;
    }

    content = result.newContent;
    searchFrom = result.nextSearchFrom;
    replacements++;
  }

  if (content === original || replacements === 0) {
    console.log(`NO CHANGE: ${file}`);
    return;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`UPDATED (${replacements} group(s)): ${file}`);
});
