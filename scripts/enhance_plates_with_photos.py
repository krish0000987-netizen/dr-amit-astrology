import os
import base64
from io import BytesIO
from PIL import Image, ImageEnhance

root = "/Users/krishna/Documents/dr amit astro"
ai_dir = os.path.join(root, "public", "images", "ai")
art_dir = os.path.join(root, "public", "images", "art")

# Map each art SVG to a relevant AI photograph to embed as a warm luxury background vignette
photo_map = {
    "kundli-birth-chart-diagram.svg": "vedic-kundli-scroll.jpg",
    "navagraha-planetary-cosmos.svg": "krishna-celestial-cosmos.jpg",
    "prashna-horary-wheel.svg": "prashna-consultation.jpg",
    "numerology-vedic-matrix.svg": "numerology-sacred-numbers.jpg",
    "vastu-compass-mandala.svg": "vastu-luxury-home.jpg",
    "vastu-architectural-floorplan.svg": "office-vastu-corporate.jpg",
    "palmistry-lines-diagram.svg": "prashna-consultation.jpg",
    "four-languages-consultation.svg": "astrologer-portrait.jpg",
    "consultation-three-steps.svg": "consultation-room.jpg",
    "pricing-transparency-rate.svg": "vedic-kundli-scroll.jpg",
    "consultation-modes-trio.svg": "consultation-room.jpg",
    "topic-health-wellbeing.svg": "krishna-kadamba-tree.jpg",
    "topic-financial-stability.svg": "numerology-sacred-numbers.jpg",
    "topic-family-harmony.svg": "vastu-luxury-home.jpg",
    "topic-love-relationships.svg": "krishna-vrindavan-flute.jpg",
    "topic-career-direction.svg": "career-business-growth.jpg",
    "topic-business-expansion.svg": "office-vastu-corporate.jpg",
    "topic-marriage-kundli-milan.svg": "krishna-golden-aura.jpg",
    "review-card-rahul.svg": "career-business-growth.jpg",
    "review-card-priya.svg": "krishna-vrindavan-flute.jpg",
    "review-card-amit.svg": "vedic-kundli-scroll.jpg",
    "review-card-sneha.svg": "vastu-luxury-home.jpg",
    "review-card-vikram.svg": "prashna-consultation.jpg",
    "availability-schedule-calendar.svg": "consultation-room.jpg",
    "krishna-peacock-flute-emblem.svg": "krishna-divine-grace.jpg",
    "palmistry-hand-closeup-art.svg": "prashna-consultation.jpg",
    "palmistry-mounts-guide.svg": "vedic-kundli-scroll.jpg",
    "palmistry-consultation-session.svg": "consultation-room.jpg",
    "vedic-scriptures-manuscripts.svg": "vedic-kundli-scroll.jpg",
    "indian-couple-vivaha-harmony.svg": "krishna-vrindavan-flute.jpg",
    "indian-temple-sanctuary-art.svg": "krishna-golden-aura.jpg",
    "vastu-commercial-property.svg": "office-vastu-corporate.jpg",
    "vastu-remedies-without-demolition.svg": "vastu-luxury-home.jpg",
    "numerology-mulank-bhagyank.svg": "numerology-sacred-numbers.jpg",
    "numerology-name-correction.svg": "numerology-sacred-numbers.jpg",
    "prashna-career-decision.svg": "career-business-growth.jpg",
    "prashna-business-investment.svg": "office-vastu-corporate.jpg",
    "prashna-relationship-clarity.svg": "krishna-kadamba-tree.jpg",
    "krishna-sudarshana-blessing.svg": "krishna-celestial-cosmos.jpg",
    "whatsapp-instant-connect.svg": "consultation-room.jpg",
    "faq-sacred-scroll.svg": "vedic-kundli-scroll.jpg",
}

b64_cache = {}
for jpg_name in set(photo_map.values()):
    jpg_path = os.path.join(ai_dir, jpg_name)
    with Image.open(jpg_path) as im:
        im = im.convert("RGB")
        # Resize to 800x600 for crisp yet lightweight embedded background
        im = im.resize((800, 600), Image.Resampling.LANCZOS)
        buf = BytesIO()
        im.save(buf, format="JPEG", quality=78, optimize=True)
        b64_cache[jpg_name] = base64.b64encode(buf.getvalue()).decode("ascii")

count = 0
for svg_name, jpg_name in photo_map.items():
    svg_path = os.path.join(art_dir, svg_name)
    if not os.path.exists(svg_path):
        continue
    with open(svg_path, "r", encoding="utf-8") as f:
        content = f.read()

    b64_data = b64_cache[jpg_name]
    bg_layer = (
        f'<rect width="1200" height="900" fill="url(#bgRad)" />\n'
        f'  <image href="data:image/jpeg;base64,{b64_data}" x="32" y="32" width="1136" height="836" preserveAspectRatio="xMidYMid slice" opacity="0.24" />'
    )
    if 'preserveAspectRatio="xMidYMid slice"' not in content:
        content = content.replace(
            '<rect width="1200" height="900" fill="url(#bgRad)" />',
            bg_layer,
            1
        )
        with open(svg_path, "w", encoding="utf-8") as f:
            f.write(content)
        count += 1

print(f"Enhanced {count} SVG plates with embedded photographic backgrounds.")
