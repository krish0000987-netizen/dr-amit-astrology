"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface InteractiveFAQProps {
  badge?: string;
  title: string;
  subtitle: string;
  faqs: FAQItem[];
  visualImage: string;
  visualAlt: string;
  visualCaption: string;
}

export default function InteractiveFAQ({
  badge = "FREQUENTLY ASKED QUESTIONS",
  title,
  subtitle,
  faqs,
  visualImage,
  visualAlt,
  visualCaption,
}: InteractiveFAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-20 bg-white border-t border-[#C6A15B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial Visual Composition (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#C6A15B]/45">
              <Sparkles className="w-3.5 h-3.5 text-[#A77B35]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                {badge}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424] leading-tight">
              {title}
            </h2>

            <p className="text-base text-[#777777] leading-relaxed">{subtitle}</p>

            {/* Framed Visual Artwork Card */}
            <div className="rounded-2xl bg-[#FAF8F3] border border-[#C6A15B]/40 p-4 shadow-card space-y-3">
              <div className="rounded-xl overflow-hidden border border-[#C6A15B]/30 aspect-[4/3] bg-white">
                <img
                  src={visualImage}
                  alt={visualAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-serif font-semibold text-[#242424]">
                  {visualCaption}
                </span>
                <Link
                  href="/pricing#booking-form"
                  className="text-xs font-semibold text-[#A77B35] hover:underline"
                >
                  Ask Dr. Amit Directly →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion Items (7 Cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "bg-[#FAF8F3] border-[#C6A15B] shadow-card"
                      : "bg-white border-[#C6A15B]/30 hover:border-[#C6A15B]/60"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-7 h-7 rounded-full bg-[#F4EBDD] text-[#A77B35] text-xs font-serif font-bold flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="font-serif text-lg font-semibold text-[#242424]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A77B35] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#555555] leading-relaxed border-t border-[#C6A15B]/20 ml-10 mr-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
