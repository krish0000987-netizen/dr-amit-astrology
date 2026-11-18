import os
from PIL import Image, ImageOps, ImageEnhance, ImageDraw

root = "/Users/krishna/Documents/dr amit astro"
ai_dir = os.path.join(root, "public", "images", "ai")
photos_dir = os.path.join(root, "public", "images", "photos")
os.makedirs(photos_dir, exist_ok=True)

def load_ai(name):
    return Image.open(os.path.join(ai_dir, name)).convert("RGB")

def save_luxury(im, filename):
    im = im.convert("RGB")
    im = ImageOps.fit(im, (1200, 900), Image.Resampling.LANCZOS)
    im = ImageEnhance.Contrast(im).enhance(1.04)
    im = ImageEnhance.Sharpness(im).enhance(1.12)
    im.save(os.path.join(photos_dir, filename), format="JPEG", quality=92, optimize=True)

def crop_box(im, left_pct, top_pct, right_pct, bottom_pct):
    w, h = im.size
    return im.crop((int(w * left_pct), int(h * top_pct), int(w * right_pct), int(h * bottom_pct)))

# Load all 13 100%-Indian AI-generated images
im_astrologer = load_ai("astrologer-portrait.jpg")
im_kundli = load_ai("vedic-kundli-scroll.jpg")
im_prashna = load_ai("prashna-consultation.jpg")
im_numerology = load_ai("numerology-sacred-numbers.jpg")
im_vastu_home = load_ai("vastu-luxury-home.jpg")
im_consult_room = load_ai("consultation-room.jpg")
im_office_vastu = load_ai("office-vastu-corporate.jpg")
im_career = load_ai("career-business-growth.jpg")
im_krishna_flute = load_ai("krishna-vrindavan-flute.jpg")
im_krishna_aura = load_ai("krishna-golden-aura.jpg")
im_krishna_kadamba = load_ai("krishna-kadamba-tree.jpg")
im_krishna_cosmos = load_ai("krishna-celestial-cosmos.jpg")
im_krishna_grace = load_ai("krishna-divine-grace.jpg")

# Build all 41 100%-Indian Vedic Astrology & Indian cultural images (Zero Western stock photos!)
# 1. kundli-birth-chart-diagram.jpg -> Close-up of the hand-drawn Devanagari Janam Kundli chart on parchment
save_luxury(crop_box(im_kundli, 0.22, 0.10, 0.78, 0.86), "kundli-birth-chart-diagram.jpg")

# 2. navagraha-planetary-cosmos.jpg -> Vedic zodiac wheel & planetary orbits around Lord Krishna
save_luxury(crop_box(im_krishna_cosmos, 0.14, 0.04, 0.88, 0.88), "navagraha-planetary-cosmos.jpg")

# 3. prashna-horary-wheel.jpg -> Circular Sanskrit Prashna Chakra chart & brass pointer in Indian astrologer's hand
save_luxury(crop_box(im_prashna, 0.26, 0.32, 0.94, 0.96), "prashna-horary-wheel.jpg")

# 4. numerology-vedic-matrix.jpg -> Golden Indian Sri Yantra & glowing Vedic numbers ring
save_luxury(crop_box(im_numerology, 0.18, 0.06, 0.82, 0.88), "numerology-vedic-matrix.jpg")

# 5. vastu-compass-mandala.jpg -> Antique brass directional compass beside Vedic Janam Kundli on white marble
save_luxury(crop_box(im_kundli, 0.0, 0.30, 0.65, 0.95), "vastu-compass-mandala.jpg")

# 6. vastu-architectural-floorplan.jpg -> Indian professional examining architectural Vastu floor plan on wooden desk
save_luxury(crop_box(im_career, 0.20, 0.52, 0.88, 0.98), "vastu-architectural-floorplan.jpg")

# 7. palmistry-hand-closeup-art.jpg -> Close-up of Indian astrologer's hands & fingers with Rudraksha mala
save_luxury(crop_box(im_prashna, 0.35, 0.26, 1.0, 0.92), "palmistry-hand-closeup-art.jpg")

# 8. palmistry-lines-diagram.jpg -> Close-up of Indian astrologer's hands holding Rudraksha beads over open chart
save_luxury(crop_box(im_astrologer, 0.38, 0.60, 0.96, 0.92), "palmistry-lines-diagram.jpg")

# 9. palmistry-mounts-guide.jpg -> Close-up of hand resting on traditional Indian inlaid wooden consultation desk
save_luxury(crop_box(im_prashna, 0.48, 0.40, 1.0, 0.98), "palmistry-mounts-guide.jpg")

# 10. palmistry-consultation-session.jpg -> Full view of Indian astrologer's hands conducting a chart & hand session
save_luxury(crop_box(im_prashna, 0.12, 0.08, 0.98, 0.96), "palmistry-consultation-session.jpg")

# 11. four-languages-consultation.jpg -> Ancient Indian palm-leaf (Tadpatra) manuscripts tied with golden silk & brass inkwell
save_luxury(crop_box(im_prashna, 0.0, 0.18, 0.60, 0.86), "four-languages-consultation.jpg")

# 12. consultation-three-steps.jpg -> Indian consultation chamber table with brass Diya lamp, armillary sphere & sacred pothis
save_luxury(crop_box(im_consult_room, 0.20, 0.44, 0.82, 0.98), "consultation-three-steps.jpg")

# 13. pricing-transparency-rate.jpg -> Brass astronomical Yantra globe & palm-leaf manuscripts on carved Indian teak desk
save_luxury(crop_box(im_astrologer, 0.0, 0.52, 0.66, 0.98), "pricing-transparency-rate.jpg")

# 14. consultation-modes-trio.jpg -> Sunlit Indian consultation sanctuary with two carved teak armchairs & sacred texts
save_luxury(crop_box(im_consult_room, 0.05, 0.32, 0.95, 0.96), "consultation-modes-trio.jpg")

# 15. topic-health-wellbeing.jpg -> Peaceful Vrindavan Yamuna river sunrise with Kadamba trees, peacocks & temple ghats
save_luxury(crop_box(im_krishna_kadamba, 0.32, 0.08, 1.0, 0.92), "topic-health-wellbeing.jpg")

# 16. topic-financial-stability.jpg -> Golden Sri Yantra & sacred prosperity mandala sculpture
save_luxury(crop_box(im_numerology, 0.08, 0.02, 0.92, 0.94), "topic-financial-stability.jpg")

# 17. topic-family-harmony.jpg -> Traditional Indian Haveli courtyard home with sandstone arches & peaceful seating
save_luxury(crop_box(im_vastu_home, 0.12, 0.16, 0.88, 0.84), "topic-family-harmony.jpg")

# 18. topic-love-relationships.jpg -> Sacred golden lotus, peacock feather (Morpankh) & golden Bansuri in warm candlelight
save_luxury(crop_box(im_krishna_grace, 0.08, 0.14, 0.96, 0.92), "topic-love-relationships.jpg")

# 19. topic-career-direction.jpg -> Dignified Indian professional in sunlit office reviewing career & project plans
save_luxury(crop_box(im_career, 0.12, 0.06, 0.88, 0.92), "topic-career-direction.jpg")

# 20. topic-business-expansion.jpg -> Indian executive office with Lord Ganesha bronze murti & brass Vastu pyramids
save_luxury(crop_box(im_office_vastu, 0.24, 0.14, 0.98, 0.94), "topic-business-expansion.jpg")

# 21. topic-marriage-kundli-milan.jpg -> Vedic Janam Kundli chart with sacred Rudraksha mala & fresh Indian Mogra jasmine flowers
save_luxury(crop_box(im_kundli, 0.30, 0.04, 1.0, 0.96), "topic-marriage-kundli-milan.jpg")

# 22. indian-couple-vivaha-harmony.jpg -> Sacred Indian courtyard lotus pool surrounded by lit brass wedding diyas
save_luxury(crop_box(im_vastu_home, 0.08, 0.38, 0.92, 0.98), "indian-couple-vivaha-harmony.jpg")

# 23. indian-temple-sanctuary-art.jpg -> Sunlit Indian temple-style carved sandstone arches & glowing brass oil lamp
save_luxury(crop_box(im_consult_room, 0.16, 0.04, 0.84, 0.78), "indian-temple-sanctuary-art.jpg")

# 24. vedic-scriptures-manuscripts.jpg -> Classical Sanskrit Jyotish Shastra bound volumes & glowing brass lamp on study shelves
save_luxury(crop_box(im_astrologer, 0.56, 0.12, 1.0, 0.72), "vedic-scriptures-manuscripts.jpg")

# 25. vastu-commercial-property.jpg -> Sunlit modern Indian corporate office with panoramic Indian city view & Vastu plants
save_luxury(crop_box(im_office_vastu, 0.0, 0.05, 0.78, 0.92), "vastu-commercial-property.jpg")

# 26. vastu-remedies-without-demolition.jpg -> Harmonious Indian Vastu desk with brass pyramids, golden bowl & Lord Ganesha murti
save_luxury(crop_box(im_office_vastu, 0.38, 0.18, 1.0, 0.88), "vastu-remedies-without-demolition.jpg")

# 27. numerology-mulank-bhagyank.jpg -> Close-up of glowing golden Sri Yantra geometry & Vedic numerical ring
save_luxury(crop_box(im_numerology, 0.24, 0.14, 0.76, 0.82), "numerology-mulank-bhagyank.jpg")

# 28. numerology-name-correction.jpg -> Handwritten Sanskrit script ledger, glass dip pen & antique brass inkwell
save_luxury(crop_box(im_prashna, 0.0, 0.35, 0.52, 0.96), "numerology-name-correction.jpg")

# 29. prashna-career-decision.jpg -> Indian entrepreneur reviewing documents with laptop on sunlit wooden desk
save_luxury(crop_box(im_career, 0.22, 0.38, 0.96, 0.98), "prashna-career-decision.jpg")

# 30. prashna-business-investment.jpg -> Indian executive study with bronze Ganesha, brass vessels & natural northeast light
save_luxury(crop_box(im_office_vastu, 0.32, 0.08, 1.0, 0.92), "prashna-business-investment.jpg")

# 31. prashna-relationship-clarity.jpg -> Golden lotus blossom & peacock feather on carved Indian stone altar
save_luxury(crop_box(im_krishna_grace, 0.30, 0.16, 0.98, 0.88), "prashna-relationship-clarity.jpg")

# 32. krishna-peacock-flute-emblem.jpg -> Ornate golden Bansuri flute & iridescent Morpankh peacock feather in temple candlelight
save_luxury(crop_box(im_krishna_grace, 0.04, 0.26, 0.94, 0.92), "krishna-peacock-flute-emblem.jpg")

# 33. krishna-sudarshana-blessing.jpg -> Lord Krishna framed by radiant golden lotus mandala & Vedic constellations
save_luxury(crop_box(im_krishna_aura, 0.06, 0.04, 0.94, 0.82), "krishna-sudarshana-blessing.jpg")

# 34. availability-schedule-calendar.jpg -> Indian astrologer's consultation desk with open Panchang diary, Rudraksha & copper Kalash
save_luxury(crop_box(im_astrologer, 0.18, 0.56, 1.0, 0.98), "availability-schedule-calendar.jpg")

# 35. whatsapp-instant-connect.jpg -> Sunlit Indian consultation sanctuary ready for live Voice, Video & WhatsApp sessions
save_luxury(crop_box(im_consult_room, 0.10, 0.20, 0.90, 0.94), "whatsapp-instant-connect.jpg")

# 36. faq-sacred-scroll.jpg -> Tied Indian palm-leaf manuscripts (Pothi) & brass inkwell on carved wooden table
save_luxury(crop_box(im_prashna, 0.0, 0.14, 0.58, 0.88), "faq-sacred-scroll.jpg")

# 37. review-card-rahul.jpg -> Indian executive career & decision-making scene
save_luxury(crop_box(im_career, 0.16, 0.14, 0.92, 0.94), "review-card-rahul.jpg")

# 38. review-card-priya.jpg -> Sacred golden lotus, peacock feather & temple candles for relationship harmony
save_luxury(crop_box(im_krishna_grace, 0.12, 0.08, 0.96, 0.88), "review-card-priya.jpg")

# 39. review-card-amit.jpg -> Hand-drawn Vedic Janam Kundli chart, brass compass & Rudraksha mala
save_luxury(crop_box(im_kundli, 0.06, 0.06, 0.94, 0.94), "review-card-amit.jpg")

# 40. review-card-sneha.jpg -> Sunlit Indian courtyard with lotus pool, marigold Urli & glowing brass diyas
save_luxury(crop_box(im_vastu_home, 0.14, 0.24, 0.86, 0.94), "review-card-sneha.jpg")

# 41. review-card-vikram.jpg -> Brass armillary sphere, palm-leaf manuscripts & Rudraksha beads on Indian teak desk
save_luxury(crop_box(im_astrologer, 0.02, 0.46, 0.84, 0.96), "review-card-vikram.jpg")

print("Built all 41 100%-Indian Vedic Astrology photographic assets in public/images/photos/")
