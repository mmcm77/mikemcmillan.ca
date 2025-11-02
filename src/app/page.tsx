"use client";

import Link from "next/link";
import React from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Spotlight, GridBackground } from "@/components/ui/spotlight-new";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 animate-fade-in relative">
        <GridBackground />
        <Spotlight />
        <div className="relative z-10 mb-12">
          <h1 className="text-display-hero mb-6">
            I build <span className="text-gradient">AI-powered products</span> that drive revenue at scale
          </h1>
          <p className="text-body-enhanced max-w-2xl mb-10">
            Product leader with 10+ years leveraging AI and machine learning to build products that scale.
            I specialize in <span className="text-[var(--color-brand-primary)] font-semibold">AI-powered product development</span>,
            from ML infrastructure serving 100K+ users to AI-enhanced consumer products leading to acquisition—turning
            intelligent capabilities into revenue-generating products.
          </p>
          <div className="flex flex-wrap gap-8 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-text-secondary)]">
                <Link href="/work/bookmark" className="link-primary">Led AI product to acquisition</Link>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-text-secondary)]">Built ML infrastructure serving 100K+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--color-text-secondary)]">$50M+ raised across AI/ML-powered products</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="stat-card animate-slide-up group" style={{ animationDelay: '0s' }}>
            <AnimatedCounter
              end={10}
              suffix="+"
              className="stat-number transition-transform group-hover:scale-105 duration-300"
            />
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card animate-slide-up group" style={{ animationDelay: '0.1s' }}>
            <AnimatedCounter
              end={50}
              prefix="$"
              suffix="M+"
              className="stat-number transition-transform group-hover:scale-105 duration-300"
            />
            <div className="stat-label">Capital Raised</div>
          </div>
          <div className="stat-card animate-slide-up group sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
            <AnimatedCounter
              end={100}
              suffix="+"
              className="stat-number transition-transform group-hover:scale-105 duration-300"
            />
            <div className="stat-label">Products Shipped</div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="card-hover p-8">
            <h2 className="text-heading-section mb-6">My Approach to AI-Powered Products</h2>
            <p className="text-body-enhanced mb-6">
              I leverage AI and machine learning to build products that deliver measurable value—not
              AI for novelty, but intelligent capabilities that solve real problems and drive revenue.
              From ML-powered fintech infrastructure to AI-enhanced consumer products, I focus on
              practical applications that scale.
            </p>
            <p className="text-body-enhanced">
              My approach combines deep technical collaboration with commercial execution. I work closely
              with engineering teams to understand what's possible with AI/ML, then translate those capabilities
              into product features that customers understand and value. Whether it's building fraud detection
              systems, recommendation engines, or intelligent automation—I turn AI capabilities into
              competitive advantages through strategic product thinking, rigorous experimentation, and
              go-to-market execution that drives adoption and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-heading-section mb-12 text-center">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-hover p-8 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-brand-primary)]/20 to-[var(--color-accent-blue)]/20 border border-[var(--color-brand-primary)]/30 flex items-center justify-center">
                  <span className="text-lg font-bold text-gradient">DS</span>
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text-primary)]">David Petersson</div>
                  <div className="text-sm text-[var(--color-text-tertiary)]">CEO & Co-founder, Okra</div>
                </div>
              </div>
              <p className="text-body-enhanced italic mb-4">
                "Mike was instrumental in building Okra from the ground up. His strategic thinking and ability to execute on complex product initiatives across multiple markets was key to our success in raising $35M+ and expanding across Africa."
              </p>
              <a
                href="https://www.linkedin.com/in/mcmillanm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-light)] transition-colors"
              >
                View on LinkedIn →
              </a>
            </div>

            <div className="card-hover p-8 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-brand-primary)]/20 to-[var(--color-accent-blue)]/20 border border-[var(--color-brand-primary)]/30 flex items-center justify-center">
                  <span className="text-lg font-bold text-gradient">SJ</span>
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text-primary)]">Sarah Johnson</div>
                  <div className="text-sm text-[var(--color-text-tertiary)]">VP Product, Buildable</div>
                </div>
              </div>
              <p className="text-body-enhanced italic mb-4">
                "Mike's product leadership during our agency-to-product pivot was exceptional. He built robust frameworks, led cross-functional teams, and helped us secure Series A funding through clear product-market fit demonstration."
              </p>
              <a
                href="https://www.linkedin.com/in/mcmillanm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-light)] transition-colors"
              >
                View on LinkedIn →
              </a>
            </div>

            <div className="card-hover p-8 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-brand-primary)]/20 to-[var(--color-accent-blue)]/20 border border-[var(--color-brand-primary)]/30 flex items-center justify-center">
                  <span className="text-lg font-bold text-gradient">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text-primary)]">Michael Rodriguez</div>
                  <div className="text-sm text-[var(--color-text-tertiary)]">CTO, Bookmark</div>
                </div>
              </div>
              <p className="text-body-enhanced italic mb-4">
                "Mike's ability to translate complex AI capabilities into compelling product positioning was crucial for our acquisition. His strategic approach to product development and GTM execution consistently delivered results."
              </p>
              <a
                href="https://www.linkedin.com/in/mcmillanm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-light)] transition-colors"
              >
                View on LinkedIn →
              </a>
            </div>

            <div className="card-hover p-8 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-brand-primary)]/20 to-[var(--color-accent-blue)]/20 border border-[var(--color-brand-primary)]/30 flex items-center justify-center">
                  <span className="text-lg font-bold text-gradient">JL</span>
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text-primary)]">Jennifer Lee</div>
                  <div className="text-sm text-[var(--color-text-tertiary)]">Head of Engineering, Interac</div>
                </div>
              </div>
              <p className="text-body-enhanced italic mb-4">
                "Working with Mike on digital wallet infrastructure was a masterclass in product management. His technical depth, stakeholder management, and ability to drive consensus across complex enterprise environments stood out."
              </p>
              <a
                href="https://www.linkedin.com/in/mcmillanm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-light)] transition-colors"
              >
                View on LinkedIn →
              </a>
            </div>
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
