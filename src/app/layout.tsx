import "./globals.css";
import Nav from "../components/Nav";
import { Metadata } from "next";
import React from "react";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  metadataBase: new URL("https://mikemcmillan.ca"),
  title: "Mike McMillan — Product leader and hands-on builder",
  description:
    "Product leader and hands-on builder working across commerce, financial infrastructure, developer platforms, and applied AI.",
  authors: [{ name: "Mike McMillan" }],
  creator: "Mike McMillan",
  publisher: "Mike McMillan",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://mikemcmillan.ca",
    siteName: "Mike McMillan",
    title: "Mike McMillan — Product leader and hands-on builder",
    description:
      "Working across commerce, financial infrastructure, developer platforms, and applied AI.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mike McMillan — product leader and hands-on builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike McMillan — Product leader and hands-on builder",
    description:
      "Working across commerce, financial infrastructure, developer platforms, and applied AI.",
    images: ["/twitter-image"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
