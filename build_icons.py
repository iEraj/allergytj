"""One-shot script: rasterize icon.svg and icon-maskable.svg to all PWA icon PNGs."""

import os
import cairosvg

ICON_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "icons")

STANDARD_SIZES = [48, 72, 96, 128, 144, 192, 512]
MASKABLE_SIZES = [192, 512]
APPLE_SIZE = 180

def main():
    standard = os.path.join(ICON_DIR, "icon.svg")
    maskable = os.path.join(ICON_DIR, "icon-maskable.svg")

    for size in STANDARD_SIZES:
        out = os.path.join(ICON_DIR, f"icon-{size}x{size}.png")
        cairosvg.svg2png(url=standard, write_to=out, output_width=size, output_height=size)
        print(f"  {size}x{size}.png")

    out = os.path.join(ICON_DIR, "apple-touch-icon.png")
    cairosvg.svg2png(url=standard, write_to=out, output_width=APPLE_SIZE, output_height=APPLE_SIZE)
    print(f"  apple-touch-icon.png ({APPLE_SIZE}x{APPLE_SIZE})")

    for size in MASKABLE_SIZES:
        out = os.path.join(ICON_DIR, f"icon-maskable-{size}x{size}.png")
        cairosvg.svg2png(url=maskable, write_to=out, output_width=size, output_height=size)
        print(f"  maskable-{size}x{size}.png")

    print("Done — all icons generated.")

if __name__ == "__main__":
    main()
