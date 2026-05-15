Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$assetDir = Join-Path $root "assets"
New-Item -ItemType Directory -Force -Path $assetDir | Out-Null

function C($hex) {
  [System.Drawing.ColorTranslator]::FromHtml($hex)
}

function Brush($hex) {
  New-Object System.Drawing.SolidBrush (C $hex)
}

function Pen($hex, $width) {
  New-Object System.Drawing.Pen (C $hex), $width
}

function Points($items) {
  $pts = New-Object System.Drawing.Point[] ($items.Count)
  for ($i = 0; $i -lt $items.Count; $i++) {
    $pts[$i] = [System.Drawing.Point]::new($items[$i][0], $items[$i][1])
  }
  $pts
}

function Draw-Dunes($g, $base, $mid, $front) {
  $g.FillPolygon((Brush $base), (Points @(@(0, 470), @(260, 405), @(520, 465), @(790, 390), @(1200, 455), @(1200, 675), @(0, 675))))
  $g.FillPolygon((Brush $mid), (Points @(@(0, 535), @(340, 450), @(650, 538), @(980, 468), @(1200, 525), @(1200, 675), @(0, 675))))
  $g.FillPolygon((Brush $front), (Points @(@(0, 590), @(300, 520), @(620, 596), @(930, 535), @(1200, 588), @(1200, 675), @(0, 675))))
}

function Draw-Stars($g, $color) {
  $brush = Brush $color
  foreach ($p in @(@(120, 88), @(290, 132), @(520, 76), @(835, 126), @(1040, 84), @(970, 210))) {
    $g.FillEllipse($brush, $p[0], $p[1], 6, 6)
  }
}

function Save-Scene($name, $top, $bottom, $accent, $kind) {
  $bitmap = New-Object System.Drawing.Bitmap 1200, 675
  $g = [System.Drawing.Graphics]::FromImage($bitmap)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $rect = [System.Drawing.Rectangle]::new(0, 0, 1200, 675)
  $gradient = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, (C $top), (C $bottom), 55
  $g.FillRectangle($gradient, $rect)
  $g.FillEllipse((Brush $accent), 850, 72, 170, 170)

  switch ($kind) {
    "rosetta" {
      Draw-Dunes $g "#d4b879" "#c79b58" "#8b6144"
      $stone = Points @(@(470, 185), @(710, 160), @(760, 545), @(438, 560))
      $g.FillPolygon((Brush "#222936"), $stone)
      $g.DrawPolygon((Pen "#f5d99c" 6), $stone)
      foreach ($y in @(245, 292, 340, 388, 438, 488)) {
        $g.DrawLine((Pen "#d9bd7a" 8), 510, $y, 700, ($y - 16))
      }
      foreach ($x in @(535, 598, 662)) {
        $g.FillEllipse((Brush "#d9bd7a"), $x, 214, 22, 22)
      }
      $g.FillRectangle((Brush "#5c3827"), 160, 430, 110, 160)
      $g.FillPolygon((Brush "#5c3827"), (Points @(@(135, 430), @(295, 430), @(215, 340))))
    }
    "marathon" {
      $g.FillRectangle((Brush "#2f6f93"), 0, 420, 1200, 255)
      $g.FillPolygon((Brush "#d9b26d"), (Points @(@(0, 438), @(530, 385), @(1200, 455), @(1200, 675), @(0, 675))))
      $g.FillPolygon((Brush "#624536"), (Points @(@(0, 505), @(380, 430), @(805, 530), @(1200, 470), @(1200, 675), @(0, 675))))
      foreach ($x in @(260, 380, 500, 620, 740)) {
        $g.FillEllipse((Brush "#b44f3f"), $x, 372, 78, 78)
        $g.FillEllipse((Brush "#e9c56d"), ($x + 18), 390, 42, 42)
        $g.DrawLine((Pen "#2b2c32" 8), ($x + 38), 365, ($x + 38), 245)
      }
      $g.FillPolygon((Brush "#2b2c32"), (Points @(@(945, 260), @(1068, 322), @(950, 384))))
      $g.DrawLine((Pen "#2b2c32" 7), 940, 258, 940, 460)
    }
    "silkroad" {
      Draw-Stars $g "#f9e6ad"
      Draw-Dunes $g "#cf9f58" "#b98149" "#77533d"
      foreach ($x in @(280, 430, 580, 730)) {
        $g.FillEllipse((Brush "#2b2c32"), $x, 430, 96, 50)
        $g.FillEllipse((Brush "#2b2c32"), ($x + 62), 405, 36, 36)
        $g.DrawLine((Pen "#2b2c32" 8), ($x + 18), 470, ($x + 2), 525)
        $g.DrawLine((Pen "#2b2c32" 8), ($x + 62), 470, ($x + 78), 525)
        $g.DrawLine((Pen "#2b2c32" 5), ($x + 84), 414, ($x + 116), 392)
      }
      $g.DrawBezier((Pen "#f7d083" 5), 120, 548, 390, 490, 690, 590, 1080, 505)
    }
    "baghdad" {
      Draw-Stars $g "#ffe8ad"
      $g.FillRectangle((Brush "#1d2936"), 0, 470, 1200, 205)
      $g.FillRectangle((Brush "#b98544"), 285, 365, 620, 185)
      $g.FillPie((Brush "#d8a650"), 326, 210, 538, 330, 180, 180)
      $g.FillRectangle((Brush "#744d3a"), 405, 430, 100, 120)
      $g.FillRectangle((Brush "#744d3a"), 686, 430, 100, 120)
      foreach ($x in @(225, 940)) {
        $g.FillRectangle((Brush "#d8a650"), $x, 245, 72, 305)
        $g.FillEllipse((Brush "#f2c66f"), ($x - 8), 210, 88, 58)
      }
      $g.DrawArc((Pen "#f6d391" 8), 500, 330, 190, 115, 180, 180)
    }
    "mansa" {
      Draw-Dunes $g "#dab45e" "#b67c3f" "#704b32"
      foreach ($x in @(760, 815, 870, 925)) {
        $g.FillEllipse((Brush "#d7a127"), $x, 350, 60, 60)
      }
      $g.FillEllipse((Brush "#2c2e32"), 300, 400, 140, 72)
      $g.FillEllipse((Brush "#2c2e32"), 400, 370, 54, 54)
      $g.DrawLine((Pen "#2c2e32" 10), 330, 465, 306, 540)
      $g.DrawLine((Pen "#2c2e32" 10), 405, 465, 432, 540)
      $g.FillRectangle((Brush "#553829"), 570, 315, 90, 250)
      $g.FillPolygon((Brush "#553829"), (Points @(@(530, 315), @(700, 315), @(615, 222))))
      $g.DrawLine((Pen "#f4d079" 8), 170, 548, 1060, 515)
    }
    "meiji" {
      $g.FillRectangle((Brush "#466f82"), 0, 438, 1200, 237)
      $g.FillPolygon((Brush "#242a35"), (Points @(@(180, 402), @(560, 402), @(515, 478), @(230, 478))))
      $g.FillRectangle((Brush "#242a35"), 300, 324, 70, 80)
      $g.FillRectangle((Brush "#242a35"), 410, 300, 70, 104)
      $g.DrawBezier((Pen "#ece8dc" 12), 445, 292, 520, 240, 605, 282, 660, 222)
      $g.DrawLine((Pen "#ece8dc" 10), 126, 560, 1070, 560)
      $g.DrawLine((Pen "#2b2c32" 9), 170, 588, 1110, 588)
      foreach ($x in @(200, 330, 460, 590, 720, 850, 980)) {
        $g.DrawLine((Pen "#2b2c32" 8), $x, 540, ($x + 40), 612)
      }
      $g.FillRectangle((Brush "#873f33"), 815, 312, 155, 155)
      $g.FillRectangle((Brush "#f0d78d"), 850, 360, 34, 54)
      $g.FillRectangle((Brush "#f0d78d"), 907, 360, 34, 54)
    }
    "daily" {
      $g.FillRectangle((Brush "#203042"), 0, 455, 1200, 220)
      $g.FillEllipse((Brush "#d89c35"), 490, 170, 220, 220)
      $g.FillEllipse((Brush "#fbf6ec"), 530, 210, 140, 140)
      $g.FillRectangle((Brush "#2f7e65"), 515, 388, 170, 160)
      $g.FillPolygon((Brush "#2f7e65"), (Points @(@(490, 388), @(710, 388), @(600, 292))))
      $g.DrawArc((Pen "#f6d391" 12), 305, 300, 210, 170, 110, 190)
      $g.DrawArc((Pen "#f6d391" 12), 685, 300, 210, 170, 240, 190)
      foreach ($p in @(@(322, 392), @(370, 344), @(462, 318), @(734, 318), @(824, 348), @(874, 396))) {
        $g.FillEllipse((Brush "#f6d391"), $p[0], $p[1], 28, 28)
      }
    }
  }

  $file = Join-Path $assetDir "$name.png"
  $bitmap.Save($file, [System.Drawing.Imaging.ImageFormat]::Png)
  $gradient.Dispose()
  $g.Dispose()
  $bitmap.Dispose()
}

Save-Scene "rosetta" "#8db9c6" "#f0d18b" "#f2b45a" "rosetta"
Save-Scene "marathon" "#98c2c8" "#f4d58a" "#df764f" "marathon"
Save-Scene "silkroad" "#3b5278" "#d7a154" "#f2bd65" "silkroad"
Save-Scene "baghdad" "#26345a" "#9c6a54" "#d7a24a" "baghdad"
Save-Scene "mansa" "#8bb5bd" "#d1a24d" "#e2ad3c" "mansa"
Save-Scene "meiji" "#9ec5cf" "#db8762" "#d55048" "meiji"
Save-Scene "daily" "#3b5278" "#d9b46c" "#f0c55c" "daily"
