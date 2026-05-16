# Read blog file
$blogLines = Get-Content -Path "blog\index.html" -Encoding UTF8

# Find <body> line and <main> line
$bodyLineIndex = -1
$mainLineIndex = -1
for ($i = 0; $i -lt $blogLines.Length; $i++) {
    if ($blogLines[$i] -match '<body') { $bodyLineIndex = $i }
    if ($blogLines[$i] -match '<main>') { $mainLineIndex = $i; break }
}

Write-Host "Body at line $($bodyLineIndex + 1), Main at line $($mainLineIndex + 1)"

# Keep: head + body tag, then skip to <main>
$before = $blogLines[0..$bodyLineIndex]
$after = $blogLines[$mainLineIndex..($blogLines.Length - 1)]

$result = $before + "" + $after

$result | Set-Content -Path "blog\index.html" -Encoding UTF8

Write-Host "Done! Lines: $($blogLines.Length) -> $($result.Length)"
