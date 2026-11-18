import fs from "fs";
import path from "path";

const outDir = path.join(process.cwd(), "public", "images", "art");
fs.mkdirSync(outDir, { recursive: true });

function esc(str = "") {
  return String(str)
    .replace(/&amp;/g, "&")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function createLuxuryPlate({
  filename,
  title,
  subtitle,
  sanskrit,
  theme = "ivory",
  centerArt,
  badgeText = "DR. AMIT DESHMUKH • VEDIC JYOTISH",
}) {
  const palettes = {
    ivory: {
      bg1: "#FFFFFF",
      bg2: "#FAF8F3",
      bg3: "#F4EBDD",
      textMain: "#242424",
      textSub: "#777777",
      gold1: "#C6A15B",
      gold2: "#A77B35",
      gold3: "#DFC38D",
      cardBg: "#FFFFFF",
    },
    warm: {
      bg1: "#FAF8F3",
      bg2: "#F4EBDD",
      bg3: "#EFE2CC",
      textMain: "#242424",
      textSub: "#665E52",
      gold1: "#C6A15B",
      gold2: "#9A6E2A",
      gold3: "#E5C993",
      cardBg: "#FFFFFF",
    },
    dark: {
      bg1: "#1D1B18",
      bg2: "#141210",
      bg3: "#2A241B",
      textMain: "#FAF8F3",
      textSub: "#C6A15B",
      gold1: "#DFC38D",
      gold2: "#C6A15B",
      gold3: "#A77B35",
      cardBg: "#24201A",
    },
    gold: {
      bg1: "#FAF6EE",
      bg2: "#F2E5CE",
      bg3: "#E6D2B0",
      textMain: "#242424",
      textSub: "#6B5635",
      gold1: "#A77B35",
      gold2: "#865E1F",
      gold3: "#C6A15B",
      cardBg: "#FAF8F3",
    },
  };

  const p = palettes[theme] || palettes.ivory;

  let rays = "";
  for (let i = 0; i < 24; i++) {
    const angle = i * 15;
    rays += `<line x1="600" y1="80" x2="600" y2="820" stroke="url(#goldGrad)" stroke-width="0.7" opacity="0.18" transform="rotate(${angle} 600 450)" />`;
  }

  let zodiacDots = "";
  for (let i = 0; i < 12; i++) {
    const rad = (i * 30 * Math.PI) / 180;
    const cx = (600 + Math.cos(rad) * 285).toFixed(1);
    const cy = (450 + Math.sin(rad) * 285).toFixed(1);
    zodiacDots += `<circle cx="${cx}" cy="${cy}" r="4.5" fill="url(#goldGrad)" opacity="0.55" />`;
    zodiacDots += `<circle cx="${cx}" cy="${cy}" r="9" fill="none" stroke="url(#goldGrad)" stroke-width="0.8" opacity="0.35" />`;
  }

  const safeTitle = esc(title);
  const safeSubtitle = esc(subtitle);
  const safeSanskrit = sanskrit ? esc(sanskrit) : "";
  const safeBadge = esc(badgeText);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <defs>
    <radialGradient id="bgRad" cx="50%" cy="48%" r="70%">
      <stop offset="0%" stop-color="${p.bg1}" />
      <stop offset="65%" stop-color="${p.bg2}" />
      <stop offset="100%" stop-color="${p.bg3}" />
    </radialGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.gold2}" />
      <stop offset="50%" stop-color="${p.gold1}" />
      <stop offset="100%" stop-color="${p.gold3}" />
    </linearGradient>
    <linearGradient id="softGold" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${p.gold1}" stop-opacity="0.25" />
      <stop offset="100%" stop-color="${p.gold2}" stop-opacity="0.04" />
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="14" stdDeviation="20" flood-color="#A77B35" flood-opacity="0.14" />
    </filter>
  </defs>

  <rect width="1200" height="900" fill="url(#bgRad)" />

  <rect x="32" y="32" width="1136" height="836" rx="22" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" opacity="0.65" />
  <rect x="46" y="46" width="1108" height="808" rx="16" fill="none" stroke="url(#goldGrad)" stroke-width="0.8" stroke-dasharray="6 6" opacity="0.45" />

  <g stroke="url(#goldGrad)" stroke-width="1.5" fill="none" opacity="0.7">
    <path d="M32 95 L95 32 M32 75 L75 32" />
    <path d="M1168 95 L1105 32 M1168 75 L1125 32" />
    <path d="M32 805 L95 868 M32 825 L75 868" />
    <path d="M1168 805 L1105 868 M1168 825 L1125 868" />
  </g>

  <g>
    ${rays}
    <circle cx="600" cy="450" r="340" fill="none" stroke="url(#goldGrad)" stroke-width="0.8" opacity="0.22" />
    <circle cx="600" cy="450" r="285" fill="none" stroke="url(#goldGrad)" stroke-width="1.2" opacity="0.35" />
    <circle cx="600" cy="450" r="230" fill="url(#softGold)" stroke="url(#goldGrad)" stroke-width="1" opacity="0.5" />
    ${zodiacDots}
  </g>

  <g transform="translate(600, 92)">
    <rect x="-210" y="-20" width="420" height="36" rx="18" fill="${p.cardBg}" stroke="url(#goldGrad)" stroke-width="1" opacity="0.9" />
    <text x="0" y="3" text-anchor="middle" font-family="Georgia, serif" font-size="11" letter-spacing="3.5" fill="${p.gold2}" font-weight="bold">${safeBadge}</text>
  </g>

  <g filter="url(#cardShadow)">
    ${centerArt(p)}
  </g>

  <g transform="translate(600, 775)" filter="url(#cardShadow)">
    <rect x="-390" y="-58" width="780" height="108" rx="16" fill="${p.cardBg}" stroke="url(#goldGrad)" stroke-width="1.3" opacity="0.96" />
    <line x1="-140" y1="-58" x2="140" y2="-58" stroke="${p.gold1}" stroke-width="3" />
    ${safeSanskrit ? `<text x="0" y="-26" text-anchor="middle" font-family="Georgia, serif" font-size="13" letter-spacing="2.5" fill="${p.gold2}">${safeSanskrit}</text>` : ""}
    <text x="0" y="${safeSanskrit ? "6" : "-4"}" text-anchor="middle" font-family="Georgia, serif" font-size="25" font-weight="bold" fill="${p.textMain}">${safeTitle}</text>
    <text x="0" y="${safeSanskrit ? "32" : "24"}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" letter-spacing="1" fill="${p.textSub}">${safeSubtitle}</text>
  </g>
</svg>`;

  fs.writeFileSync(path.join(outDir, filename), svg, "utf8");
}

// 1. North Indian Kundli Chart
createLuxuryPlate({
  filename: "kundli-birth-chart-diagram.svg",
  title: "Traditional Vedic Janam Kundli",
  subtitle: "12 Bhavas (Houses) • 9 Grahas (Planets) • 27 Nakshatras",
  sanskrit: "॥ श्री गणेशाय नमः • जन्म कुंडली विश्लेषण ॥",
  theme: "ivory",
  centerArt: () => `
    <g transform="translate(600, 420)">
      <rect x="-240" y="-220" width="480" height="440" rx="12" fill="#FFFFFF" stroke="url(#goldGrad)" stroke-width="2.5" />
      <rect x="-224" y="-204" width="448" height="408" fill="#FAF8F3" stroke="url(#goldGrad)" stroke-width="1.5" />
      <line x1="-224" y1="-204" x2="224" y2="204" stroke="#C6A15B" stroke-width="1.8" />
      <line x1="224" y1="-204" x2="-224" y2="204" stroke="#C6A15B" stroke-width="1.8" />
      <polygon points="0,-204 224,0 0,204 -224,0" fill="none" stroke="#A77B35" stroke-width="2.2" />
      <text x="0" y="-100" text-anchor="middle" font-family="Georgia, serif" font-size="18" font-weight="bold" fill="#A77B35">Lagna (I)</text>
      <text x="0" y="-74" text-anchor="middle" font-family="Georgia, serif" font-size="14" fill="#242424">Su • Ju (Exalted)</text>
      <text x="-115" y="-145" text-anchor="middle" font-family="Georgia, serif" font-size="14" fill="#777777">II • Dhana</text>
      <text x="-165" y="-85" text-anchor="middle" font-family="Georgia, serif" font-size="14" fill="#777777">III • Sahaja</text>
      <text x="-110" y="5" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#242424">IV • Sukha (Mo)</text>
      <text x="-165" y="105" text-anchor="middle" font-family="Georgia, serif" font-size="14" fill="#777777">V • Putra (Me)</text>
      <text x="-115" y="165" text-anchor="middle" font-family="Georgia, serif" font-size="14" fill="#777777">VI • Ari</text>
      <text x="0" y="105" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#A77B35">VII • Kalatra (Ve)</text>
      <text x="115" y="165" text-anchor="middle" font-family="Georgia, serif" font-size="14" fill="#777777">VIII • Ayur</text>
      <text x="165" y="105" text-anchor="middle" font-family="Georgia, serif" font-size="14" fill="#242424">IX • Bhagya</text>
      <text x="115" y="5" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#242424">X • Karma (Sa • Ma)</text>
      <text x="165" y="-85" text-anchor="middle" font-family="Georgia, serif" font-size="14" fill="#777777">XI • Labha</text>
      <text x="115" y="-145" text-anchor="middle" font-family="Georgia, serif" font-size="14" fill="#777777">XII • Vyaya</text>
      <circle cx="0" cy="0" r="24" fill="#FAF8F3" stroke="#C6A15B" stroke-width="1.5" />
      <text x="0" y="7" text-anchor="middle" font-family="Georgia, serif" font-size="20" fill="#A77B35">ॐ</text>
    </g>
  `,
});

// 2. Navagraha Planetary System Diagram
createLuxuryPlate({
  filename: "navagraha-planetary-cosmos.svg",
  title: "Navagraha Celestial Alignment",
  subtitle: "Surya • Chandra • Mangala • Budha • Brihaspati • Shukra • Shani • Rahu • Ketu",
  sanskrit: "॥ नवग्रह मंडल एवं महादशा चक्र ॥",
  theme: "dark",
  centerArt: () => {
    const planets = [
      { name: "Surya (Sun)", r: 0, angle: 0, size: 38, color: "#E5B85B" },
      { name: "Chandra", r: 90, angle: 40, size: 15, color: "#FAF8F3" },
      { name: "Budha", r: 125, angle: 135, size: 13, color: "#DFC38D" },
      { name: "Shukra", r: 160, angle: 225, size: 17, color: "#FFF2D6" },
      { name: "Mangala", r: 195, angle: 310, size: 15, color: "#D98A5F" },
      { name: "Brihaspati", r: 235, angle: 75, size: 22, color: "#C6A15B" },
      { name: "Shani", r: 275, angle: 190, size: 19, color: "#B8A98A" },
    ];
    let orbits = "";
    [90, 125, 160, 195, 235, 275].forEach((r) => {
      orbits += `<circle cx="600" cy="415" r="${r}" fill="none" stroke="#C6A15B" stroke-width="1" stroke-dasharray="4 6" opacity="0.45" />`;
    });
    let nodes = "";
    planets.forEach((pl) => {
      const rad = (pl.angle * Math.PI) / 180;
      const x = (600 + Math.cos(rad) * pl.r).toFixed(1);
      const y = (415 + Math.sin(rad) * pl.r).toFixed(1);
      nodes += `
        <circle cx="${x}" cy="${y}" r="${pl.size + 6}" fill="${pl.color}" opacity="0.18" />
        <circle cx="${x}" cy="${y}" r="${pl.size}" fill="${pl.color}" stroke="#FFFFFF" stroke-width="1.2" />
        <text x="${x}" y="${Number(y) + pl.size + 18}" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#FAF8F3">${esc(pl.name)}</text>
      `;
    });
    return `<g>${orbits}${nodes}</g>`;
  },
});

// 3. Prashna Horary Clock & Sacred Query Diagram
createLuxuryPlate({
  filename: "prashna-horary-wheel.svg",
  title: "Prashna Kundali — Horary Chart of the Moment",
  subtitle: "Instantaneous Planetary Lagna Cast at the Exact Moment of Your Question",
  sanskrit: "॥ प्रश्न कुंडली एवं तात्कालिक लग्न साधन ॥",
  theme: "warm",
  centerArt: () => `
    <g transform="translate(600, 415)">
      <circle cx="0" cy="0" r="215" fill="#FFFFFF" stroke="#A77B35" stroke-width="2.5" />
      <circle cx="0" cy="0" r="175" fill="#FAF8F3" stroke="#C6A15B" stroke-width="1.2" />
      <circle cx="0" cy="0" r="115" fill="#FFFFFF" stroke="#C6A15B" stroke-width="1.5" />
      <line x1="0" y1="0" x2="95" y2="-110" stroke="#A77B35" stroke-width="3.5" stroke-linecap="round" />
      <line x1="0" y1="0" x2="-125" y2="-40" stroke="#C6A15B" stroke-width="2.5" stroke-linecap="round" />
      <circle cx="0" cy="0" r="46" fill="#FAF8F3" stroke="#A77B35" stroke-width="2" />
      <text x="0" y="14" text-anchor="middle" font-family="Georgia, serif" font-size="40" font-weight="bold" fill="#A77B35">?</text>
      <text x="0" y="-140" text-anchor="middle" font-family="Georgia, serif" font-size="13" letter-spacing="2" fill="#A77B35" font-weight="bold">PRASHNA LAGNA</text>
      <text x="0" y="150" text-anchor="middle" font-family="Georgia, serif" font-size="13" letter-spacing="2" fill="#242424">KARYA SIDDHI YOGA</text>
    </g>
  `,
});

// 4. Numerology Lo Shu & Vedic 9-Number Matrix
createLuxuryPlate({
  filename: "numerology-vedic-matrix.svg",
  title: "Sacred 9-Square Vedic Numerology Grid",
  subtitle: "Mulank (Life Path) • Bhagyank (Destiny) • Name Vibration Alignment",
  sanskrit: "॥ अंक ज्योतिष एवं भाग्यांक चक्र ॥",
  theme: "gold",
  centerArt: () => {
    const grid = [
      { n: "4", sub: "Rahu • Discipline", x: -140, y: -135 },
      { n: "9", sub: "Mars • Courage", x: 0, y: -135 },
      { n: "2", sub: "Moon • Intuition", x: 140, y: -135 },
      { n: "3", sub: "Jupiter • Wisdom", x: -140, y: 0 },
      { n: "5", sub: "Mercury • Balance", x: 0, y: 0 },
      { n: "7", sub: "Ketu • Spiritual", x: 140, y: 0 },
      { n: "8", sub: "Saturn • Karma", x: -140, y: 135 },
      { n: "1", sub: "Sun • Leadership", x: 0, y: 135 },
      { n: "6", sub: "Venus • Harmony", x: 140, y: 135 },
    ];
    let cells = "";
    grid.forEach((c) => {
      cells += `
        <g transform="translate(${600 + c.x}, ${415 + c.y})">
          <rect x="-62" y="-58" width="124" height="116" rx="14" fill="#FFFFFF" stroke="#C6A15B" stroke-width="1.8" />
          <text x="0" y="6" text-anchor="middle" font-family="Georgia, serif" font-size="42" font-weight="bold" fill="#A77B35">${esc(c.n)}</text>
          <text x="0" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#555555">${esc(c.sub)}</text>
        </g>
      `;
    });
    return `<g>${cells}</g>`;
  },
});

// 5. Vastu 8-Direction Compass & Spatial Mandala
createLuxuryPlate({
  filename: "vastu-compass-mandala.svg",
  title: "Vastu Purusha Mandala & 8-Directional Compass",
  subtitle: "Ishanya (NE) Water • Agneya (SE) Fire • Nairutya (SW) Earth • Vayavya (NW) Air",
  sanskrit: "॥ वास्तु पुरुष मंडल एवं दिशा संतुलन ॥",
  theme: "ivory",
  centerArt: () => `
    <g transform="translate(600, 415)">
      <rect x="-210" y="-210" width="420" height="420" rx="16" fill="#FFFFFF" stroke="#A77B35" stroke-width="2.2" />
      <rect x="-150" y="-150" width="300" height="300" fill="#FAF8F3" stroke="#C6A15B" stroke-width="1.4" />
      <circle cx="0" cy="0" r="135" fill="#FFFFFF" stroke="#C6A15B" stroke-width="1.5" />
      <polygon points="0,-125 26,-26 125,0 26,26 0,125 -26,26 -125,0 -26,-26" fill="url(#goldGrad)" opacity="0.85" />
      <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#A77B35" stroke-width="1.8" />
      <text x="0" y="5" text-anchor="middle" font-family="Georgia, serif" font-size="12" font-weight="bold" fill="#A77B35">BRAHMA</text>
      <text x="0" y="-175" text-anchor="middle" font-family="Georgia, serif" font-size="15" font-weight="bold" fill="#A77B35">NORTH (Kubera • Wealth)</text>
      <text x="0" y="188" text-anchor="middle" font-family="Georgia, serif" font-size="15" font-weight="bold" fill="#242424">SOUTH (Yama • Stability)</text>
      <text x="175" y="5" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#A77B35">EAST (Surya)</text>
      <text x="-175" y="5" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#242424">WEST (Varuna)</text>
      <text x="155" y="-165" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#A77B35">NE • Ishanya (Sacred)</text>
      <text x="155" y="175" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#777777">SE • Agneya (Kitchen)</text>
      <text x="-155" y="175" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#A77B35">SW • Nairutya (Master)</text>
      <text x="-155" y="-165" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#777777">NW • Vayavya (Air)</text>
    </g>
  `,
});

// 6. Vastu Architectural Floor Plan Blueprint
createLuxuryPlate({
  filename: "vastu-architectural-floorplan.svg",
  title: "Vastu-Compliant Residence & Office Spatial Blueprint",
  subtitle: "Brahmasthan Open Courtyard • Entrance & Room Zoning Analysis",
  sanskrit: "॥ गृह एवं कार्यालय वास्तु मानचित्र ॥",
  theme: "warm",
  centerArt: () => `
    <g transform="translate(600, 415)">
      <rect x="-250" y="-195" width="500" height="390" rx="8" fill="#FFFFFF" stroke="#A77B35" stroke-width="2.5" />
      <line x1="-85" y1="-195" x2="-85" y2="195" stroke="#C6A15B" stroke-width="1.5" />
      <line x1="85" y1="-195" x2="85" y2="195" stroke="#C6A15B" stroke-width="1.5" />
      <line x1="-250" y1="-65" x2="250" y2="-65" stroke="#C6A15B" stroke-width="1.5" />
      <line x1="-250" y1="65" x2="250" y2="65" stroke="#C6A15B" stroke-width="1.5" />
      <rect x="-85" y="-65" width="170" height="130" fill="#FAF8F3" stroke="#A77B35" stroke-width="2" />
      <text x="0" y="-8" text-anchor="middle" font-family="Georgia, serif" font-size="15" font-weight="bold" fill="#A77B35">BRAHMASTHAN</text>
      <text x="0" y="14" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" fill="#777777">Central Energy Zone</text>
      <text x="167" y="-135" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#A77B35">NE • Puja &amp; Meditation</text>
      <text x="167" y="-115" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#777777">Clarity &amp; Prosperity</text>
      <text x="0" y="-135" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#242424">North • Treasury / Living</text>
      <text x="-167" y="-135" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#242424">NW • Guest / Movement</text>
      <text x="167" y="0" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#242424">East • Main Entrance</text>
      <text x="-167" y="0" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#242424">West • Dining &amp; Study</text>
      <text x="-167" y="130" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#A77B35">SW • Master Suite / CEO</text>
      <text x="0" y="130" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#242424">South • Storage &amp; Strength</text>
      <text x="167" y="130" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#242424">SE • Kitchen / Power</text>
    </g>
  `,
});

// 7. Palmistry Hand Lines & Mounts Diagram
createLuxuryPlate({
  filename: "palmistry-lines-diagram.svg",
  title: "Hasta Samudrika — Sacred Lines & Planetary Mounts",
  subtitle: "Heart Line (Hridaya) • Head Line (Mastishka) • Life Line (Jeevan) • Fate Line (Bhagya)",
  sanskrit: "॥ हस्तरेखा शास्त्र एवं पर्वत विश्लेषण ॥",
  theme: "ivory",
  centerArt: () => `
    <g transform="translate(600, 420)">
      <circle cx="0" cy="0" r="220" fill="#FFFFFF" stroke="#C6A15B" stroke-width="2" />
      <path d="M-75,165 C-95,115 -115,55 -115,-5 C-115,-35 -95,-45 -80,-20 L-75,15 L-75,-125 C-75,-148 -52,-148 -52,-125 L-52,-10 L-46,-155 C-46,-178 -22,-178 -22,-155 L-22,-10 L-16,-140 C-16,-162 8,-162 8,-140 L8,-5 L14,-105 C14,-125 36,-125 36,-105 L36,45 C36,115 15,165 -20,175 Z"
            fill="#FAF8F3" stroke="#A77B35" stroke-width="2.5" transform="scale(1.1) translate(15, 5)" />
      <path d="M-55,5 Q-5,-15 45,-25" fill="none" stroke="#A77B35" stroke-width="3" stroke-linecap="round" />
      <path d="M-65,25 Q-10,20 35,45" fill="none" stroke="#C6A15B" stroke-width="3" stroke-linecap="round" />
      <path d="M-65,20 Q-15,65 -25,145" fill="none" stroke="#A77B35" stroke-width="3" stroke-linecap="round" />
      <path d="M-10,140 L-12,-5" fill="none" stroke="#C6A15B" stroke-width="2.2" stroke-dasharray="5 3" stroke-linecap="round" />
      <g font-family="Georgia, serif" font-size="13" fill="#242424" font-weight="bold">
        <text x="145" y="-30" text-anchor="start">Heart Line (Emotions)</text>
        <line x1="45" y1="-25" x2="138" y2="-33" stroke="#C6A15B" stroke-width="1" />
        <text x="145" y="45" text-anchor="start">Head Line (Intellect)</text>
        <line x1="35" y1="45" x2="138" y2="42" stroke="#C6A15B" stroke-width="1" />
        <text x="-195" y="110" text-anchor="start">Life Line (Vitality)</text>
        <line x1="-30" y1="105" x2="-85" y2="105" stroke="#C6A15B" stroke-width="1" />
        <text x="-195" y="-35" text-anchor="start">Mount of Jupiter</text>
        <line x1="-50" y1="-10" x2="-85" y2="-35" stroke="#C6A15B" stroke-width="1" />
      </g>
    </g>
  `,
});

// 8. Four Languages Cultural Plate
createLuxuryPlate({
  filename: "four-languages-consultation.svg",
  title: "Consult in Your Preferred Language",
  subtitle: "Fluent Personal Guidance in Hindi • English • Marathi • Kannada",
  sanskrit: "॥ हिंदी • English • मराठी • ಕನ್ನಡ ॥",
  theme: "warm",
  centerArt: () => `
    <g transform="translate(600, 415)">
      <g transform="translate(-145, -95)">
        <rect x="-125" y="-75" width="250" height="150" rx="16" fill="#FFFFFF" stroke="#C6A15B" stroke-width="1.8" />
        <text x="0" y="-12" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="bold" fill="#A77B35">हिन्दी</text>
        <text x="0" y="22" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="#242424">Hindi Consultation</text>
        <text x="0" y="46" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#777777">वैदिक ज्योतिष एवं समाधान</text>
      </g>
      <g transform="translate(145, -95)">
        <rect x="-125" y="-75" width="250" height="150" rx="16" fill="#FFFFFF" stroke="#C6A15B" stroke-width="1.8" />
        <text x="0" y="-12" text-anchor="middle" font-family="Georgia, serif" font-size="32" font-weight="bold" fill="#A77B35">English</text>
        <text x="0" y="22" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="#242424">English Consultation</text>
        <text x="0" y="46" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#777777">Clear &amp; Structured Analysis</text>
      </g>
      <g transform="translate(-145, 95)">
        <rect x="-125" y="-75" width="250" height="150" rx="16" fill="#FFFFFF" stroke="#C6A15B" stroke-width="1.8" />
        <text x="0" y="-12" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="bold" fill="#A77B35">मराठी</text>
        <text x="0" y="22" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="#242424">Marathi Consultation</text>
        <text x="0" y="46" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#777777">पारंपारिक ज्योतिष मार्गदर्शन</text>
      </g>
      <g transform="translate(145, 95)">
        <rect x="-125" y="-75" width="250" height="150" rx="16" fill="#FFFFFF" stroke="#C6A15B" stroke-width="1.8" />
        <text x="0" y="-12" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="bold" fill="#A77B35">ಕನ್ನಡ</text>
        <text x="0" y="22" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="#242424">Kannada Consultation</text>
        <text x="0" y="46" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#777777">ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ ಸಮಾಲೋಚನೆ</text>
      </g>
    </g>
  `,
});

// 9. Consultation Process 3 Steps Plate
createLuxuryPlate({
  filename: "consultation-three-steps.svg",
  title: "Seamless 3-Step Consultation Journey",
  subtitle: "1. Select Service & Duration • 2. Share Birth Details or Question • 3. Direct 1-on-1 Session",
  sanskrit: "॥ सरल एवं गोपनीय परामर्श प्रक्रिया ॥",
  theme: "ivory",
  centerArt: () => `
    <g transform="translate(600, 415)">
      <line x1="-260" y1="0" x2="260" y2="0" stroke="#C6A15B" stroke-width="2" stroke-dasharray="6 6" />
      <g transform="translate(-260, 0)">
        <circle cx="0" cy="0" r="88" fill="#FFFFFF" stroke="#C6A15B" stroke-width="2.2" />
        <text x="0" y="-22" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#A77B35">01</text>
        <text x="0" y="8" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#242424">Choose Topic</text>
        <text x="0" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#777777">₹20/Min Flexible</text>
      </g>
      <g transform="translate(0, 0)">
        <circle cx="0" cy="0" r="88" fill="#FFFFFF" stroke="#A77B35" stroke-width="2.5" />
        <text x="0" y="-22" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#A77B35">02</text>
        <text x="0" y="8" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#242424">Chart / Prashna</text>
        <text x="0" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#777777">Kundli Preparation</text>
      </g>
      <g transform="translate(260, 0)">
        <circle cx="0" cy="0" r="88" fill="#FFFFFF" stroke="#C6A15B" stroke-width="2.2" />
        <text x="0" y="-22" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#A77B35">03</text>
        <text x="0" y="8" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#242424">Live Guidance</text>
        <text x="0" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#777777">Practical Remedies</text>
      </g>
    </g>
  `,
});

// 10. Pricing Transparency Plate
createLuxuryPlate({
  filename: "pricing-transparency-rate.svg",
  title: "Transparent ₹20 Per Minute Consultation Rate",
  subtitle: "Pay Only for the Duration You Choose • 5 Mins (₹100) to 60 Mins (₹1,200)",
  sanskrit: "॥ पारदर्शी एवं सुलभ परामर्श शुल्क ॥",
  theme: "gold",
  centerArt: () => `
    <g transform="translate(600, 415)">
      <circle cx="0" cy="0" r="195" fill="#FFFFFF" stroke="#A77B35" stroke-width="2.5" />
      <circle cx="0" cy="0" r="172" fill="#FAF8F3" stroke="#C6A15B" stroke-width="1.2" stroke-dasharray="5 5" />
      <text x="0" y="-55" text-anchor="middle" font-family="Georgia, serif" font-size="14" letter-spacing="3" fill="#A77B35" font-weight="bold">STANDARD RATE</text>
      <text x="0" y="15" text-anchor="middle" font-family="Georgia, serif" font-size="72" font-weight="bold" fill="#242424">₹20</text>
      <text x="0" y="52" text-anchor="middle" font-family="Georgia, serif" font-size="20" fill="#A77B35">Per Minute</text>
      <text x="0" y="95" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" fill="#777777">10 AM – 6 PM • Monday to Sunday</text>
    </g>
  `,
});

// 11. Consultation Modes (Voice, Video, WhatsApp)
createLuxuryPlate({
  filename: "consultation-modes-trio.svg",
  title: "Three Convenient Consultation Modes",
  subtitle: "Direct Voice Call • 1-on-1 Video Consultation • WhatsApp Session",
  sanskrit: "॥ दूरभाष • वीडियो • व्हाट्सएप परामर्श ॥",
  theme: "ivory",
  centerArt: () => `
    <g transform="translate(600, 415)">
      <g transform="translate(-250, 0)">
        <rect x="-105" y="-110" width="210" height="220" rx="18" fill="#FFFFFF" stroke="#C6A15B" stroke-width="1.8" />
        <circle cx="0" cy="-30" r="38" fill="#FAF8F3" stroke="#A77B35" stroke-width="1.8" />
        <text x="0" y="-22" text-anchor="middle" font-family="Georgia, serif" font-size="22" font-weight="bold" fill="#A77B35">CALL</text>
        <text x="0" y="42" text-anchor="middle" font-family="Georgia, serif" font-size="18" font-weight="bold" fill="#242424">Voice Call</text>
        <text x="0" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#777777">Focused Audio Clarity</text>
      </g>
      <g transform="translate(0, 0)">
        <rect x="-105" y="-110" width="210" height="220" rx="18" fill="#FFFFFF" stroke="#A77B35" stroke-width="2.2" />
        <circle cx="0" cy="-30" r="38" fill="#FAF8F3" stroke="#A77B35" stroke-width="1.8" />
        <text x="0" y="-22" text-anchor="middle" font-family="Georgia, serif" font-size="20" font-weight="bold" fill="#A77B35">VIDEO</text>
        <text x="0" y="42" text-anchor="middle" font-family="Georgia, serif" font-size="18" font-weight="bold" fill="#242424">Video Call</text>
        <text x="0" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#777777">Face-to-Face &amp; Chart Share</text>
      </g>
      <g transform="translate(250, 0)">
        <rect x="-105" y="-110" width="210" height="220" rx="18" fill="#FFFFFF" stroke="#C6A15B" stroke-width="1.8" />
        <circle cx="0" cy="-30" r="38" fill="#FAF8F3" stroke="#A77B35" stroke-width="1.8" />
        <text x="0" y="-22" text-anchor="middle" font-family="Georgia, serif" font-size="20" font-weight="bold" fill="#A77B35">CHAT</text>
        <text x="0" y="42" text-anchor="middle" font-family="Georgia, serif" font-size="18" font-weight="bold" fill="#242424">WhatsApp</text>
        <text x="0" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#777777">Share Palm &amp; Birth Details</text>
      </g>
    </g>
  `,
});

// 12. 7 Life Challenges Plates
const lifeTopics = [
  {
    file: "topic-health-wellbeing.svg",
    title: "Health & Vitality Astrological Insights",
    sub: "6th, 8th & Lagna House Planetary Analysis for Wellness & Peace of Mind",
    sanskrit: "॥ आरोग्य एवं आयुष्य विचार ॥",
    symbol: "AYUR",
  },
  {
    file: "topic-financial-stability.svg",
    title: "Financial Matters & Wealth Alignment",
    sub: "2nd House (Dhana) & 11th House (Labha) Dasha & Transit Guidance",
    sanskrit: "॥ धन एवं समृद्धि योग ॥",
    symbol: "DHANA",
  },
  {
    file: "topic-family-harmony.svg",
    title: "Family Matters & Domestic Peace",
    sub: "4th House (Sukha) Remedies for Generational Harmony & Understanding",
    sanskrit: "॥ कौटुंबिक शांति एवं सुख ॥",
    symbol: "KUTUMBA",
  },
  {
    file: "topic-love-relationships.svg",
    title: "Love, Compatibility & Emotional Clarity",
    sub: "5th & 7th House Synastry, Venus-Moon Alignment & Relationship Harmony",
    sanskrit: "॥ प्रेम एवं संबंध सामंजस्य ॥",
    symbol: "PREMA",
  },
  {
    file: "topic-career-direction.svg",
    title: "Career Progression & Crucial Transitions",
    sub: "Dashamsha (D-10) & 10th House Karma Analysis for Professional Clarity",
    sanskrit: "॥ कर्म एवं आजीविका उन्नति ॥",
    symbol: "KARMA",
  },
  {
    file: "topic-business-expansion.svg",
    title: "Business Growth, Partnerships & Timing",
    sub: "Muhurta, Mercury-Jupiter Yoga & Strategic Commercial Decision Guidance",
    sanskrit: "॥ व्यापार वृद्धि एवं मुहूर्त ॥",
    symbol: "VYAPARA",
  },
  {
    file: "topic-marriage-kundli-milan.svg",
    title: "Marriage Timing, Gun Milan & Compatibility",
    sub: "Ashtakoota Matching, Manglik Analysis & 7th House Marital Harmony",
    sanskrit: "॥ विवाह एवं कुंडली मिलान ॥",
    symbol: "VIVAHA",
  },
];

lifeTopics.forEach((t, idx) => {
  createLuxuryPlate({
    filename: t.file,
    title: t.title,
    subtitle: t.sub,
    sanskrit: t.sanskrit,
    theme: idx % 2 === 0 ? "ivory" : "warm",
    centerArt: () => `
      <g transform="translate(600, 415)">
        <polygon points="0,-190 165,-95 165,95 0,190 -165,95 -165,-95" fill="#FFFFFF" stroke="#C6A15B" stroke-width="2" />
        <polygon points="0,-155 134,-77 134,77 0,155 -134,77 -134,-77" fill="#FAF8F3" stroke="#A77B35" stroke-width="1.2" />
        <circle cx="0" cy="0" r="88" fill="#FFFFFF" stroke="#C6A15B" stroke-width="1.8" />
        <text x="0" y="-12" text-anchor="middle" font-family="Georgia, serif" font-size="22" letter-spacing="3" font-weight="bold" fill="#A77B35">${esc(t.symbol)}</text>
        <text x="0" y="18" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#777777">Vedic Guidance</text>
      </g>
    `,
  });
});

// 13. Customer Review & 5.0 Star Editorial Cards
const reviewers = [
  { file: "review-card-rahul.svg", name: "Rahul Sharma", topic: "Career Guidance & Decision-Making", initials: "RS" },
  { file: "review-card-priya.svg", name: "Priya Verma", topic: "Relationship Consultation & Remedies", initials: "PV" },
  { file: "review-card-amit.svg", name: "Amit Kumar", topic: "Detailed Kundli Analysis & Explanations", initials: "AK" },
  { file: "review-card-sneha.svg", name: "Sneha Patel", topic: "Video Consultation: Marriage & Family", initials: "SP" },
  { file: "review-card-vikram.svg", name: "Vikram Singh", topic: "Predictions & Practical Remedies", initials: "VS" },
];

reviewers.forEach((r) => {
  createLuxuryPlate({
    filename: r.file,
    title: `${r.name} — 5.0 ★ Profile Rating`,
    subtitle: `${r.topic} (Sample Testimonial Display)`,
    sanskrit: "★★★★★ • SAMPLE CLIENT FEEDBACK ILLUSTRATION",
    theme: "ivory",
    centerArt: () => `
      <g transform="translate(600, 415)">
        <circle cx="0" cy="0" r="145" fill="#FFFFFF" stroke="#C6A15B" stroke-width="2.2" />
        <circle cx="0" cy="0" r="118" fill="#FAF8F3" stroke="#A77B35" stroke-width="1.4" />
        <text x="0" y="12" text-anchor="middle" font-family="Georgia, serif" font-size="52" font-weight="bold" fill="#A77B35">${esc(r.initials)}</text>
        <text x="0" y="68" text-anchor="middle" font-family="Georgia, serif" font-size="20" fill="#C6A15B">★ ★ ★ ★ ★</text>
      </g>
    `,
  });
});

// 14. Availability Schedule & Krishna Emblem
createLuxuryPlate({
  filename: "availability-schedule-calendar.svg",
  title: "Daily Consultation Hours: 10:00 AM – 6:00 PM",
  subtitle: "Open Monday to Sunday • Prior Appointment Recommended via Booking Request or WhatsApp",
  sanskrit: "॥ सोमवार से रविवार • प्रातः १० से सायं ६ बजे तक ॥",
  theme: "warm",
  centerArt: () => `
    <g transform="translate(600, 415)">
      <rect x="-230" y="-145" width="460" height="290" rx="18" fill="#FFFFFF" stroke="#A77B35" stroke-width="2.2" />
      <rect x="-230" y="-145" width="460" height="58" rx="18" fill="#FAF8F3" stroke="#C6A15B" stroke-width="1.5" />
      <text x="0" y="-110" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" letter-spacing="2" fill="#A77B35">WEEKLY CONSULTATION SCHEDULE</text>
      <text x="0" y="-25" text-anchor="middle" font-family="Georgia, serif" font-size="38" font-weight="bold" fill="#242424">10:00 AM – 6:00 PM</text>
      <text x="0" y="20" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#A77B35">Monday • Tuesday • Wednesday • Thursday • Friday • Saturday • Sunday</text>
      <text x="0" y="75" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" fill="#777777">Indian Standard Time (IST) • Voice, Video &amp; WhatsApp</text>
    </g>
  `,
});

createLuxuryPlate({
  filename: "krishna-peacock-flute-emblem.svg",
  title: "Divine Grace & Sacred Vedic Wisdom",
  subtitle: "Guided by Timeless Dharma & Compassionate Counsel for Modern Life",
  sanskrit: "॥ योगः कर्मसु कौशलम् • श्री कृष्ण शरणम् ॥",
  theme: "gold",
  centerArt: () => `
    <g transform="translate(600, 415)">
      <circle cx="0" cy="0" r="185" fill="#FFFFFF" stroke="#A77B35" stroke-width="2.2" />
      <g transform="rotate(-18)">
        <rect x="-155" y="-12" width="310" height="24" rx="12" fill="url(#goldGrad)" stroke="#865E1F" stroke-width="1.5" />
        <circle cx="-85" cy="0" r="5" fill="#242424" />
        <circle cx="-45" cy="0" r="5" fill="#242424" />
        <circle cx="-5" cy="0" r="5" fill="#242424" />
        <circle cx="35" cy="0" r="5" fill="#242424" />
        <circle cx="75" cy="0" r="5" fill="#242424" />
        <circle cx="115" cy="0" r="5" fill="#242424" />
      </g>
      <g transform="translate(15, -45) rotate(15)">
        <ellipse cx="0" cy="-35" rx="46" ry="68" fill="#FAF8F3" stroke="#C6A15B" stroke-width="2" />
        <ellipse cx="0" cy="-42" rx="28" ry="42" fill="#DFC38D" opacity="0.65" />
        <ellipse cx="0" cy="-48" rx="15" ry="22" fill="#A77B35" />
        <path d="M0,35 L0,-95" stroke="#A77B35" stroke-width="2" />
      </g>
    </g>
  `,
});

// 15. Extra Bespoke Plates
const extraPlates = [
  {
    filename: "palmistry-hand-closeup-art.svg",
    title: "Traditional Hasta Samudrika Hand Analysis",
    subtitle: "Detailed Study of Major & Minor Lines, Planetary Mounts & Finger Proportions",
    sanskrit: "॥ सामुद्रिक शास्त्र • हस्तरेखा दर्शन ॥",
    theme: "warm",
    symbol: "HASTA REKHA",
    detail: "Life • Head • Heart • Fate • Sun",
  },
  {
    filename: "palmistry-mounts-guide.svg",
    title: "The Seven Planetary Mounts of the Palm",
    subtitle: "Jupiter • Saturn • Apollo (Sun) • Mercury • Mars • Luna • Venus",
    sanskrit: "॥ सप्त ग्रह पर्वत एवं करतल परीक्षण ॥",
    theme: "ivory",
    symbol: "GRAHA PARVATA",
    detail: "Strengths • Temperament • Potential",
  },
  {
    filename: "palmistry-consultation-session.svg",
    title: "1-on-1 Personal Palm Reading Session",
    subtitle: "High-Resolution Hand Inspection via Live Video or Clear Photograph Submission",
    sanskrit: "॥ प्रत्यक्ष एवं ऑनलाइन हस्त परीक्षण ॥",
    theme: "gold",
    symbol: "PALM CONSULT",
    detail: "Both Left & Right Hands Analyzed",
  },
  {
    filename: "vedic-scriptures-manuscripts.svg",
    title: "Classical Jyotish Shastra & Brihat Parashara",
    subtitle: "Rooted in Authentic Parashari, Jaimini & Traditional Samhita Principles",
    sanskrit: "॥ बृहत् पराशर होरा शास्त्र परंपरा ॥",
    theme: "warm",
    symbol: "JYOTISH SHASTRA",
    detail: "9+ Years of Dedicated Study & Practice",
  },
  {
    filename: "indian-couple-vivaha-harmony.svg",
    title: "Vivaha Sanskar & Marital Compatibility",
    subtitle: "36-Guna Ashtakoota Matching, Manglik Evaluation & Long-Term Harmony",
    sanskrit: "॥ अष्टकूट गुण मिलान एवं दाम्पत्य सुख ॥",
    theme: "ivory",
    symbol: "ASHTAKOOTA 36",
    detail: "Varna • Vashya • Tara • Yoni • Graha Maitri • Gana • Bhakoot • Nadi",
  },
  {
    filename: "indian-temple-sanctuary-art.svg",
    title: "Sacred Remedies & Spiritual Equilibrium",
    subtitle: "Practical Vedic Upayas, Mantra Guidance, Fasting & Ethical Lifestyle Alignment",
    sanskrit: "॥ सात्त्विक वैदिक उपाय एवं शांति विधान ॥",
    theme: "gold",
    symbol: "VEDIC UPAYA",
    detail: "Non-Superstitious • Practical • Ethical",
  },
  {
    filename: "vastu-commercial-property.svg",
    title: "Commercial, Retail & Industrial Vastu Shastra",
    subtitle: "Optimizing Entrance Flow, Cash Counter, Leadership Cabin & Production Zones",
    sanskrit: "॥ व्यापारिक एवं औद्योगिक वास्तु विन्यास ॥",
    theme: "ivory",
    symbol: "COMMERCIAL VASTU",
    detail: "Showrooms • Clinics • Factories • Warehouses",
  },
  {
    filename: "vastu-remedies-without-demolition.svg",
    title: "Non-Structural Vastu Balancing & Alignment",
    subtitle: "Directional Corrections Through Placement, Color, Element Balancing & Usage",
    sanskrit: "॥ बिना तोड़-फोड़ वास्तु दोष निवारण ॥",
    theme: "warm",
    symbol: "PANCHA TATTVA",
    detail: "Earth • Water • Fire • Air • Space",
  },
  {
    filename: "numerology-mulank-bhagyank.svg",
    title: "Mulank (Psychic Number) & Bhagyank (Destiny Number)",
    subtitle: "Harmonizing Your Birth Date Vibrations with Career, Name & Important Dates",
    sanskrit: "॥ मूलांक एवं भाग्यांक समन्वय ॥",
    theme: "ivory",
    symbol: "1 • 3 • 5 • 6 • 9",
    detail: "Personal Year Cycles & Auspicious Numbers",
  },
  {
    filename: "numerology-name-correction.svg",
    title: "Phonetic & Chaldean-Vedic Name Resonance",
    subtitle: "Evaluating Personal & Business Brand Names for Planetary Compatibility",
    sanskrit: "॥ नामांक एवं ध्वनि तरंग विश्लेषण ॥",
    theme: "warm",
    symbol: "NAMANK",
    detail: "Business Names • Newborns • Personal Signatures",
  },
  {
    filename: "prashna-career-decision.svg",
    title: "Prashna Kundali for Career & Job Decisions",
    subtitle: "Immediate Horary Clarity on Job Offers, Transfers, Promotions & Role Changes",
    sanskrit: "॥ आजीविका एवं पदोन्नति प्रश्न विचार ॥",
    theme: "ivory",
    symbol: "10TH PRASHNA",
    detail: "Arudha Lagna & Karyesha Analysis",
  },
  {
    filename: "prashna-business-investment.svg",
    title: "Prashna Insights for Business & Agreements",
    subtitle: "Evaluating Partnerships, Commercial Timing & Strategic Negotiations",
    sanskrit: "॥ व्यापार एवं अनुबंध प्रश्न कुंडली ॥",
    theme: "gold",
    symbol: "7TH & 11TH BHAVA",
    detail: "Immediate Question-Based Guidance",
  },
  {
    filename: "prashna-relationship-clarity.svg",
    title: "Prashna Guidance for Relationships & Family",
    subtitle: "Compassionate Answers When Birth Time Is Unknown or Uncertain",
    sanskrit: "॥ संबंध एवं पारिवारिक प्रश्न समाधान ॥",
    theme: "warm",
    symbol: "CHANDRA LAGNA",
    detail: "No Exact Birth Time Required",
  },
  {
    filename: "krishna-sudarshana-blessing.svg",
    title: "Guided by the Eternal Wisdom of Bhagavad Gita",
    subtitle: "Clarity in Action, Steadiness in Mind, and Dharma-Centered Decision Making",
    sanskrit: "॥ कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ॥",
    theme: "dark",
    symbol: "SUDARSHANA",
    detail: "Sacred Vedic Counsel • Dr. Amit Deshmukh",
  },
  {
    filename: "whatsapp-instant-connect.svg",
    title: "Direct WhatsApp Consultation & Scheduling",
    subtitle: "Share Your Birth Details, Kundli, or Palm Photographs Securely Ahead of Your Call",
    sanskrit: "॥ त्वरित व्हाट्सएप संवाद एवं समय निर्धारण ॥",
    theme: "ivory",
    symbol: "WHATSAPP",
    detail: "Available Daily • 10:00 AM to 6:00 PM IST",
  },
  {
    filename: "faq-sacred-scroll.svg",
    title: "Frequently Asked Questions & Preparation Guide",
    subtitle: "Everything You Need to Know Before Booking Your ₹20/Minute Session",
    sanskrit: "॥ परामर्श संबंधी सामान्य जिज्ञासाएं ॥",
    theme: "warm",
    symbol: "JYOTISH FAQ",
    detail: "Transparent • Confidential • Practical",
  },
];

extraPlates.forEach((item) => {
  createLuxuryPlate({
    filename: item.filename,
    title: item.title,
    subtitle: item.subtitle,
    sanskrit: item.sanskrit,
    theme: item.theme,
    centerArt: (p) => `
      <g transform="translate(600, 415)">
        <circle cx="0" cy="0" r="195" fill="${p.cardBg}" stroke="url(#goldGrad)" stroke-width="2.2" />
        <polygon points="0,-165 143,-82 143,82 0,165 -143,82 -143,-82" fill="none" stroke="url(#goldGrad)" stroke-width="1.4" />
        <polygon points="0,165 143,82 143,-82 0,-165 -143,-82 -143,82" fill="none" stroke="url(#goldGrad)" stroke-width="1" stroke-dasharray="4 4" />
        <rect x="-135" y="-54" width="270" height="108" rx="16" fill="${p.bg1}" stroke="url(#goldGrad)" stroke-width="1.8" />
        <text x="0" y="-8" text-anchor="middle" font-family="Georgia, serif" font-size="22" letter-spacing="2.5" font-weight="bold" fill="${p.gold2}">${esc(item.symbol)}</text>
        <text x="0" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" fill="${p.textSub}">${esc(item.detail)}</text>
      </g>
    `,
  });
});

console.log("Regenerated 100% XML-valid luxury SVG art plates in public/images/art/");
