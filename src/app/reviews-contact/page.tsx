"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import DivineKrishnaCTA from "@/components/DivineKrishnaCTA";
import { BRAND_INFO, SAMPLE_TESTIMONIALS } from "@/data/siteData";

export default function ReviewsContactPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [formSent, setFormSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!name.trim() || name.trim().length < 2) {
      setFormError("Please enter your full name.");
      return;
    }
    if (!mobile.trim() || mobile.replace(/\D/g, "").length < 10) {
      setFormError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!message.trim() || message.trim().length < 5) {
      setFormError("Please enter your message or inquiry.");
      return;
    }

    setFormSent(true);
  };

  const whatsappContactUrl = `https://wa.me/?text=${encodeURIComponent(
    `Namaste Dr. Amit Deshmukh,\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nMessage: ${message}`
  )}`;

  return (
    <div className="bg-white pt-24">
      {/* SECTION 1: Hero Section with Astrologer Portrait */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F3] to-white border-b border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/50">
                <Star className="w-3.5 h-3.5 text-[#A77B35] fill-[#C6A15B]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  5.0 PROFILE RATING • CLIENT REVIEWS &amp; DIRECT CONTACT
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#242424] leading-[1.14]">
                Client Testimonials &amp; Consultation Contact
              </h1>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                Explore sample client feedback regarding Dr. Amit Deshmukh&apos;s consultations across career, marriage, relationships, Kundli analysis, and remedies—or reach out directly to schedule your ₹20/minute session.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white font-semibold text-sm shadow-lg hover:brightness-105 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact Details &amp; Form</span>
                </a>
                <Link
                  href="/pricing#booking-form"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-[#C6A15B] text-[#A77B35] font-semibold text-sm hover:bg-[#FAF8F3] transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation (₹20/Min)</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-7 rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 shadow-luxury aspect-[4/5]">
                <img
                  src="/images/ai/astrologer-portrait.jpg"
                  alt="Dr. Amit Deshmukh – Vedic Astrologer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/45 bg-[#FAF8F3] shadow-card aspect-[4/5]">
                <img
                  src="/images/photos/whatsapp-instant-connect.jpg"
                  alt="Direct WhatsApp Consultation & Scheduling"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Rating Overview & 5 Sample Testimonials (#reviews) */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Profile Rating Banner with Visual */}
          <div className="rounded-3xl bg-[#FAF8F3] border border-[#C6A15B]/45 p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-card">
            <div className="lg:col-span-4 flex items-center gap-5">
              <div className="w-24 h-24 rounded-3xl bg-white border-2 border-[#C6A15B] flex flex-col items-center justify-center shrink-0 shadow-sm">
                <span className="font-serif text-3xl font-bold text-[#242424]">
                  5.0
                </span>
                <div className="flex items-center gap-0.5 text-[#C6A15B] mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#C6A15B] text-[#C6A15B]"
                    />
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#A77B35] font-bold">
                  Profile Rating
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#242424]">
                  5.0 Out of 5 Stars
                </h2>
                <p className="text-xs text-[#777777] mt-1">
                  9 Years of Experience • ₹20/Minute
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-1.5">
              <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#C6A15B]/45 text-[11px] font-semibold text-[#A77B35]">
                Transparency Notice: Sample Testimonials
              </span>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                The five testimonials below are labeled as{" "}
                <strong>sample testimonials</strong> representing the profile&apos;s consultation feedback themes until verified customer reviews are supplied.
              </p>
            </div>

            <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-[#C6A15B]/35 bg-white">
              <img
                src="/images/photos/four-languages-consultation.jpg"
                alt="Hindi, English, Marathi, and Kannada Consultations"
                className="w-full h-36 object-cover"
              />
            </div>
          </div>

          {/* 5 Individual Sample Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SAMPLE_TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="rounded-3xl bg-[#FAF8F3] border border-[#C6A15B]/40 overflow-hidden shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/9] bg-white border-b border-[#C6A15B]/25 overflow-hidden">
                    <img
                      src={review.artImage}
                      alt={`Sample testimonial card for ${review.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#C6A15B]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#C6A15B] text-[#C6A15B]"
                          />
                        ))}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#C6A15B]/40 text-[11px] font-semibold text-[#A77B35]">
                        Sample Testimonial
                      </span>
                    </div>

                    <blockquote className="font-editorial italic text-2xl text-[#242424] leading-relaxed">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                  </div>
                </div>

                <div className="px-6 sm:px-7 py-4 bg-white border-t border-[#F4EBDD] flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#242424]">
                      {review.name}
                    </h3>
                    <p className="text-xs text-[#777777]">{review.serviceTag}</p>
                  </div>
                  <span className="font-serif text-sm font-bold text-[#A77B35]">
                    5.0 ★
                  </span>
                </div>
              </div>
            ))}

            {/* 6th Card: Share Your Consultation Experience CTA */}
            <div className="rounded-3xl bg-[#171717] text-white border border-[#C6A15B]/60 p-7 flex flex-col justify-between shadow-luxury">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 aspect-[16/9]">
                  <img
                    src="/images/ai/prashna-consultation.jpg"
                    alt="Book your own consultation session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#DFC38D] font-semibold">
                  EXPERIENCE PERSONAL GUIDANCE
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Book Your Own ₹20/Minute Consultation
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Consult Dr. Amit Deshmukh in Hindi, English, Marathi, or Kannada and gain clarity on your most important life questions.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/15">
                <Link
                  href="/pricing#booking-form"
                  className="block w-full py-3 rounded-xl bg-gradient-to-r from-[#C6A15B] to-[#DFC38D] text-[#171717] text-center text-xs sm:text-sm font-bold"
                >
                  Request Consultation Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Contact Details & Validated Contact Form (#contact) */}
      <section
        id="contact"
        className="py-20 bg-[#FAF8F3] border-t border-[#C6A15B]/25"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Complete Contact Information & Visuals (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                DIRECT CONTACT INFORMATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Connect with Dr. Amit Deshmukh
              </h2>

              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 shadow-card aspect-[16/10]">
                <img
                  src="/images/ai/consultation-room.jpg"
                  alt="Dr. Amit Deshmukh Consultation Study"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl bg-white border border-[#C6A15B]/35 flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#A77B35] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#777777] font-semibold">
                      Consultation Availability
                    </p>
                    <p className="font-serif text-base font-bold text-[#242424]">
                      Monday to Sunday • 10 AM – 6 PM
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#C6A15B]/35 flex items-start gap-3.5">
                  <Globe className="w-5 h-5 text-[#A77B35] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#777777] font-semibold">
                      Languages Spoken
                    </p>
                    <p className="font-serif text-base font-bold text-[#242424]">
                      Hindi, English, Marathi, Kannada
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#C6A15B]/35 flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#A77B35] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#777777] font-semibold">
                      Phone Number Placeholder
                    </p>
                    <p className="font-serif text-base font-bold text-[#242424]">
                      {BRAND_INFO.contactPlaceholders.phoneDisplay}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#C6A15B]/35 flex items-start gap-3.5">
                  <MessageCircle className="w-5 h-5 text-[#A77B35] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#777777] font-semibold">
                      WhatsApp Placeholder
                    </p>
                    <p className="font-serif text-base font-bold text-[#242424]">
                      {BRAND_INFO.contactPlaceholders.whatsappDisplay}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#C6A15B]/35 flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#A77B35] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#777777] font-semibold">
                      Email Placeholder
                    </p>
                    <p className="font-serif text-base font-bold text-[#242424]">
                      {BRAND_INFO.contactPlaceholders.emailDisplay}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#C6A15B]/35 flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#A77B35] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#777777] font-semibold">
                      Consultation Location Note
                    </p>
                    <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                      {BRAND_INFO.contactPlaceholders.addressNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form + WhatsApp Direct Connect Visual Card (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl bg-white border border-[#C6A15B]/45 p-7 sm:p-10 shadow-luxury">
                {formSent ? (
                  <div className="space-y-5 py-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF8F3] border border-[#C6A15B] text-[#A77B35] flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#242424]">
                      Inquiry Prepared for {name}
                    </h3>
                    <p className="text-sm text-[#555555] leading-relaxed">
                      Thank you for writing to Dr. Amit Deshmukh. Click below to forward your message directly via WhatsApp, or book a consultation slot on our Pricing &amp; Booking page.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={whatsappContactUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white text-xs sm:text-sm font-semibold"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Message via WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setFormSent(false)}
                        className="px-5 py-3.5 rounded-full border border-[#C6A15B]/50 text-xs font-semibold text-[#242424]"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleContactSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="border-b border-[#F4EBDD] pb-3">
                      <h3 className="font-serif text-2xl font-bold text-[#242424]">
                        Send a Message
                      </h3>
                      <p className="text-xs text-[#777777] mt-1">
                        Have a question before booking? Fill out the form below.
                      </p>
                    </div>

                    {formError && (
                      <div className="p-3.5 rounded-xl bg-amber-50 border border-[#A77B35] text-xs text-[#242424] flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-[#A77B35] shrink-0" />
                        <span>{formError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Full Name"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/40 text-sm text-[#242424] focus:outline-none focus:border-[#A77B35]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                          Mobile *
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
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                        Email *
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

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can Dr. Amit Deshmukh assist you? Mention your preferred language (Hindi, English, Marathi, Kannada) and consultation topic..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C6A15B]/40 text-sm text-[#242424] focus:outline-none focus:border-[#A77B35]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] via-[#DFC38D] to-[#A77B35] text-[#171717] font-semibold text-sm shadow-lg hover:scale-[1.01] transition-all"
                    >
                      Submit Message
                    </button>
                  </form>
                )}
              </div>

              {/* Dedicated WhatsApp Communication Visual Card */}
              <div className="rounded-3xl bg-white border border-[#C6A15B]/40 p-6 shadow-card grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/35">
                  <img
                    src="/images/photos/whatsapp-instant-connect.jpg"
                    alt="WhatsApp Instant Connect Illustration"
                    className="w-full h-36 object-cover"
                  />
                </div>
                <div className="sm:col-span-7 space-y-2.5">
                  <h4 className="font-serif text-xl font-bold text-[#242424]">
                    Fastest Response via WhatsApp
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555]">
                    Share your birth details, palm images, or Vastu floor plan directly on WhatsApp during consultation hours (10 AM – 6 PM).
                  </p>
                  <a
                    href={BRAND_INFO.contactPlaceholders.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] text-white text-xs font-semibold hover:bg-[#242424]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#DFC38D]" />
                    <span>Start WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Final CTA with Lord Krishna Artwork */}
      <DivineKrishnaCTA
        title="Ready to Speak with Dr. Amit Deshmukh?"
        description="Book your personalized Vedic Astrology, Prashna Kundali, Numerology, Vastu, or Palm Reading session at ₹20 per minute."
        krishnaImage="/images/ai/krishna-kadamba-tree.jpg"
        krishnaAlt="Lord Krishna beneath a sacred Kadamba tree"
      />
    </div>
  );
}
