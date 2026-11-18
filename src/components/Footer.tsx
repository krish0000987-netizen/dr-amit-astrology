"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  Globe,
  IndianRupee,
  MessageCircle,
  Phone,
  Mail,
  Sparkles,
  X,
} from "lucide-react";
import { BRAND_INFO } from "@/data/siteData";

const LEGAL_CONTENT: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "Dr. Amit Deshmukh Astrology Consultation respects your personal privacy and treats all birth chart details, date/time/place of birth, palm photographs, floor plans, and personal life questions with strict confidentiality.",
      "Information submitted through the consultation booking form or contact form is used solely to prepare your astrological chart and coordinate your requested Voice Call, Video Call, or WhatsApp consultation.",
      "We never sell, rent, or disclose client birth details or consultation discussions to third parties.",
    ],
  },
  terms: {
    title: "Terms & Conditions",
    body: [
      "Consultations with Dr. Amit Deshmukh are billed at the transparent rate of ₹20 per minute (e.g., 5 minutes = ₹100, 15 minutes = ₹300, 30 minutes = ₹600, 60 minutes = ₹1,200).",
      "Consultation hours are Monday to Sunday, 10:00 AM to 6:00 PM IST. Submitting an online consultation request logs your preferred slot; the appointment is finalized upon direct scheduling confirmation via WhatsApp or telephone.",
      "Consultations are conducted in your chosen language among Hindi, English, Marathi, or Kannada.",
    ],
  },
  disclaimer: {
    title: "Astrological Disclaimer",
    body: [
      "Astrological consultations, Kundli readings, Prashna interpretations, Numerology, Vastu Shastra, and Palmistry provided by Dr. Amit Deshmukh are based on traditional Vedic Jyotish principles and 9 years of consultation experience.",
      "Astrological guidance and traditional remedies are intended for spiritual insight, reflective clarity, and personal decision support. They do not substitute for licensed medical, legal, psychiatric, or regulated financial advice.",
    ],
  },
};

export default function Footer() {
  const [activeLegal, setActiveLegal] = useState<string | null>(null);

  return (
    <footer className="relative bg-[#FAF8F3] border-t border-[#C6A15B]/35 text-[#242424] overflow-hidden">
      {/* Decorative Lord Krishna Peacock & Flute Watermark */}
      <div className="pointer-events-none select-none absolute -right-24 -bottom-24 w-[480px] h-[480px] opacity-[0.07]">
        <img
          src="/images/photos/krishna-peacock-flute-emblem.jpg"
          alt="Decorative Lord Krishna flute and peacock feather emblem"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Top Gold Ornamental Divider */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        {/* Top Sacred Visual Banner inside Footer */}
        <div className="mb-14 rounded-2xl bg-white border border-[#C6A15B]/30 p-6 sm:p-8 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-3">
            <div className="relative rounded-xl overflow-hidden border border-[#C6A15B]/40 aspect-[16/10]">
              <img
                src="/images/ai/krishna-divine-grace.jpg"
                alt="Sacred golden bansuri flute and peacock feather of Lord Krishna"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-3">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#DFC38D] font-medium">
                  ॥ श्री कृष्ण शरणम् मम ॥
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-2">
            <p className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
              Sacred Vedic Counsel • 9 Years of Experience
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#242424]">
              Seek Clarity for Career, Marriage, Business &amp; Family Decisions
            </h3>
            <p className="text-sm text-[#777777] leading-relaxed">
              Consult directly with Dr. Amit Deshmukh in Hindi, English, Marathi, or Kannada at a transparent ₹20 per minute rate.
            </p>
          </div>
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              href="/pricing#booking-form"
              className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white text-center text-sm font-semibold shadow-md hover:brightness-105 transition-all"
            >
              Book Consultation
            </Link>
            <a
              href={BRAND_INFO.contactPlaceholders.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-5 rounded-xl border border-[#C6A15B] bg-[#FAF8F3] text-[#A77B35] text-center text-sm font-semibold hover:bg-[#F4EBDD] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C6A15B]/25">
          {/* Col 1: Brand Identity & Social Media (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-white border border-[#C6A15B] text-[#A77B35] flex items-center justify-center shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-[#242424]">
                  Dr. Amit Deshmukh
                </h2>
                <p className="text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                  Astrology Consultation
                </p>
              </div>
            </div>

            <p className="text-sm text-[#777777] leading-relaxed">
              Traditional Vedic wisdom and personalized astrological guidance for life&apos;s important decisions.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {BRAND_INFO.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-[#C6A15B]/35 text-[#242424]"
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.18em] text-[#A77B35] font-semibold mb-3">
                Connect &amp; Follow
              </p>
              <div className="flex items-center gap-2.5">
                {[
                  { name: "Instagram", href: "#instagram-placeholder" },
                  { name: "Facebook", href: "#facebook-placeholder" },
                  { name: "YouTube", href: "#youtube-placeholder" },
                  {
                    name: "WhatsApp",
                    href: BRAND_INFO.contactPlaceholders.whatsappHref,
                  },
                ].map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target={soc.name === "WhatsApp" ? "_blank" : undefined}
                    rel={soc.name === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#C6A15B]/35 text-xs font-medium text-[#242424] hover:border-[#A77B35] hover:text-[#A77B35] transition-colors"
                  >
                    {soc.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links - Part 1 (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#242424] border-b border-[#C6A15B]/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#777777] hover:text-[#A77B35] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#777777] hover:text-[#A77B35] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#777777] hover:text-[#A77B35] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[#777777] hover:text-[#A77B35] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/wallet" className="text-[#777777] hover:text-[#A77B35] transition-colors">
                  Consultation Wallet
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews-contact"
                  className="text-[#777777] hover:text-[#A77B35] transition-colors"
                >
                  Contact &amp; Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialized Astrology Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#242424] border-b border-[#C6A15B]/30 pb-2">
              Astrology Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/vedic-astrology"
                  className="text-[#777777] hover:text-[#A77B35] transition-colors"
                >
                  Vedic Astrology
                </Link>
              </li>
              <li>
                <Link
                  href="/prashna-kundali"
                  className="text-[#777777] hover:text-[#A77B35] transition-colors"
                >
                  Prashna Kundali
                </Link>
              </li>
              <li>
                <Link
                  href="/numerology"
                  className="text-[#777777] hover:text-[#A77B35] transition-colors"
                >
                  Numerology
                </Link>
              </li>
              <li>
                <Link
                  href="/vastu-consultation"
                  className="text-[#777777] hover:text-[#A77B35] transition-colors"
                >
                  Vastu
                </Link>
              </li>
              <li>
                <Link
                  href="/palm-reading"
                  className="text-[#777777] hover:text-[#A77B35] transition-colors"
                >
                  Palm Reading
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Consultation Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="font-serif text-base font-semibold text-[#242424] border-b border-[#C6A15B]/30 pb-2">
              Consultation Details
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#C6A15B]/40 text-[#A77B35] flex items-center justify-center shrink-0">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#242424]">₹20 Per Minute</p>
                  <p className="text-xs text-[#777777]">
                    5 mins (₹100) to 60 mins (₹1,200)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#C6A15B]/40 text-[#A77B35] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#242424]">Monday–Sunday</p>
                  <p className="text-xs text-[#777777]">10 AM–6 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#C6A15B]/40 text-[#A77B35] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#242424]">
                    {BRAND_INFO.contactPlaceholders.phoneDisplay}
                  </p>
                  <p className="text-xs text-[#777777]">
                    {BRAND_INFO.contactPlaceholders.emailDisplay}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>© 2026 Dr. Amit Deshmukh. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => setActiveLegal("privacy")}
              className="hover:text-[#A77B35] underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveLegal("terms")}
              className="hover:text-[#A77B35] underline-offset-4 hover:underline"
            >
              Terms &amp; Conditions
            </button>
            <button
              type="button"
              onClick={() => setActiveLegal("disclaimer")}
              className="hover:text-[#A77B35] underline-offset-4 hover:underline"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Legal Policy Modal */}
      {activeLegal && LEGAL_CONTENT[activeLegal] && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-[#C6A15B] max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#F4EBDD] pb-3">
              <h4 className="font-serif text-xl font-bold text-[#242424]">
                {LEGAL_CONTENT[activeLegal].title}
              </h4>
              <button
                type="button"
                onClick={() => setActiveLegal(null)}
                className="p-1.5 rounded-lg text-[#777777] hover:text-[#242424] hover:bg-[#FAF8F3]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-sm text-[#555555] leading-relaxed">
              {LEGAL_CONTENT[activeLegal].body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveLegal(null)}
                className="px-5 py-2 rounded-xl bg-[#FAF8F3] border border-[#C6A15B] text-xs font-semibold text-[#A77B35]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
