import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sei-saadiyat.com"),
  title: "SEI Saadiyat | Luxury Residences by Aldar on Saadiyat Island",
  description:
    "Discover SEI Saadiyat - 778 luxury residences across 6 towers on Abu Dhabi's Saadiyat Island. Starting from AED 2.95M with 50/50 payment plan. Register your interest today.",
  keywords: [
    "SEI Saadiyat",
    "Saadiyat Island apartments",
    "Aldar Saadiyat",
    "Abu Dhabi luxury apartments",
    "Saadiyat Island property",
    "Abu Dhabi real estate",
    "Aldar Properties",
    "UAE property investment",
  ],
  authors: [{ name: "Aldar Properties" }],
  creator: "Aldar Properties",
  publisher: "Aldar Properties",
  openGraph: {
    title: "SEI Saadiyat | Luxury Residences by Aldar",
    description:
      "778 luxury residences on Saadiyat Island. Starting from AED 2.95M with 50/50 payment plan.",
    url: "https://sei-saadiyat.com",
    siteName: "SEI Saadiyat",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SEI Saadiyat by Aldar",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEI Saadiyat | Luxury Residences by Aldar",
    description:
      "778 luxury residences on Saadiyat Island. Starting from AED 2.95M.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://sei-saadiyat.com" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
