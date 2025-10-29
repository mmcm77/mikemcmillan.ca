import "./globals.css";
import Nav from "../components/Nav";
import { Metadata } from "next";
import React from "react";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: "Mike McMillan | Product Manager",
  description:
    "Product leader with 10+ years building products that scale. $50M+ raised, 100+ products shipped.",
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
        <main className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
          {children}
        </main>
      </body>
    </html>
  );
}
