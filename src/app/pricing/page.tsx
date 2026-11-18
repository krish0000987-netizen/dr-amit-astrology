"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  IndianRupee,
  MessageCircle,
  Wallet,
  PlusCircle,
} from "lucide-react";
import BookingForm from "@/components/BookingForm";
import DivineKrishnaCTA from "@/components/DivineKrishnaCTA";
import { BRAND_INFO, PRICING_TIERS } from "@/data/siteData";
import { useWallet } from "@/context/WalletContext";

export default function PricingPage() {
  const { balance, availableMinutes, openWalletModal } = useWallet();

  return (
    <div className="bg-white pt-24">
      {/* SECTION 1: Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F3] to-white border-b border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/50">
                <IndianRupee className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  CONSULTATION PRICE • ₹20 / MINUTE + WALLET SYSTEM
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#242424] leading-[1.14]">
                Personalized Astrological Guidance at an Affordable Price
              </h1>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                Consult directly with Dr. Amit Deshmukh (9 years experience) across Vedic Astrology, Prashna Kundali, Numerology, Vastu Consultation, and Palm Reading at a straightforward, transparent rate of{" "}
                <strong>₹20 per minute</strong>. Recharge your Consultation Wallet or book directly below.
              </p>

              {/* Live Wallet Quick Bar */}
              <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#C6A15B]/50 flex flex-wrap items-center justify-between gap-4 max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#171717] text-[#DFC38D] flex items-center justify-center">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#777777]">Your Wallet Balance</p>
                    <p className="font-serif text-lg font-bold text-[#242424]">
                      ₹{balance.toLocaleString("en-IN")} ({availableMinutes} Mins Available)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => openWalletModal(300)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white text-xs font-semibold shadow-sm"
                  >
                    + Top Up Wallet
                  </button>
                  <Link
                    href="/wallet"
                    className="px-3.5 py-2 rounded-xl bg-white border border-[#C6A15B]/45 text-xs font-semibold text-[#242424]"
                  >
                    Passbook
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="#booking-form"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white font-semibold text-sm shadow-lg hover:brightness-105 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Jump to Booking Form</span>
                </a>
                <a
                  href={BRAND_INFO.contactPlaceholders.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-[#C6A15B] text-[#A77B35] font-semibold text-sm hover:bg-[#FAF8F3] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-7 rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 shadow-luxury aspect-[4/5]">
                <img
                  src="/images/ai/consultation-room.jpg"
                  alt="Premium spiritual consultation sanctuary of Dr. Amit Deshmukh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/45 bg-[#FAF8F3] shadow-card aspect-[4/5]">
                <img
                  src="/images/photos/pricing-transparency-rate.jpg"
                  alt="₹20 Per Minute Consultation Rate Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Master Pricing Card & 6 Duration Calculations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Featured Master Rate Card */}
          <div className="rounded-3xl bg-[#171717] text-white border-2 border-[#C6A15B] p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3 border-b lg:border-b-0 lg:border-r border-white/15 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-xs uppercase tracking-[0.24em] text-[#DFC38D] font-bold">
                CONSULTATION PRICE
              </span>
              <p className="font-serif text-5xl sm:text-6xl font-bold text-white">
                ₹20 <span className="text-2xl sm:text-3xl text-[#DFC38D]">/ MINUTE</span>
              </p>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Note: All session durations listed below are calculated directly from the flat ₹20 per-minute rate.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-2.5 text-sm">
              {[
                "5 Minutes – ₹100",
                "10 Minutes – ₹200",
                "15 Minutes – ₹300",
                "20 Minutes – ₹400",
                "30 Minutes – ₹600",
                "60 Minutes – ₹1,200",
              ].map((line) => (
                <div
                  key={line}
                  className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/10 border border-[#C6A15B]/35"
                >
                  <span className="font-serif font-semibold text-white">
                    {line.split("–")[0]}
                  </span>
                  <span className="font-serif font-bold text-[#DFC38D]">
                    {line.split("–")[1]}
                  </span>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-[#C6A15B]/50">
              <img
                src="/images/ai/vedic-kundli-scroll.jpg"
                alt="Vedic Kundli scroll and consultation preparation"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>

          {/* 6 Detailed Duration Cards with Wallet Recharge + Booking Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.minutes}
                className={`rounded-3xl p-7 border transition-all flex flex-col justify-between ${
                  tier.popular
                    ? "bg-[#FAF8F3] border-2 border-[#A77B35] shadow-luxury"
                    : "bg-white border-[#C6A15B]/40 shadow-card"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#F4EBDD] text-[#A77B35] text-xs font-bold">
                      {tier.minutes} Minutes
                    </span>
                    <span className="text-xs text-[#777777]">
                      {tier.minutes} × ₹20/min
                    </span>
                  </div>

                  <p className="font-serif text-4xl font-bold text-[#242424]">
                    ₹{tier.price.toLocaleString("en-IN")}
                  </p>

                  <h3 className="font-serif text-xl font-bold text-[#242424]">
                    {tier.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed">
                    {tier.idealFor}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#C6A15B]/25 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => openWalletModal(tier.price)}
                    className="w-full py-2.5 rounded-xl bg-[#171717] text-white text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#242424] transition-all"
                  >
                    <PlusCircle className="w-3.5 h-3.5 text-[#DFC38D]" />
                    <span>
                      Add ₹{tier.price.toLocaleString("en-IN")} ({tier.minutes}m) to Wallet
                    </span>
                  </button>

                  <a
                    href="#booking-form"
                    className="block w-full py-2.5 rounded-xl bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white text-center text-xs font-semibold shadow-sm hover:brightness-105 transition-all"
                  >
                    Book {tier.minutes}-Minute Session
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Availability & Consultation Modes */}
      <section className="py-20 bg-[#FAF8F3] border-y border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white border border-[#C6A15B]/40 overflow-hidden shadow-card">
              <img
                src="/images/photos/availability-schedule-calendar.jpg"
                alt="Consultation Availability Monday to Sunday 10 AM to 6 PM"
                className="w-full h-64 object-cover border-b border-[#C6A15B]/25"
              />
              <div className="p-7 space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                  AVAILABILITY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
                  Monday to Sunday: 10 AM – 6 PM
                </h2>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Consultations are available all seven days of the week between 10:00 AM and 6:00 PM IST. Choose your preferred date and time slot in the booking form below.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-[#C6A15B]/40 overflow-hidden shadow-card">
              <img
                src="/images/photos/consultation-modes-trio.jpg"
                alt="Voice Call, Video Call, and WhatsApp Consultation Modes"
                className="w-full h-64 object-cover border-b border-[#C6A15B]/25"
              />
              <div className="p-7 space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                  CONSULTATION MODES
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
                  Voice Call • Video Call • WhatsApp
                </h2>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Connect in Hindi, English, Marathi, or Kannada using whichever communication mode is most convenient for you and your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Full Validated Consultation Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
              REQUEST YOUR CONSULTATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
              Complete Your Consultation Booking Request
            </h2>
            <p className="text-sm sm:text-base text-[#777777]">
              Deduct your session fee directly from your Consultation Wallet or coordinate payment during slot confirmation.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* SECTION 5: Final CTA with Lord Krishna Image */}
      <DivineKrishnaCTA
        title="Need Immediate Assistance Scheduling Your Session?"
        description="Connect via WhatsApp to share your birth details or question and coordinate your ₹20/minute consultation with Dr. Amit Deshmukh."
        krishnaImage="/images/ai/krishna-golden-aura.jpg"
        krishnaAlt="Lord Krishna surrounded by a golden divine aura"
      />
    </div>
  );
}
