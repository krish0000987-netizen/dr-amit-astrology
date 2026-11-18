import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  Hash,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import InteractiveFAQ from "@/components/InteractiveFAQ";
import DivineKrishnaCTA from "@/components/DivineKrishnaCTA";
import { BRAND_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Numerology Consultation – Mulank, Bhagyank & Name Vibrations",
  description:
    "Discover the Meaning Behind Your Numbers with Dr. Amit Deshmukh. Number-based interpretations, Mulank & Bhagyank guidance, and name alignment at ₹20/minute.",
};

const NINE_NUMBERS = [
  { num: "1", planet: "Surya (Sun)", traits: "Leadership, independence, initiative & authority" },
  { num: "2", planet: "Chandra (Moon)", traits: "Intuition, diplomacy, harmony & emotional depth" },
  { num: "3", planet: "Brihaspati (Jupiter)", traits: "Wisdom, teaching, expansion & ethical discipline" },
  { num: "4", planet: "Rahu (North Node)", traits: "Practical structure, unconventional thinking & diligence" },
  { num: "5", planet: "Budha (Mercury)", traits: "Communication, commerce, adaptability & quick intellect" },
  { num: "6", planet: "Shukra (Venus)", traits: "Grace, family warmth, artistic sense & prosperity" },
  { num: "7", planet: "Ketu (South Node)", traits: "Spiritual inquiry, research, contemplation & insight" },
  { num: "8", planet: "Shani (Saturn)", traits: "Perseverance, justice, long-term mastery & finance" },
  { num: "9", planet: "Mangala (Mars)", traits: "Courage, decisive energy, service & determination" },
];

const NUMEROLOGY_FAQS = [
  {
    question: "What is the difference between Mulank and Bhagyank?",
    answer:
      "Your Mulank (Psychic or Root Number) is derived solely from the day of the month you were born (1 to 31 reduced to a single digit 1–9), reflecting your core nature. Your Bhagyank (Destiny or Life Path Number) is calculated from your full date of birth (DD + MM + YYYY), governing long-term career and life trajectory.",
  },
  {
    question: "Do I need my exact birth time for a Numerology consultation?",
    answer:
      "No. Numerology requires only your accurate Date of Birth and your current full name (or proposed business/brand name).",
  },
  {
    question: "Can Numerology help with business or newborn names?",
    answer:
      "Yes. Dr. Amit Deshmukh evaluates phonetic and numerical vibrations so that personal names, brand names, and important dates harmonize with your Mulank and Bhagyank.",
  },
  {
    question: "How much does a Numerology consultation cost?",
    answer:
      "Numerology consultations are billed at the standard ₹20 per minute rate (e.g., 10 minutes = ₹200, 15 minutes = ₹300, 30 minutes = ₹600).",
  },
];

export default function NumerologyPage() {
  return (
    <div className="bg-white pt-24">
      {/* SECTION 1: Numerology Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F3] to-white border-b border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/50">
                <Hash className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  ANKA JYOTISH • SACRED VEDIC NUMEROLOGY
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#242424] leading-[1.14]">
                Discover the Meaning Behind Your Numbers
              </h1>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                Every birth date and name carries a distinct mathematical and planetary vibration. Through traditional Vedic Numerology, Dr. Amit Deshmukh helps you understand your Mulank, Bhagyank, favorable dates, and personal or business name harmony.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/pricing?service=Numerology#booking-form"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white font-semibold text-sm shadow-lg hover:brightness-105 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Numerology Session (₹20/Min)</span>
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

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-7 rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 shadow-luxury aspect-[4/5]">
                <img
                  src="/images/ai/numerology-sacred-numbers.jpg"
                  alt="Golden sacred geometry and Vedic numerology artwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/45 bg-[#FAF8F3] shadow-card aspect-[4/5]">
                <img
                  src="/images/photos/numerology-vedic-matrix.jpg"
                  alt="9-Square Vedic Numerology Grid"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What is Numerology? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#C6A15B]/45 shadow-card bg-[#FAF8F3]">
              <img
                src="/images/photos/numerology-mulank-bhagyank.jpg"
                alt="Mulank and Bhagyank Numerology Chart"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                01 • WHAT IS NUMEROLOGY?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                The Planetary Language of Numbers 1 Through 9
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                In the Vedic tradition, each single-digit number from 1 to 9 is directly linked to one of the nine celestial Grahas (Sun, Moon, Jupiter, Rahu, Mercury, Venus, Ketu, Saturn, and Mars). Your date of birth reveals which planetary energies naturally support your temperament, career, and relationships.
              </p>
              <p className="text-base text-[#555555] leading-relaxed">
                Unlike complex birth-chart calculations that require birth time to the minute, Numerology provides immediate, practical insights using your birth date and name.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Importance of Numbers (1 to 9 Planetary Matrix + Visuals) */}
      <section className="py-20 bg-[#FAF8F3] border-y border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                02 • IMPORTANCE OF NUMBERS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Understanding the Nine Sacred Numbers &amp; Their Ruling Planets
              </h2>
              <p className="text-sm sm:text-base text-[#777777]">
                Each root number carries distinct strengths, compatible numbers, and favorable life directions.
              </p>
            </div>
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/40 bg-white shadow-card">
              <img
                src="/images/photos/numerology-vedic-matrix.jpg"
                alt="Sacred 9-Square Vedic Numerology Grid"
                className="w-full h-44 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {NINE_NUMBERS.map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-2xl bg-white border border-[#C6A15B]/35 shadow-card flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FAF8F3] border border-[#C6A15B] flex items-center justify-center font-serif text-3xl font-bold text-[#A77B35] shrink-0">
                  {item.num}
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-[#A77B35] font-semibold">
                    {item.planet}
                  </p>
                  <p className="font-serif text-lg font-bold text-[#242424]">
                    Number {item.num} Vibration
                  </p>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {item.traits}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Numerology Consultation & Number-Based Interpretations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                03 • NUMEROLOGY CONSULTATION &amp; INTERPRETATIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Name Vibrations, Personal Years &amp; Auspicious Dates
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                During a 1-on-1 Numerology consultation, Dr. Amit Deshmukh analyzes the interplay between your birth date numbers and the phonetic/compound value of your name or business brand.
              </p>
              <div className="space-y-3">
                {[
                  "Mulank & Bhagyank Compatibility: How your birth day and full birth date interact.",
                  "Name & Brand Alignment: Assessing whether your personal or enterprise name supports your ruling numbers.",
                  "Personal Year Forecasts: Identifying which upcoming months and years favor career expansion, property purchase, or marriage.",
                  "Favorable Dates & Colours: Practical selection of dates, house/vehicle numbers, and supportive remedies.",
                ].map((pt) => (
                  <div
                    key={pt}
                    className="p-3.5 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/30 text-xs sm:text-sm text-[#242424] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A77B35] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="rounded-3xl overflow-hidden border border-[#C6A15B]/45 bg-[#FAF8F3] shadow-card">
                <img
                  src="/images/photos/numerology-name-correction.jpg"
                  alt="Phonetic and Vedic Name Resonance Chart"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden border border-[#C6A15B]/45 shadow-card">
                <img
                  src="/images/photos/navagraha-planetary-cosmos.jpg"
                  alt="Planetary and Numerical Harmony"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Personal Guidance & Consultation Process */}
      <section className="py-20 bg-[#FAF8F3] border-t border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/45 aspect-[16/10]">
                <img
                  src="/images/ai/career-business-growth.jpg"
                  alt="Business and personal life guidance through numerology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/45 aspect-[16/10]">
                <img
                  src="/images/ai/consultation-room.jpg"
                  alt="Numerology consultation study"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                04 • PERSONAL GUIDANCE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Practical Numerical Insights for Career, Business &amp; Family
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                Whether you are selecting an auspicious name for a new venture, choosing key milestone dates, or seeking to understand recurring numerical patterns in your life, Dr. Amit Deshmukh offers grounded, easy-to-apply guidance in Hindi, English, Marathi, and Kannada.
              </p>
              <Link
                href="/pricing?service=Numerology#booking-form"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white text-sm font-semibold shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Numerology Consultation (₹20/Min)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Frequently Asked Questions */}
      <InteractiveFAQ
        title="Numerology Consultation – Frequently Asked Questions"
        subtitle="Common questions regarding Mulank, Bhagyank, name resonance, and session pricing."
        faqs={NUMEROLOGY_FAQS}
        visualImage="/images/photos/numerology-vedic-matrix.jpg"
        visualAlt="Vedic Numerology Matrix"
        visualCaption="Mulank & Bhagyank Analysis • ₹20/Minute"
      />

      {/* SECTION 7: Consultation CTA with Lord Krishna Image */}
      <DivineKrishnaCTA
        title="Unlock the Wisdom of Your Birth Numbers Today"
        description="Consult Dr. Amit Deshmukh for personalized Numerology interpretations and practical guidance at ₹20 per minute."
        krishnaImage="/images/ai/krishna-celestial-cosmos.jpg"
        krishnaAlt="Lord Krishna in a celestial cosmos"
      />
    </div>
  );
}
