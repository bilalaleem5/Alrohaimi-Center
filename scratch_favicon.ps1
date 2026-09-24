Add-Type -AssemblyName System.Drawing

$size = 64
$bmp = New-Object System.Drawing.Bitmap($size, $size)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

# Clear transparent
$g.Clear([System.Drawing.Color]::Transparent)

# Outer circle
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 251, 247, 238))
$goldPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 184, 138, 59), 2.5)
$navyPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 13, 27, 62), 1.5)
$navyBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 13, 27, 62))
$goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 184, 138, 59))
$goldLightBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(140, 184, 138, 59))

$g.FillEllipse($bgBrush, 2, 2, 60, 60)
$g.DrawEllipse($goldPen, 2, 2, 60, 60)

# Left Brain Arc
$g.DrawArc($goldPen, 14, 16, 32, 32, 90, 180)

# Synaptic nodes
$g.FillEllipse($navyBrush, 16, 28, 4, 4)
$g.FillEllipse($goldBrush, 21, 22, 4, 4)
$g.FillEllipse($goldBrush, 24, 35, 4, 4)

# Right Skyline (Riyadh / Kingdom Tower)
$g.FillRectangle($goldLightBrush, 33, 28, 4, 18)
$g.FillRectangle($goldLightBrush, 39, 24, 4, 22)
$g.FillRectangle($goldBrush, 45, 19, 5, 27)
$g.FillRectangle($goldLightBrush, 52, 30, 4, 16)

# Apex Torch
$g.FillEllipse($goldBrush, 30, 7, 4, 8)

# AI Base
$g.DrawEllipse($goldPen, 27, 46, 10, 10)
$g.FillEllipse($navyBrush, 30, 49, 4, 4)

$g.Flush()

# Save PNG
$bmp.Save("d:\abdulmohsen center website\public\favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)

# Save ICO
$iconHandle = $bmp.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($iconHandle)
$stream = New-Object System.IO.FileStream("d:\abdulmohsen center website\public\favicon.ico", [System.IO.FileMode]::Create)
$icon.Save($stream)
$stream.Close()

$g.Dispose()
$bmp.Dispose()
Write-Output "FAVICON_GENERATED_SUCCESSFULLY"
