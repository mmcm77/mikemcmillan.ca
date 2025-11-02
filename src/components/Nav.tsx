"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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
        {/* Enhanced Logo with Icon */}
        <Link
          href="/"
          className="group flex items-center gap-3 hover:scale-105 transition-transform duration-300"
        >
          <div className="relative">
            {/* Gradient Ring */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-accent-blue)] opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
            {/* Logo Container */}
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-brand-primary)]/20 to-[var(--color-accent-blue)]/20 border border-[var(--color-brand-primary)]/30 group-hover:border-[var(--color-brand-primary)]/60 transition-all duration-300">
              <span className="text-lg font-black text-gradient">M</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="text-base font-bold text-[var(--color-text-primary)] tracking-tight">
              Mike McMillan
            </span>
          </div>
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
        </div>
      </div>
    </nav>
  );
};

export default Nav;
