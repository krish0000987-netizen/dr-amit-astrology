import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  Hand,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import InteractiveFAQ from "@/components/InteractiveFAQ";
import DivineKrishnaCTA from "@/components/DivineKrishnaCTA";
import { BRAND_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Palm Reading Consultation – Traditional Hasta Samudrika Palmistry",
  description:
    "Explore the Traditional Art of Palmistry with Dr. Amit Deshmukh. Detailed analysis of palm lines, planetary mounts, and hand traits at ₹20/minute.",
};

const PALM_FAQS = [
  {
    question: "Which hand is read during a Palm Reading consultation—left or right?",
    answer:
      "In traditional Hasta Samudrika Shastra, both hands are examined together. One hand reflects innate temperament and inherited potential, while the active hand shows how your conscious choices and efforts are shaping your path.",
  },
  {
    question: "How can I have my palm read during an online or phone consultation?",
    answer:
      "You can easily share clear, well-lit photographs of both palms (open palm and side view) over WhatsApp prior to your Voice Call or Video Call consultation with Dr. Amit Deshmukh.",
  },
  {
    question: "Can Palm Reading help if I do not know my birth date or time?",
    answer:
      "Yes. Palmistry does not require birth time records and is an excellent standalone method—or a powerful complement to Prashna Kundali and Vedic Astrology.",
  },
  {
    question: "What is the consultation fee for Palm Reading?",
    answer:
      "Palm Reading consultations are billed at the standard ₹20 per minute rate (e.g., 10 minutes = ₹200, 15 minutes = ₹300, 30 minutes = ₹600).",
  },
];

export default function PalmReadingPage() {
  return (
    <div className="bg-white pt-24">
      {/* SECTION 1: Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F3] to-white border-b border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/50">
                <Hand className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  HASTA SAMUDRIKA SHASTRA • TRADITIONAL PALMISTRY
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#242424] leading-[1.14]">
                Explore the Traditional Art of Palmistry
              </h1>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                Your hands hold a living map of character, vitality, intellect, emotional nature, and career inclinations. Dr. Amit Deshmukh examines your major lines and planetary mounts to offer grounded, personal guidance.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/pricing?service=Palm%20Reading#booking-form"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white font-semibold text-sm shadow-lg hover:brightness-105 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Palm Reading (₹20/Min)</span>
                </Link>
                <a
                  href={BRAND_INFO.contactPlaceholders.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-[#C6A15B] text-[#A77B35] font-semibold text-sm hover:bg-[#FAF8F3] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Palm Photos via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-7 rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 bg-white shadow-luxury aspect-[4/5]">
                <img
                  src="/images/photos/palmistry-lines-diagram.jpg"
                  alt="Detailed Palmistry Hand Lines and Planetary Mounts Diagram"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/45 bg-[#FAF8F3] shadow-card aspect-[4/5]">
                <img
                  src="/images/photos/palmistry-hand-closeup-art.jpg"
                  alt="Traditional Hasta Samudrika Hand Analysis Illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Introduction to Palmistry */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#C6A15B]/45 shadow-card bg-[#FAF8F3]">
              <img
                src="/images/photos/palmistry-consultation-session.jpg"
                alt="1-on-1 Personal Palm Reading Session"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                01 • INTRODUCTION TO PALMISTRY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Ancient Indian Samudrika Shastra for Self-Understanding
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                In Indian tradition, <em>Hasta Samudrika Shastra</em> views the human hand as a reflection of the mind and nervous system. Because palm lines subtly evolve over time with our discipline and mindset, reading both hands reveals both our natural predispositions and how our present actions are shaping the future.
              </p>
              <p className="text-base text-[#555555] leading-relaxed">
                Dr. Amit Deshmukh combines classical palm-line observation with practical Vedic wisdom so you leave the session with constructive direction rather than fatalistic worry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Understanding Palm Lines */}
      <section className="py-20 bg-[#FAF8F3] border-y border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                02 • UNDERSTANDING PALM LINES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                The Major &amp; Minor Lines of the Hand
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                Every primary crease on the palm corresponds to a vital stream of life energy, decision-making, and emotional connection:
              </p>
              <div className="space-y-3">
                {[
                  {
                    name: "Heart Line (Hridaya Rekha)",
                    desc: "Emotional temperament, relationship harmony, empathy & devotion.",
                  },
                  {
                    name: "Head Line (Mastishka Rekha)",
                    desc: "Intellectual style, concentration, analytical judgment & decision-making.",
                  },
                  {
                    name: "Life Line (Jeevan Rekha)",
                    desc: "Physical vitality, resilience, grounded stability & major life shifts.",
                  },
                  {
                    name: "Fate Line (Bhagya Rekha) & Sun Line",
                    desc: "Career progression, responsibility, public recognition & purposeful effort.",
                  },
                ].map((line) => (
                  <div
                    key={line.name}
                    className="p-4 rounded-2xl bg-white border border-[#C6A15B]/35"
                  >
                    <p className="font-serif text-base font-bold text-[#A77B35]">
                      {line.name}
                    </p>
                    <p className="text-xs sm:text-sm text-[#555555] mt-1">
                      {line.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 bg-white shadow-luxury">
              <img
                src="/images/photos/palmistry-lines-diagram.jpg"
                alt="Heart Line, Head Line, Life Line and Fate Line Diagram"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Traditional Palm Reading & Planetary Mounts + Personal Consultation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#C6A15B]/45 bg-[#FAF8F3] shadow-card">
              <img
                src="/images/photos/palmistry-mounts-guide.jpg"
                alt="The Seven Planetary Mounts of the Palm"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                03 • TRADITIONAL PALM READING
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Evaluating the Seven Planetary Mounts (Graha Parvata)
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                Beyond lines alone, classical palmistry studies the elevation and balance of the seven planetary mounts on the palm—Jupiter (leadership), Saturn (discipline), Apollo/Sun (creativity), Mercury (commerce &amp; speech), Mars (courage), Moon (imagination), and Venus (warmth &amp; family).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FAF8F3] rounded-3xl p-7 sm:p-10 border border-[#C6A15B]/35">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                04 • PERSONAL CONSULTATION &amp; WHAT TO EXPECT
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#242424]">
                How to Share Your Palm Photographs &amp; What to Expect
              </h2>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                For an online or telephone consultation, simply take clear photos of your left and right palms in natural daylight and send them via WhatsApp after requesting your slot. During your session (₹20/minute), Dr. Amit Deshmukh walks you through your lines, mounts, and practical remedies in Hindi, English, Marathi, or Kannada.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <img
                src="/images/ai/prashna-consultation.jpg"
                alt="Astrologer consultation desk"
                className="w-full h-44 object-cover rounded-2xl border border-[#C6A15B]/40"
              />
              <img
                src="/images/ai/consultation-room.jpg"
                alt="Consultation environment"
                className="w-full h-44 object-cover rounded-2xl border border-[#C6A15B]/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQs */}
      <InteractiveFAQ
        title="Palm Reading – Frequently Asked Questions"
        subtitle="Answers regarding hand photo submission, left vs. right palm analysis, and consultation fees."
        faqs={PALM_FAQS}
        visualImage="/images/photos/palmistry-hand-closeup-art.jpg"
        visualAlt="Traditional Palmistry Hand Illustration"
        visualCaption="Hasta Samudrika Analysis • ₹20/Minute"
      />

      {/* SECTION 6: Book Consultation CTA with Lord Krishna Image */}
      <DivineKrishnaCTA
        title="Discover the Insights Written in Your Hands"
        description="Book a 1-on-1 Palm Reading consultation with Dr. Amit Deshmukh at ₹20 per minute."
        krishnaImage="/images/ai/krishna-divine-grace.jpg"
        krishnaAlt="Sacred golden bansuri flute and peacock feather of Lord Krishna"
      />
    </div>
  );
}
