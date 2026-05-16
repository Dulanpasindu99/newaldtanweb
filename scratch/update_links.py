import os
import re
import shutil

# Target HTML files to process
html_files = []
for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or 'dist' in root or 'public' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            html_files.append(os.path.join(root, file))

pages_to_move = ['about.html', 'blog.html', 'contact.html', 'gallery.html', 'work.html']

def clean_links(content):
    # 1. Update internal links
    def link_replacer(match):
        prefix = match.group(1) # href="
        url = match.group(2)
        suffix = match.group(3) # "
        
        for page in ['about', 'blog', 'contact', 'gallery', 'work', 'index']:
            # If it's a page we are targeting
            clean_page = '' if page == 'index' else page
            
            # Match variations
            if url == f'{page}.html' or url == f'/{page}.html' or url == f'./{page}.html':
                return f'{prefix}/{clean_page}{suffix}'
                
            # With hashes
            if url.startswith(f'{page}.html#'):
                return f'{prefix}/{clean_page}{url[len(page)+5:]}{suffix}'
            if url.startswith(f'/{page}.html#'):
                return f'{prefix}/{clean_page}{url[len(page)+6:]}{suffix}'
            if url.startswith(f'./{page}.html#'):
                return f'{prefix}/{clean_page}{url[len(page)+7:]}{suffix}'
                
        return match.group(0)
        
    content = re.sub(r'(href=["\'])(.*?)(["\'])', link_replacer, content)
    
    # 2. Fix relative assets starting with 'assets/' -> '/assets/'
    content = re.sub(r'(href=["\'])assets/', r'\1/assets/', content)
    content = re.sub(r'(src=["\'])assets/', r'\1/assets/', content)
    
    # Same for 'css/' and 'js/' if they exist
    content = re.sub(r'(href=["\'])css/', r'\1/css/', content)
    content = re.sub(r'(src=["\'])js/', r'\1/js/', content)
    
    return content

files_updated = 0
for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    new_content = clean_links(content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        files_updated += 1
        print(f"Updated links in {filepath}")

# Move files
files_moved = []
for page in pages_to_move:
    if os.path.exists(page):
        folder_name = page.replace('.html', '')
        os.makedirs(folder_name, exist_ok=True)
        dest = os.path.join(folder_name, 'index.html')
        shutil.move(page, dest)
        files_moved.append(f"{page} -> {dest}")

print(f"\nTotal files updated: {files_updated}")
print("Files moved:")
for m in files_moved:
    print(m)
