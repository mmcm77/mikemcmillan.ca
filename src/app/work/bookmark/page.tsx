import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookmark.com Case Study: AI-Powered Website Builder to Acquisition | Mike McMillan",
  description:
    "How I repositioned Bookmark.com with AI-powered differentiation as Head of Product, scaling the MVP from concept to strategic acquisition by Moneris in 2019.",
};

export default function BookmarkCaseStudy() {
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
          <div className="text-[var(--color-accent-blue)] text-sm font-semibold mb-4 tracking-wide uppercase">
            Case Study
          </div>
          <h1 className="text-display-hero text-gradient mb-6">
            Scaling an AI-Powered Website Builder to Acquisition
          </h1>
          <p className="text-body-large-enhanced max-w-3xl mb-8">
            Joining Bookmark.com as Growth Marketing & Operations Lead, I was quickly
            promoted to Head of Product where I led the strategic repositioning of the
            platform with AI-powered differentiation, scaled the MVP, and contributed to
            the company's{" "}
            <Link
              href="https://markets.businessinsider.com/news/stocks/moneris-invests-and-partners-with-bookmark-to-deliver-online-business-solutions-for-canadian-small-businesses-1028828832"
              className="link-primary"
            >
              strategic acquisition
            </Link>{" "}
            by Moneris in 2019.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="glass-card-hover p-6 text-center">
              <div className="text-4xl font-extrabold text-gradient mb-2">AI-First</div>
              <div className="text-stat-label">Market Positioning</div>
            </div>
            <div className="glass-card-hover p-6 text-center">
              <div className="text-4xl font-extrabold text-gradient mb-2">2019</div>
              <div className="text-stat-label">Strategic Acquisition</div>
            </div>
            <div className="glass-card-hover p-6 text-center">
              <div className="text-4xl font-extrabold text-gradient mb-2">MVP → Exit</div>
              <div className="text-stat-label">Product Journey</div>
            </div>
            <div className="glass-card-hover p-6 text-center">
              <div className="text-4xl font-extrabold text-gradient mb-2">2 Years</div>
              <div className="text-stat-label">July 2017 - April 2019</div>
            </div>
          </div>
        </div>

        {/* Company Context */}
        <div className="card-hover p-8 mb-12">
          <h3 className="text-heading-4 mb-4">Company Context</h3>
          <p className="text-body-enhanced mb-4">
            Bookmark.com was a Toronto-based startup building an AI-powered website builder
            to help small businesses create professional websites in minutes. The company
            was competing in a crowded market dominated by Wix, Squarespace, and WordPress,
            requiring sharp differentiation and execution excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="border border-[var(--color-border-primary)] rounded-lg p-4">
              <div className="text-[var(--color-accent-blue)] font-semibold mb-2">My Journey</div>
              <div className="text-[var(--color-text-secondary)] text-sm">
                Growth Marketing/Ops → Head of Product
              </div>
            </div>
            <div className="border border-[var(--color-border-primary)] rounded-lg p-4">
              <div className="text-[var(--color-accent-blue)] font-semibold mb-2">Market</div>
              <div className="text-[var(--color-text-secondary)] text-sm">
                SMB website builders (competitive landscape)
              </div>
            </div>
            <div className="border border-[var(--color-border-primary)] rounded-lg p-4">
              <div className="text-[var(--color-accent-blue)] font-semibold mb-2">Acquirer</div>
              <div className="text-[var(--color-text-secondary)] text-sm">
                Moneris (Canadian payment processor)
              </div>
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
                Differentiating in a Saturated Website Builder Market
              </h3>
              <p className="text-body-enhanced mb-4">
                When I joined as Head of Product in 2017, the website builder market was
                highly competitive with well-established players. We needed to:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)] mt-1">•</span>
                  <span><strong>Find differentiation:</strong> Wix had scale and features,
                  Squarespace had design, WordPress had flexibility—we needed our own wedge</span>
                </li>
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)] mt-1">•</span>
                  <span><strong>Rapid pivot execution:</strong> The market was moving fast,
                  and we needed to reposition quickly while maintaining product velocity</span>
                </li>
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)] mt-1">•</span>
                  <span><strong>Scale the MVP:</strong> Move beyond initial concept to a
                  production-ready platform that could serve thousands of SMBs</span>
                </li>
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)] mt-1">•</span>
                  <span><strong>Prove unit economics:</strong> Demonstrate to potential
                  acquirers that our CAC/LTV model was sustainable</span>
                </li>
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)] mt-1">•</span>
                  <span><strong>Build for acquisition:</strong> Create strategic value for
                  potential acquirers while building a great product for users</span>
                </li>
              </ul>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4">The Product Question</h3>
              <p className="text-body-enhanced">
                How do we position Bookmark as the AI-powered alternative in a crowded market,
                deliver on that promise with technology that actually helps users build better
                websites faster, and scale the product to demonstrate acquisition-worthy value—all
                while competing against companies with 10x our resources?
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
            {/* AI Positioning */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                1. AI-Powered Differentiation as Market Wedge
              </h3>
              <p className="text-body-enhanced mb-4">
                I led the strategic repositioning to make "AI-powered" our core differentiator.
                This wasn't just marketing—it fundamentally changed how we built the product:
              </p>
              <div className="space-y-4">
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-bold mb-3">
                    AIDA: AI Design Assistant
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)] mb-3">
                    Our core innovation—an AI that asks users about their business and
                    generates customized website designs in minutes, not hours
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    Traditional builders: Start with blank canvas or template → Bookmark:
                    Answer 3-5 questions → Get tailored design
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-bold mb-3">
                    Intelligent Content Suggestions
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    AI-powered copy suggestions based on industry and business type,
                    reducing the "blank page" problem that paralyzed many SMB owners
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-bold mb-3">
                    Automated SEO Optimization
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    ML-driven recommendations for meta tags, headers, and content structure
                    to improve search rankings
                  </div>
                </div>
              </div>
            </div>

            {/* Product Development */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                2. Rapid MVP Iteration Based on User Feedback
              </h3>
              <p className="text-body-enhanced mb-4">
                I implemented a fast-iteration product development process:
              </p>
              <div className="space-y-3 ml-4">
                <div className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)]">✓</span>
                  <span><strong>Weekly user testing sessions:</strong> Every Friday, we
                  watched real SMB owners use the product and identified friction points</span>
                </div>
                <div className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)]">✓</span>
                  <span><strong>Cohort analysis:</strong> Tracked user behavior by sign-up
                  cohort to understand retention and conversion patterns</span>
                </div>
                <div className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)]">✓</span>
                  <span><strong>Two-week release cycles:</strong> Shipped improvements
                  bi-weekly to maintain momentum and respond to feedback quickly</span>
                </div>
                <div className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)]">✓</span>
                  <span><strong>Support ticket mining:</strong> Treated customer support as
                  product research—every complaint was a feature opportunity</span>
                </div>
              </div>
            </div>

            {/* GTM Strategy */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                3. Product-Led Growth & Viral Mechanics
              </h3>
              <p className="text-body-enhanced mb-4">
                I designed the product experience to drive organic growth:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-[var(--color-accent-blue)] pl-4">
                  <div className="font-semibold text-white mb-2">Freemium Onboarding</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Users could create and preview websites for free, reducing friction.
                    Conversion happened when they wanted to publish.
                  </div>
                </div>
                <div className="border-l-4 border-[var(--color-brand-primary)] pl-4">
                  <div className="font-semibold text-white mb-2">"Powered by Bookmark" Branding</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Free tier sites included Bookmark branding, turning every user into
                    a distribution channel
                  </div>
                </div>
                <div className="border-l-4 border-[var(--color-accent-blue)] pl-4">
                  <div className="font-semibold text-white mb-2">Social Sharing Features</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Built-in social media integration made it easy for users to promote
                    their new websites
                  </div>
                </div>
                <div className="border-l-4 border-[var(--color-brand-primary)] pl-4">
                  <div className="font-semibold text-white mb-2">Referral Program</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Incentivized users to refer friends with credits, creating viral loop
                  </div>
                </div>
              </div>
            </div>

            {/* Cross-Functional Leadership */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                4. Aligning Product, Marketing, and Sales
              </h3>
              <p className="text-body-enhanced mb-4">
                As Head of Product, I worked closely with marketing and sales to ensure
                message-market-product fit:
              </p>
              <div className="space-y-4">
                <div className="card-hover p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <div className="font-semibold text-white mb-2">Unified Metrics Dashboard</div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        Created shared KPI dashboard tracking sign-ups, activations, conversions,
                        and churn—ensuring all teams optimized for the same outcomes
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-hover p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <div className="font-semibold text-white mb-2">ICP Refinement</div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        Used product usage data to identify highest-value customer segments,
                        then aligned marketing targeting and sales outreach
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-hover p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <div className="font-semibold text-white mb-2">Sales Enablement</div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        Trained sales team on product features and competitive differentiators,
                        gave them demo scripts showcasing AI capabilities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Building for Acquisition */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                5. Strategic Product Decisions with Acquisition in Mind
              </h3>
              <p className="text-body-enhanced mb-4">
                I made deliberate product choices that increased strategic value for acquirers:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-brand-primary)] font-bold mb-3">
                    Integration-Friendly Architecture
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Built APIs and webhooks knowing potential acquirers would want to
                    integrate with their existing systems
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-brand-primary)] font-bold mb-3">
                    Payment Infrastructure
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Supported multiple payment processors, making us attractive to companies
                    in the payments space (like Moneris)
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-brand-primary)] font-bold mb-3">
                    White-Label Capabilities
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Designed product to be easily white-labeled, allowing acquirers to
                    rebrand and bundle with their offerings
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-brand-primary)] font-bold mb-3">
                    Clean Data & Analytics
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Maintained rigorous data hygiene and analytics—critical for due diligence
                    and proving unit economics
                  </div>
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
            {/* Primary Achievement */}
            <div>
              <h3 className="text-heading-4 mb-6">Strategic Acquisition Success</h3>
              <div className="card-hover p-8 border-l-4 border-[var(--color-accent-blue)]">
                <div className="flex items-start gap-6 mb-4">
                  <div className="text-5xl font-extrabold text-gradient">2019</div>
                  <div>
                    <div className="text-xl font-bold text-white mb-2">
                      Acquired by Moneris
                    </div>
                    <div className="text-body-enhanced">
                      Bookmark was{" "}
                      <Link
                        href="https://markets.businessinsider.com/news/stocks/moneris-invests-and-partners-with-bookmark-to-deliver-online-business-solutions-for-canadian-small-businesses-1028828832"
                        className="link-primary"
                      >
                        strategically acquired
                      </Link>{" "}
                      by Moneris, Canada's largest payment processor, to enhance their
                      online business solutions for SMBs.
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--color-bg-primary)] rounded-lg p-4 mt-4">
                  <div className="text-sm font-semibold text-white mb-2">Why it mattered:</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    The acquisition validated our AI-powered positioning and product strategy.
                    Moneris saw Bookmark as a strategic asset to bundle with payment processing,
                    creating a complete online business solution for their SMB customers.
                  </div>
                </div>
              </div>
            </div>

            {/* Product Achievements */}
            <div>
              <h3 className="text-heading-4 mb-6">Product Milestones</h3>
              <div className="space-y-4">
                <div className="glass-card-hover p-6 flex items-start gap-4">
                  <div className="text-3xl font-bold text-gradient">AI-First</div>
                  <div>
                    <div className="font-semibold text-white mb-1">Market Differentiation</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      Successfully repositioned Bookmark as the AI-powered alternative to
                      traditional website builders
                    </div>
                  </div>
                </div>
                <div className="glass-card-hover p-6 flex items-start gap-4">
                  <div className="text-3xl font-bold text-gradient">MVP → Scale</div>
                  <div>
                    <div className="font-semibold text-white mb-1">Platform Maturity</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      Scaled product from early MVP to production-ready platform serving
                      thousands of SMB customers
                    </div>
                  </div>
                </div>
                <div className="glass-card-hover p-6 flex items-start gap-4">
                  <div className="text-3xl font-bold text-gradient">10x</div>
                  <div>
                    <div className="font-semibold text-white mb-1">Faster Site Creation</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      AIDA reduced average time-to-published-website from hours to minutes,
                      delivering on our core value proposition
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team & Process Impact */}
            <div>
              <h3 className="text-heading-4 mb-6">Leadership & Organizational Impact</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-semibold mb-3">
                    Rapid Career Growth
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Promoted from Growth Marketing/Operations to Head of Product, demonstrating
                    ability to pivot and lead product strategy
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-semibold mb-3">
                    Cross-Functional Alignment
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Unified product, marketing, and sales teams around shared metrics and
                    strategic goals
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-brand-primary)] font-semibold mb-3">
                    Product-Led Culture
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Established user research practices, data-driven decision-making, and
                    rapid iteration cycles
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-brand-primary)] font-semibold mb-3">
                    Acquisition Readiness
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Built product with strategic partnerships in mind, facilitating smooth
                    due diligence and integration
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
                1. Differentiation Beats Feature Parity in Crowded Markets
              </h3>
              <p className="text-body-enhanced">
                We couldn't out-feature Wix or out-design Squarespace. Instead, we found a
                wedge—AI-powered site creation—and went all-in. In saturated markets, having
                one thing you do significantly better than everyone else is more valuable than
                being 80% as good at everything. Focus beats breadth when you're the underdog.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                2. Positioning is Product Strategy, Not Just Marketing
              </h3>
              <p className="text-body-enhanced">
                Deciding to be "the AI-powered website builder" wasn't a tagline—it fundamentally
                shaped our roadmap, hiring, and partnerships. Every feature decision was evaluated
                through the lens: "Does this reinforce our AI positioning?" This alignment between
                positioning and product created authenticity that marketing alone can't manufacture.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                3. Building for Acquisition Requires Different Product Decisions
              </h3>
              <p className="text-body-enhanced">
                Products built purely for users optimize differently than products built with
                acquisition in mind. We prioritized white-label capabilities, integration APIs,
                and data cleanliness—features that may not directly improve user experience but
                dramatically increase strategic value. Understanding potential acquirer needs early
                shaped our architecture in ways that paid off during due diligence.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                4. Freemium Can Drive Growth but Must Convert to Survive
              </h3>
              <p className="text-body-enhanced">
                Our freemium model accelerated user acquisition and created viral distribution,
                but we learned that conversion rate optimization is just as important as top-of-funnel
                growth. We obsessively tracked the journey from free sign-up to paid conversion,
                identifying and removing friction points. A great free product with poor conversion
                mechanics is just an expensive marketing campaign.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                5. Cross-Functional Alignment Accelerates Execution
              </h3>
              <p className="text-body-enhanced">
                The unified metrics dashboard was one of our most impactful initiatives. When
                product, marketing, and sales all optimize for the same KPIs, execution speed
                increases dramatically. Misalignment creates friction—sales wants features marketing
                can't message, product builds things users don't need. Shared goals and transparent
                data eliminate those conflicts.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                6. Exit Timing Reflects Product Maturity, Not Just Market Conditions
              </h3>
              <p className="text-body-enhanced">
                The acquisition happened when our product reached a maturity inflection point—we'd
                proven the AI concept, achieved product-market fit, and built sustainable unit
                economics. Acquirers buy proven business models, not just promising ideas. Our
                timing wasn't luck; it was the result of methodically de-risking the business
                through product execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pb-24 sm:py-24 sm:pb-28">
        <div className="text-center">
          <h2 className="text-heading-section mb-6">Want to Discuss This Journey?</h2>
          <p className="text-body-enhanced mb-10 max-w-2xl mx-auto">
            Interested in talking about AI-powered products, scaling MVPs to acquisition,
            or competitive positioning strategy?
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
