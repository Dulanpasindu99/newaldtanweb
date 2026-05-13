# Create standard directory structure
New-Item -ItemType Directory -Force -Path "assets/css"
New-Item -ItemType Directory -Force -Path "assets/js"
New-Item -ItemType Directory -Force -Path "assets/images"
New-Item -ItemType Directory -Force -Path "assets/fonts"

# Move and rename CSS file
$cssFiles = Get-ChildItem "dist/css/*.css"
if ($cssFiles) {
    Move-Item -Path $cssFiles[0].FullName -Destination "assets/css/style.css" -Force
}

# Move and rename JS file
$jsFiles = Get-ChildItem "dist/js/*.js"
if ($jsFiles) {
    Move-Item -Path $jsFiles[0].FullName -Destination "assets/js/app.js" -Force
}

# Move fonts
if (Test-Path "dist/fonts") {
    Move-Item -Path "dist/fonts/*" -Destination "assets/fonts/" -Force
}

# Move images
if (Test-Path "dist/images") {
    Copy-Item -Path "dist/images/*" -Destination "assets/images/" -Recurse -Force
}

# Remove old dist folder if empty (optional, keeping it safe for no error if not empty)
# Remove-Item -Path "dist" -Recurse -Force -ErrorAction SilentlyContinue
