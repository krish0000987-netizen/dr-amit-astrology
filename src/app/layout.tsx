import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import WalletModal from "@/components/WalletModal";
import { WalletProvider } from "@/context/WalletContext";

export const metadata: Metadata = {
  title: {
    default: "Dr. Amit Deshmukh | Premium Vedic Astrology Consultation (₹20/Min)",
    template: "%s | Dr. Amit Deshmukh Astrology Consultation",
  },
  description:
    "Get personalized astrological guidance from Dr. Amit Deshmukh (9+ years experience). Vedic Astrology, Prashna Kundali, Numerology, Vastu Consultation & Palm Reading in Hindi, English, Marathi & Kannada at ₹20/minute.",
  keywords: [
    "Dr. Amit Deshmukh",
    "Vedic Astrology Consultation",
    "Prashna Kundali",
    "Numerology Consultation",
    "Vastu Shastra Consultant",
    "Palm Reading",
    "Astrologer Hindi English Marathi Kannada",
  ],
  openGraph: {
    title: "Dr. Amit Deshmukh – Vedic Astrology Consultation",
    description:
      "Traditional Vedic wisdom and practical remedies for career, business, marriage, relationships, finance, health, and family matters. ₹20/Minute.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dr. Amit Deshmukh Astrology Consultation",
    description:
      "Traditional Vedic Astrology, Prashna Kundali, Numerology, Vastu Consultation, and Palm Reading by Dr. Amit Deshmukh with 9 years of experience.",
    priceRange: "₹20 per minute",
    openingHours: "Mo-Su 10:00-18:00",
    availableLanguage: ["Hindi", "English", "Marathi", "Kannada"],
    areaServed: "IN",
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#242424] selection:bg-[#F4EBDD] selection:text-[#242424]">
        <WalletProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingActions />
          <WalletModal />
        </WalletProvider>
      </body>
    </html>
  );
}
