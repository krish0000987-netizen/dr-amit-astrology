"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Calendar, MessageCircle } from "lucide-react";
import { BRAND_INFO } from "@/data/siteData";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          className="w-11 h-11 rounded-full bg-white/95 backdrop-blur border border-[#C6A15B]/55 text-[#A77B35] shadow-lg flex items-center justify-center hover:bg-[#FAF8F3] hover:scale-105 transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={BRAND_INFO.contactPlaceholders.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Consultation"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#171717] text-white border border-[#C6A15B]/60 shadow-xl hover:bg-[#242424] transition-all"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <MessageCircle className="w-4 h-4 text-[#DFC38D]" />
        <span className="text-xs font-semibold tracking-wide">WhatsApp Now</span>
      </a>

      {/* Floating Book Consultation CTA */}
      <Link
        href="/pricing#booking-form"
        className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#C6A15B] via-[#DFC38D] to-[#A77B35] text-[#171717] font-semibold text-xs sm:text-sm shadow-2xl border border-white/40 hover:scale-[1.03] transition-all"
      >
        <Calendar className="w-4 h-4 text-[#171717]" />
        <span>Book Consultation • ₹20/Min</span>
      </Link>
    </div>
  );
}
