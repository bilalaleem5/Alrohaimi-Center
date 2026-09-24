Add-Type -AssemblyName System.IO.Compression.FileSystem
$docxPath = "d:\abdulmohsen center website\cclinet given info\Prof_Abdulmohsen_Alrohaimi_Center_Profile_EN.docx"
$zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)
$entry = $zip.GetEntry("word/document.xml")
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$content = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

$matches = [regex]::Matches($content, '<w:t[^>]*>(.*?)</w:t>')
$extracted = ($matches | ForEach-Object { $_.Groups[1].Value }) -join "`n"
[System.IO.File]::WriteAllText("d:\abdulmohsen center website\docx_extracted.txt", $extracted)
Write-Output "Extracted successfully. Length: $($extracted.Length)"
