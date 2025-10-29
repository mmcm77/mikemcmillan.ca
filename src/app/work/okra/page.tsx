import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Okra Case Study: Building Africa's Open Finance Infrastructure | Mike McMillan",
  description:
    "How I built Africa's leading open finance platform as Product Lead at Okra—launching 100+ products, expanding across 3 countries, and helping raise $35M+ in funding.",
};

export default function OkraCaseStudy() {
  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="py-6">
        <Link
          href="/work"
          className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors inline-flex items-center gap-2"
        >
          <span>←</span> Back to Work
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-20">
        <div className="mb-8">
          <div className="text-[var(--color-brand-primary)] text-sm font-semibold mb-4 tracking-wide uppercase">
            Case Study
          </div>
          <h1 className="text-display-hero text-gradient mb-6">
            Building Africa's Open Finance Infrastructure
          </h1>
          <p className="text-body-large-enhanced max-w-3xl mb-8">
            As the first product hire and Product Lead at Okra, I built the company
            from the ground up into Africa's leading open finance platform—launching
            100+ products, expanding across 3 countries, and helping raise $35M+ in
            venture funding.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="glass-card-hover p-6 text-center">
              <div className="text-4xl font-extrabold text-gradient mb-2">100+</div>
              <div className="text-stat-label">Products Shipped</div>
            </div>
            <div className="glass-card-hover p-6 text-center">
              <div className="text-4xl font-extrabold text-gradient mb-2">3</div>
              <div className="text-stat-label">Countries</div>
            </div>
            <div className="glass-card-hover p-6 text-center">
              <div className="text-4xl font-extrabold text-gradient mb-2">$35M+</div>
              <div className="text-stat-label">Capital Raised</div>
            </div>
            <div className="glass-card-hover p-6 text-center">
              <div className="text-4xl font-extrabold text-gradient mb-2">4 Years</div>
              <div className="text-stat-label">May 2020 - Feb 2024</div>
            </div>
          </div>
        </div>

        {/* Company Context */}
        <div className="card-hover p-8 mb-12">
          <h3 className="text-heading-4 mb-4">Company Context</h3>
          <p className="text-body-enhanced mb-4">
            <Link href="https://okra.ng/" className="link-primary">Okra</Link> is a
            fintech infrastructure company providing open banking APIs across Africa.
            When I joined as the first product hire in May 2020, the company had a
            vision but needed to transform that vision into a scalable product platform.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="border border-[var(--color-border-primary)] rounded-lg p-4">
              <div className="text-[var(--color-brand-primary)] font-semibold mb-2">My Role</div>
              <div className="text-[var(--color-text-secondary)] text-sm">Product Lead (First Product Hire)</div>
            </div>
            <div className="border border-[var(--color-border-primary)] rounded-lg p-4">
              <div className="text-[var(--color-brand-primary)] font-semibold mb-2">Team Size</div>
              <div className="text-[var(--color-text-secondary)] text-sm">Grew from 5 to 40+ employees</div>
            </div>
            <div className="border border-[var(--color-border-primary)] rounded-lg p-4">
              <div className="text-[var(--color-brand-primary)] font-semibold mb-2">Funding Rounds</div>
              <div className="text-[var(--color-text-secondary)] text-sm">Seed, Series A, Series A Extension</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl">
          <h2 className="text-heading-section mb-8">The Challenge</h2>

          <div className="space-y-6">
            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                Building Category Leadership in an Emerging Market
              </h3>
              <p className="text-body-enhanced mb-4">
                Open banking was nascent in Africa when I joined. The challenge wasn't
                just building products—it was defining the category itself while navigating:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-brand-primary)] mt-1">•</span>
                  <span><strong>Regulatory uncertainty:</strong> No clear open banking
                  frameworks existed in Nigeria, South Africa, or Kenya</span>
                </li>
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-brand-primary)] mt-1">•</span>
                  <span><strong>Market education:</strong> Developers and businesses
                  didn't understand the value of financial data APIs</span>
                </li>
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-brand-primary)] mt-1">•</span>
                  <span><strong>Technical complexity:</strong> Each bank had different
                  authentication systems, data formats, and reliability issues</span>
                </li>
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-brand-primary)] mt-1">•</span>
                  <span><strong>Competitive pressure:</strong> Well-funded global players
                  were eyeing the African market</span>
                </li>
              </ul>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4">The Product Question</h3>
              <p className="text-body-enhanced">
                How do we build a comprehensive open finance platform that serves multiple
                use cases (data access, identity verification, payments) across different
                markets with varying infrastructure maturity—while moving fast enough to
                establish category leadership before competitors enter the space?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-16 sm:py-20 bg-[var(--color-bg-secondary)] -mx-6 sm:-mx-[3rem] lg:-mx-[5rem] xl:-mx-[6rem] px-6 sm:px-[3rem] lg:px-[5rem] xl:px-[6rem]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-section mb-8">Strategic Approach</h2>

          <div className="space-y-8">
            {/* Product Strategy */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                1. Modular Product Architecture
              </h3>
              <p className="text-body-enhanced mb-4">
                Instead of building a monolithic platform, I designed a modular approach
                that allowed us to ship fast and adapt to market feedback:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-bold mb-3">Core Layer</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Data connectivity APIs with 150+ financial institutions
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-bold mb-3">Use Case Layer</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Identity verification, credit scoring, transaction analytics
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-bold mb-3">Payments Layer</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Account-to-account transfers, recurring payments
                  </div>
                </div>
              </div>
            </div>

            {/* Go-to-Market */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                2. Developer-First GTM Motion
              </h3>
              <p className="text-body-enhanced mb-4">
                I championed a developer-first approach to build market momentum:
              </p>
              <div className="space-y-3 ml-4">
                <div className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-brand-primary)]">✓</span>
                  <span><strong>Best-in-class developer experience:</strong> Interactive
                  API docs, SDKs in 5 languages, sandbox environment with realistic test data</span>
                </div>
                <div className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-brand-primary)]">✓</span>
                  <span><strong>Self-service onboarding:</strong> Developers could integrate
                  and test within 15 minutes without sales calls</span>
                </div>
                <div className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-brand-primary)]">✓</span>
                  <span><strong>Community building:</strong> Technical workshops, hackathons,
                  and office hours to educate the market</span>
                </div>
              </div>
            </div>

            {/* Data-Driven Iteration */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                3. Ruthless Prioritization Framework
              </h3>
              <p className="text-body-enhanced mb-4">
                With limited resources and 100+ potential features, I implemented a scoring
                system that balanced:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-[var(--color-brand-primary)] pl-4">
                  <div className="font-semibold text-white mb-2">Revenue Impact</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Will this feature unlock new customer segments or increase transaction volume?
                  </div>
                </div>
                <div className="border-l-4 border-[var(--color-accent-blue)] pl-4">
                  <div className="font-semibold text-white mb-2">Strategic Value</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Does this create competitive moat or enable geographic expansion?
                  </div>
                </div>
                <div className="border-l-4 border-[var(--color-brand-primary)] pl-4">
                  <div className="font-semibold text-white mb-2">User Research Signal</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    How many customers requested this? What's the urgency?
                  </div>
                </div>
                <div className="border-l-4 border-[var(--color-accent-blue)] pl-4">
                  <div className="font-semibold text-white mb-2">Engineering Cost</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Resource requirements vs. available capacity
                  </div>
                </div>
              </div>
            </div>

            {/* Geographic Expansion */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                4. Strategic Market Expansion
              </h3>
              <p className="text-body-enhanced mb-4">
                Rather than trying to launch everywhere at once, I led a methodical
                expansion strategy:
              </p>
              <div className="space-y-4">
                <div className="card-hover p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-white">Nigeria (Home Market)</span>
                    <span className="text-sm text-[var(--color-brand-primary)]">2020</span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Achieved product-market fit, built reference customers, refined APIs
                  </p>
                </div>
                <div className="card-hover p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-white">South Africa</span>
                    <span className="text-sm text-[var(--color-accent-blue)]">2021</span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Leveraged Nigeria learnings, adapted for more mature banking infrastructure
                  </p>
                </div>
                <div className="card-hover p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-white">Kenya</span>
                    <span className="text-sm text-[var(--color-brand-primary)]">2022</span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Mobile money integration focus, M-Pesa connectivity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl">
          <h2 className="text-heading-section mb-8">Impact & Results</h2>

          <div className="space-y-8">
            {/* Primary Metrics */}
            <div>
              <h3 className="text-heading-4 mb-6">Product Portfolio Growth</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card-hover p-8">
                  <div className="text-5xl font-extrabold text-gradient mb-3">100+</div>
                  <div className="text-white font-semibold mb-2">Products & Features Launched</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Across 3 core segments: data APIs, identity verification, and payments
                  </div>
                </div>
                <div className="glass-card-hover p-8">
                  <div className="text-5xl font-extrabold text-gradient mb-3">150+</div>
                  <div className="text-white font-semibold mb-2">Financial Institution Integrations</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Banks, fintechs, and mobile money providers across 3 countries
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div>
              <h3 className="text-heading-4 mb-6">Business Impact</h3>
              <div className="space-y-4">
                <div className="card-hover p-6 border-l-4 border-[var(--color-brand-primary)]">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-gradient">$35M+</div>
                    <div>
                      <div className="font-semibold text-white mb-1">Venture Capital Raised</div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        Product roadmap and traction directly contributed to successful fundraising
                        across multiple rounds
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-hover p-6 border-l-4 border-[var(--color-accent-blue)]">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-gradient">#1</div>
                    <div>
                      <div className="font-semibold text-white mb-1">Market Position</div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        Established Okra as Africa's leading open finance infrastructure provider
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-hover p-6 border-l-4 border-[var(--color-brand-primary)]">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-gradient">3</div>
                    <div>
                      <div className="font-semibold text-white mb-1">Geographic Markets</div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        Successfully expanded from Nigeria into South Africa and Kenya with
                        localized product offerings
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team & Process Impact */}
            <div>
              <h3 className="text-heading-4 mb-6">Team & Process Evolution</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-brand-primary)] font-semibold mb-3">
                    Built Product Org
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Hired and mentored product managers, established product rituals,
                    implemented agile frameworks
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-brand-primary)] font-semibold mb-3">
                    Cross-Functional Collaboration
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Partnered with engineering, design, sales, and marketing to drive
                    go-to-market execution
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-semibold mb-3">
                    Data-Driven Culture
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Implemented analytics infrastructure, A/B testing frameworks, and
                    user research practices
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-semibold mb-3">
                    Developer Relations
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Created technical content, ran workshops, built developer community
                    across Africa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16 sm:py-20 bg-[var(--color-bg-secondary)] -mx-6 sm:-mx-[3rem] lg:-mx-[5rem] xl:-mx-[6rem] px-6 sm:px-[3rem] lg:px-[5rem] xl:px-[6rem]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-section mb-8">Key Learnings</h2>

          <div className="space-y-6">
            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                1. Category Creation Requires Market Education, Not Just Product Excellence
              </h3>
              <p className="text-body-enhanced">
                Building the best API wasn't enough. We had to invest heavily in developer
                education, content marketing, and community building to help the market
                understand why open finance mattered. The product teams that win in emerging
                markets are the ones that can articulate clear value propositions for new paradigms.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                2. Modular Architecture Enables Speed Without Sacrificing Quality
              </h3>
              <p className="text-body-enhanced">
                By designing products as composable modules rather than monolithic features,
                we could ship new capabilities quickly while maintaining system reliability.
                This architectural approach also made it easier to expand into new markets—we
                could reuse core modules and swap out market-specific components.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                3. Developer Experience is Product Strategy
              </h3>
              <p className="text-body-enhanced">
                In B2B fintech, your initial users are developers. Investing in exceptional
                DX—clear docs, helpful error messages, realistic sandbox data, responsive
                support—created bottom-up demand that made sales cycles dramatically shorter.
                Many enterprise deals started with a developer trying our API and becoming an
                internal champion.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                4. Ruthless Prioritization Compounds Over Time
              </h3>
              <p className="text-body-enhanced">
                With 100+ products shipped, the accumulated impact of good prioritization
                decisions was massive. Every "no" to a feature request freed up resources
                for higher-impact work. Building transparent frameworks for prioritization
                also helped align stakeholders—sales and engineering understood why certain
                features weren't being built.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                5. Geographic Expansion is a Product Challenge, Not Just a Go-to-Market One
              </h3>
              <p className="text-body-enhanced">
                Each new market required significant product adaptation—different banking
                protocols, regulatory requirements, payment rails, and user behaviors. The
                mistake would have been to view expansion purely as a sales/marketing problem.
                We succeeded by treating each country launch as a product initiative with
                dedicated research, localization, and iteration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pb-24 sm:py-24 sm:pb-28">
        <div className="text-center">
          <h2 className="text-heading-section mb-6">Want to Learn More?</h2>
          <p className="text-body-enhanced mb-10 max-w-2xl mx-auto">
            Interested in discussing product strategy, fintech infrastructure, or my
            experience scaling products in emerging markets?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/work" className="btn-secondary">
              ← Back to All Work
            </Link>
            <a
              href="https://www.linkedin.com/in/mcmillanm"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
