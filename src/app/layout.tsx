import "./globals.css";
import Nav from "../components/Nav";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mike McMillan | Product Manager portfolio",
  description:
    "Experienced Product Manager with a track record in strategy, GTM, and product development. Skilled in Agile, data-driven decision making, and cross-functional leadership.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className="container mx-auto px-12 max-w-4xl">
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  );
}
