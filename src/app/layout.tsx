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
    default: "Mike McMillan | AI Product Leader",
    template: "%s | Mike McMillan"
  },
  description:
    "AI Product Leader translating AI capabilities into products customers buy. Led AI product to acquisition, built ML infrastructure serving 100K+ users, raised $50M+ across AI-powered products.",
  keywords: [
    "AI product manager",
    "AI product leader",
    "AI product strategy",
    "AI commercialization",
    "AI product positioning",
    "machine learning products",
    "AI product translation",
    "AI to market",
    "AI product acquisition",
    "ML product management",
    "artificial intelligence products",
    "AI product development"
  ],
  authors: [{ name: "Mike McMillan" }],
  creator: "Mike McMillan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mikemcmillan.ca",
    siteName: "Mike McMillan | AI Product Leader",
    title: "Mike McMillan | AI Product Leader - Translating AI into Products Customers Buy",
    description:
      "AI Product Leader with 10+ years translating AI capabilities into revenue-generating products. Led AI product to acquisition, built ML infrastructure serving 100K+ users, raised $50M+ across AI-powered products.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mike McMillan - AI Product Leader Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike McMillan | AI Product Leader",
    description:
      "Translating AI capabilities into products customers buy. Led AI product to acquisition, built ML infrastructure at scale.",
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
