import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueBar } from "@/components/ValueBar";
import { AboutSection } from "@/components/AboutSection";
import { UnitTypes } from "@/components/UnitTypes";
import { Gallery } from "@/components/Gallery";
import { PaymentPlan } from "@/components/PaymentPlan";
import { Location } from "@/components/Location";
import { Developer } from "@/components/Developer";
import { FAQ } from "@/components/FAQ";
import { RegisterSection } from "@/components/RegisterSection";
import { Footer } from "@/components/Footer";
import { TrackingProvider } from "@/components/TrackingProvider";
import { MobileCTA } from "@/components/MobileCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateListing",
      name: "SEI Saadiyat",
      description:
        "778 luxury residences across 6 towers on Saadiyat Island, Abu Dhabi by Aldar Properties.",
      url: "https://sei-saadiyat.com",
      image: "https://sei-saadiyat.com/images/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abu Dhabi",
        addressRegion: "Abu Dhabi",
        addressCountry: "AE",
        streetAddress: "Saadiyat Island",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "24.5333",
        longitude: "54.4333",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "AED",
        price: "2950000",
        priceValidUntil: "2025-12-31",
        availability: "https://schema.org/PreOrder",
      },
    },
    {
      "@type": "Organization",
      name: "Aldar Properties",
      url: "https://www.aldar.com",
      logo: "https://sei-saadiyat.com/images/aldar-logo.webp",
      description: "Abu Dhabi's leading real estate developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abu Dhabi",
        addressCountry: "AE",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the starting price for SEI Saadiyat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prices at SEI Saadiyat start from AED 2.95 million for a 1-bedroom residence.",
          },
        },
        {
          "@type": "Question",
          name: "What payment plan options are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEI Saadiyat offers an attractive 50/50 payment plan. Pay 50% during construction and 50% on handover.",
          },
        },
        {
          "@type": "Question",
          name: "Where is SEI Saadiyat located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEI Saadiyat is located on Saadiyat Island, Abu Dhabi's premier cultural and lifestyle destination.",
          },
        },
        {
          "@type": "Question",
          name: "Can foreign nationals buy property at SEI Saadiyat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Saadiyat Island is a designated freehold area where foreign nationals can purchase property with full ownership rights.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TrackingProvider>
        <Header />
        <main>
          <Hero />
          <ValueBar />
          <AboutSection />
          <UnitTypes />
          <Gallery />
          <PaymentPlan />
          <Location />
          <Developer />
          <FAQ />
          <RegisterSection />
        </main>
        <Footer />
        <MobileCTA />
      </TrackingProvider>
    </>
  );
}
