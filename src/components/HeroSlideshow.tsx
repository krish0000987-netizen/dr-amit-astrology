"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Compass,
  Award,
  IndianRupee,
  Globe,
  Sparkles,
} from "lucide-react";
import { HERO_SLIDES } from "@/data/siteData";

const ROTATING_HEADINGS = [
  "Find Clarity in Life Through the Wisdom of Astrology",
  "Your Stars, Your Journey, Your Guidance.",
  "Discover the Path Written in Your Stars.",
  "Ancient Vedic Wisdom for Modern Life.",
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Strict 3-second automatic slideshow requirement
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const nextIndex = (currentIndex + 1) % HERO_SLIDES.length;
  const activeHeading = ROTATING_HEADINGS[currentIndex % ROTATING_HEADINGS.length];

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen w-full overflow-hidden bg-[#171717] flex items-center"
      aria-label="Lord Krishna Divine Vedic Astrology Hero Slideshow"
    >
      {/* Background Slides with 3-second Crossfade & Cinematic Zoom */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover object-center transition-transform duration-[4500ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          );
        })}

        {/* Preload Next Slide for Zero Flicker */}
        <img
          src={HERO_SLIDES[nextIndex].image}
          alt=""
          aria-hidden="true"
          className="hidden"
        />

        {/* Multi-layered Cinematic Readability Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#171717]/90 via-[#171717]/72 to-[#171717]/35" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#171717]/85 via-transparent to-[#171717]/50" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Main Editorial Typography & CTAs (8 Cols) */}
          <div className="lg:col-span-8 space-y-6 text-white">
            {/* Small Divine Label */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C6A15B]/55">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC38D]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#DFC38D]">
                DIVINE GUIDANCE • VEDIC WISDOM • LIFE CLARITY
              </span>
            </div>

            {/* Primary Heading + Rotating Spiritual Tagline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-white">
                Find Clarity in Life Through the Wisdom of Astrology
              </h1>
              <p className="font-editorial italic text-xl sm:text-2xl lg:text-3xl text-[#DFC38D] transition-all duration-500 min-h-[2.25rem]">
                &ldquo;{activeHeading}&rdquo;
              </p>
            </div>

            {/* Premium Gold Decorative Divider */}
            <div className="flex items-center gap-3 py-1">
              <div className="h-[1.5px] w-16 bg-gradient-to-r from-[#C6A15B] to-[#DFC38D]" />
              <span className="text-[#DFC38D] text-sm">✦</span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#FAF8F3]/80 font-medium">
                Dr. Amit Deshmukh Astrology Consultation
              </span>
              <span className="text-[#DFC38D] text-sm">✦</span>
              <div className="h-[1.5px] w-16 bg-gradient-to-l from-transparent to-[#C6A15B]" />
            </div>

            {/* Required Description */}
            <p className="text-base sm:text-lg text-[#FAF8F3]/90 max-w-2xl leading-relaxed font-normal">
              Get personalized astrological guidance from Dr. Amit Deshmukh, combining traditional Vedic knowledge with practical remedies to help you navigate life&apos;s important decisions.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/pricing#booking-form"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] via-[#DFC38D] to-[#A77B35] text-[#171717] font-semibold text-sm sm:text-base shadow-xl hover:scale-[1.02] transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/10 backdrop-blur-md border border-[#C6A15B]/65 text-white font-medium text-sm sm:text-base hover:bg-white/20 transition-all"
              >
                <Compass className="w-4 h-4 text-[#DFC38D]" />
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Required Below-CTA Trust & Experience Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-[#C6A15B]/35">
                <div className="w-9 h-9 rounded-lg bg-[#C6A15B]/25 border border-[#C6A15B]/50 flex items-center justify-center text-[#DFC38D] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-serif font-bold text-white">
                    9+ Years of Experience
                  </p>
                  <p className="text-[11px] text-[#FAF8F3]/75">
                    Traditional Vedic Practice
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-[#C6A15B]/35">
                <div className="w-9 h-9 rounded-lg bg-[#C6A15B]/25 border border-[#C6A15B]/50 flex items-center justify-center text-[#DFC38D] shrink-0">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-serif font-bold text-white">
                    ₹20/Minute Consultation
                  </p>
                  <p className="text-[11px] text-[#FAF8F3]/75">
                    Transparent Per-Minute Rate
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-[#C6A15B]/35">
                <div className="w-9 h-9 rounded-lg bg-[#C6A15B]/25 border border-[#C6A15B]/50 flex items-center justify-center text-[#DFC38D] shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-serif font-bold text-white">
                    4 Languages Supported
                  </p>
                  <p className="text-[11px] text-[#FAF8F3]/75">
                    Hindi • English • Marathi • Kannada
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Active Slide Framed Devotional Showcase Card (4 Cols) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-[#C6A15B]/50 p-4 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] border border-[#C6A15B]/40">
                <img
                  src={HERO_SLIDES[currentIndex].image}
                  alt={HERO_SLIDES[currentIndex].alt}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#DFC38D] font-semibold">
                    Slide 0{currentIndex + 1} / 0{HERO_SLIDES.length} • 3s Devotional Gallery
                  </span>
                  <p className="font-serif text-lg text-white font-semibold mt-0.5">
                    {HERO_SLIDES[currentIndex].caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Slideshow Controls: Navigation Arrows & Minimal Slide Indicators */}
        <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.caption}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-10 bg-[#C6A15B]"
                    : "w-2.5 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
            <span className="ml-2 text-xs text-white/75 hidden sm:inline">
              {HERO_SLIDES[currentIndex].caption}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] uppercase tracking-wider text-white/85 hover:bg-white/20 transition-colors"
            >
              {isPaused ? "Resume 3s Auto" : "Pause 3s Auto"}
            </button>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Lord Krishna slide"
              className="w-10 h-10 rounded-full bg-white/10 border border-[#C6A15B]/50 text-white flex items-center justify-center hover:bg-[#C6A15B] hover:text-[#171717] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Lord Krishna slide"
              className="w-10 h-10 rounded-full bg-white/10 border border-[#C6A15B]/50 text-white flex items-center justify-center hover:bg-[#C6A15B] hover:text-[#171717] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
