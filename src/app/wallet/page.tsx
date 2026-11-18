"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wallet,
  PlusCircle,
  Clock,
  CheckCircle2,
  ArrowDownLeft,
  ArrowUpRight,
  Calendar,
  Smartphone,
  CreditCard,
  Building2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useWallet } from "@/context/WalletContext";
import { BRAND_INFO, PRICING_TIERS } from "@/data/siteData";
import DivineKrishnaCTA from "@/components/DivineKrishnaCTA";

const PAYMENT_OPTIONS = [
  { id: "UPI (GPay / PhonePe / Paytm)", label: "UPI Instant", icon: Smartphone },
  { id: "Debit / Credit Card", label: "Debit / Credit Card", icon: CreditCard },
  { id: "Net Banking", label: "Net Banking", icon: Building2 },
];

export default function WalletPage() {
  const { balance, availableMinutes, transactions, rechargeWallet } =
    useWallet();
  const [selectedAmount, setSelectedAmount] = useState<number>(300);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>(
    PAYMENT_OPTIONS[0].id
  );
  const [successAmount, setSuccessAmount] = useState<number | null>(null);

  const finalAmount =
    customAmount.trim() !== "" ? Number(customAmount) || 0 : selectedAmount;
  const minutesAdded = Math.floor(finalAmount / BRAND_INFO.ratePerMinute);

  const handleRecharge = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount < 20) return;
    rechargeWallet(finalAmount, paymentMethod);
    setSuccessAmount(finalAmount);
    setTimeout(() => setSuccessAmount(null), 5000);
  };

  return (
    <div className="bg-white pt-24">
      {/* SECTION 1: Wallet Hero Section with Live Balance & Indian Astrology Photography */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F3] to-white border-b border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/50">
                <Wallet className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  ASTROLOGY CONSULTATION WALLET • ₹20 / MINUTE
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#242424] leading-[1.14]">
                Recharge Your Consultation Wallet for Instant ₹20/Min Guidance
              </h1>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                Add consultation credits at a flat <strong>₹20 per minute</strong> rate and book Voice Call, Video Call, or WhatsApp sessions with Dr. Amit Deshmukh across Vedic Astrology, Prashna Kundali, Numerology, Vastu, and Palm Reading.
              </p>

              {/* Live Wallet Balance Card */}
              <div className="rounded-3xl bg-[#171717] text-white border-2 border-[#C6A15B] p-6 sm:p-8 shadow-2xl grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 space-y-1.5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#DFC38D] font-semibold">
                    Current Wallet Balance
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-white">
                      ₹{balance.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm font-semibold text-[#DFC38D]">
                      ({availableMinutes} Minutes Available)
                    </span>
                  </div>
                  <p className="text-xs text-white/75">
                    Calculated at ₹20/minute • Valid across all 5 services
                  </p>
                </div>

                <div className="sm:col-span-5 flex flex-col gap-2.5">
                  <Link
                    href="/pricing#booking-form"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#C6A15B] to-[#DFC38D] text-[#171717] text-center text-xs sm:text-sm font-bold shadow-md hover:brightness-105 transition-all"
                  >
                    Book Using Wallet Balance
                  </Link>
                  <a
                    href="#recharge-section"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/10 border border-[#C6A15B]/50 text-white text-center text-xs font-semibold hover:bg-white/20 transition-all"
                  >
                    + Add More Talktime
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-7 rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 shadow-luxury aspect-[4/5]">
                <img
                  src="/images/ai/numerology-sacred-numbers.jpg"
                  alt="Sacred Golden Sri Yantra and Vedic Astrological Timepiece"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/45 bg-[#FAF8F3] shadow-card aspect-[4/5]">
                <img
                  src="/images/photos/pricing-transparency-rate.jpg"
                  alt="Brass Astronomical Yantra and Vedic Manuscripts"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Recharge Packs & Interactive Wallet Top-Up */}
      <section id="recharge-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Recharge Form & Packs (7 Cols) */}
            <div className="lg:col-span-7 rounded-3xl bg-[#FAF8F3] border border-[#C6A15B]/45 p-7 sm:p-10 shadow-card space-y-6">
              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                  INSTANT WALLET TOP-UP
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#242424]">
                  Select a Consultation Recharge Pack
                </h2>
                <p className="text-sm text-[#777777]">
                  Every ₹20 adds 1 full minute of personal consultation time with Dr. Amit Deshmukh.
                </p>
              </div>

              {successAmount !== null && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-500/40 text-emerald-900 flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong>
                      ₹{successAmount.toLocaleString("en-IN")} Successfully Credited!
                    </strong>{" "}
                    Your updated wallet balance is{" "}
                    <strong>₹{balance.toLocaleString("en-IN")}</strong> ({availableMinutes} minutes).
                  </div>
                </div>
              )}

              <form onSubmit={handleRecharge} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {PRICING_TIERS.map((tier) => {
                    const isSelected =
                      customAmount.trim() === "" &&
                      selectedAmount === tier.price;
                    return (
                      <button
                        key={tier.minutes}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(tier.price);
                          setCustomAmount("");
                        }}
                        className={`p-4 rounded-2xl border text-left transition-all relative ${
                          isSelected
                            ? "bg-white border-2 border-[#A77B35] shadow-md"
                            : "bg-white/80 border-[#C6A15B]/35 hover:bg-white"
                        }`}
                      >
                        {tier.popular && (
                          <span className="absolute -top-2.5 right-3 px-2.5 py-0.5 rounded-full bg-[#C6A15B] text-[#171717] text-[10px] font-bold">
                            Recommended
                          </span>
                        )}
                        <p className="text-xs uppercase tracking-wider text-[#A77B35] font-bold">
                          {tier.minutes} Minutes
                        </p>
                        <p className="font-serif text-2xl font-bold text-[#242424] mt-1">
                          ₹{tier.price.toLocaleString("en-IN")}
                        </p>
                        <p className="text-[11px] text-[#777777] mt-1 line-clamp-2">
                          {tier.title}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Recharge Box */}
                <div className="p-4 rounded-2xl bg-white border border-[#C6A15B]/40 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-7">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#242424] mb-1">
                      Or Enter Custom Recharge Amount (₹)
                    </label>
                    <input
                      type="number"
                      min={20}
                      step={20}
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter amount (e.g. 500 = 25 mins)"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/40 text-sm text-[#242424] focus:outline-none focus:border-[#A77B35]"
                    />
                  </div>
                  <div className="sm:col-span-5 sm:text-right">
                    <p className="text-xs text-[#777777]">Talktime Added:</p>
                    <p className="font-serif text-xl font-bold text-[#A77B35]">
                      +{minutesAdded} Minutes
                    </p>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#242424]">
                    Choose Recharge Method
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {PAYMENT_OPTIONS.map((opt) => {
                      const Icon = opt.icon;
                      const active = paymentMethod === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setPaymentMethod(opt.id)}
                          className={`py-3 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                            active
                              ? "bg-white border-2 border-[#A77B35] text-[#A77B35] shadow-sm"
                              : "bg-white/70 border-[#C6A15B]/35 text-[#242424]"
                          }`}
                        >
                          <Icon className="w-4 h-4 shrink-0" />
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#C6A15B] via-[#DFC38D] to-[#A77B35] text-[#171717] font-bold text-sm sm:text-base shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <PlusCircle className="w-5 h-5" />
                  <span>
                    Recharge Wallet with ₹{finalAmount.toLocaleString("en-IN")}{" "}
                    (+{minutesAdded} Mins)
                  </span>
                </button>
              </form>
            </div>

            {/* Right: Transaction Passbook & Visual Sanctuary Card (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl overflow-hidden border border-[#C6A15B]/45 shadow-card bg-[#FAF8F3]">
                <img
                  src="/images/ai/consultation-room.jpg"
                  alt="Dr. Amit Deshmukh Consultation Sanctuary"
                  className="w-full h-56 object-cover border-b border-[#C6A15B]/30"
                />
                <div className="p-6 space-y-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                    HOW WALLET BILLING WORKS
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#242424]">
                    Transparent ₹20/Minute Deduction
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    1. Recharge your wallet with any pack from ₹100 (5 mins) to ₹1,200 (60 mins).
                    <br />
                    2. Select &ldquo;Pay from Consultation Wallet&rdquo; on the Booking Form to deduct your chosen session duration immediately.
                  </p>
                </div>
              </div>

              {/* Wallet Passbook / Transaction Ledger */}
              <div className="rounded-3xl bg-white border border-[#C6A15B]/45 p-6 shadow-card space-y-4">
                <div className="flex items-center justify-between border-b border-[#F4EBDD] pb-3">
                  <h3 className="font-serif text-xl font-bold text-[#242424]">
                    Wallet Transaction Passbook
                  </h3>
                  <span className="text-xs font-semibold text-[#A77B35]">
                    {transactions.length} Entries
                  </span>
                </div>

                {transactions.length === 0 ? (
                  <div className="py-8 text-center space-y-2">
                    <Wallet className="w-8 h-8 text-[#C6A15B] mx-auto" />
                    <p className="font-serif text-base font-semibold text-[#242424]">
                      No Wallet Transactions Yet
                    </p>
                    <p className="text-xs text-[#777777]">
                      Select a recharge pack on the left to add consultation talktime.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
                    {transactions.map((tx) => (
                      <div
                        key={tx.id}
                        className="p-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C6A15B]/30 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                              tx.type === "credit"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-amber-100 text-[#A77B35]"
                            }`}
                          >
                            {tx.type === "credit" ? (
                              <ArrowDownLeft className="w-4 h-4" />
                            ) : (
                              <ArrowUpRight className="w-4 h-4" />
                            )}
                          </div>
                          <div>
                            <p className="font-serif text-sm font-bold text-[#242424]">
                              {tx.title}
                            </p>
                            <p className="text-xs text-[#555555]">
                              {tx.subtitle}
                            </p>
                            <p className="text-[11px] text-[#777777] mt-0.5">
                              {tx.id} • {tx.timestamp} • {tx.method}
                            </p>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <p
                            className={`font-serif text-base font-bold ${
                              tx.type === "credit"
                                ? "text-emerald-700"
                                : "text-[#242424]"
                            }`}
                          >
                            {tx.type === "credit" ? "+" : "-"}₹
                            {tx.amount.toLocaleString("en-IN")}
                          </p>
                          <p className="text-[10px] text-[#A77B35] font-semibold">
                            {tx.type === "credit" ? "+" : "-"}
                            {tx.minutes} Mins
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Divine Krishna CTA */}
      <DivineKrishnaCTA
        title="Ready to Use Your Consultation Wallet?"
        description="Book your 1-on-1 session with Dr. Amit Deshmukh in Hindi, English, Marathi, or Kannada and pay seamlessly from your ₹20/minute wallet balance."
        krishnaImage="/images/ai/krishna-golden-aura.jpg"
        krishnaAlt="Lord Krishna surrounded by a radiant golden aura"
      />
    </div>
  );
}
