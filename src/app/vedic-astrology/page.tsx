import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  Compass,
  MessageCircle,
  Sparkles,
  Sun,
} from "lucide-react";
import InteractiveFAQ from "@/components/InteractiveFAQ";
import DivineKrishnaCTA from "@/components/DivineKrishnaCTA";
import { BRAND_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Vedic Astrology Consultation – Janam Kundli & Dasha Analysis",
  description:
    "Discover the Wisdom of Vedic Astrology with Dr. Amit Deshmukh. Birth chart analysis, planetary positions, career, marriage, and personal life guidance at ₹20/minute.",
};

const VEDIC_FAQS = [
  {
    question: "What birth details are needed for a Vedic Astrology consultation?",
    answer:
      "For a complete Janam Kundli reading, please keep your Date of Birth, Exact Time of Birth, and Place (City/Town) of Birth ready. If your exact birth time is unknown, Dr. Amit Deshmukh can assist you through Prashna Kundali.",
  },
  {
    question: "How long does a thorough Janam Kundli reading take?",
    answer:
      "A focused review of one primary area (such as career or marriage timing) typically takes 15 to 20 minutes (₹300–₹400 at ₹20/min). A comprehensive reading covering multiple life areas, divisional charts, and remedies usually takes 30 minutes (₹600).",
  },
  {
    question: "Does Vedic Astrology include Kundli Milan (marriage matching)?",
    answer:
      "Yes. Dr. Amit Deshmukh evaluates 36-Guna Ashtakoota compatibility, Manglik considerations, 7th-house strength, Navamsha (D-9) charts, and long-term Dasha harmony for prospective partners.",
  },
  {
    question: "What kind of remedies are recommended?",
    answer:
      "Remedies focus on traditional, practical Vedic Upayas—such as specific mantras, charitable disciplines, fasting days, and lifestyle alignment—tailored to your chart without fear-mongering.",
  },
];

export default function VedicAstrologyPage() {
  return (
    <div className="bg-white pt-24">
      {/* SECTION 1: Hero Section (Traditional Kundli Chart + Lord Krishna Spiritual Background) */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F3] to-white border-b border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/50">
                <Sparkles className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  JYOTISH SHASTRA • JANAM KUNDLI ANALYSIS
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#242424] leading-[1.14]">
                Discover the Wisdom of Vedic Astrology
              </h1>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                Rooted in ancient Sanskrit Jyotish traditions, Vedic Astrology decodes the celestial blueprint at the exact moment of your birth—illuminating your strengths, planetary cycles (Mahadashas), and practical remedies for career, business, marriage, and family life.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/pricing?service=Vedic%20Astrology#booking-form"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white font-semibold text-sm shadow-lg hover:brightness-105 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Vedic Consultation (₹20/Min)</span>
                </Link>
                <a
                  href={BRAND_INFO.contactPlaceholders.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-[#C6A15B] text-[#A77B35] font-semibold text-sm hover:bg-[#FAF8F3] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>

            {/* Dual Visual Composition: Kundli Scroll + Lord Krishna Celestial Cosmos */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-7 rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 shadow-luxury aspect-[4/5] relative">
                <img
                  src="/images/ai/krishna-celestial-cosmos.jpg"
                  alt="Lord Krishna in a celestial Vedic cosmos with zodiac constellations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <p className="font-serif text-sm text-white">
                    Divine Cosmic Order • 12 Rashis &amp; 27 Nakshatras
                  </p>
                </div>
              </div>

              <div className="sm:col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/45 shadow-card aspect-[4/3]">
                  <img
                    src="/images/ai/vedic-kundli-scroll.jpg"
                    alt="Traditional hand-drawn Vedic Janam Kundli parchment scroll"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/45 shadow-card aspect-[4/3] bg-[#FAF8F3]">
                  <img
                    src="/images/photos/kundli-birth-chart-diagram.jpg"
                    alt="12-House North Indian Kundli Chart"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What is Vedic Astrology? (with Vedic Books & Manuscripts Visual) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#C6A15B]/45 shadow-card bg-[#FAF8F3]">
              <img
                src="/images/photos/vedic-scriptures-manuscripts.jpg"
                alt="Classical Vedic Astrology Books and Brihat Parashara Hora Shastra"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                01 • WHAT IS VEDIC ASTROLOGY?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                The Sacred Science of Light (Jyotish Shastra)
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                In Sanskrit, <em>Jyotish</em> translates to &ldquo;the science of light.&rdquo; Unlike general sun-sign columns, authentic Vedic Astrology uses the astronomical sidereal zodiac (Nirayana system) to map the exact degree of the Ascendant (Lagna), Moon (Chandra), and planets at your birth.
              </p>
              <p className="text-base text-[#555555] leading-relaxed">
                With 9 years of experience, Dr. Amit Deshmukh interprets how your natal potentials interact with ongoing planetary periods (Vimshottari Mahadasha) and transits (Gochara) to help you make well-timed decisions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                {[
                  { label: "12 Bhavas", desc: "Houses governing every sphere of life" },
                  { label: "9 Grahas", desc: "Planetary forces & karmic indicators" },
                  { label: "27 Nakshatras", desc: "Lunar mansions revealing subtle mind patterns" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="p-4 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/35"
                  >
                    <p className="font-serif text-lg font-bold text-[#A77B35]">
                      {b.label}
                    </p>
                    <p className="text-xs text-[#777777] mt-1">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Birth Chart Analysis (Detailed Kundli Illustration + 12 Houses Guide) */}
      <section className="py-20 bg-[#FAF8F3] border-y border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                02 • BIRTH CHART ANALYSIS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Comprehensive Janam Kundli &amp; Divisional Chart Reading
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                Your Janam Kundli is divided into 12 Bhavas (houses), beginning from the Lagna (1st House). Dr. Amit Deshmukh examines house lordships, planetary conjunctions, aspects (Drishti), and key Yogas alongside divisional charts such as Navamsha (D-9) and Dashamsha (D-10).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "1st House (Lagna): Vitality, character & selfhood",
                  "2nd & 11th Houses: Wealth, family & financial gains",
                  "4th House (Sukha): Home, property & peace of mind",
                  "5th House (Putra): Education, intellect & children",
                  "7th House (Kalatra): Marriage, spouse & partnerships",
                  "10th House (Karma): Career, profession & status",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-3 rounded-xl bg-white border border-[#C6A15B]/30 text-xs sm:text-sm font-medium text-[#242424] flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A77B35] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 bg-white shadow-luxury">
                <img
                  src="/images/photos/kundli-birth-chart-diagram.jpg"
                  alt="Detailed 12-House North Indian Vedic Janam Kundli Chart"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Understanding Planetary Positions (Navagraha Solar & Planetary Artwork) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 shadow-luxury">
                <img
                  src="/images/photos/navagraha-planetary-cosmos.jpg"
                  alt="Navagraha Nine Planets Celestial Alignment Artwork"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                03 • UNDERSTANDING PLANETARY POSITIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                How the Nine Grahas Shape Timing &amp; Life Experiences
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                Each of the nine Vedic Grahas—Surya (Sun), Chandra (Moon), Mangala (Mars), Budha (Mercury), Brihaspati (Jupiter), Shukra (Venus), Shani (Saturn), Rahu, and Ketu—governs distinct facets of human life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { g: "Surya & Chandra", desc: "Soul purpose, authority, emotional steadiness & mental peace" },
                  { g: "Mangala & Budha", desc: "Initiative, property, analytical intellect & business acumen" },
                  { g: "Brihaspati & Shukra", desc: "Wisdom, marriage harmony, wealth & family blessings" },
                  { g: "Shani, Rahu & Ketu", desc: "Discipline, long-term karma, transitions & spiritual growth" },
                ].map((planet) => (
                  <div
                    key={planet.g}
                    className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#C6A15B]/35"
                  >
                    <p className="font-serif text-base font-bold text-[#A77B35]">
                      {planet.g}
                    </p>
                    <p className="text-xs text-[#555555] mt-1 leading-relaxed">
                      {planet.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Career & Business Guidance + Marriage & Relationship Guidance + Personal Life */}
      <section className="py-20 bg-[#FAF8F3] border-y border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Career & Business Guidance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 border border-[#C6A15B]/35 shadow-card">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/40 aspect-[16/10]">
              <img
                src="/images/ai/career-business-growth.jpg"
                alt="Professional workplace and business astrology guidance"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                04 • CAREER AND BUSINESS GUIDANCE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
                Clarity for Career Transitions, Promotions &amp; Enterprise Growth
              </h3>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                By analyzing your 10th House (Karma Bhava), 11th House of gains, and Dashamsha (D-10) chart, Dr. Amit Deshmukh helps you choose between employment and entrepreneurship, identify favorable periods for job changes or promotions, and navigate business partnerships.
              </p>
            </div>
          </div>

          {/* Marriage & Relationship Guidance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 border border-[#C6A15B]/35 shadow-card">
            <div className="lg:col-span-7 space-y-3 order-2 lg:order-1">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                05 • MARRIAGE AND RELATIONSHIP GUIDANCE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
                Kundli Milan, Marriage Timing &amp; Relationship Harmony
              </h3>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                Whether you are experiencing delays in marriage, seeking detailed Ashtakoota horary/natal matching for a prospective alliance, or looking to restore warmth and mutual understanding in marriage, we examine the 7th House, Venus-Jupiter strength, and Navamsha chart.
              </p>
            </div>
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/40 aspect-[16/10] order-1 lg:order-2 bg-[#FAF8F3]">
              <img
                src="/images/photos/indian-couple-vivaha-harmony.jpg"
                alt="Marriage compatibility and Ashtakoota Kundli Milan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Personal Life Guidance (Finance, Health, Family) */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                06 • PERSONAL LIFE GUIDANCE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424] mt-1">
                Holistic Support for Finance, Health &amp; Family Matters
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Financial Matters",
                  desc: "2nd & 11th House Dhana Yoga analysis for savings stability, debt resolution, and financial planning.",
                  img: "/images/photos/topic-financial-stability.jpg",
                },
                {
                  title: "Health-Related Concerns",
                  desc: "Lagna vitality and planetary transit insights paired with supportive Vedic lifestyle and spiritual remedies.",
                  img: "/images/photos/topic-health-wellbeing.jpg",
                },
                {
                  title: "Family Matters",
                  desc: "4th House domestic peace analysis and remedies to nurture harmony across generations at home.",
                  img: "/images/photos/topic-family-harmony.jpg",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl bg-white border border-[#C6A15B]/35 overflow-hidden shadow-card"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-44 object-cover border-b border-[#C6A15B]/20"
                  />
                  <div className="p-5 space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#242424]">
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: How Vedic Astrology Consultation Works (with Consultation Room Image) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border-2 border-[#C6A15B]/50 shadow-luxury aspect-[4/3]">
              <img
                src="/images/ai/consultation-room.jpg"
                alt="Vedic astrology consultation chamber"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                07 • HOW VEDIC ASTROLOGY CONSULTATION WORKS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                From Birth Details to Actionable Life Remedies
              </h2>
              <div className="space-y-3.5">
                {[
                  "Step 1: Submit your Date, Time, and Place of Birth along with your primary questions via our Booking Form or WhatsApp.",
                  "Step 2: Dr. Amit Deshmukh prepares your Janam Kundli, Navamsha (D-9), and current Vimshottari Mahadasha timeline.",
                  "Step 3: Connect live via Voice Call, Video Call, or WhatsApp in Hindi, English, Marathi, or Kannada at ₹20/minute.",
                  "Step 4: Receive clear answers, favorable timing windows, and practical Vedic remedies.",
                ].map((step) => (
                  <div
                    key={step}
                    className="p-4 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/30 text-sm text-[#242424] font-medium flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A77B35] shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Frequently Asked Questions */}
      <InteractiveFAQ
        title="Vedic Astrology Consultation – Frequently Asked Questions"
        subtitle="Answers to common questions about birth chart preparation, marriage matching, and session durations."
        faqs={VEDIC_FAQS}
        visualImage="/images/photos/kundli-birth-chart-diagram.jpg"
        visualAlt="Traditional Vedic Janam Kundli Chart"
        visualCaption="12-House Natal & Divisional Chart Analysis"
      />

      {/* SECTION 8: Book a Consultation CTA with Lord Krishna Artwork */}
      <DivineKrishnaCTA
        title="Book Your Personalized Vedic Astrology Consultation"
        description="Explore your Janam Kundli with Dr. Amit Deshmukh and gain clarity on career, marriage, business, finance, health, and family decisions at ₹20/minute."
        krishnaImage="/images/ai/krishna-golden-aura.jpg"
        krishnaAlt="Lord Krishna with a radiant golden aura"
      />
    </div>
  );
}
