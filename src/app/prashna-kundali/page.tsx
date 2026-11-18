import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import InteractiveFAQ from "@/components/InteractiveFAQ";
import DivineKrishnaCTA from "@/components/DivineKrishnaCTA";
import { BRAND_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Prashna Kundali – Question-Based Horary Astrology Guidance",
  description:
    "Get Guidance Through the Questions That Matter Most. Prashna Kundali consultations by Dr. Amit Deshmukh—no exact birth time required. ₹20/minute.",
};

const PRASHNA_FAQS = [
  {
    question: "Do I need my birth date or birth time for Prashna Kundali?",
    answer:
      "No. Prashna Kundali (horary astrology) casts a chart for the exact moment and location when you pose your question to the astrologer. It is ideal when birth details are missing or uncertain.",
  },
  {
    question: "How many questions should I ask in a Prashna session?",
    answer:
      "Prashna Kundali works best when you focus sincerely on one primary question at a time—or a closely related set of decisions regarding career, business, marriage, or family.",
  },
  {
    question: "Can Prashna Kundali be combined with my birth chart if I have it?",
    answer:
      "Yes! When birth details are available, combining Janam Kundli with Prashna Kundali provides double confirmation on both long-term planetary destiny and immediate situational timing.",
  },
  {
    question: "What is the consultation fee for a Prashna reading?",
    answer:
      "Like all consultations with Dr. Amit Deshmukh, Prashna Kundali is billed at ₹20 per minute (e.g., 5 minutes = ₹100, 10 minutes = ₹200, 15 minutes = ₹300).",
  },
];

export default function PrashnaKundaliPage() {
  return (
    <div className="bg-white pt-24">
      {/* SECTION 1: Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F3] to-white border-b border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/50">
                <HelpCircle className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  PRASHNA SHASTRA • QUESTION-BASED HORARY ASTROLOGY
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#242424] leading-[1.14]">
                Get Guidance Through the Questions That Matter Most
              </h1>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                When you stand at an urgent crossroads in career, business, marriage, or family life—or when exact birth-time records are unavailable—Prashna Kundali reads the planetary configuration of the exact moment your question is asked.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/pricing?service=Prashna%20Kundali#booking-form"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white font-semibold text-sm shadow-lg hover:brightness-105 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Ask a Prashna Question (₹20/Min)</span>
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
                  src="/images/ai/prashna-consultation.jpg"
                  alt="Traditional astrologer studying a Prashna Kundali horoscope chart"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/45 bg-[#FAF8F3] shadow-card aspect-[4/5]">
                <img
                  src="/images/photos/prashna-horary-wheel.jpg"
                  alt="Prashna Horary Lagna Wheel Illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Introduction to Prashna Kundali */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#C6A15B]/45 shadow-card">
              <img
                src="/images/ai/vedic-kundli-scroll.jpg"
                alt="Traditional Kundli scroll and brass compass"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                01 • INTRODUCTION TO PRASHNA KUNDALI
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                The Sacred Mirror of the Present Moment
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                In classical Vedic astrology, a sincere question arises in the human heart at the exact astronomical moment when the heavens mirror its answer. This branch of Jyotish—known as <em>Prashna Shastra</em>—has been practiced for centuries to answer pressing questions with remarkable specificity.
              </p>
              <p className="text-base text-[#555555] leading-relaxed">
                Whether you do not know your birth time or want immediate clarity on a specific proposal, agreement, or personal concern, Dr. Amit Deshmukh casts the Prashna Lagna during your live session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: How Question-Based Astrology Works */}
      <section className="py-20 bg-[#FAF8F3] border-y border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                02 • HOW QUESTION-BASED ASTROLOGY WORKS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Evaluating Prashna Lagna, Karyesha &amp; Chandra Strength
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                When you state your question, Dr. Amit Deshmukh calculates the Ascendant of that exact minute (Prashna Lagna), the Lord of the House governing your question (Karyesha), and the position and Nakshatra of the Moon (Chandra).
              </p>
              <div className="space-y-3">
                {[
                  "Prashna Lagna (1st House): Reflects the querent's current mindset and readiness.",
                  "Karyesha (Significator Planet): Indicates whether the desired outcome is supported or delayed.",
                  "Tajika & Parashari Yogas (Ithasala / Karya Siddhi): Reveals timing and practical conditions for success.",
                  "Targeted Upayas: Simple remedies to remove obstacles surrounding the specific question.",
                ].map((pt) => (
                  <div
                    key={pt}
                    className="p-3.5 rounded-xl bg-white border border-[#C6A15B]/35 text-xs sm:text-sm text-[#242424] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A77B35] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 bg-white shadow-luxury">
              <img
                src="/images/photos/prashna-horary-wheel.jpg"
                alt="How Question-Based Prashna Horary Astrology Works"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Questions About Career, Business Decisions, Relationships & Personal Life */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
              03 • KEY AREAS FOR PRASHNA CONSULTATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
              Focused Answers for Career, Business, Relationships &amp; Personal Life
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Career Questions */}
            <div className="rounded-3xl bg-[#FAF8F3] border border-[#C6A15B]/40 overflow-hidden shadow-card">
              <div className="grid grid-cols-2 border-b border-[#C6A15B]/25">
                <img
                  src="/images/ai/career-business-growth.jpg"
                  alt="Professional office career decisions"
                  className="w-full h-48 object-cover"
                />
                <img
                  src="/images/photos/prashna-career-decision.jpg"
                  alt="Prashna Career Decision Chart"
                  className="w-full h-48 object-cover bg-white"
                />
              </div>
              <div className="p-7 space-y-2.5">
                <h3 className="font-serif text-2xl font-bold text-[#242424]">
                  Questions About Career
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Should you accept a new job offer or stay in your current organization? Will an interview, transfer request, or overseas opportunity materialize favorably? Prashna evaluates the 10th and 6th houses of the moment.
                </p>
              </div>
            </div>

            {/* Business Decisions */}
            <div className="rounded-3xl bg-[#FAF8F3] border border-[#C6A15B]/40 overflow-hidden shadow-card">
              <div className="grid grid-cols-2 border-b border-[#C6A15B]/25">
                <img
                  src="/images/ai/office-vastu-corporate.jpg"
                  alt="Business decision and corporate environment"
                  className="w-full h-48 object-cover"
                />
                <img
                  src="/images/photos/prashna-business-investment.jpg"
                  alt="Prashna Business & Partnership Chart"
                  className="w-full h-48 object-cover bg-white"
                />
              </div>
              <div className="p-7 space-y-2.5">
                <h3 className="font-serif text-2xl font-bold text-[#242424]">
                  Business Decisions
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Assess commercial agreements, prospective business partners, product launches, property leases, and capital allocation timing before signing commitments.
                </p>
              </div>
            </div>

            {/* Relationships */}
            <div className="rounded-3xl bg-[#FAF8F3] border border-[#C6A15B]/40 overflow-hidden shadow-card">
              <div className="aspect-[16/9] bg-white border-b border-[#C6A15B]/25 overflow-hidden">
                <img
                  src="/images/photos/indian-couple-vivaha-harmony.jpg"
                  alt="Relationship and marriage Prashna guidance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-7 space-y-2.5">
                <h3 className="font-serif text-2xl font-bold text-[#242424]">
                  Relationships &amp; Marriage Proposals
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Evaluate a marriage proposal when one partner&apos;s birth details are incomplete, or seek clarity on resolving misunderstandings and restoring emotional harmony.
                </p>
              </div>
            </div>

            {/* Personal Life */}
            <div className="rounded-3xl bg-[#FAF8F3] border border-[#C6A15B]/40 overflow-hidden shadow-card">
              <div className="aspect-[16/9] bg-white border-b border-[#C6A15B]/25 overflow-hidden">
                <img
                  src="/images/photos/prashna-relationship-clarity.jpg"
                  alt="Personal and family life Prashna guidance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-7 space-y-2.5">
                <h3 className="font-serif text-2xl font-bold text-[#242424]">
                  Personal Life &amp; Family Matters
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Receive calm, compassionate guidance on relocation, family discussions, property purchases, and domestic harmony through horary analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Consultation Process */}
      <section className="py-20 bg-[#FAF8F3] border-t border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border-2 border-[#C6A15B]/50 shadow-luxury aspect-[4/3]">
              <img
                src="/images/ai/consultation-room.jpg"
                alt="Prashna consultation room of Dr. Amit Deshmukh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                04 • CONSULTATION PROCESS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                How to Prepare for Your Prashna Kundali Session
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                Before your call with Dr. Amit Deshmukh, take a quiet moment to formulate your primary question clearly. During your Voice Call, Video Call, or WhatsApp session, state your question in Hindi, English, Marathi, or Kannada, and the Prashna chart will be cast immediately.
              </p>
              <div className="pt-2">
                <Link
                  href="/pricing?service=Prashna%20Kundali#booking-form"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white text-sm font-semibold shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Prashna Session (₹20/Min)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQs */}
      <InteractiveFAQ
        title="Prashna Kundali – Frequently Asked Questions"
        subtitle="Everything you need to know about question-based horary astrology without birth time records."
        faqs={PRASHNA_FAQS}
        visualImage="/images/photos/prashna-horary-wheel.jpg"
        visualAlt="Prashna Kundali Horary Wheel"
        visualCaption="Instantaneous Horary Chart • ₹20/Minute"
      />

      {/* SECTION 7: Book Consultation CTA with Lord Krishna Image */}
      <DivineKrishnaCTA
        title="Have an Urgent Question? Consult via Prashna Kundali Today"
        description="Connect with Dr. Amit Deshmukh between 10 AM and 6 PM (Monday to Sunday) for focused question-based astrological guidance."
        krishnaImage="/images/ai/krishna-kadamba-tree.jpg"
        krishnaAlt="Lord Krishna beneath a blooming Kadamba tree"
      />
    </div>
  );
}
