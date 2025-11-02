"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Nav = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[var(--color-bg-primary)]/90 border-b border-[var(--color-border-secondary)] shadow-lg shadow-black/10"
          : "backdrop-blur-md bg-[var(--color-bg-primary)]/60 border-b border-[var(--color-border-secondary)]/50"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-6 sm:px-[3rem] lg:px-[5rem] xl:px-[6rem] max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="group transition-transform duration-300 hover:scale-105"
        >
          <span className="text-base font-bold text-[var(--color-text-primary)] tracking-tight">
            Mike McMillan
          </span>
        </Link>

        {/* Navigation Links - Minimalist Style */}
        <div className="flex items-center gap-6 sm:gap-8">
          <Link
            href="/"
            className="group relative py-2 font-medium text-xs sm:text-sm transition-colors duration-200"
          >
            <span className={`transition-colors duration-200 ${
              isActive("/")
                ? "text-[var(--color-text-primary)]"
                : "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]"
            }`}>
              Home
            </span>
            <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-accent-blue)] transition-all duration-300 ${
              isActive("/")
                ? "opacity-100 scale-x-100"
                : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"
            }`}></span>
          </Link>
          <Link
            href="/work"
            className="group relative py-2 font-medium text-xs sm:text-sm transition-colors duration-200"
          >
            <span className={`transition-colors duration-200 ${
              isActive("/work")
                ? "text-[var(--color-text-primary)]"
                : "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]"
            }`}>
              Work
            </span>
            <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-accent-blue)] transition-all duration-300 ${
              isActive("/work")
                ? "opacity-100 scale-x-100"
                : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"
            }`}></span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
