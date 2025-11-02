import "./globals.css";
import Nav from "../components/Nav";
import { ThemeProvider } from "../components/ThemeProvider";
import { Metadata } from "next";
import React from "react";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  metadataBase: new URL('https://mikemcmillan.ca'),
  title: {
    default: "Mike McMillan | Product Leader - AI-Powered Products",
    template: "%s | Mike McMillan"
  },
  description:
    "Product leader with 10+ years building AI-powered products that drive revenue at scale. Led AI-powered product to acquisition, built ML infrastructure serving 100K+ users, raised $50M+ leveraging AI/ML across fintech and SaaS.",
  keywords: [
    "AI-powered products",
    "product manager",
    "machine learning products",
    "AI product development",
    "ML infrastructure",
    "product leadership",
    "AI strategy",
    "product management",
    "fintech AI",
    "SaaS products",
    "AI acquisition",
    "ML product strategy"
  ],
  authors: [{ name: "Mike McMillan" }],
  creator: "Mike McMillan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mikemcmillan.ca",
    siteName: "Mike McMillan | Product Leader",
    title: "Mike McMillan | Product Leader - Building AI-Powered Products at Scale",
    description:
      "Product leader with 10+ years building AI-powered products that drive revenue. Led AI-powered product to acquisition, built ML infrastructure serving 100K+ users, raised $50M+ across fintech and SaaS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mike McMillan - Product Leader Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike McMillan | Product Leader - AI-Powered Products",
    description:
      "Building AI-powered products that drive revenue at scale. Led AI product to acquisition, built ML infrastructure serving 100K+ users.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Nav />
          <main className="px-6 sm:px-[3rem] lg:px-[5rem] xl:px-[6rem] max-w-[1400px] mx-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
