import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="section">
        {/* Hero Section */}
        <div className="mb-24 animate-fade-in">
          <div className="mb-6">
            <h1 className="text-display text-gradient mb-6">
              Building products that scale
            </h1>
            <p className="text-body-large max-w-3xl">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="glass-card-hover p-6 text-center animate-slide-up">
              <div className="text-5xl font-bold text-gradient mb-2">10+</div>
              <div className="text-caption">Years Experience</div>
            </div>
            <div className="glass-card-hover p-6 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-gradient mb-2">$50M+</div>
              <div className="text-caption">Capital Raised</div>
            </div>
            <div className="glass-card-hover p-6 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-gradient mb-2">100+</div>
              <div className="text-caption">Products Shipped</div>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="space-y-8 max-w-4xl mb-24">
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

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-heading-3 mb-4">Let's connect</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Want to chat about product management, startups, or potential
            collaborations? Reach out on LinkedIn, check out my GitHub, or
            send me an email.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/mcmillanm"
              className="btn-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mmcm77"
              className="btn-secondary"
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
    </main>
  );
}
