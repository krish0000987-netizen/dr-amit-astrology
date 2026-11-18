import React from "react";
import Link from "next/link";
import { Calendar, MessageCircle, Phone, Sparkles } from "lucide-react";
import { BRAND_INFO } from "@/data/siteData";

interface DivineKrishnaCTAProps {
  badge?: string;
  title: string;
  description: string;
  krishnaImage: string;
  krishnaAlt: string;
  sanskritShloka?: string;
  secondaryArt?: string;
}

export default function DivineKrishnaCTA({
  badge = "DIVINE GUIDANCE • ₹20 PER MINUTE CONSULTATION",
  title,
  description,
  krishnaImage,
  krishnaAlt,
  sanskritShloka = "॥ योगः कर्मसु कौशलम् • श्री कृष्ण शरणम् मम ॥",
  secondaryArt = "/images/photos/krishna-peacock-flute-emblem.jpg",
}: DivineKrishnaCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF8F3] to-white relative overflow-hidden border-t border-[#C6A15B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#171717] text-white border border-[#C6A15B]/55 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Visual Composition: Lord Krishna Artwork + Overlapping Sacred Emblem */}
          <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-[440px]">
            <img
              src={krishnaImage}
              alt={krishnaAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#171717]/20 lg:to-[#171717]" />

            {/* Overlapping Sacred Medallion */}
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-[#171717]/90 backdrop-blur-md border border-[#C6A15B]/60 rounded-2xl p-3.5 flex items-center gap-3.5 shadow-xl max-w-xs">
              <img
                src={secondaryArt}
                alt="Sacred Bansuri & Peacock Feather Emblem"
                className="w-14 h-14 rounded-xl object-cover border border-[#C6A15B]/40 shrink-0"
              />
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#DFC38D] font-semibold">
                  Sacred Vedic Tradition
                </p>
                <p className="font-editorial italic text-sm text-white/90 mt-0.5">
                  {sanskritShloka}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content & Conversion Actions */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C6A15B]/45 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC38D]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#DFC38D] font-semibold">
                {badge}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              {title}
            </h2>

            <p className="text-base text-[#FAF8F3]/85 leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Quick Consultation Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-[#DFC38D] uppercase tracking-wider font-semibold">
                  Consultation Rate
                </p>
                <p className="font-serif text-lg font-bold text-white mt-0.5">
                  ₹20 / Minute
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-[#DFC38D] uppercase tracking-wider font-semibold">
                  Daily Timings
                </p>
                <p className="font-serif text-lg font-bold text-white mt-0.5">
                  10 AM – 6 PM
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                <p className="text-xs text-[#DFC38D] uppercase tracking-wider font-semibold">
                  Languages
                </p>
                <p className="font-serif text-sm font-bold text-white mt-1">
                  Hindi • English • Marathi • Kannada
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/pricing#booking-form"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] via-[#DFC38D] to-[#A77B35] text-[#171717] font-semibold text-sm shadow-lg hover:scale-[1.02] transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>

              <a
                href={BRAND_INFO.contactPlaceholders.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 border border-[#C6A15B]/60 text-white font-medium text-sm hover:bg-white/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#DFC38D]" />
                <span>WhatsApp Now</span>
              </a>

              <a
                href={BRAND_INFO.contactPlaceholders.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full border border-white/25 text-white/90 font-medium text-sm hover:border-[#DFC38D] hover:text-[#DFC38D] transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
