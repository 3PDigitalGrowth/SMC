"""Steven M Clark Lawyers: Google Display remarketing creatives.

Composites the approved headline, explainer line, CTA pill and logo over the
Higgsfield backgrounds in docs/ads/remarketing/backgrounds/. Outputs the two
core responsive display sizes per option (1200x628 landscape, 1200x1200
square) plus a contact sheet for review.

Run:  python docs/ads/remarketing/build_remarketing.py
Fonts: Fraunces (display) and Inter (body), the site's own faces, from
       docs/ads/remarketing/fonts/. Note: Google Fonts served the files with
       swapped names; Fraunces-600i.ttf is the upright SemiBold and
       Fraunces-600.ttf is the italic.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

HERE = Path(__file__).resolve().parent
BG = HERE / "backgrounds"
OUT = HERE / "output"
FONTS = HERE / "fonts"
LOGO = HERE.parent.parent.parent / "public" / "images" / "smclogo-web.png"

INK = (26, 24, 20)
PAPER = (251, 247, 238)
LEAF = (79, 107, 74)
LEAF_DEEP = (58, 79, 55)
EMBER = (181, 70, 42)

# Three options. Every one explains why the person is seeing the ad, names
# the firm and the town, and offers the free call. No practice areas that
# Google treats as personal hardship (family, criminal, debt) appear here.
OPTIONS = {
    "A": {
        "name": "The street",
        "eyebrow": "You visited stevenmclark.com.au",
        "headline": ["Still looking for", "a lawyer in Gawler?"],
        "sub": "When you are ready, the first 15 minutes are on us.",
        "cta": "Book a free call",
        "bg": {"landscape": "A-16x9.jpg", "square": "A-1x1.jpg"},
    },
    "B": {
        "name": "The desk",
        "eyebrow": "You looked us up recently",
        "headline": ["Looking us up is usually", "the hard part."],
        "sub": "A free 15-minute call with Steven. No pressure to go further.",
        "cta": "Ask your question",
        "bg": {"landscape": "B-16x9.jpg", "square": "B-1x1.jpg"},
    },
    "C": {
        "name": "The door",
        "eyebrow": "You have been on our website",
        "headline": ["Gawler's law firm", "since 1985."],
        "sub": "Wills, estates, property, business and notary. Free first call.",
        "cta": "Call (08) 8522 6025",
        "bg": {"landscape": "C-16x9.jpg", "square": "C-1x1.jpg"},
    },
}

SIZES = {"landscape": (1200, 628), "square": (1200, 1200)}


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONTS / name), size)


def cover(img: Image.Image, size: tuple[int, int], anchor: str) -> Image.Image:
    """Scale to cover, then crop keeping the negative-space side."""
    w, h = size
    scale = max(w / img.width, h / img.height)
    img = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    left = 0 if anchor == "left" else (img.width - w) // 2
    top = 0 if anchor == "top" else (img.height - h) // 2
    return img.crop((left, top, left + w, top + h))


def scrim(base: Image.Image, fmt: str) -> Image.Image:
    """Soft paper wash behind the copy so the type reads on any background."""
    w, h = base.size
    mask = Image.new("L", (w, h), 0)
    d = ImageDraw.Draw(mask)
    if fmt == "landscape":
        d.rectangle((0, 0, int(w * 0.68), h), fill=215)
    else:
        d.rectangle((0, 0, w, int(h * 0.58)), fill=200)
    mask = mask.filter(ImageFilter.GaussianBlur(90))
    wash = Image.new("RGB", (w, h), PAPER)
    return Image.composite(wash, base, mask)


def draw_text_block(img: Image.Image, opt: dict, fmt: str) -> None:
    d = ImageDraw.Draw(img)
    w, h = img.size
    pad = 72 if fmt == "landscape" else 84
    max_w = int(w * 0.56) if fmt == "landscape" else int(w * 0.84)

    eyebrow_f = font("Inter-600.ttf", 20 if fmt == "landscape" else 24)
    head_f = font("Fraunces-600i.ttf", 56 if fmt == "landscape" else 92)
    sub_f = font("Inter-400.ttf", 22 if fmt == "landscape" else 30)
    cta_f = font("Inter-600.ttf", 22 if fmt == "landscape" else 26)

    y = pad
    # Eyebrow: the "why you are seeing this" line, small caps in leaf.
    eyebrow = opt["eyebrow"].upper()
    d.line((pad, y + 11, pad + 34, y + 11), fill=EMBER, width=2)
    d.text((pad + 46, y), eyebrow, font=eyebrow_f, fill=LEAF_DEEP)
    y += eyebrow_f.size + 28

    # Headline in Fraunces, two lines, tight leading.
    for line in opt["headline"]:
        d.text((pad, y), line, font=head_f, fill=INK)
        y += int(head_f.size * 1.02)
    y += 22

    # Sub line, wrapped to the column.
    words = opt["sub"].split()
    lines, cur = [], ""
    for wd in words:
        test = (cur + " " + wd).strip()
        if d.textlength(test, font=sub_f) <= max_w:
            cur = test
        else:
            lines.append(cur)
            cur = wd
    lines.append(cur)
    for line in lines:
        d.text((pad, y), line, font=sub_f, fill=(45, 42, 34))
        y += int(sub_f.size * 1.45)
    y += 26

    # CTA pill in leaf with paper text, plus an arrow.
    label = opt["cta"] + "  →"
    tw = d.textlength(label, font=cta_f)
    ph = cta_f.size + 30
    d.rounded_rectangle((pad, y, pad + tw + 56, y + ph), radius=ph // 2, fill=LEAF)
    d.text((pad + 28, y + 14), label, font=cta_f, fill=PAPER)


def draw_logo(img: Image.Image, fmt: str) -> None:
    logo = Image.open(LOGO).convert("RGBA")
    target_w = 220 if fmt == "landscape" else 260
    ratio = target_w / logo.width
    logo = logo.resize((target_w, round(logo.height * ratio)), Image.LANCZOS)
    w, h = img.size
    pad = 56 if fmt == "landscape" else 72
    # Small paper card behind the logo so it sits cleanly on photography.
    card = Image.new("RGBA", (logo.width + 40, logo.height + 28), (*PAPER, 235))
    x = w - card.width - pad
    y = h - card.height - pad
    img.paste(card, (x, y), card)
    img.paste(logo, (x + 20, y + 14), logo)


def build_one(key: str, fmt: str) -> Path:
    opt = OPTIONS[key]
    size = SIZES[fmt]
    bg = Image.open(BG / opt["bg"][fmt]).convert("RGB")
    img = cover(bg, size, anchor="left" if fmt == "landscape" else "top")
    img = scrim(img, fmt)
    draw_text_block(img, opt, fmt)
    draw_logo(img, fmt)
    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / f"smc-remarketing-{key}-{size[0]}x{size[1]}.png"
    img.save(path, optimize=True)
    return path


def contact_sheet(paths: list[Path]) -> Path:
    thumbs = []
    for p in paths:
        im = Image.open(p)
        im.thumbnail((600, 600))
        thumbs.append((p.stem, im))
    cols = 2
    cw, ch = 640, 660
    rows = (len(thumbs) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * cw, rows * ch), (240, 236, 226))
    d = ImageDraw.Draw(sheet)
    f = font("Inter-500.ttf", 18)
    for i, (name, im) in enumerate(thumbs):
        x = (i % cols) * cw + 20
        y = (i // cols) * ch + 20
        sheet.paste(im, (x, y))
        d.text((x, y + im.height + 8), name, font=f, fill=INK)
    path = OUT / "contact-sheet.jpg"
    sheet.save(path, quality=88)
    return path


if __name__ == "__main__":
    made = []
    for key in OPTIONS:
        for fmt in SIZES:
            made.append(build_one(key, fmt))
            print("built", made[-1].name)
    print("sheet", contact_sheet(made).name)
