import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  IndianRupee,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import DivineKrishnaCTA from "@/components/DivineKrishnaCTA";
import { BRAND_INFO, PRIMARY_SERVICES } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Astrology Services – Vedic, Prashna, Numerology, Vastu & Palmistry",
  description:
    "Explore our five specialized astrology services by Dr. Amit Deshmukh: Vedic Astrology, Prashna Kundali, Numerology, Vastu Consultation, and Palm Reading at ₹20/minute.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white pt-24">
      {/* SECTION 1: Services Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F3] to-white border-b border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/50">
                <Compass className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  FIVE TRADITIONAL ASTROLOGY SERVICES • ₹20/MINUTE
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#242424] leading-[1.14]">
                Sacred Astrological Services Tailored to Your Life Questions
              </h1>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                Dr. Amit Deshmukh offers five distinct yet complementary consultation disciplines—Vedic Astrology, Prashna Kundali, Numerology, Vastu Consultation, and Palm Reading—available in Hindi, English, Marathi, and Kannada.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/pricing#booking-form"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white font-semibold text-sm shadow-lg hover:brightness-105 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation (₹20/Min)</span>
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

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 shadow-luxury aspect-[16/10]">
                <img
                  src="/images/ai/vedic-kundli-scroll.jpg"
                  alt="Authentic hand-drawn Vedic Janam Kundli chart and sacred objects"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/45 shadow-card aspect-[21/9]">
                <img
                  src="/images/photos/navagraha-planetary-cosmos.jpg"
                  alt="Navagraha Celestial Alignment Diagram"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Service Introduction & Selection Guide (with Visual Asset) */}
      <section className="py-16 bg-white border-b border-[#C6A15B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#FAF8F3] border border-[#C6A15B]/40 p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-[#C6A15B]/40 aspect-[16/10]">
              <img
                src="/images/ai/prashna-consultation.jpg"
                alt="Traditional astrologer studying horoscope manuscripts"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                HOW TO SELECT YOUR SERVICE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
                Every Discipline Answers a Unique Dimension of Your Journey
              </h2>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                Have your complete birth date, time, and city? Start with{" "}
                <strong>Vedic Astrology</strong>. Need an urgent answer or lack an exact birth time? Choose{" "}
                <strong>Prashna Kundali</strong>. Looking to align numbers, dates, or names? Explore{" "}
                <strong>Numerology</strong>. Harmonizing a home or workplace? Book{" "}
                <strong>Vastu Consultation</strong>. Prefer direct hand-line analysis? Select{" "}
                <strong>Palm Reading</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: All 5 Detailed Luxury Service Cards (Alternating Editorial Showcase) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {PRIMARY_SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-[#FAF8F3] border border-[#C6A15B]/40 shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                {/* Image Column (6 Cols) */}
                <div
                  className={`lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between gap-4 bg-white border-b lg:border-b-0 ${
                    isEven ? "lg:order-1 lg:border-r" : "lg:order-2 lg:border-l"
                  } border-[#C6A15B]/25`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-[#C6A15B]/40 aspect-[16/10]">
                    <img
                      src={service.cardImage}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-3.5 py-1 rounded-full bg-[#171717]/85 text-[#DFC38D] text-xs font-medium border border-[#C6A15B]/50">
                      0{index + 1} • {service.sanskritName}
                    </div>
                  </div>

                  {/* Secondary Technical Diagram Preview inside Card */}
                  <div className="rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/30 p-3 flex items-center gap-4">
                    <img
                      src={service.diagramImage}
                      alt={`${service.title} technical chart diagram`}
                      className="w-24 h-16 rounded-lg object-cover border border-[#C6A15B]/35 shrink-0 bg-white"
                    />
                    <div>
                      <p className="font-serif text-sm font-bold text-[#242424]">
                        {service.title} Methodology
                      </p>
                      <p className="text-xs text-[#777777]">
                        ₹20/Minute • Available in Hindi, English, Marathi &amp; Kannada
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text & CTAs Column (6 Cols) */}
                <div
                  className={`lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-4">
                    <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                      SERVICE 0{index + 1} OF 05
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                      {service.title}
                    </h2>
                    <p className="text-base font-semibold text-[#A77B35]">
                      {service.shortDescription}
                    </p>
                    <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="pt-2 space-y-2">
                      <p className="text-xs uppercase tracking-wider text-[#242424] font-bold">
                        What This Consultation Covers:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.keyHighlights.map((hl) => (
                          <div
                            key={hl}
                            className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#C6A15B]/25 text-xs text-[#242424]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#A77B35] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Required Learn More & Book Consultation Buttons */}
                  <div className="pt-4 border-t border-[#C6A15B]/25 flex flex-wrap items-center gap-3.5">
                    <Link
                      href={service.slug}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#C6A15B] text-[#242424] hover:border-[#A77B35] hover:text-[#A77B35] text-xs sm:text-sm font-semibold transition-all"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 text-[#A77B35]" />
                    </Link>

                    <Link
                      href={`/pricing?service=${encodeURIComponent(service.title)}#booking-form`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white text-xs sm:text-sm font-semibold shadow-md hover:brightness-105 transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Consultation</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: Service Benefits & Pricing Clarity (with Visual Assets) */}
      <section className="py-20 bg-[#FAF8F3] border-t border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                TRANSPARENT &amp; ACCESSIBLE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Unified ₹20/Minute Rate Across All Five Services
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                Whether you request a Vedic Kundli analysis, a Prashna horary reading, a Numerology session, a Vastu review, or a Palm Reading consultation, our pricing remains a straightforward ₹20 per minute.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { min: "5 Mins", fee: "₹100" },
                  { min: "10 Mins", fee: "₹200" },
                  { min: "15 Mins", fee: "₹300" },
                  { min: "20 Mins", fee: "₹400" },
                  { min: "30 Mins", fee: "₹600" },
                  { min: "60 Mins", fee: "₹1,200" },
                ].map((b) => (
                  <div
                    key={b.min}
                    className="p-3.5 rounded-xl bg-white border border-[#C6A15B]/35 text-center"
                  >
                    <p className="text-xs text-[#777777]">{b.min}</p>
                    <p className="font-serif text-xl font-bold text-[#A77B35]">
                      {b.fee}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 bg-white shadow-card">
                <img
                  src="/images/photos/pricing-transparency-rate.jpg"
                  alt="₹20 per minute standard rate illustration"
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <p className="font-serif text-base font-bold text-[#242424]">
                    Flat ₹20 / Minute
                  </p>
                  <p className="text-xs text-[#777777]">
                    No hidden surcharges by service type
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 bg-white shadow-card">
                <img
                  src="/images/photos/consultation-modes-trio.jpg"
                  alt="Voice Call, Video Call, and WhatsApp consultation modes"
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <p className="font-serif text-base font-bold text-[#242424]">
                    Voice, Video &amp; WhatsApp
                  </p>
                  <p className="text-xs text-[#777777]">
                    Open Monday to Sunday • 10 AM – 6 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Final CTA with Lord Krishna Artwork */}
      <DivineKrishnaCTA
        title="Choose Your Consultation Service & Speak with Dr. Amit Deshmukh"
        description="Book a 1-on-1 session in Hindi, English, Marathi, or Kannada and receive traditional Vedic insights and practical remedies."
        krishnaImage="/images/ai/krishna-vrindavan-flute.jpg"
        krishnaAlt="Lord Krishna playing golden bansuri flute in sacred Vrindavan"
      />
    </div>
  );
}
