"use client";

import Link from "next/link";
import React from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 animate-fade-in">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-primary)]"></span>
            </span>
            <span className="text-sm font-medium text-[var(--color-text-primary)]">Available for new opportunities</span>
          </div>
          <h1 className="text-display-hero text-gradient mb-8">
            I build products that drive revenue at scale
          </h1>
          <p className="text-body-large-enhanced max-w-2xl mb-8">
            Product leader with 10+ years turning vision into revenue-generating products.
            I specialize in <span className="text-[var(--color-brand-primary)] font-semibold">0-to-1 product development</span>,
            strategic positioning, and go-to-market execution that attracts funding and drives growth.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--color-brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-text-secondary)]">$50M+ in venture funding raised</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--color-brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-text-secondary)]">100K+ users reached across products</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--color-brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-text-secondary)]">
                <Link href="/work" className="link-primary">3 successful exits & acquisitions</Link>
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="glass-card-hover p-8 text-center animate-slide-up group cursor-default">
            <AnimatedCounter
              end={10}
              suffix="+"
              className="text-5xl md:text-6xl font-extrabold text-gradient mb-3 tracking-tight transition-transform group-hover:scale-110 duration-300"
            />
            <div className="text-stat-label">Years Experience</div>
          </div>
          <div className="glass-card-hover p-8 text-center animate-slide-up group cursor-default" style={{ animationDelay: '0.1s' }}>
            <AnimatedCounter
              end={50}
              prefix="$"
              suffix="M+"
              className="text-5xl md:text-6xl font-extrabold text-gradient mb-3 tracking-tight transition-transform group-hover:scale-110 duration-300"
            />
            <div className="text-stat-label">Capital Raised</div>
          </div>
          <div className="glass-card-hover p-8 text-center animate-slide-up group cursor-default sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
            <AnimatedCounter
              end={100}
              suffix="+"
              className="text-5xl md:text-6xl font-extrabold text-gradient mb-3 tracking-tight transition-transform group-hover:scale-110 duration-300"
            />
            <div className="text-stat-label">Products Shipped</div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="card-hover p-8">
            <h2 className="text-heading-section mb-6">My Approach</h2>
            <p className="text-body-enhanced">
              I thrive on leading and developing high-performing R&D
              teams, partnering effectively with sales and marketing
              organizations, and tackling complex problems with a strategic,
              hands-on approach. My work combines rigorous data analysis with rapid
              experimentation, strategic product thinking with hands-on execution.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pb-24 sm:py-24 sm:pb-28">
        <div className="text-center px-6">
          <h2 className="text-heading-section mb-6">Let's connect</h2>
          <p className="text-body-enhanced mb-10 max-w-2xl mx-auto">
            Want to chat about product management, startups, or potential
            collaborations? Reach out on LinkedIn or check out my GitHub.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/mcmillanm"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mmcm77"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
