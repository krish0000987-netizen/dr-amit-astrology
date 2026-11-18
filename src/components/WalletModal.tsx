"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Wallet,
  X,
  PlusCircle,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ArrowDownLeft,
  Sparkles,
  ShieldCheck,
  Smartphone,
  CreditCard,
  Building2,
} from "lucide-react";
import { useWallet } from "@/context/WalletContext";
import { BRAND_INFO, PRICING_TIERS } from "@/data/siteData";

const PAYMENT_METHODS = [
  { id: "UPI (GPay / PhonePe / Paytm)", label: "UPI Instant", icon: Smartphone },
  { id: "Debit / Credit Card", label: "Card", icon: CreditCard },
  { id: "Net Banking", label: "Net Banking", icon: Building2 },
];

export default function WalletModal() {
  const {
    balance,
    availableMinutes,
    transactions,
    isWalletModalOpen,
    preselectedAmount,
    closeWalletModal,
    rechargeWallet,
  } = useWallet();

  const [selectedAmount, setSelectedAmount] = useState<number>(300);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>(
    PAYMENT_METHODS[0].id
  );
  const [justRecharged, setJustRecharged] = useState<number | null>(null);

  useEffect(() => {
    if (preselectedAmount) {
      setSelectedAmount(preselectedAmount);
      setCustomAmount("");
    }
  }, [preselectedAmount, isWalletModalOpen]);

  if (!isWalletModalOpen) return null;

  const finalAmount =
    customAmount.trim() !== "" ? Number(customAmount) || 0 : selectedAmount;
  const minutesAdded = Math.floor(finalAmount / BRAND_INFO.ratePerMinute);

  const handleRecharge = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount < 20) return;
    rechargeWallet(finalAmount, paymentMethod);
    setJustRecharged(finalAmount);
    setTimeout(() => {
      setJustRecharged(null);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl border-2 border-[#C6A15B] max-w-2xl w-full overflow-hidden shadow-2xl my-8">
        {/* Top Header */}
        <div className="bg-[#171717] text-white px-6 sm:px-8 py-6 flex items-center justify-between border-b border-[#C6A15B]/45">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#C6A15B]/20 border border-[#C6A15B] text-[#DFC38D] flex items-center justify-center">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#DFC38D] font-semibold">
                DR. AMIT DESHMUKH • ₹20/MIN RATE
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Astrology Consultation Wallet
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={closeWalletModal}
            aria-label="Close Wallet"
            className="p-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Live Balance Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-[#FAF8F3] via-[#F4EBDD] to-[#FAF8F3] border border-[#C6A15B]/60 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.18em] text-[#A77B35] font-semibold">
                Available Wallet Balance
              </p>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                  ₹{balance.toLocaleString("en-IN")}
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#C6A15B]/50 text-xs font-bold text-[#A77B35] inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {availableMinutes} Mins Talktime
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Link
                href="/pricing#booking-form"
                onClick={closeWalletModal}
                className="px-4 py-2.5 rounded-xl bg-[#171717] text-white text-xs font-semibold hover:bg-[#242424] transition-all"
              >
                Use Balance to Book →
              </Link>
              <Link
                href="/wallet"
                onClick={closeWalletModal}
                className="px-3.5 py-2.5 rounded-xl bg-white border border-[#C6A15B]/50 text-[#A77B35] text-xs font-semibold hover:bg-[#FAF8F3]"
              >
                Full Wallet Page
              </Link>
            </div>
          </div>

          {justRecharged !== null && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-500/40 text-emerald-900 flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <strong>
                  ₹{justRecharged.toLocaleString("en-IN")} Added to Wallet!
                </strong>{" "}
                Your wallet now holds{" "}
                <strong>{availableMinutes} minutes</strong> of consultation
                talktime at ₹20/minute.
              </div>
            </div>
          )}

          {/* Quick Recharge Packs */}
          <form onSubmit={handleRecharge} className="space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#242424]">
                  1. Select Recharge Pack (₹20 / Minute)
                </label>
                <span className="text-xs text-[#A77B35] font-medium">
                  100% Talktime • Zero Processing Fee
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PRICING_TIERS.map((tier) => {
                  const isSelected =
                    customAmount.trim() === "" && selectedAmount === tier.price;
                  return (
                    <button
                      key={tier.minutes}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(tier.price);
                        setCustomAmount("");
                      }}
                      className={`p-3.5 rounded-2xl border text-left transition-all relative ${
                        isSelected
                          ? "bg-[#FAF8F3] border-2 border-[#A77B35] shadow-sm"
                          : "bg-white border-[#C6A15B]/35 hover:border-[#C6A15B]"
                      }`}
                    >
                      {tier.popular && (
                        <span className="absolute -top-2 right-2.5 px-2 py-0.5 rounded-full bg-[#C6A15B] text-[#171717] text-[9px] font-bold uppercase">
                          Popular
                        </span>
                      )}
                      <p className="font-serif text-xl font-bold text-[#242424]">
                        ₹{tier.price.toLocaleString("en-IN")}
                      </p>
                      <p className="text-xs font-semibold text-[#A77B35] mt-0.5">
                        {tier.minutes} Minutes Session
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Amount Input */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center bg-[#FAF8F3] p-4 rounded-2xl border border-[#C6A15B]/35">
              <div className="sm:col-span-7">
                <label className="block text-xs font-semibold text-[#242424] mb-1">
                  Or Enter Custom Amount (Multiples of ₹20)
                </label>
                <input
                  type="number"
                  min={20}
                  step={20}
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="e.g. 500 (for 25 Minutes)"
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#C6A15B]/45 text-sm text-[#242424] focus:outline-none focus:border-[#A77B35]"
                />
              </div>
              <div className="sm:col-span-5 text-left sm:text-right">
                <p className="text-xs text-[#777777]">Talktime Credited:</p>
                <p className="font-serif text-lg font-bold text-[#A77B35]">
                  +{minutesAdded} Minutes (₹{finalAmount.toLocaleString("en-IN")})
                </p>
              </div>
            </div>

            {/* Payment Mode Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#242424] mb-2">
                2. Select Payment Mode
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {PAYMENT_METHODS.map((pm) => {
                  const Icon = pm.icon;
                  const active = paymentMethod === pm.id;
                  return (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() => setPaymentMethod(pm.id)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                        active
                          ? "bg-[#FAF8F3] border-[#A77B35] text-[#A77B35]"
                          : "bg-white border-[#C6A15B]/35 text-[#242424]"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{pm.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              disabled={finalAmount < 20}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#C6A15B] via-[#DFC38D] to-[#A77B35] text-[#171717] font-bold text-sm shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <PlusCircle className="w-4 h-4" />
              <span>
                Add ₹{finalAmount.toLocaleString("en-IN")} (+{minutesAdded}{" "}
                Minutes) to Wallet
              </span>
            </button>
          </form>

          {/* Recent Transactions Preview */}
          {transactions.length > 0 && (
            <div className="pt-4 border-t border-[#F4EBDD] space-y-2.5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wider text-[#242424]">
                  Recent Wallet Activity
                </p>
                <Link
                  href="/wallet"
                  onClick={closeWalletModal}
                  className="text-xs text-[#A77B35] font-semibold hover:underline"
                >
                  View All ({transactions.length}) →
                </Link>
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {transactions.slice(0, 3).map((tx) => (
                  <div
                    key={tx.id}
                    className="p-3 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/25 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center ${
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
                        <p className="font-semibold text-[#242424]">
                          {tx.title}
                        </p>
                        <p className="text-[11px] text-[#777777]">
                          {tx.timestamp} • {tx.method}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`font-serif font-bold text-sm ${
                        tx.type === "credit"
                          ? "text-emerald-700"
                          : "text-[#242424]"
                      }`}
                    >
                      {tx.type === "credit" ? "+" : "-"}₹
                      {tx.amount.toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
