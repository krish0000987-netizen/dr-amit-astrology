import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  Compass,
  Home as HomeIcon,
  MessageCircle,
} from "lucide-react";
import InteractiveFAQ from "@/components/InteractiveFAQ";
import DivineKrishnaCTA from "@/components/DivineKrishnaCTA";
import { BRAND_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Vastu Consultation – Home, Office & Business Spatial Harmony",
  description:
    "Create Harmony Between Your Space and Life with Dr. Amit Deshmukh. Home Vastu, Office Vastu, Business Space Vastu & spatial planning at ₹20/minute.",
};

const VASTU_FAQS = [
  {
    question: "Does Vastu consultation require structural demolition?",
    answer:
      "No. Dr. Amit Deshmukh focuses on practical, non-demolition Vastu adjustments—such as room usage alignment, furniture orientation, directional element balancing, and color harmony—especially for already-built apartments, homes, and offices.",
  },
  {
    question: "Can I get a Vastu consultation online via Video Call or WhatsApp?",
    answer:
      "Yes. By sharing your floor plan (or a clear sketch with North direction marked) along with photographs or a live Video Call walkthrough, Dr. Amit Deshmukh can evaluate your residential or commercial space accurately.",
  },
  {
    question: "Can Vastu be combined with my birth chart (Astro-Vastu)?",
    answer:
      "Yes. Combining your Janam Kundli with your property's directional layout ensures that spatial adjustments resonate harmoniously with your personal planetary periods.",
  },
  {
    question: "How is Vastu consultation priced?",
    answer:
      "Online and telephonic Vastu consultations follow our transparent ₹20 per minute rate (e.g., 15 minutes = ₹300, 30 minutes = ₹600, 60 minutes = ₹1,200).",
  },
];

export default function VastuConsultationPage() {
  return (
    <div className="bg-white pt-24">
      {/* SECTION 1: Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F3] to-white border-b border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A15B]/50">
                <HomeIcon className="w-3.5 h-3.5 text-[#A77B35]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                  VASTU SHASTRA • ARCHITECTURAL &amp; SPATIAL HARMONY
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#242424] leading-[1.14]">
                Create Harmony Between Your Space and Life
              </h1>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                Align your home, office, or commercial space with the five natural elements and eight cardinal directions. Dr. Amit Deshmukh provides practical, non-demolition Vastu consultation to support peace, health, and prosperity.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/pricing?service=Vastu%20Consultation#booking-form"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#A77B35] text-white font-semibold text-sm shadow-lg hover:brightness-105 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Vastu Consultation (₹20/Min)</span>
                </Link>
                <a
                  href={BRAND_INFO.contactPlaceholders.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-[#C6A15B] text-[#A77B35] font-semibold text-sm hover:bg-[#FAF8F3] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Floor Plan</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-7 rounded-3xl overflow-hidden border-2 border-[#C6A15B]/55 shadow-luxury aspect-[4/5]">
                <img
                  src="/images/ai/vastu-luxury-home.jpg"
                  alt="Luxury Indian courtyard residence designed with Vastu harmony"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/45 bg-[#FAF8F3] shadow-card aspect-[4/5]">
                <img
                  src="/images/photos/vastu-architectural-floorplan.jpg"
                  alt="Vastu Architectural Floor Plan Blueprint"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What is Vastu Shastra? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#C6A15B]/45 shadow-card bg-[#FAF8F3]">
              <img
                src="/images/photos/vastu-compass-mandala.jpg"
                alt="Traditional Vastu Purusha Mandala and 8-Direction Compass"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                01 • WHAT IS VASTU SHASTRA?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Balancing the Five Elements &amp; Eight Directions
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                Vastu Shastra is the classical Indian science of spatial arrangement and architecture. It harmonizes a structure with the five fundamental elements—<em>Prithvi</em> (Earth), <em>Jala</em> (Water), <em>Agni</em> (Fire), <em>Vayu</em> (Air), and <em>Akasha</em> (Space)—across the eight cardinal and intercardinal directions.
              </p>
              <p className="text-base text-[#555555] leading-relaxed">
                When the entrance, kitchen, sleeping quarters, prayer room, and workstations are aligned with natural solar and magnetic currents, occupants experience greater mental calm, familial harmony, and productive focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Home Vastu, Office Vastu & Business Space Vastu */}
      <section className="py-20 bg-[#FAF8F3] border-y border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Home Vastu */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 border border-[#C6A15B]/35 shadow-card">
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <img
                src="/images/ai/vastu-luxury-home.jpg"
                alt="Beautiful residential interior Vastu harmony"
                className="w-full h-52 object-cover rounded-2xl border border-[#C6A15B]/35"
              />
              <img
                src="/images/photos/vastu-remedies-without-demolition.jpg"
                alt="Non-structural Vastu balancing and remedies"
                className="w-full h-40 object-cover rounded-2xl border border-[#C6A15B]/35"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                02 • HOME VASTU
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
                Residential Apartments, Villas &amp; New Plot Selection
              </h3>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                We evaluate your Main Entrance (Mukhya Dwara), Ishanya (Northeast) sanctuary zone, Agneya (Southeast) kitchen placement, Nairutya (Southwest) master bedroom stability, sleeping head directions, and Brahmasthan openness—offering practical remedies without structural demolition.
              </p>
            </div>
          </div>

          {/* Office Vastu */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 border border-[#C6A15B]/35 shadow-card">
            <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                03 • OFFICE VASTU
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
                Executive Cabins, Workstations &amp; Professional Studios
              </h3>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                Optimize founder/director seating orientation, conference room dynamics, accounting and treasury zones in the North, and reception flow so your team works with clarity and cohesion.
              </p>
            </div>
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/40 aspect-[16/10] order-1 lg:order-2">
              <img
                src="/images/ai/office-vastu-corporate.jpg"
                alt="Premium corporate office Vastu interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Business Space Vastu */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 border border-[#C6A15B]/35 shadow-card">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#C6A15B]/40 aspect-[16/10] bg-[#FAF8F3]">
              <img
                src="/images/photos/vastu-commercial-property.jpg"
                alt="Commercial property and retail Vastu diagram"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A77B35] font-semibold">
                04 • BUSINESS SPACE VASTU
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242424]">
                Retail Showrooms, Clinics, Warehouses &amp; Commercial Units
              </h3>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                Align customer entry pathways, cash counter positioning, inventory storage zones, and electrical/heating equipment placement to support smooth commercial operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Directions and Spatial Planning (Compass + Architectural Floor Plan) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
              05 • DIRECTIONS AND SPATIAL PLANNING
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
              The Eight Directional Zones &amp; Floor Plan Zoning
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-[#FAF8F3] border border-[#C6A15B]/45 overflow-hidden shadow-card">
              <img
                src="/images/photos/vastu-compass-mandala.jpg"
                alt="Illustrated 8-Direction Vastu Compass"
                className="w-full h-72 object-cover bg-white border-b border-[#C6A15B]/25"
              />
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#242424]">
                  8-Direction Energy Mapping
                </h3>
                <p className="text-sm text-[#555555]">
                  Northeast (Water/Sacred), Southeast (Fire/Kitchen), Southwest (Earth/Stability), and Northwest (Air/Movement) directional audit.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-[#FAF8F3] border border-[#C6A15B]/45 overflow-hidden shadow-card">
              <img
                src="/images/photos/vastu-architectural-floorplan.jpg"
                alt="Architectural Vastu Floor Plan"
                className="w-full h-72 object-cover bg-white border-b border-[#C6A15B]/25"
              />
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#242424]">
                  Floor Plan &amp; Brahmasthan Review
                </h3>
                <p className="text-sm text-[#555555]">
                  Room-by-room evaluation of existing layouts or pre-purchase architectural blueprints before construction or interior fit-out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Vastu Consultation Process */}
      <section className="py-20 bg-[#FAF8F3] border-t border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border-2 border-[#C6A15B]/50 shadow-luxury aspect-[4/3]">
              <img
                src="/images/ai/consultation-room.jpg"
                alt="Property Vastu consultation session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A77B35] font-semibold">
                06 • VASTU CONSULTATION PROCESS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242424]">
                Simple Online &amp; Telephonic Vastu Review
              </h2>
              <div className="space-y-3">
                {[
                  "1. Book your preferred duration at ₹20/minute and share your floor plan or room layout via WhatsApp.",
                  "2. Indicate the compass North direction of your entrance or property.",
                  "3. Discuss your specific concerns (health, family peace, financial flow, or business growth) with Dr. Amit Deshmukh.",
                  "4. Receive practical, non-destructive directional and elemental placement remedies.",
                ].map((s) => (
                  <div
                    key={s}
                    className="p-3.5 rounded-xl bg-white border border-[#C6A15B]/30 text-sm text-[#242424] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A77B35] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Frequently Asked Questions */}
      <InteractiveFAQ
        title="Vastu Consultation – Frequently Asked Questions"
        subtitle="Answers regarding non-demolition remedies, online floor-plan reviews, and consultation fees."
        faqs={VASTU_FAQS}
        visualImage="/images/photos/vastu-architectural-floorplan.jpg"
        visualAlt="Vastu Floor Plan Blueprint"
        visualCaption="Home, Office & Commercial Vastu • ₹20/Min"
      />

      {/* SECTION 7: Book Consultation CTA with Peaceful Krishna Artwork */}
      <DivineKrishnaCTA
        title="Bring Peace, Balance & Prosperity Into Your Living or Working Space"
        description="Schedule a Vastu consultation with Dr. Amit Deshmukh in Hindi, English, Marathi, or Kannada at ₹20 per minute."
        krishnaImage="/images/ai/krishna-vrindavan-flute.jpg"
        krishnaAlt="Peaceful Lord Krishna playing flute in Vrindavan"
      />
    </div>
  );
}
