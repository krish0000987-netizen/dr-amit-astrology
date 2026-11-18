import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Globe,
  IndianRupee,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import DivineKrishnaCTA from "@/components/DivineKrishnaCTA";
import {
  BRAND_INFO,
  CONSULTATION_TOPICS,
  PRIMARY_SERVICES,
} from "@/data/siteData";

export const metadata: Metadata = {
  title: "About Dr. Amit Deshmukh – 9 Years Vedic Astrology Experience",
  description:
    "Meet Dr. Amit Deshmukh – Your Guide to Vedic Wisdom. 9 years of experience in Vedic Astrology, Prashna Kundali, Numerology, Vastu Consultation & Palm Reading in Hindi, English, Marathi & Kannada.",
};

export default function AboutPage() {
  return (
    <div className="bg-white pt-24">
      {/* SECTION 1: Hero Section (White & Gold Luxury Layout + Portrait + Decorative Krishna Artwork) */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F3] to-white border-b border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Editorial Bio & Decorative Krishna Medallion (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/50">
                <Sparkles className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  9 YEARS OF EXPERIENCE • VEDIC ASTROLOGY CONSULTATION
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#242424] leading-[1.14]">
                Meet Dr. Amit Deshmukh – Your Guide to Vedic Wisdom
              </h1>

              {/* Required Verbatim Bio Content */}
              <div className="space-y-4 text-base sm:text-lg text-[#444444] leading-relaxed bg-white p-6 rounded-2xl border border-[#C6A15B]/35 shadow-card">
                <p>
                  Dr. Amit Deshmukh has 9 years of experience in astrology and related consultation services. He provides guidance to individuals facing challenges in different areas of life.
                </p>
                <p>
                  His specializations include career, business, marriage, love relationships, finance, health and family matters. He combines traditional Vedic knowledge with practical remedies.
                </p>
              </div>

              {/* Small Spiritual Lord Krishna Decorative Artwork Card */}
              <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#C6A15B]/45 flex items-center gap-4 max-w-xl">
                <img
                  src="/images/ai/krishna-divine-grace.jpg"
                  alt="Decorative Lord Krishna golden flute and peacock feather artwork"
                  className="w-20 h-20 rounded-xl object-cover border border-[#C6A15B]/50 shrink-0"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#A77B35] font-semibold">
                    Sacred Inspiration
                  </p>
                  <p className="font-editorial italic text-lg text-[#242424]">
                    &ldquo;Rooted in traditional Jyotish wisdom and calm, practical counsel for every stage of life.&rdquo;
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/pricing#booking-form"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white font-semibold text-sm shadow-lg hover:brightness-105 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation (₹20/Min)</span>
                </Link>
                <a
                  href={BRAND_INFO.contactPlaceholders.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-[#C6A15B] text-[#A77B35] font-semibold text-sm hover:bg-[#FAF8F3] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right Large Professional Portrait of Astrologer (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white p-3.5 border-2 border-[#C6A15B]/60 shadow-luxury">
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src="/images/ai/astrologer-portrait.jpg"
                    alt="Dr. Amit Deshmukh – Vedic Astrologer in traditional consultation study"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 px-2 pb-1 flex items-center justify-between">
                  <div>
                    <p className="font-serif text-lg font-bold text-[#242424]">
                      Dr. Amit Deshmukh
                    </p>
                    <p className="text-xs text-[#777777]">
                      Vedic Astrology • Prashna • Numerology • Vastu • Palmistry
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#FAF8F3] border border-[#C6A15B]/50 text-xs font-bold text-[#A77B35]">
                    9 Yrs Exp.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Professional Introduction (Split-Screen with Consultation Photography) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/45 shadow-card aspect-[4/5]">
                <img
                  src="/images/ai/prashna-consultation.jpg"
                  alt="Traditional horoscope analysis during an astrological consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/45 shadow-card aspect-[4/5] bg-[#FAF8F3]">
                <img
                  src="/images/photos/kundli-birth-chart-diagram.jpg"
                  alt="Traditional 12-House Vedic Kundli Birth Chart Diagram"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                01 • PROFESSIONAL INTRODUCTION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424] leading-tight">
                A Calm, Structured Space for Life&apos;s Important Questions
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                Over the past 9 years, Dr. Amit Deshmukh has guided individuals, professionals, entrepreneurs, and families seeking clarity during moments of uncertainty. Whether you are evaluating a career transition, preparing for marriage, addressing business challenges, or seeking peace in family life, each session is conducted with patience and confidentiality.
              </p>
              <p className="text-base text-[#555555] leading-relaxed">
                By integrating five traditional disciplines—Vedic Astrology, Prashna Kundali, Numerology, Vastu Consultation, and Palm Reading—Dr. Amit Deshmukh ensures that even clients without complete birth records can receive structured astrological insight.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/30 text-center">
                  <p className="font-serif text-2xl font-bold text-[#A77B35]">9</p>
                  <p className="text-xs text-[#777777]">Years Practice</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/30 text-center">
                  <p className="font-serif text-2xl font-bold text-[#A77B35]">5</p>
                  <p className="text-xs text-[#777777]">Core Services</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/30 text-center">
                  <p className="font-serif text-2xl font-bold text-[#A77B35]">7</p>
                  <p className="text-xs text-[#777777]">Life Focus Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Astrology Philosophy (with Lord Krishna Spiritual Artwork) */}
      <section className="py-20 bg-[#FAF8F3] border-y border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                02 • ASTROLOGY PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424] leading-tight">
                Empowering Conscious Action Through Traditional Vedic Knowledge
              </h2>
              <blockquote className="font-editorial italic text-2xl text-[#A77B35] border-l-2 border-[#C6A15B] pl-4">
                &ldquo;True Jyotish illuminates both planetary timing and human responsibility—helping you act with wisdom rather than anxiety.&rdquo;
              </blockquote>
              <p className="text-base text-[#555555] leading-relaxed">
                Inspired by the timeless teachings of Lord Krishna and the classical Vedic tradition, Dr. Amit Deshmukh approaches astrology as a discipline of self-understanding and timing. Planetary periods (Dashas) and transits (Gochara) indicate seasons of opportunity and caution, allowing you to prepare thoughtfully.
              </p>
              <p className="text-base text-[#555555] leading-relaxed">
                Every remedy suggested during a consultation is practical, ethical, and respectful of your daily commitments—avoiding fear-based predictions or exaggerated claims.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-7 rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 shadow-luxury aspect-[4/5]">
                <img
                  src="/images/ai/krishna-kadamba-tree.jpg"
                  alt="Lord Krishna beneath a sacred Kadamba tree in golden sunlight"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/45 shadow-card">
                <img
                  src="/images/photos/krishna-sudarshana-blessing.jpg"
                  alt="Sacred Bhagavad Gita Dharma Emblem"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Experience and Expertise (Traditional Astrology Books & Kundli Imagery) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#C6A15B]/45 shadow-card">
              <img
                src="/images/ai/vedic-kundli-scroll.jpg"
                alt="Traditional hand-drawn Vedic Janam Kundli chart and brass instruments"
                className="w-full h-80 object-cover"
              />
              <div className="p-5 bg-[#FAF8F3] border-t border-[#C6A15B]/25">
                <p className="font-serif text-lg font-bold text-[#242424]">
                  Five Integrated Consultation Methods
                </p>
                <p className="text-xs text-[#777777] mt-1">
                  Combining birth-chart precision with horary, numerical, spatial, and palmistry insights.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                03 • EXPERIENCE AND EXPERTISE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Five Pillars of Astrological Consultation
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRIMARY_SERVICES.map((srv) => (
                  <Link
                    key={srv.id}
                    href={srv.slug}
                    className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#C6A15B]/35 hover:border-[#A77B35] transition-all flex items-start gap-3.5"
                  >
                    <img
                      src={srv.diagramImage}
                      alt={srv.title}
                      className="w-14 h-14 rounded-xl object-cover border border-[#C6A15B]/35 shrink-0 bg-white"
                    />
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#242424]">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-[#777777] mt-0.5">
                        {srv.shortDescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Areas of Specialization (All 7 Topics with Visual Cards) */}
      <section className="py-20 bg-[#FAF8F3] border-y border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
              04 • AREAS OF SPECIALIZATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
              Focused Guidance Across Seven Key Areas of Life
            </h2>
            <p className="text-base text-[#777777]">
              Dr. Amit Deshmukh provides tailored astrological interpretations and remedies for the following life matters:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONSULTATION_TOPICS.map((topic) => (
              <div
                key={topic.id}
                className="rounded-2xl bg-white border border-[#C6A15B]/35 overflow-hidden shadow-card flex flex-col justify-between"
              >
                <div className="aspect-[16/10] bg-[#FAF8F3] overflow-hidden border-b border-[#C6A15B]/20">
                  <img
                    src={topic.secondaryArt}
                    alt={topic.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#242424]">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}

            {/* 8th Visual Card: Practical Remedies */}
            <div className="rounded-2xl bg-[#171717] text-white border border-[#C6A15B]/55 overflow-hidden shadow-card flex flex-col justify-between">
              <div className="aspect-[16/10] overflow-hidden border-b border-white/15">
                <img
                  src="/images/photos/indian-temple-sanctuary-art.jpg"
                  alt="Practical Vedic Remedies"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-serif text-lg font-bold text-[#DFC38D]">
                  Practical Vedic Remedies
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Every specialization is supported by actionable, ethical remedies suited to your daily routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Languages Spoken (Hindi, English, Marathi, Kannada + Cultural Visual) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-[#C6A15B]/45 shadow-card bg-[#FAF8F3]">
                <img
                  src="/images/photos/four-languages-consultation.jpg"
                  alt="Consult in Hindi, English, Marathi, or Kannada"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                05 • MULTILINGUAL CONSULTATIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Available in Four Languages: Hindi, English, Marathi &amp; Kannada
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                Astrological concepts are deeply personal and nuanced. Communicating in the language you feel most at home with ensures every question, planetary explanation, and remedy is understood with complete clarity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BRAND_INFO.languageDetails.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#C6A15B]/35 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg font-bold text-[#242424]">
                        {lang.name}
                      </h3>
                      <p className="text-xs text-[#777777] leading-relaxed">
                        {lang.description}
                      </p>
                    </div>
                    <span className="px-3 py-1.5 rounded-xl bg-white border border-[#C6A15B]/40 font-serif text-base font-bold text-[#A77B35] shrink-0">
                      {lang.native}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Consultation Approach & Why Consult Dr. Amit (with Consultation Room Photography) */}
      <section className="py-20 bg-[#FAF8F3] border-t border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                06 • CONSULTATION APPROACH &amp; WHY CONSULT DR. AMIT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Structured Listening, Clear Analysis &amp; Transparent ₹20/Minute Pricing
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                Each consultation is structured around your priorities. Dr. Amit Deshmukh first listens carefully to your situation, examines the relevant birth chart, Prashna chart, numerology matrix, Vastu layout, or palm lines, and then outlines clear steps forward.
              </p>

              <div className="space-y-3.5">
                {[
                  "Available Monday to Sunday from 10:00 AM to 6:00 PM IST",
                  "Transparent ₹20 per-minute rate (5 mins ₹100 up to 60 mins ₹1,200)",
                  "Choice of Voice Call, Video Call, or WhatsApp consultation",
                  "Strict confidentiality for all personal and family discussions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#C6A15B]/30"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A77B35] shrink-0" />
                    <span className="text-sm font-medium text-[#242424]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="rounded-3xl overflow-hidden border-2 border-[#C6A15B]/50 shadow-luxury aspect-[16/10]">
                <img
                  src="/images/ai/consultation-room.jpg"
                  alt="Consultation room environment of Dr. Amit Deshmukh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 bg-white shadow-card">
                <img
                  src="/images/photos/consultation-three-steps.jpg"
                  alt="3-Step Consultation Process Diagram"
                  className="w-full h-44 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Final CTA with Lord Krishna Artwork */}
      <DivineKrishnaCTA
        title="Schedule Your Personal Consultation with Dr. Amit Deshmukh"
        description="Experience thoughtful Vedic astrology guidance tailored to your career, business, marriage, relationships, finance, health, or family concerns at ₹20 per minute."
        krishnaImage="/images/ai/krishna-celestial-cosmos.jpg"
        krishnaAlt="Lord Krishna in a luminous celestial Vedic cosmos"
      />
    </div>
  );
}
