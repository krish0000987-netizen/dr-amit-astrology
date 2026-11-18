import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Globe,
  IndianRupee,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import InteractiveFAQ from "@/components/InteractiveFAQ";
import DivineKrishnaCTA from "@/components/DivineKrishnaCTA";
import {
  BRAND_INFO,
  CONSULTATION_TOPICS,
  PRIMARY_SERVICES,
  PRICING_TIERS,
  SAMPLE_TESTIMONIALS,
} from "@/data/siteData";

const HOME_FAQS = [
  {
    question: "How is the consultation fee calculated?",
    answer:
      "Consultations with Dr. Amit Deshmukh are priced transparently at ₹20 per minute. You can choose a session duration that suits your needs—from a focused 5-minute question (₹100) or 15-minute Kundli review (₹300) to an in-depth 30-minute (₹600) or 60-minute (₹1,200) consultation.",
  },
  {
    question: "What if I do not know my exact time or date of birth?",
    answer:
      "If your exact birth time is unavailable, Dr. Amit Deshmukh uses Prashna Kundali (horary astrology), Numerology, or Palm Reading to provide accurate, question-based guidance without requiring a birth certificate.",
  },
  {
    question: "In which languages can I consult with Dr. Amit Deshmukh?",
    answer:
      "You can speak comfortably in Hindi, English, Marathi, or Kannada. Simply select your preferred language when requesting your consultation.",
  },
  {
    question: "What are the consultation timings and modes available?",
    answer:
      "Consultations are available seven days a week—Monday to Sunday, from 10:00 AM to 6:00 PM IST—via Voice Call, Video Call, or WhatsApp.",
  },
  {
    question: "Are the suggested remedies practical for modern daily life?",
    answer:
      "Yes. Dr. Amit Deshmukh combines traditional Vedic knowledge with practical, ethical remedies (such as lifestyle alignment, mantra discipline, and non-demolition Vastu adjustments) without promoting fear or superstition.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* SECTION 1: Premium Cinematic Lord Krishna Hero Slideshow (3s Automatic) */}
      <HeroSlideshow />

      {/* SECTION 2: Trust Indicators & Experience Statistics (Image + Stat Composition) */}
      <section className="py-16 bg-[#FAF8F3] border-b border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Stats Grid (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/45">
                <Sparkles className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  TRUSTED VEDIC GUIDANCE • TRANSPARENT PRACTICE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424] leading-tight">
                Authentic Jyotish Shastra Rooted in Clarity, Ethics &amp; Experience
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[#C6A15B]/35 shadow-card">
                  <Award className="w-6 h-6 text-[#A77B35] mb-2" />
                  <p className="font-serif text-3xl font-bold text-[#242424]">
                    9+ Yrs
                  </p>
                  <p className="text-xs text-[#777777] mt-1">
                    Professional Astrology Experience
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#C6A15B]/35 shadow-card">
                  <IndianRupee className="w-6 h-6 text-[#A77B35] mb-2" />
                  <p className="font-serif text-3xl font-bold text-[#242424]">
                    ₹20/Min
                  </p>
                  <p className="text-xs text-[#777777] mt-1">
                    Affordable &amp; Transparent Rate
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#C6A15B]/35 shadow-card">
                  <Globe className="w-6 h-6 text-[#A77B35] mb-2" />
                  <p className="font-serif text-3xl font-bold text-[#242424]">
                    4 Langs
                  </p>
                  <p className="text-xs text-[#777777] mt-1">
                    Hindi, English, Marathi, Kannada
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#C6A15B]/35 shadow-card">
                  <Star className="w-6 h-6 text-[#A77B35] mb-2 fill-[#C6A15B]" />
                  <p className="font-serif text-3xl font-bold text-[#242424]">
                    5.0 ★
                  </p>
                  <p className="text-xs text-[#777777] mt-1">
                    Profile Rating • Daily 10 AM–6 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Pair: 4-Language Plate + Schedule Plate (5 Cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 bg-white shadow-card">
                <img
                  src="/images/photos/four-languages-consultation.jpg"
                  alt="Consult in Hindi, English, Marathi, or Kannada"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3.5">
                  <p className="font-serif text-sm font-bold text-[#242424]">
                    Multilingual Comfort
                  </p>
                  <p className="text-xs text-[#777777] mt-0.5">
                    Converse naturally in your native tongue
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 bg-white shadow-card">
                <img
                  src="/images/photos/availability-schedule-calendar.jpg"
                  alt="Consultation schedule Monday to Sunday 10 AM to 6 PM"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3.5">
                  <p className="font-serif text-sm font-bold text-[#242424]">
                    7-Day Availability
                  </p>
                  <p className="text-xs text-[#777777] mt-0.5">
                    Monday to Sunday • 10 AM – 6 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Introduction to Dr. Amit Deshmukh (Asymmetrical Split-Screen) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Overlapping Portrait & Manuscript Visuals (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 shadow-luxury aspect-[4/5]">
                <img
                  src="/images/ai/astrologer-portrait.jpg"
                  alt="Portrait of Dr. Amit Deshmukh in a traditional Vedic astrology consultation study"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Secondary Visual Card */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 w-full sm:w-64 rounded-2xl bg-[#FAF8F3] border border-[#C6A15B] p-3 shadow-xl">
                <img
                  src="/images/photos/vedic-scriptures-manuscripts.jpg"
                  alt="Traditional Vedic Jyotish Shastra manuscripts and principles"
                  className="w-full h-28 object-cover rounded-xl border border-[#C6A15B]/30"
                />
                <p className="font-serif text-xs font-bold text-[#242424] mt-2">
                  9 Years of Consultation Practice
                </p>
                <p className="text-[11px] text-[#777777]">
                  Traditional Vedic Wisdom &amp; Practical Remedies
                </p>
              </div>
            </div>

            {/* Right Editorial Profile Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#C6A15B]/45">
                <Sparkles className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  ABOUT DR. AMIT DESHMUKH
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424] leading-tight">
                Meet Dr. Amit Deshmukh – Your Guide to Vedic Wisdom
              </h2>

              <blockquote className="font-editorial italic text-xl sm:text-2xl text-[#A77B35] border-l-2 border-[#C6A15B] pl-4 py-1">
                &ldquo;Astrology is not meant to create fear; it is a sacred lamp that illuminates timing, karma, and wise action.&rdquo;
              </blockquote>

              <div className="space-y-4 text-base text-[#555555] leading-relaxed">
                <p>
                  Dr. Amit Deshmukh has 9 years of experience in astrology and related consultation services. He provides guidance to individuals facing challenges in different areas of life.
                </p>
                <p>
                  His specializations include career, business, marriage, love relationships, finance, health and family matters. He combines traditional Vedic knowledge with practical remedies.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "5 Core Disciplines: Vedic, Prashna, Numerology, Vastu & Palmistry",
                  "Fluent in Hindi, English, Marathi & Kannada",
                  "Affordable ₹20/Minute Consultation Pricing",
                  "Available Daily: Monday to Sunday (10 AM – 6 PM)",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/25"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A77B35] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#242424]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#171717] text-white text-sm font-semibold hover:bg-[#242424] transition-all"
                >
                  <span>Read Full Profile</span>
                  <ArrowRight className="w-4 h-4 text-[#DFC38D]" />
                </Link>

                <Link
                  href="/pricing#booking-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white text-sm font-semibold shadow-md hover:brightness-105 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Astrology Services Overview (5 Image-Led Luxury Cards) */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3] border-y border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/45">
                <Compass className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  FIVE SACRED DISCIPLINES
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424]">
                Comprehensive Astrology &amp; Spiritual Consultation Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#C6A15B] text-sm font-semibold text-[#A77B35] hover:bg-[#F4EBDD] transition-all w-fit"
            >
              <span>View All 5 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRIMARY_SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className={`rounded-3xl bg-white border border-[#C6A15B]/35 shadow-card hover:shadow-luxury-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group ${
                  idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF8F3]">
                    <img
                      src={service.cardImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#171717]/80 backdrop-blur-sm border border-[#C6A15B]/50 text-[11px] text-[#DFC38D] font-medium">
                      {service.sanskritName}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-[#242424]">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#A77B35]">
                      {service.shortDescription}
                    </p>
                    <p className="text-sm text-[#777777] leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#F4EBDD] flex items-center justify-between gap-3">
                  <Link
                    href={service.slug}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#242424] hover:text-[#A77B35] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 text-[#A77B35]" />
                  </Link>

                  <Link
                    href={`/pricing?service=${encodeURIComponent(service.title)}#booking-form`}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white text-xs font-semibold shadow-sm hover:brightness-105 transition-all"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            ))}

            {/* 6th Card: Direct Custom Consultation Combination Card */}
            <div className="rounded-3xl bg-[#171717] text-white border border-[#C6A15B]/60 p-6 sm:p-7 flex flex-col justify-between shadow-luxury">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 aspect-[16/10]">
                  <img
                    src="/images/photos/navagraha-planetary-cosmos.jpg"
                    alt="Navagraha Planetary Alignment Diagram"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#DFC38D] font-semibold">
                  HOLISTIC COMBINED SESSION
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Not Sure Which Service Fits Your Question?
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Combine Janam Kundli, Prashna Kundali, and Numerology in a single ₹20/minute session tailored to your situation.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs text-[#DFC38D] font-semibold">
                  ₹20 / Minute • All 4 Languages
                </span>
                <Link
                  href="/pricing#booking-form"
                  className="px-4 py-2 rounded-full bg-[#C6A15B] text-[#171717] text-xs font-bold hover:bg-[#DFC38D] transition-all"
                >
                  Request Guidance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Life Problems We Help You Navigate (All 7 Topics with Individual Visuals) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#C6A15B]/45">
              <Sparkles className="w-3.5 h-3.5 text-[#A77B35]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                SEVEN CORE LIFE AREAS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424]">
              Life Challenges We Help You Navigate
            </h2>
            <p className="text-base text-[#777777]">
              Every major turning point in career, business, marriage, relationships, finance, health, and family receives structured Vedic analysis and practical remedies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {CONSULTATION_TOPICS.map((topic, index) => (
              <div
                key={topic.id}
                className={`rounded-2xl bg-[#FAF8F3] border border-[#C6A15B]/35 overflow-hidden shadow-card hover:shadow-luxury transition-all flex flex-col justify-between ${
                  index === 6 ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-12 lg:items-center" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-white ${
                    index === 6 ? "lg:col-span-5 aspect-[16/10] lg:h-full" : "aspect-[16/10]"
                  }`}
                >
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 border border-[#C6A15B]/50 text-[11px] font-semibold text-[#A77B35]">
                    {topic.sanskritTag}
                  </div>
                </div>

                <div
                  className={`p-6 space-y-3 flex-grow flex flex-col justify-between ${
                    index === 6 ? "lg:col-span-7 lg:p-8" : ""
                  }`}
                >
                  <div className="space-y-2.5">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#242424]">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-[#555555] leading-relaxed">
                      {topic.description}
                    </p>
                    <p className="text-xs text-[#A77B35] font-medium bg-white px-3 py-2 rounded-xl border border-[#C6A15B]/25">
                      <strong>Astrological Focus:</strong> {topic.astrologicalFocus}
                    </p>
                  </div>

                  <div className="pt-3 flex items-center justify-between border-t border-[#C6A15B]/20">
                    <Link
                      href="/pricing#booking-form"
                      className="text-xs font-semibold text-[#242424] hover:text-[#A77B35] inline-flex items-center gap-1.5"
                    >
                      <span>Consult on {topic.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A77B35]" />
                    </Link>
                    <span className="text-xs text-[#777777]">₹20/Min</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Why Choose Dr. Amit Deshmukh (Split-Screen Visual Composition) */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3] border-y border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/45">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  WHY CHOOSE DR. AMIT DESHMUKH
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424] leading-tight">
                Personal Attention, Classical Precision &amp; Practical Remedies
              </h2>

              <p className="text-base text-[#555555] leading-relaxed">
                Every chart and question is examined personally by Dr. Amit Deshmukh. Rather than generic computer-generated reports, you receive a thoughtful conversation focused on actionable clarity.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "9 Years of Dedicated Consultation Experience",
                    desc: "Consistent practice helping individuals and families navigate career, marriage, business, financial, and personal crossroads.",
                  },
                  {
                    title: "Traditional Knowledge + Practical Remedies",
                    desc: "Balanced Vedic Upayas that integrate naturally into modern professional and family life.",
                  },
                  {
                    title: "Multilingual Consultations (4 Languages)",
                    desc: "Express your concerns effortlessly in Hindi, English, Marathi, or Kannada.",
                  },
                  {
                    title: "Honest ₹20/Minute Pricing Structure",
                    desc: "Clear per-minute calculation with zero hidden packages or high-pressure upsells.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-white border border-[#C6A15B]/35 shadow-sm flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#A77B35] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#242424]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#777777] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Dual Composition (6 Cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="rounded-3xl overflow-hidden border-2 border-[#C6A15B]/50 shadow-luxury aspect-[16/10]">
                <img
                  src="/images/ai/consultation-room.jpg"
                  alt="Calm and sacred Vedic astrology consultation sanctuary"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 bg-white shadow-card">
                  <img
                    src="/images/photos/indian-temple-sanctuary-art.jpg"
                    alt="Sacred Vedic Upayas and Sattvic Spiritual Remedies"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3.5">
                    <p className="font-serif text-sm font-bold text-[#242424]">
                      Sattvic Vedic Remedies
                    </p>
                    <p className="text-xs text-[#777777]">
                      Ethical, calm &amp; constructive guidance
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 bg-white shadow-card">
                  <img
                    src="/images/photos/kundli-birth-chart-diagram.jpg"
                    alt="Detailed 12-Bhava Vedic Janam Kundli chart analysis"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3.5">
                    <p className="font-serif text-sm font-bold text-[#242424]">
                      1-on-1 Chart Deep Dive
                    </p>
                    <p className="text-xs text-[#777777]">
                      Lagna, Navamsha &amp; Dasha timing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: How Consultation Works (3 Illustrated Photographic Steps) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#C6A15B]/45">
              <Clock className="w-3.5 h-3.5 text-[#A77B35]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                HOW CONSULTATION WORKS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424]">
              Three Simple Steps to Personal Clarity
            </h2>
            <p className="text-base text-[#777777]">
              Connect from anywhere via Voice Call, Video Call, or WhatsApp between 10:00 AM and 6:00 PM (Monday to Sunday).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 01",
                title: "Choose Service, Language & Duration",
                desc: "Select Vedic Astrology, Prashna Kundali, Numerology, Vastu, or Palm Reading, and pick your preferred duration at ₹20/minute.",
                img: "/images/photos/consultation-three-steps.jpg",
                alt: "Step 1: Select consultation service and duration",
              },
              {
                step: "Step 02",
                title: "Share Birth Details or Question",
                desc: "Provide your date, time, and place of birth—or simply state your question for Prashna Kundali or share palm/floor-plan images.",
                img: "/images/ai/vedic-kundli-scroll.jpg",
                alt: "Step 2: Vedic Kundli chart and birth details preparation",
              },
              {
                step: "Step 03",
                title: "1-on-1 Consultation & Remedies",
                desc: "Speak directly with Dr. Amit Deshmukh via Voice Call, Video Call, or WhatsApp and receive clear explanations and practical remedies.",
                img: "/images/photos/consultation-modes-trio.jpg",
                alt: "Step 3: Live consultation via Voice, Video, or WhatsApp",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl bg-[#FAF8F3] border border-[#C6A15B]/40 overflow-hidden shadow-card flex flex-col justify-between"
              >
                <div className="aspect-[16/10] bg-white overflow-hidden border-b border-[#C6A15B]/25">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7 space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#C6A15B]/45 text-xs font-bold text-[#A77B35]">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#242424]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Premium Consultation Pricing Section (₹20/Minute + Visuals) */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3] border-y border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Pricing Visual Showcase (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/45">
                <IndianRupee className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  AFFORDABLE &amp; TRANSPARENT PRICING
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424] leading-tight">
                Consultation Price: ₹20 / Minute
              </h2>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                All consultation durations are calculated directly from the flat{" "}
                <strong>₹20 per-minute rate</strong>. Choose the exact duration that matches the depth of your questions.
              </p>

              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/45 shadow-card bg-white">
                <img
                  src="/images/photos/pricing-transparency-rate.jpg"
                  alt="₹20 per minute transparent consultation pricing emblem"
                  className="w-full h-56 object-cover"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 shadow-card bg-white grid grid-cols-12 items-center">
                <div className="col-span-5 h-full">
                  <img
                    src="/images/ai/prashna-consultation.jpg"
                    alt="Traditional astrologer examining horoscope chart"
                    className="w-full h-full object-cover min-h-[120px]"
                  />
                </div>
                <div className="col-span-7 p-4 space-y-1">
                  <p className="text-xs uppercase tracking-wider text-[#A77B35] font-semibold">
                    Daily Consultation Hours
                  </p>
                  <p className="font-serif text-base font-bold text-[#242424]">
                    Monday to Sunday: 10 AM – 6 PM
                  </p>
                  <p className="text-xs text-[#777777]">
                    Voice Call • Video Call • WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Right 6 Calculated Duration Cards (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PRICING_TIERS.map((tier) => (
                  <div
                    key={tier.minutes}
                    className={`rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                      tier.popular
                        ? "bg-[#171717] text-white border-[#C6A15B] shadow-luxury"
                        : "bg-white text-[#242424] border-[#C6A15B]/40 shadow-card"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider ${
                            tier.popular ? "text-[#DFC38D]" : "text-[#A77B35]"
                          }`}
                        >
                          {tier.minutes} Minutes
                        </span>
                        {tier.popular && (
                          <span className="px-2 py-0.5 rounded-full bg-[#C6A15B] text-[#171717] text-[10px] font-bold">
                            Recommended
                          </span>
                        )}
                      </div>

                      <p className="font-serif text-3xl font-bold">
                        ₹{tier.price.toLocaleString("en-IN")}
                      </p>

                      <p
                        className={`text-sm font-serif font-semibold ${
                          tier.popular ? "text-white" : "text-[#242424]"
                        }`}
                      >
                        {tier.title}
                      </p>

                      <p
                        className={`text-xs leading-relaxed ${
                          tier.popular ? "text-white/75" : "text-[#777777]"
                        }`}
                      >
                        {tier.idealFor}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#C6A15B]/25">
                      <Link
                        href={`/pricing?minutes=${tier.minutes}#booking-form`}
                        className={`block w-full py-2.5 rounded-xl text-center text-xs font-semibold transition-all ${
                          tier.popular
                            ? "bg-gradient-to-r from-[#C6A15B] to-[#DFC38D] text-[#171717]"
                            : "bg-[#FAF8F3] border border-[#C6A15B]/45 text-[#A77B35] hover:bg-[#F4EBDD]"
                        }`}
                      >
                        Select {tier.minutes} Mins (₹{tier.price.toLocaleString("en-IN")})
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#C6A15B]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-[#555555]">
                  <strong>Note:</strong> All prices above are calculated directly from the{" "}
                  <span className="text-[#A77B35] font-semibold">₹20 per-minute rate</span>.
                </p>
                <Link
                  href="/pricing"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white text-xs sm:text-sm font-semibold shrink-0 shadow-sm"
                >
                  Explore Pricing &amp; Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Customer Testimonials (5 Sample Testimonials with Visual Cards) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#C6A15B]/45">
                <Star className="w-3.5 h-3.5 text-[#A77B35] fill-[#C6A15B]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  5.0 PROFILE RATING • SAMPLE TESTIMONIALS
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424]">
                Client Reflections &amp; Consultation Feedback
              </h2>
              <p className="text-sm text-[#777777]">
                Displayed as sample testimonials representing consultation feedback topics until verified customer reviews are supplied.
              </p>
            </div>

            <Link
              href="/reviews-contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FAF8F3] border border-[#C6A15B] text-sm font-semibold text-[#A77B35] hover:bg-[#F4EBDD] transition-all w-fit"
            >
              <span>View All Reviews &amp; Contact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SAMPLE_TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-[#FAF8F3] border border-[#C6A15B]/35 overflow-hidden shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/9] bg-white border-b border-[#C6A15B]/25 overflow-hidden">
                    <img
                      src={item.artImage}
                      alt={`Sample testimonial visual card for ${item.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#C6A15B]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#C6A15B] text-[#C6A15B]"
                          />
                        ))}
                      </div>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white border border-[#C6A15B]/35 text-[#777777]">
                        Sample Testimonial
                      </span>
                    </div>

                    <p className="font-editorial italic text-xl text-[#242424] leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-white border-t border-[#F4EBDD] flex items-center justify-between">
                  <div>
                    <p className="font-serif text-base font-bold text-[#242424]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#A77B35]">{item.serviceTag}</p>
                  </div>
                  <span className="font-serif text-sm font-bold text-[#242424]">
                    5.0 ★
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Frequently Asked Questions (with Astrology Illustration) */}
      <InteractiveFAQ
        title="Common Questions About Astrological Consultations"
        subtitle="Clear answers regarding our ₹20/minute pricing, consultation modes, languages, and how Dr. Amit Deshmukh prepares your birth or horary chart."
        faqs={HOME_FAQS}
        visualImage="/images/photos/faq-sacred-scroll.jpg"
        visualAlt="Sacred Vedic Jyotish FAQ Illustration"
        visualCaption="Transparent ₹20/Min Guidance • 10 AM – 6 PM"
      />

      {/* SECTION 11: Final Consultation CTA (with Lord Krishna Divine Artwork) */}
      <DivineKrishnaCTA
        title="Begin Your Journey Toward Clarity and Peace of Mind"
        description="Whether you are navigating a career transition, evaluating a marriage match, planning business growth, or harmonizing your home with Vastu, consult Dr. Amit Deshmukh for thoughtful Vedic guidance."
        krishnaImage="/images/ai/krishna-golden-aura.jpg"
        krishnaAlt="Lord Krishna surrounded by a radiant golden divine lotus aura"
      />
    </div>
  );
}
