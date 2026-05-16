import os
import re
import shutil

# Files to move and their clean names
pages_to_move = {
    'about.html': 'about',
    'blog.html': 'blog',
    'contact.html': 'contact',
    'gallery.html': 'gallery',
    'work.html': 'work'
}

def clean_content(content):
    # 1. Replace internal .html links with clean URLs
    def link_replacer(match):
        prefix = match.group(1) # href="
        url = match.group(2)
        suffix = match.group(3) # "
        
        # Check against our target pages + index.html
        targets = list(pages_to_move.values()) + ['index']
        
        for target in targets:
            # Case-insensitive check for the page name
            # Matches: page.html, /page.html, ./page.html (with optional hashes)
            pattern = re.compile(rf'^(\.?\/)?{target}\.html(#.*)?$', re.IGNORECASE)
            m = pattern.match(url)
            if m:
                clean_name = '' if target == 'index' else target
                hash_part = m.group(2) if m.group(2) else ''
                return f'{prefix}/{clean_name}{hash_part}{suffix}'
        
        return match.group(0)

    content = re.sub(r'(href=["\'])(.*?)(["\'])', link_replacer, content)

    # 2. Convert relative asset paths to root-relative
    # Matches src="assets/..." or href="assets/..." (not starting with / or http)
    content = re.sub(r'(src|href)=["\']assets/', r'\1="/assets/', content)
    # Also handle backslashes which sometimes appear in Windows environments
    content = re.sub(r'(src|href)=["\']assets\\', r'\1="/assets/', content)
    
    return content

# Get all HTML files in the project
html_files = []
for root, dirs, files in os.walk('.'):
    if any(exclude in root for exclude in ['node_modules', '.git', 'dist', 'scratch']):
        continue
    for file in files:
        if file.endswith('.html'):
            html_files.append(os.path.join(root, file))

# Update content in all files
for file_path in html_files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = clean_content(content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {file_path}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

# Perform the moves
for src, folder in pages_to_move.items():
    if os.path.exists(src):
        os.makedirs(folder, exist_ok=True)
        dest = os.path.join(folder, 'index.html')
        
        # If destination exists, check if it's the same file content-wise or rename it
        if os.path.exists(dest):
            backup_path = dest + '.orig'
            if not os.path.exists(backup_path):
                os.rename(dest, backup_path)
                print(f"Backed up existing {dest} to {backup_path}")
            else:
                os.remove(dest) # If backup already exists, just remove the one we're about to overwrite
            
        shutil.move(src, dest)
        print(f"Moved: {src} -> {dest}")

print("Clean URL refactor complete.")
