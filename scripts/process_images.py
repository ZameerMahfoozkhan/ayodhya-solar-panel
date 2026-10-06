"""
Image pipeline for Ayodhya Solar Installation.

Converts the master images in /source-images into responsive AVIF + WebP +
JPEG variants inside /public/assets/img, and generates the Open Graph image
and favicons.

Usage:  python scripts/process_images.py
Requires: Pillow (with AVIF + WebP support)

When real installation photos are available, drop them into /source-images
and add an entry to IMAGES below.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "source-images"
OUT = ROOT / "public" / "assets" / "img"
OUT.mkdir(parents=True, exist_ok=True)

# source file -> (output slug, widths)
IMAGES = {
    "hero.jpg": ("rooftop-solar-panels-ayodhya-home", [480, 800, 1376]),
    "home.jpg": ("residential-solar-house-uttar-pradesh", [480, 800, 1264]),
    "structure.jpg": ("rooftop-solar-mounting-structure", [480, 800, 1264]),
    "inverter.jpg": ("solar-inverter-ac-dc-distribution-box", [480, 800, 1264]),
    "commercial.jpg": ("commercial-rooftop-solar-building", [480, 800, 1264]),
    "cleaning.jpg": ("solar-panel-cleaning-maintenance", [480, 800, 1264]),
}

GOLD = (242, 183, 5)
INK = (20, 22, 26)


def clean_hero(img: Image.Image) -> Image.Image:
    """Remove the brand lettering on the water tank in the hero master."""
    img = img.copy()
    if img.size != (1376, 768):
        return img
    box = (1158, 494, 1242, 530)
    tank = img.getpixel((1150, 540))
    patch = Image.new("RGB", (box[2] - box[0], box[3] - box[1]), tank)
    img.paste(patch, box[:2])
    region = img.crop((box[0] - 6, box[1] - 6, box[2] + 6, box[3] + 6)).filter(ImageFilter.GaussianBlur(3))
    img.paste(region, (box[0] - 6, box[1] - 6))
    return img


def export(img: Image.Image, slug: str, widths):
    w0, h0 = img.size
    for w in widths:
        w = min(w, w0)
        h = round(h0 * w / w0)
        r = img.resize((w, h), Image.LANCZOS)
        r.save(OUT / f"{slug}-{w}.webp", "WEBP", quality=74, method=6)
        r.save(OUT / f"{slug}-{w}.avif", "AVIF", quality=55, speed=4)
        if w == 800:
            r.save(OUT / f"{slug}-{w}.jpg", "JPEG", quality=78, optimize=True, progressive=True)
    print(f"{slug}: {w0}x{h0} -> {widths}")


def font(size, bold=True):
    candidates = [
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    for c in candidates:
        try:
            return ImageFont.truetype(c, size)
        except OSError:
            continue
    return ImageFont.load_default()


def draw_mark(d: ImageDraw.ImageDraw, x, y, s):
    """Brand mark: gold sun rising over a solar panel, inside a charcoal tile."""
    d.rounded_rectangle((x, y, x + s, y + s), radius=round(s * 0.24), fill=INK)
    cx, cy, r = x + s * 0.5, y + s * 0.42, s * 0.17
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=GOLD)
    # panel (parallelogram)
    p = [(x + s * 0.18, y + s * 0.80), (x + s * 0.30, y + s * 0.60), (x + s * 0.70, y + s * 0.60), (x + s * 0.82, y + s * 0.80)]
    d.polygon(p, fill=(250, 250, 247))
    lw = max(1, round(s * 0.03))
    d.line([(x + s * 0.50, y + s * 0.60), (x + s * 0.50, y + s * 0.80)], fill=INK, width=lw)
    d.line([(x + s * 0.24, y + s * 0.70), (x + s * 0.76, y + s * 0.70)], fill=INK, width=lw)


def make_icons():
    for size, name in [(32, "favicon-32.png"), (180, "apple-touch-icon.png"), (192, "icon-192.png"), (512, "icon-512.png")]:
        scale = 4
        big = Image.new("RGBA", (size * scale, size * scale), (0, 0, 0, 0))
        draw_mark(ImageDraw.Draw(big), 0, 0, size * scale)
        big.resize((size, size), Image.LANCZOS).save(OUT.parent.parent / name if name != "favicon-32.png" else OUT.parent.parent / name)
    ico = Image.new("RGBA", (256, 256), (0, 0, 0, 0))
    draw_mark(ImageDraw.Draw(ico), 0, 0, 256)
    ico.save(ROOT / "public" / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print("icons done")


def make_og(hero: Image.Image):
    W, H = 1200, 630
    w0, h0 = hero.size
    scale = max(W / w0, H / h0)
    bg = hero.resize((round(w0 * scale), round(h0 * scale)), Image.LANCZOS)
    left = (bg.width - W) // 2
    bg = bg.crop((left, (bg.height - H) // 2, left + W, (bg.height - H) // 2 + H)).convert("RGBA")
    shade = Image.new("RGBA", (W, H))
    sd = ImageDraw.Draw(shade)
    for xx in range(W):
        a = int(235 * max(0, 1 - xx / (W * 0.78)))
        sd.line([(xx, 0), (xx, H)], fill=(14, 16, 19, a))
    bg = Image.alpha_composite(bg, shade)
    d = ImageDraw.Draw(bg)
    draw_mark(d, 72, 64, 64)
    d.text((152, 76), "Ayodhya Solar Installation", font=font(30), fill=(255, 255, 255))
    d.text((72, 210), "Solar Panel Installation", font=font(68), fill=(255, 255, 255))
    d.text((72, 290), "in Ayodhya", font=font(68), fill=GOLD)
    d.text((72, 400), "Rooftop solar for homes & businesses", font=font(32, False), fill=(230, 232, 235))
    d.text((72, 444), "Serving Ayodhya & Faizabad  ·  +91 9580659559", font=font(32, False), fill=(230, 232, 235))
    bg.convert("RGB").save(OUT / "og-ayodhya-solar-installation.jpg", "JPEG", quality=84, optimize=True, progressive=True)
    print("og done")


if __name__ == "__main__":
    hero_clean = None
    for src, (slug, widths) in IMAGES.items():
        im = Image.open(SRC / src).convert("RGB")
        if src == "hero.jpg":
            im = clean_hero(im)
            hero_clean = im
        export(im, slug, widths)
    make_og(hero_clean)
    make_icons()
