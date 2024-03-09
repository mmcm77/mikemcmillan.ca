import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike McMillan | Product Manager portfolio",
  description:
    "Experienced Product Manager with a track record in strategy, GTM, and product development. Skilled in Agile, data-driven decision making, and cross-functional leadership.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
