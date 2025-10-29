import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 animate-fade-in">
        <div className="mb-16">
          <h1 className="text-heading-1 text-gradient mb-8">
            Building products that scale
          </h1>
          <p className="text-body-large max-w-2xl">
            Product leader with a decade of{" "}
            <Link href="/work" className="link-primary">
              experience
            </Link>{" "}
            in product management, strategy, and go-to-market execution.
            Throughout my career, I've demonstrated a consistent ability
            to build products from scratch, attracting over $50 million in
            venture funding to support my product vision.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="glass-card-hover p-8 text-center animate-slide-up">
            <div className="text-5xl md:text-6xl font-extrabold text-gradient mb-3 tracking-tight">10+</div>
            <div className="text-sm md:text-base text-[var(--color-text-secondary)] font-medium">Years Experience</div>
          </div>
          <div className="glass-card-hover p-8 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl md:text-6xl font-extrabold text-gradient mb-3 tracking-tight">$50M+</div>
            <div className="text-sm md:text-base text-[var(--color-text-secondary)] font-medium">Capital Raised</div>
          </div>
          <div className="glass-card-hover p-8 text-center animate-slide-up sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl md:text-6xl font-extrabold text-gradient mb-3 tracking-tight">100+</div>
            <div className="text-sm md:text-base text-[var(--color-text-secondary)] font-medium">Products Shipped</div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl">
          <div className="card-hover p-8">
            <h2 className="text-heading-4 mb-4">My Approach</h2>
            <p className="text-body">
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
      <section className="py-16 pb-20 sm:py-20 sm:pb-24">
        <div className="text-center px-6">
          <h2 className="text-heading-3 mb-6">Let's connect</h2>
          <p className="text-body mb-10 max-w-2xl mx-auto">
            Want to chat about product management, startups, or potential
            collaborations? Reach out on LinkedIn, check out my GitHub, or
            send me an email.
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
            <a
              href="mailto:mikemcmillan55@gmail.com"
              className="btn-secondary"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
