"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  MessageCircle,
  Phone,
  Sparkles,
  Video,
  AlertCircle,
  Wallet,
  PlusCircle,
} from "lucide-react";
import { BRAND_INFO, PRICING_TIERS, PRIMARY_SERVICES } from "@/data/siteData";
import { useWallet } from "@/context/WalletContext";

export default function BookingForm({
  defaultService = "Vedic Astrology",
  defaultMinutes = 15,
}: {
  defaultService?: string;
  defaultMinutes?: number;
}) {
  const {
    balance,
    availableMinutes,
    openWalletModal,
    deductConsultation,
  } = useWallet();

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("Hindi");
  const [service, setService] = useState(defaultService);
  const [duration, setDuration] = useState<number>(defaultMinutes);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("11:00 AM");
  const [mode, setMode] = useState<"Voice Call" | "Video Call" | "WhatsApp">(
    "Voice Call"
  );
  const [paymentChoice, setPaymentChoice] = useState<"wallet" | "later">(
    "wallet"
  );
  const [problem, setProblem] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [walletReceiptId, setWalletReceiptId] = useState<string | null>(null);

  const calculatedPrice = duration * BRAND_INFO.ratePerMinute;
  const shortfall = Math.max(0, calculatedPrice - balance);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!mobile.trim() || mobile.replace(/\D/g, "").length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!preferredDate) {
      setErrorMsg("Please select your preferred consultation date.");
      return;
    }
    if (!problem.trim() || problem.trim().length < 8) {
      setErrorMsg(
        "Please briefly describe your question or topic (at least a few words)."
      );
      return;
    }

    if (paymentChoice === "wallet") {
      if (balance < calculatedPrice) {
        setErrorMsg(
          `Your Consultation Wallet balance is ₹${balance}, while a ${duration}-minute session requires ₹${calculatedPrice}. Please click "+ Recharge Wallet" or select "Pay Later during Scheduling".`
        );
        return;
      }
      const res = deductConsultation(duration, service, mode, fullName.trim());
      if (!res.success) {
        setErrorMsg(res.message);
        return;
      }
      setWalletReceiptId(res.txId || "WALLET-PAID");
    } else {
      setWalletReceiptId(null);
    }

    setSubmitted(true);
  };

  const whatsappPreparedUrl = `https://wa.me/?text=${encodeURIComponent(
    `Namaste Dr. Amit Deshmukh,\n\nI would like to request an astrology consultation:\n• Name: ${fullName}\n• Mobile: ${mobile}\n• Email: ${email}\n• Service: ${service}\n• Language: ${language}\n• Mode: ${mode}\n• Duration: ${duration} Minutes (₹${calculatedPrice} at ₹20/min)\n• Payment Status: ${
      walletReceiptId
        ? `Deducted from Consultation Wallet (Ref: ${walletReceiptId})`
        : "To be paid upon slot confirmation"
    }\n• Preferred Date & Time: ${preferredDate} at ${preferredTime}\n• Question/Topic: ${problem}`
  )}`;

  return (
    <div
      id="booking-form"
      className="rounded-3xl bg-white border border-[#C6A15B]/45 shadow-luxury overflow-hidden grid grid-cols-1 lg:grid-cols-12"
    >
      {/* Left Visual & Rate + Wallet Summary Panel (5 Cols) */}
      <div className="lg:col-span-5 bg-[#FAF8F3] border-b lg:border-b-0 lg:border-r border-[#C6A15B]/30 p-7 sm:p-10 flex flex-col justify-between space-y-6">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/45">
            <Sparkles className="w-3.5 h-3.5 text-[#A77B35]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
              PERSONALIZED 1-ON-1 SESSION
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424] leading-snug">
            Request Your Consultation with Dr. Amit Deshmukh
          </h3>

          {/* Consultation Sanctuary Photograph */}
          <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 shadow-sm aspect-[16/10] relative">
            <img
              src="/images/ai/consultation-room.jpg"
              alt="Sunlit luxury Vedic astrology consultation room of Dr. Amit Deshmukh"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#DFC38D] font-semibold">
                  ₹20 / Minute Standard Rate
                </p>
                <p className="text-xs text-white/90">
                  Selected Duration: {duration} Mins = ₹
                  {calculatedPrice.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>

          {/* Live Wallet Balance & Calculator Card */}
          <div className="p-5 rounded-2xl bg-[#171717] text-white border border-[#C6A15B] space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4 text-[#DFC38D]" />
                <span className="text-xs uppercase tracking-wider text-[#DFC38D] font-semibold">
                  Consultation Wallet
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  openWalletModal(shortfall > 0 ? shortfall : calculatedPrice)
                }
                className="px-3 py-1 rounded-full bg-[#C6A15B] text-[#171717] text-[11px] font-bold hover:bg-[#DFC38D] transition-colors inline-flex items-center gap-1"
              >
                <PlusCircle className="w-3 h-3" />
                <span>Recharge</span>
              </button>
            </div>

            <div className="flex items-baseline justify-between border-b border-white/15 pb-3">
              <div>
                <p className="text-xs text-white/70">Available Balance</p>
                <p className="font-serif text-2xl font-bold text-white">
                  ₹{balance.toLocaleString("en-IN")}{" "}
                  <span className="text-xs font-normal text-[#DFC38D]">
                    ({availableMinutes} Mins)
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/70">Session Cost</p>
                <p className="font-serif text-2xl font-bold text-[#DFC38D]">
                  ₹{calculatedPrice.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {shortfall > 0 ? (
              <div className="flex items-center justify-between text-xs text-amber-300">
                <span>Need ₹{shortfall} more for {duration} mins</span>
                <button
                  type="button"
                  onClick={() => openWalletModal(shortfall)}
                  className="underline font-semibold hover:text-white"
                >
                  Add ₹{shortfall} Now →
                </button>
              </div>
            ) : (
              <p className="text-xs text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Sufficient wallet balance for {duration}-minute session!</span>
              </p>
            )}
          </div>
        </div>

        {/* Direct WhatsApp Alternative */}
        <div className="pt-4 border-t border-[#C6A15B]/25 space-y-3">
          <p className="text-xs text-[#777777]">
            Prefer to coordinate your slot directly over WhatsApp?
          </p>
          <a
            href={BRAND_INFO.contactPlaceholders.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-[#171717] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#242424] transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#DFC38D]" />
            <span>Instant WhatsApp Consultation Inquiry</span>
          </a>
        </div>
      </div>

      {/* Right Form Panel (7 Cols) */}
      <div className="lg:col-span-7 p-7 sm:p-10">
        {submitted ? (
          <div className="h-full flex flex-col justify-center space-y-6 py-6">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF8F3] border border-[#C6A15B] text-[#A77B35] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                {walletReceiptId
                  ? `Wallet Deduction Recorded • Ref: ${walletReceiptId}`
                  : "Consultation Request Prepared"}
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
                Thank You, {fullName}
              </h4>
              <p className="text-sm text-[#555555] leading-relaxed">
                {walletReceiptId ? (
                  <>
                    <strong>
                      ₹{calculatedPrice.toLocaleString("en-IN")} ({duration}{" "}
                      minutes)
                    </strong>{" "}
                    has been deducted from your local Consultation Wallet
                    balance. Please click below to send your booking details and
                    wallet reference to Dr. Amit Deshmukh via WhatsApp to
                    finalize your calendar time slot.
                  </>
                ) : (
                  <>
                    Your consultation request details have been prepared below.
                    Please click below to send this prepared request directly
                    via WhatsApp or call during consultation hours (10 AM – 6
                    PM) to confirm your slot with Dr. Amit Deshmukh.
                  </>
                )}
              </p>
            </div>

            <div className="rounded-2xl bg-[#FAF8F3] border border-[#C6A15B]/45 p-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm">
              <div>
                <p className="text-xs text-[#777777]">Full Name &amp; Contact</p>
                <p className="font-semibold text-[#242424]">
                  {fullName} ({mobile})
                </p>
              </div>
              <div>
                <p className="text-xs text-[#777777]">Service &amp; Language</p>
                <p className="font-semibold text-[#242424]">
                  {service} • {language}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#777777]">Preferred Date &amp; Time</p>
                <p className="font-semibold text-[#242424]">
                  {preferredDate} at {preferredTime}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#777777]">Mode &amp; Fee Status</p>
                <p className="font-semibold text-[#A77B35]">
                  {mode} • ₹{calculatedPrice}{" "}
                  {walletReceiptId ? "(Wallet Paid)" : "(Pay on Confirm)"}
                </p>
              </div>
              <div className="sm:col-span-2 border-t border-[#C6A15B]/20 pt-2">
                <p className="text-xs text-[#777777]">Question / Topic</p>
                <p className="text-[#242424] mt-0.5">{problem}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={whatsappPreparedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white text-sm font-semibold shadow-md hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Prepared Request via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-5 py-3.5 rounded-full border border-[#C6A15B]/50 text-xs font-semibold text-[#242424] hover:bg-[#FAF8F3]"
              >
                Book Another Session
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="border-b border-[#F4EBDD] pb-3 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h4 className="font-serif text-xl font-bold text-[#242424]">
                  Consultation Booking Request Form
                </h4>
                <p className="text-xs text-[#777777] mt-0.5">
                  Pay directly from your ₹20/Min Consultation Wallet or during slot confirmation.
                </p>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-[#A77B35] text-xs text-[#242424] flex items-center justify-between gap-2.5">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#A77B35] shrink-0" />
                  <span>{errorMsg}</span>
                </div>
                {shortfall > 0 && (
                  <button
                    type="button"
                    onClick={() => openWalletModal(shortfall)}
                    className="px-3 py-1.5 rounded-lg bg-[#A77B35] text-white font-semibold shrink-0"
                  >
                    + Add ₹{shortfall}
                  </button>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 1. Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/40 text-sm text-[#242424] focus:outline-none focus:border-[#A77B35]"
                />
              </div>

              {/* 2. Mobile Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="+91 98XXXXXXXX"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/40 text-sm text-[#242424] focus:outline-none focus:border-[#A77B35]"
                />
              </div>

              {/* 3. Email Address */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/40 text-sm text-[#242424] focus:outline-none focus:border-[#A77B35]"
                />
              </div>

              {/* 4. Preferred Language */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                  Preferred Language *
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/40 text-sm text-[#242424] focus:outline-none focus:border-[#A77B35]"
                >
                  {BRAND_INFO.languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* 5. Consultation Service */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                  Consultation Service *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/40 text-sm text-[#242424] focus:outline-none focus:border-[#A77B35]"
                >
                  {PRIMARY_SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Selector (₹20/min) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                  Session Duration (₹20/Min) *
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/40 text-sm text-[#242424] focus:outline-none focus:border-[#A77B35]"
                >
                  {PRICING_TIERS.map((tier) => (
                    <option key={tier.minutes} value={tier.minutes}>
                      {tier.minutes} Minutes – ₹{tier.price.toLocaleString("en-IN")}
                    </option>
                  ))}
                </select>
              </div>

              {/* 6. Preferred Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/40 text-sm text-[#242424] focus:outline-none focus:border-[#A77B35]"
                />
              </div>

              {/* 7. Preferred Time (10 AM - 6 PM) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                  Preferred Time (10 AM – 6 PM) *
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/40 text-sm text-[#242424] focus:outline-none focus:border-[#A77B35]"
                >
                  {[
                    "10:00 AM",
                    "11:00 AM",
                    "12:00 PM",
                    "01:00 PM",
                    "02:00 PM",
                    "03:00 PM",
                    "04:00 PM",
                    "05:00 PM",
                    "05:30 PM",
                  ].map((slot) => (
                    <option key={slot} value={slot}>
                      {slot} IST
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 9. Preferred Consultation Mode */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-2">
                Preferred Consultation Mode *
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(["Voice Call", "Video Call", "WhatsApp"] as const).map(
                  (option) => {
                    const active = mode === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setMode(option)}
                        className={`py-3 px-3 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                          active
                            ? "bg-[#FAF8F3] border-[#A77B35] text-[#A77B35] shadow-sm"
                            : "bg-white border-[#C6A15B]/35 text-[#242424] hover:bg-[#FAF8F3]/60"
                        }`}
                      >
                        {option === "Voice Call" && <Phone className="w-4 h-4" />}
                        {option === "Video Call" && <Video className="w-4 h-4" />}
                        {option === "WhatsApp" && (
                          <MessageCircle className="w-4 h-4" />
                        )}
                        <span>{option}</span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {/* Payment Option: Wallet vs Pay Later */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-2">
                Consultation Payment Option *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentChoice("wallet")}
                  className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    paymentChoice === "wallet"
                      ? "bg-[#FAF8F3] border-2 border-[#A77B35]"
                      : "bg-white border-[#C6A15B]/35"
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold text-[#242424] flex items-center gap-1.5">
                      <Wallet className="w-3.5 h-3.5 text-[#A77B35]" />
                      Pay via Consultation Wallet
                    </p>
                    <p className="text-[11px] text-[#777777] mt-0.5">
                      Wallet Balance: ₹{balance.toLocaleString("en-IN")} (
                      {availableMinutes}m)
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#A77B35]">
                    -₹{calculatedPrice}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentChoice("later")}
                  className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    paymentChoice === "later"
                      ? "bg-[#FAF8F3] border-2 border-[#A77B35]"
                      : "bg-white border-[#C6A15B]/35"
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold text-[#242424]">
                      Pay During Slot Confirmation
                    </p>
                    <p className="text-[11px] text-[#777777] mt-0.5">
                      Coordinate via WhatsApp / UPI
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#777777]">
                    ₹{calculatedPrice}
                  </span>
                </button>
              </div>
            </div>

            {/* 8. Problem or Question */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                Problem or Question (Include Birth Date/Time/Place if known) *
              </label>
              <textarea
                rows={3}
                required
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Share your birth details (if available) and the primary life question regarding Career, Business, Marriage, Relationship, Finance, Health, or Family..."
                className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/40 text-sm text-[#242424] focus:outline-none focus:border-[#A77B35]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#777777]">
                Calculated Fee:{" "}
                <strong className="text-[#242424]">
                  ₹{calculatedPrice.toLocaleString("en-IN")}
                </strong>{" "}
                ({duration} mins × ₹20/min)
              </p>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] via-[#DFC38D] to-[#A77B35] text-[#171717] font-semibold text-sm shadow-lg hover:scale-[1.01] transition-all"
              >
                {paymentChoice === "wallet"
                  ? `Pay ₹${calculatedPrice} from Wallet & Request`
                  : "Request Consultation"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
