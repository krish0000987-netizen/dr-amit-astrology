"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Sparkles,
  Calendar,
  HelpCircle,
  Hash,
  Home as HomeIcon,
  Hand,
  Wallet,
  Plus,
} from "lucide-react";
import { BRAND_INFO } from "@/data/siteData";
import { useWallet } from "@/context/WalletContext";

const ASTROLOGY_SUBPAGES = [
  {
    name: "Vedic Astrology",
    href: "/vedic-astrology",
    subtitle: "Traditional Janam Kundli & Dasha Analysis",
    icon: Sparkles,
  },
  {
    name: "Prashna Kundali",
    href: "/prashna-kundali",
    subtitle: "Question-Based Horary Guidance",
    icon: HelpCircle,
  },
  {
    name: "Numerology",
    href: "/numerology",
    subtitle: "Mulank, Bhagyank & Name Vibrations",
    icon: Hash,
  },
  {
    name: "Vastu Consultation",
    href: "/vastu-consultation",
    subtitle: "Home, Office & Commercial Spatial Harmony",
    icon: HomeIcon,
  },
  {
    name: "Palm Reading",
    href: "/palm-reading",
    subtitle: "Traditional Hasta Samudrika Palmistry",
    icon: Hand,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { balance, availableMinutes, openWalletModal } = useWallet();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const useTransparentStyle = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useTransparentStyle
          ? "bg-gradient-to-b from-black/75 via-black/45 to-transparent border-b border-white/15 py-4"
          : "bg-white/95 backdrop-blur-md border-b border-[#C6A15B]/25 shadow-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Left: Brand Logo & Emblem */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                useTransparentStyle
                  ? "bg-white/10 border-[#C6A15B]/70 text-[#DFC38D]"
                  : "bg-[#FAF8F3] border-[#C6A15B] text-[#A77B35] shadow-sm"
              } group-hover:scale-105`}
            >
              <svg
                viewBox="0 0 48 48"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="24" cy="24" r="19" strokeDasharray="3 3" />
                <polygon points="24,7 29,19 41,24 29,29 24,41 19,29 7,24 19,19" />
                <circle cx="24" cy="24" r="4" fill="currentColor" />
              </svg>
            </div>
            <div>
              <span
                className={`block font-serif text-lg sm:text-xl font-semibold tracking-tight transition-colors ${
                  useTransparentStyle ? "text-white" : "text-[#242424]"
                }`}
              >
                Dr. Amit Deshmukh
              </span>
              <span
                className={`block text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-medium ${
                  useTransparentStyle ? "text-[#DFC38D]" : "text-[#A77B35]"
                }`}
              >
                Vedic Astrology • ₹20/Min
              </span>
            </div>
          </Link>

          {/* Center: Navigation Items */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/"
                  ? useTransparentStyle
                    ? "text-[#DFC38D] font-semibold"
                    : "text-[#A77B35] font-semibold bg-[#FAF8F3]"
                  : useTransparentStyle
                  ? "text-white/90 hover:text-[#DFC38D]"
                  : "text-[#242424] hover:text-[#A77B35] hover:bg-[#FAF8F3]/60"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/about"
                  ? "text-[#A77B35] font-semibold bg-[#FAF8F3]"
                  : useTransparentStyle
                  ? "text-white/90 hover:text-[#DFC38D]"
                  : "text-[#242424] hover:text-[#A77B35] hover:bg-[#FAF8F3]/60"
              }`}
            >
              About
            </Link>

            <Link
              href="/services"
              className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/services"
                  ? "text-[#A77B35] font-semibold bg-[#FAF8F3]"
                  : useTransparentStyle
                  ? "text-white/90 hover:text-[#DFC38D]"
                  : "text-[#242424] hover:text-[#A77B35] hover:bg-[#FAF8F3]/60"
              }`}
            >
              Services
            </Link>

            {/* Astrology Dropdown covering the 5 Dedicated Service Pages */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((o) => !o)}
                className={`flex items-center gap-1 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  ASTROLOGY_SUBPAGES.some((s) => s.href === pathname)
                    ? "text-[#A77B35] font-semibold bg-[#FAF8F3]"
                    : useTransparentStyle
                    ? "text-white/90 hover:text-[#DFC38D]"
                    : "text-[#242424] hover:text-[#A77B35] hover:bg-[#FAF8F3]/60"
                }`}
              >
                <span>Astrology</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-80 z-50">
                  <div className="bg-white rounded-2xl border border-[#C6A15B]/35 shadow-luxury p-2.5">
                    <div className="px-3 py-2 border-b border-[#F4EBDD] mb-1">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                        5 Specialized Disciplines
                      </p>
                    </div>
                    {ASTROLOGY_SUBPAGES.map((sub) => {
                      const Icon = sub.icon;
                      const active = pathname === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                            active
                              ? "bg-[#FAF8F3] border border-[#C6A15B]/40"
                              : "hover:bg-[#FAF8F3]"
                          }`}
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#F4EBDD] text-[#A77B35] flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-serif font-semibold text-[#242424]">
                              {sub.name}
                            </p>
                            <p className="text-xs text-[#777777] leading-snug">
                              {sub.subtitle}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/pricing"
                  ? "text-[#A77B35] font-semibold bg-[#FAF8F3]"
                  : useTransparentStyle
                  ? "text-white/90 hover:text-[#DFC38D]"
                  : "text-[#242424] hover:text-[#A77B35] hover:bg-[#FAF8F3]/60"
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/reviews-contact#reviews"
              className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/reviews-contact"
                  ? "text-[#A77B35] font-semibold bg-[#FAF8F3]"
                  : useTransparentStyle
                  ? "text-white/90 hover:text-[#DFC38D]"
                  : "text-[#242424] hover:text-[#A77B35] hover:bg-[#FAF8F3]/60"
              }`}
            >
              Reviews
            </Link>

            <Link
              href="/reviews-contact#contact"
              className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                useTransparentStyle
                  ? "text-white/90 hover:text-[#DFC38D]"
                  : "text-[#242424] hover:text-[#A77B35] hover:bg-[#FAF8F3]/60"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right: Live Wallet Pill + WhatsApp Icon + Book Consultation CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Live Wallet Balance Pill */}
            <button
              type="button"
              onClick={() => openWalletModal()}
              title="Open Consultation Wallet & Recharge"
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold transition-all ${
                useTransparentStyle
                  ? "bg-white/10 border-[#C6A15B]/70 text-white hover:bg-white/20"
                  : "bg-[#FAF8F3] border-[#C6A15B]/60 text-[#242424] hover:border-[#A77B35]"
              }`}
            >
              <Wallet className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>₹{balance.toLocaleString("en-IN")}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  useTransparentStyle
                    ? "bg-[#C6A15B] text-[#171717] font-bold"
                    : "bg-[#F4EBDD] text-[#A77B35] font-bold"
                }`}
              >
                {availableMinutes}m
              </span>
              <Plus className="w-3.5 h-3.5 text-[#C6A15B]" />
            </button>

            <a
              href={BRAND_INFO.contactPlaceholders.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Consultation"
              title="Consult via WhatsApp"
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                useTransparentStyle
                  ? "border-white/30 bg-white/10 text-white hover:bg-[#C6A15B] hover:border-[#C6A15B]"
                  : "border-[#C6A15B]/45 bg-[#FAF8F3] text-[#A77B35] hover:bg-[#C6A15B] hover:text-white"
              }`}
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <Link
              href="/pricing#booking-form"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white text-xs xl:text-sm font-medium shadow-md hover:shadow-lg hover:brightness-105 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* Mobile Wallet + Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => openWalletModal()}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-semibold ${
                useTransparentStyle
                  ? "border-[#C6A15B]/70 bg-white/10 text-white"
                  : "border-[#C6A15B]/50 bg-[#FAF8F3] text-[#242424]"
              }`}
            >
              <Wallet className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>₹{balance}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className={`p-2 rounded-lg border ${
                useTransparentStyle
                  ? "border-white/30 text-white"
                  : "border-[#C6A15B]/35 text-[#242424]"
              }`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-[#C6A15B]/30 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {/* Mobile Wallet Banner */}
            <div className="p-3.5 rounded-2xl bg-[#171717] text-white border border-[#C6A15B] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Wallet className="w-5 h-5 text-[#DFC38D]" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#DFC38D]">
                    Consultation Wallet
                  </p>
                  <p className="font-serif text-base font-bold">
                    ₹{balance.toLocaleString("en-IN")} ({availableMinutes} Mins)
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openWalletModal();
                }}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#C6A15B] to-[#DFC38D] text-[#171717] text-xs font-bold"
              >
                + Recharge
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/"
                className="px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] text-sm font-medium text-[#242424] hover:text-[#A77B35]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] text-sm font-medium text-[#242424] hover:text-[#A77B35]"
              >
                About Dr. Amit
              </Link>
              <Link
                href="/services"
                className="px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] text-sm font-medium text-[#242424] hover:text-[#A77B35]"
              >
                All Services
              </Link>
              <Link
                href="/pricing"
                className="px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] text-sm font-medium text-[#242424] hover:text-[#A77B35]"
              >
                Pricing (₹20/Min)
              </Link>
              <Link
                href="/wallet"
                className="px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] text-sm font-semibold text-[#A77B35] border border-[#C6A15B]/35"
              >
                Wallet &amp; Passbook
              </Link>
              <Link
                href="/reviews-contact#reviews"
                className="px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] text-sm font-medium text-[#242424] hover:text-[#A77B35]"
              >
                Reviews &amp; Contact
              </Link>
            </div>

            <div className="pt-2 border-t border-[#F4EBDD]">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#A77B35] font-semibold mb-2 px-1">
                Dedicated Astrology Pages
              </p>
              <div className="space-y-1.5">
                {ASTROLOGY_SUBPAGES.map((sub) => {
                  const Icon = sub.icon;
                  return (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF8F3]/70 hover:bg-[#F4EBDD]/60 border border-[#C6A15B]/20"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F4EBDD] text-[#A77B35] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-serif font-semibold text-[#242424]">
                          {sub.name}
                        </p>
                        <p className="text-xs text-[#777777]">{sub.subtitle}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-2.5">
              <Link
                href="/pricing#booking-form"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white text-center text-sm font-semibold shadow-md"
              >
                Book a Consultation (₹20/Min)
              </Link>
              <a
                href={BRAND_INFO.contactPlaceholders.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl border border-[#C6A15B] bg-[#FAF8F3] text-[#A77B35] text-center text-sm font-semibold"
              >
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
