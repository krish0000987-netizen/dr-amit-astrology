export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  sanskritName: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  cardImage: string;
  diagramImage: string;
  keyHighlights: string[];
  idealFor: string[];
}

export interface LifeTopicItem {
  id: string;
  title: string;
  sanskritTag: string;
  description: string;
  astrologicalFocus: string;
  image: string;
  secondaryArt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  quote: string;
  serviceTag: string;
  rating: number;
  artImage: string;
  locationLabel: string;
}

export const BRAND_INFO = {
  businessName: "Dr. Amit Deshmukh Astrology Consultation",
  shortName: "Dr. Amit Deshmukh",
  experienceYears: 9,
  ratePerMinute: 20,
  currencySymbol: "₹",
  rating: "5.0",
  availabilityDays: "Monday to Sunday",
  availabilityHours: "10 AM – 6 PM",
  availabilityFull: "Monday to Sunday: 10:00 AM – 6:00 PM IST",
  languages: ["Hindi", "English", "Marathi", "Kannada"],
  languageDetails: [
    {
      name: "Hindi",
      native: "हिन्दी",
      description: "Detailed Kundli & Prashna explanations in clear, traditional Hindi.",
    },
    {
      name: "English",
      native: "English",
      description: "Structured, modern, and practical astrological counsel in English.",
    },
    {
      name: "Marathi",
      native: "मराठी",
      description: "Authentic Vedic & Panchang consultation in fluent native Marathi.",
    },
    {
      name: "Kannada",
      native: "ಕನ್ನಡ",
      description: "Warm, personalized astrological guidance for Kannada-speaking clients.",
    },
  ],
  contactPlaceholders: {
    phoneDisplay: "+91 [Phone Number Placeholder]",
    phoneHref: "tel:+910000000000",
    whatsappDisplay: "+91 [WhatsApp Number Placeholder]",
    whatsappHref:
      "https://wa.me/?text=Namaste%20Dr.%20Amit%20Deshmukh%2C%20I%20would%20like%20to%20request%20an%20astrology%20consultation%20(%E2%82%B920%2Fmin).",
    emailDisplay: "consult@dramitdeshmukh-placeholder.com",
    emailHref: "mailto:consult@dramitdeshmukh-placeholder.com",
    addressNote:
      "Consultations available across India & internationally via Voice Call, Video Call, and WhatsApp. (Physical chamber address & Google Maps will be displayed once verified clinic address is supplied.)",
  },
};

export const HERO_SLIDES = [
  {
    id: "vrindavan-flute",
    image: "/images/ai/krishna-vrindavan-flute.jpg",
    alt: "Lord Krishna playing golden bansuri flute in sacred Vrindavan with serene golden lighting",
    caption: "Sacred Vrindavan • Divine Harmony",
    subheadline: "Find Clarity in Life Through the Wisdom of Astrology",
  },
  {
    id: "golden-aura",
    image: "/images/ai/krishna-golden-aura.jpg",
    alt: "Lord Krishna surrounded by a radiant golden divine lotus mandala aura",
    caption: "Sudarshana Tejas • Eternal Guidance",
    subheadline: "Your Stars, Your Journey, Your Guidance.",
  },
  {
    id: "kadamba-tree",
    image: "/images/ai/krishna-kadamba-tree.jpg",
    alt: "Lord Krishna beneath an ancient blooming Kadamba tree beside the Yamuna river at golden hour",
    caption: "Kadamba Sanctuary • Timeless Peace",
    subheadline: "Discover the Path Written in Your Stars.",
  },
  {
    id: "celestial-cosmos",
    image: "/images/ai/krishna-celestial-cosmos.jpg",
    alt: "Lord Krishna in a peaceful celestial Vedic cosmos with golden zodiac constellations",
    caption: "Vishwaroopa Cosmos • Planetary Order",
    subheadline: "Ancient Vedic Wisdom for Modern Life.",
  },
  {
    id: "divine-grace",
    image: "/images/ai/krishna-divine-grace.jpg",
    alt: "Artistic composition of Lord Krishna's golden flute, peacock feather, and lotus in warm light",
    caption: "Morpankh & Bansuri • Sacred Counsel",
    subheadline: "Find Clarity in Life Through the Wisdom of Astrology",
  },
];

export const PRICING_TIERS = [
  {
    minutes: 5,
    price: 100,
    title: "Quick Clarity Session",
    idealFor: "Single specific Prashna question or auspicious timing check",
    popular: false,
  },
  {
    minutes: 10,
    price: 200,
    title: "Focused Topic Review",
    idealFor: "One primary concern in career, relationship, or numerology",
    popular: false,
  },
  {
    minutes: 15,
    price: 300,
    title: "Standard Kundli Reading",
    idealFor: "Birth chart overview, current Mahadasha & practical remedies",
    popular: true,
  },
  {
    minutes: 20,
    price: 400,
    title: "Comprehensive Analysis",
    idealFor: "Detailed career + marriage or business decision consultation",
    popular: false,
  },
  {
    minutes: 30,
    price: 600,
    title: "Deep-Dive Consultation",
    idealFor: "Complete Janam Kundli, divisional charts (D-9/D-10), or Vastu review",
    popular: true,
  },
  {
    minutes: 60,
    price: 1200,
    priceFormatted: "1,200",
    title: "Complete Family / Holistic Session",
    idealFor: "Multiple family charts, detailed Kundli Milan, or full property Vastu",
    popular: false,
  },
];

export const PRIMARY_SERVICES: ServiceItem[] = [
  {
    id: "vedic-astrology",
    slug: "/vedic-astrology",
    title: "Vedic Astrology",
    sanskritName: "वैदिक जन्म कुंडली ज्योतिष",
    shortDescription: "Traditional birth-chart analysis and guidance.",
    fullDescription:
      "In-depth examination of your natal Janam Kundli, planetary placements across the 12 Bhavas, Nakshatra alignments, Vimshottari Mahadasha cycles, and Gochara transits to illuminate life decisions with clarity.",
    heroImage: "/images/ai/vedic-kundli-scroll.jpg",
    cardImage: "/images/ai/vedic-kundli-scroll.jpg",
    diagramImage: "/images/photos/kundli-birth-chart-diagram.jpg",
    keyHighlights: [
      "Lagna & 12-House (Bhava) Structural Interpretation",
      "Vimshottari Dasha & Antardasha Timing Analysis",
      "Divisional Charts: Navamsha (D-9) & Dashamsha (D-10)",
      "Practical, Non-Superstitious Vedic Remedies (Upayas)",
    ],
    idealFor: [
      "Career direction & professional milestones",
      "Marriage compatibility (Kundli Milan) & relationship timing",
      "Financial cycles, wealth preservation & family harmony",
    ],
  },
  {
    id: "prashna-kundali",
    slug: "/prashna-kundali",
    title: "Prashna Kundali",
    sanskritName: "प्रश्न कुंडली एवं तात्कालिक फलित",
    shortDescription: "Question-based astrological guidance.",
    fullDescription:
      "When you face an urgent crossroads or do not possess exact birth-time records, Prashna Kundali casts a horary chart for the exact moment your question is asked, offering focused, actionable answers.",
    heroImage: "/images/ai/prashna-consultation.jpg",
    cardImage: "/images/ai/prashna-consultation.jpg",
    diagramImage: "/images/photos/prashna-horary-wheel.jpg",
    keyHighlights: [
      "No Birth Date or Exact Birth Time Required",
      "Immediate Horary Ascendant (Prashna Lagna) Calculation",
      "Karya Siddhi (Success of Undertaking) Evaluation",
      "Clear Yes/No Direction & Timing Indicators",
    ],
    idealFor: [
      "Evaluating a specific job offer or transfer decision",
      "Commercial negotiations, partnerships & investments",
      "Resolving immediate personal or family uncertainties",
    ],
  },
  {
    id: "numerology",
    slug: "/numerology",
    title: "Numerology",
    sanskritName: "वैदिक अंक ज्योतिष",
    shortDescription: "Number-based interpretations and predictions.",
    fullDescription:
      "Explore the mathematical harmony between your birth date and name vibrations. Understand your Mulank (Psychic Number), Bhagyank (Destiny Number), personal year forecasts, and favorable numerical alignments.",
    heroImage: "/images/ai/numerology-sacred-numbers.jpg",
    cardImage: "/images/ai/numerology-sacred-numbers.jpg",
    diagramImage: "/images/photos/numerology-vedic-matrix.jpg",
    keyHighlights: [
      "Mulank (Life Path) & Bhagyank (Destiny) Calculation",
      "Name Spelling & Phonetic Vibration Assessment",
      "Auspicious Dates, Numbers & Personal Year Cycles",
      "Business & Brand Name Numerical Compatibility",
    ],
    idealFor: [
      "Individuals seeking alignment in personal or brand names",
      "Choosing auspicious dates for launches, registrations, or milestones",
      "Understanding recurring number patterns and life cycles",
    ],
  },
  {
    id: "vastu-consultation",
    slug: "/vastu-consultation",
    title: "Vastu Consultation",
    sanskritName: "वास्तु शास्त्र एवं स्थान संतुलन",
    shortDescription: "Guidance related to Vastu and living spaces.",
    fullDescription:
      "Harmonize your residence, office, or commercial establishment with the five natural elements (Pancha Mahabhuta) and eight cardinal directions. Practical spatial adjustments without unnecessary structural demolition.",
    heroImage: "/images/ai/vastu-luxury-home.jpg",
    cardImage: "/images/ai/vastu-luxury-home.jpg",
    diagramImage: "/images/photos/vastu-compass-mandala.jpg",
    keyHighlights: [
      "8-Direction & Brahmasthan Spatial Energy Audit",
      "Residential Vastu: Entrance, Kitchen, Master Suite & Puja",
      "Office & Commercial Vastu: Seating, Cash Flow & Reception",
      "Non-Demolition Elemental & Placement Remedies",
    ],
    idealFor: [
      "Homeowners planning, buying, or renovating a residence",
      "Corporate offices, clinics, studios & retail spaces",
      "Families seeking greater peace and spatial harmony at home",
    ],
  },
  {
    id: "palm-reading",
    slug: "/palm-reading",
    title: "Palm Reading",
    sanskritName: "हस्तरेखा एवं सामुद्रिक शास्त्र",
    shortDescription: "Palmistry and hand analysis.",
    fullDescription:
      "Rooted in classical Hasta Samudrika Shastra, our palmistry consultations examine the major and minor lines, planetary mounts, finger proportions, and hand texture to reveal innate strengths and life tendencies.",
    heroImage: "/images/photos/palmistry-hand-closeup-art.jpg",
    cardImage: "/images/photos/palmistry-lines-diagram.jpg",
    diagramImage: "/images/photos/palmistry-mounts-guide.jpg",
    keyHighlights: [
      "Heart, Head, Life & Fate Line Structural Reading",
      "Evaluation of the Seven Planetary Mounts on the Palm",
      "Comparison of Inherited Potential vs. Active Effort (Both Hands)",
      "Accessible via High-Resolution Hand Photos & Video Call",
    ],
    idealFor: [
      "Self-discovery of temperament, talents & career inclinations",
      "Clients who prefer visual hand analysis alongside or without Kundli",
      "Understanding vitality, emotional patterns & long-term trajectory",
    ],
  },
];

export const CONSULTATION_TOPICS: LifeTopicItem[] = [
  {
    id: "career-problems",
    title: "Career Problems",
    sanskritTag: "कर्म एवं आजीविका विचार",
    description:
      "Navigate job instability, delayed promotions, workplace friction, or confusion between multiple career paths through 10th-house Karma and Dashamsha analysis.",
    astrologicalFocus: "10th House (Karma Bhava), Saturn-Sun-Mercury alignments & D-10 Chart",
    image: "/images/ai/career-business-growth.jpg",
    secondaryArt: "/images/photos/topic-career-direction.jpg",
  },
  {
    id: "business-growth",
    title: "Business Growth",
    sanskritTag: "व्यापार एवं उद्यम उन्नति",
    description:
      "Evaluate partnership compatibility, expansion timing, capital flow cycles, and commercial Vastu alignment for entrepreneurs and established enterprises.",
    astrologicalFocus: "7th & 11th Houses, Dhana Yogas, Budha-Guru strength & Prashna timing",
    image: "/images/ai/office-vastu-corporate.jpg",
    secondaryArt: "/images/photos/topic-business-expansion.jpg",
  },
  {
    id: "marriage",
    title: "Marriage",
    sanskritTag: "विवाह एवं अष्टकूट मिलान",
    description:
      "Address delays in marriage, comprehensive 36-Guna Ashtakoota Kundli matching, Manglik considerations, and post-marital harmony with balanced guidance.",
    astrologicalFocus: "7th House (Kalatra Bhava), Navamsha (D-9), Venus & Jupiter blessings",
    image: "/images/photos/indian-couple-vivaha-harmony.jpg",
    secondaryArt: "/images/photos/topic-marriage-kundli-milan.jpg",
  },
  {
    id: "love-relationships",
    title: "Love and Relationships",
    sanskritTag: "प्रेम एवं भावनात्मक सामंजस्य",
    description:
      "Gain clarity on emotional compatibility, communication misunderstandings, trust rebuilding, and long-term alignment between partners.",
    astrologicalFocus: "5th & 7th House Synastry, Chandra-Shukra (Moon-Venus) harmony",
    image: "/images/photos/topic-love-relationships.jpg",
    secondaryArt: "/images/photos/prashna-relationship-clarity.jpg",
  },
  {
    id: "financial-matters",
    title: "Financial Matters",
    sanskritTag: "धन, संचय एवं आर्थिक स्थिरता",
    description:
      "Understand periods of financial fluctuation, debt recovery cycles, savings stability, and auspicious timing for major property or financial commitments.",
    astrologicalFocus: "2nd House (Dhana), 11th House (Labha) & Jupiter-Venus Dasha periods",
    image: "/images/photos/topic-financial-stability.jpg",
    secondaryArt: "/images/photos/numerology-mulank-bhagyank.jpg",
  },
  {
    id: "health-concerns",
    title: "Health-Related Concerns",
    sanskritTag: "आरोग्य एवं मानसिक शांति",
    description:
      "Explore astrological perspectives on vitality, stress periods, and supportive Vedic lifestyle and spiritual remedies alongside your regular medical care.",
    astrologicalFocus: "Lagna (Ascendant) vitality, 6th/8th House transits & Chandra Bala",
    image: "/images/photos/topic-health-wellbeing.jpg",
    secondaryArt: "/images/photos/indian-temple-sanctuary-art.jpg",
  },
  {
    id: "family-matters",
    title: "Family Matters",
    sanskritTag: "कौटुंबिक सुख एवं गृह शांति",
    description:
      "Foster peace within joint or nuclear households, address generational misunderstandings, and create a harmonious domestic environment through Jyotish and Vastu.",
    astrologicalFocus: "2nd & 4th House (Sukha Bhava), Home Vastu & Graha Shanti Upayas",
    image: "/images/ai/vastu-luxury-home.jpg",
    secondaryArt: "/images/photos/topic-family-harmony.jpg",
  },
];

export const SAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    quote: "Appreciated career guidance and help with decision-making.",
    serviceTag: "Career & Decision-Making Consultation",
    rating: 5.0,
    artImage: "/images/photos/review-card-rahul.jpg",
    locationLabel: "Sample Client Profile",
  },
  {
    id: "priya-verma",
    name: "Priya Verma",
    quote: "Appreciated relationship consultation and suggested remedies.",
    serviceTag: "Relationship & Vedic Remedies",
    rating: 5.0,
    artImage: "/images/photos/review-card-priya.jpg",
    locationLabel: "Sample Client Profile",
  },
  {
    id: "amit-kumar",
    name: "Amit Kumar",
    quote: "Appreciated detailed Kundli analysis and explanations.",
    serviceTag: "Vedic Janam Kundli Analysis",
    rating: 5.0,
    artImage: "/images/photos/review-card-amit.jpg",
    locationLabel: "Sample Client Profile",
  },
  {
    id: "sneha-patel",
    name: "Sneha Patel",
    quote: "Appreciated video consultation regarding marriage and family.",
    serviceTag: "Video Consultation • Marriage & Family",
    rating: 5.0,
    artImage: "/images/photos/review-card-sneha.jpg",
    locationLabel: "Sample Client Profile",
  },
  {
    id: "vikram-singh",
    name: "Vikram Singh",
    quote: "Appreciated predictions and practical remedies.",
    serviceTag: "Astrological Predictions & Remedies",
    rating: 5.0,
    artImage: "/images/photos/review-card-vikram.jpg",
    locationLabel: "Sample Client Profile",
  },
];
