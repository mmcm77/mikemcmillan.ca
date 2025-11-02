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
    default: "Mike McMillan | Product Manager",
    template: "%s | Mike McMillan"
  },
  description:
    "Product leader with 10+ years building products that scale. $50M+ raised, 100+ products shipped, 3 successful exits.",
  keywords: [
    "product manager",
    "product management",
    "PM portfolio",
    "0-to-1 products",
    "fintech",
    "SaaS",
    "product strategy",
    "go-to-market",
    "product leadership",
    "startup product manager"
  ],
  authors: [{ name: "Mike McMillan" }],
  creator: "Mike McMillan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mikemcmillan.ca",
    siteName: "Mike McMillan | Product Manager",
    title: "Mike McMillan | Product Manager",
    description:
      "Product leader with 10+ years building revenue-generating products. $50M+ raised, 100+ products shipped, 3 successful exits.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mike McMillan - Product Manager Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike McMillan | Product Manager",
    description:
      "Product leader with 10+ years building revenue-generating products. $50M+ raised, 100+ products shipped.",
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
