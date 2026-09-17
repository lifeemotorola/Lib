# Application icon

The favicon and installable-app icons use the platform's own mark: an **open
book beneath a rising sun** on the brand-blue tile. The flag map of Liberia
used previously was retired because that artwork is already claimed as another
platform's logo; the open-book-and-sun mark is original to this product.

- `mark-512-src.png` — the 512×512 master the other icons are resized from
- `favicon-48.png` — browser tab icon, also inlined by `build.sh`
- `apple-touch-icon.png` — iPhone/iPad home-screen icon (flattened onto blue)
- `icon-192.png` and `icon-512.png` — Android and desktop PWA icons
- `icon-maskable-512.png` — full-bleed safe-zone version for shaped Android
  launchers (flattened so the corners stay blue under any mask)

Regenerate the derivatives from the master with ImageMagick:

    cd assets/icons
    convert mark-512-src.png -resize 512x512 icon-512.png
    convert mark-512-src.png -resize 192x192 icon-192.png
    convert mark-512-src.png -resize 48x48 favicon-48.png
    convert mark-512-src.png -background "#0b3b8c" -flatten -resize 180x180 apple-touch-icon.png
    convert mark-512-src.png -background "#0b3b8c" -flatten -resize 512x512 icon-maskable-512.png

The matching **line icon** used inside the page (the header crest, the
"National Curriculum" track button and the "Saved books" heading) is
`#i-crest` in `icons.svg.html`, drawn as the same open-book-and-sun motif so
the brand reads the same on screen and on the installed app.
