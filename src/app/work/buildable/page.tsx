import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buildable (IntegrationOS) Case Study: Agency-to-Product Transformation | Mike McMillan",
  description:
    "How I helped transform Buildable from a digital agency into a product-centric company, launching 20+ microservices and contributing to Series A funding.",
};

export default function BuildableCaseStudy() {
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
            From Agency to Product: The Buildable Transformation
          </h1>
          <p className="text-body-large-enhanced max-w-3xl mb-8">
            As Product Manager at Buildable.io (now{" "}
            <Link href="https://www.integrationos.com/" className="link-primary">
              IntegrationOS
            </Link>
            ), I played a crucial role in transforming the company from a services
            business into a product-centric organization—launching 20+ microservice
            products, building an enterprise client portfolio, and contributing to a
            successful Series A fundraise.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="glass-card-hover p-6 text-center">
              <div className="text-4xl font-extrabold text-gradient mb-2">20+</div>
              <div className="text-stat-label">Microservices Launched</div>
            </div>
            <div className="glass-card-hover p-6 text-center">
              <div className="text-4xl font-extrabold text-gradient mb-2">$3.76M</div>
              <div className="text-stat-label">Series A Raised</div>
            </div>
            <div className="glass-card-hover p-6 text-center">
              <div className="text-4xl font-extrabold text-gradient mb-2">4+</div>
              <div className="text-stat-label">Enterprise Clients</div>
            </div>
            <div className="glass-card-hover p-6 text-center">
              <div className="text-4xl font-extrabold text-gradient mb-2">1 Year</div>
              <div className="text-stat-label">May 2019 - May 2020</div>
            </div>
          </div>
        </div>

        {/* Company Context */}
        <div className="card-hover p-8 mb-12">
          <h3 className="text-heading-4 mb-4">Company Context</h3>
          <p className="text-body-enhanced mb-4">
            Buildable.io started as a digital agency building custom software for clients.
            The founding team recognized the inefficiencies in repeatedly building similar
            integration logic and saw an opportunity to transform into a platform business.
            I joined as their Product Manager to lead this critical pivot.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="border border-[var(--color-border-primary)] rounded-lg p-4">
              <div className="text-[var(--color-accent-blue)] font-semibold mb-2">My Role</div>
              <div className="text-[var(--color-text-secondary)] text-sm">Product Manager (First PM Hire)</div>
            </div>
            <div className="border border-[var(--color-border-primary)] rounded-lg p-4">
              <div className="text-[var(--color-accent-blue)] font-semibold mb-2">Business Model Shift</div>
              <div className="text-[var(--color-text-secondary)] text-sm">Agency → Product Platform</div>
            </div>
            <div className="border border-[var(--color-border-primary)] rounded-lg p-4">
              <div className="text-[var(--color-accent-blue)] font-semibold mb-2">Outcome</div>
              <div className="text-[var(--color-text-secondary)] text-sm">Rebranded as IntegrationOS</div>
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
                Pivoting from Services to Product Without Losing Revenue
              </h3>
              <p className="text-body-enhanced mb-4">
                The company faced the classic agency-to-product dilemma: how do you build
                a scalable product business while maintaining the revenue from client work
                that keeps the lights on? The challenge involved:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)] mt-1">•</span>
                  <span><strong>Resource allocation:</strong> Balancing team time between
                  billable client work and non-revenue-generating product development</span>
                </li>
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)] mt-1">•</span>
                  <span><strong>Product-market fit uncertainty:</strong> No clear validation
                  that a microservices platform would resonate with the market</span>
                </li>
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)] mt-1">•</span>
                  <span><strong>Process transformation:</strong> Agency workflows (client-driven,
                  waterfall) needed to become product workflows (hypothesis-driven, agile)</span>
                </li>
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)] mt-1">•</span>
                  <span><strong>Sales motion shift:</strong> Moving from relationship-based
                  agency sales to product-led growth and self-service</span>
                </li>
                <li className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)] mt-1">•</span>
                  <span><strong>Team mindset:</strong> Developers accustomed to custom
                  solutions needed to think in reusable, scalable abstractions</span>
                </li>
              </ul>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4">The Strategic Question</h3>
              <p className="text-body-enhanced">
                How do we identify the highest-value, most reusable integration patterns
                from our agency work, package them as microservices, and build a platform
                that delivers value to developers—while transitioning the organization's
                culture, processes, and revenue model from services to product?
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
            {/* Product Discovery */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                1. Mining Agency Work for Product Insights
              </h3>
              <p className="text-body-enhanced mb-4">
                I started by analyzing our agency projects to identify patterns. Rather
                than guessing what developers needed, I looked at what we were repeatedly
                building:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-bold mb-3">Analysis Process</div>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li>• Reviewed 20+ client projects</li>
                    <li>• Identified common integration needs</li>
                    <li>• Quantified engineering time spent</li>
                    <li>• Mapped to market opportunities</li>
                  </ul>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-bold mb-3">Key Findings</div>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li>• Payment processing (Stripe, PayPal)</li>
                    <li>• Authentication/OAuth flows</li>
                    <li>• Email delivery services</li>
                    <li>• Data transformation/normalization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Transformation */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                2. Implementing Agile Product Development
              </h3>
              <p className="text-body-enhanced mb-4">
                I introduced product management frameworks that were new to the organization:
              </p>
              <div className="space-y-3 ml-4">
                <div className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)]">✓</span>
                  <span><strong>Two-week sprints:</strong> Replaced ad-hoc development with
                  structured iteration cycles</span>
                </div>
                <div className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)]">✓</span>
                  <span><strong>Product roadmap with themes:</strong> Organized work around
                  strategic bets rather than client requests</span>
                </div>
                <div className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)]">✓</span>
                  <span><strong>User story mapping:</strong> Ensured features delivered
                  complete developer experiences, not just API endpoints</span>
                </div>
                <div className="flex gap-3 items-start text-body-enhanced">
                  <span className="text-[var(--color-accent-blue)]">✓</span>
                  <span><strong>Prioritization framework:</strong> RICE scoring (Reach,
                  Impact, Confidence, Effort) to make objective trade-off decisions</span>
                </div>
              </div>
            </div>

            {/* Product Strategy */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                3. Hybrid Business Model During Transition
              </h3>
              <p className="text-body-enhanced mb-4">
                I proposed a pragmatic approach to manage the pivot without financial risk:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="card-hover p-6">
                  <div className="text-white font-bold mb-2">Phase 1</div>
                  <div className="text-sm text-[var(--color-text-secondary)] mb-3">
                    80% agency / 20% product
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    Build MVP microservices, validate with existing clients
                  </div>
                </div>
                <div className="card-hover p-6">
                  <div className="text-white font-bold mb-2">Phase 2</div>
                  <div className="text-sm text-[var(--color-text-secondary)] mb-3">
                    50% agency / 50% product
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    Launch public beta, acquire first non-client users
                  </div>
                </div>
                <div className="card-hover p-6">
                  <div className="text-white font-bold mb-2">Phase 3</div>
                  <div className="text-sm text-[var(--color-text-secondary)] mb-3">
                    20% agency / 80% product
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    Product revenue scales, transition to product-led growth
                  </div>
                </div>
              </div>
            </div>

            {/* Go-to-Market */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                4. Building in Public & Developer Community
              </h3>
              <p className="text-body-enhanced mb-4">
                To gain traction quickly, I championed a "build in public" strategy:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-[var(--color-accent-blue)] pl-4">
                  <div className="font-semibold text-white mb-2">Early Access Program</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Invited developers to test microservices before launch, gathering feedback
                    and building advocates
                  </div>
                </div>
                <div className="border-l-4 border-[var(--color-brand-primary)] pl-4">
                  <div className="font-semibold text-white mb-2">Technical Content</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Published integration guides, comparison posts, and architecture deep-dives
                    to establish thought leadership
                  </div>
                </div>
                <div className="border-l-4 border-[var(--color-accent-blue)] pl-4">
                  <div className="font-semibold text-white mb-2">Freemium Model</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Generous free tier allowed developers to try before buying, reducing
                    friction in adoption
                  </div>
                </div>
              </div>
            </div>

            {/* Client Success */}
            <div>
              <h3 className="text-heading-4 mb-6 text-gradient">
                5. Converting Agency Clients to Product Champions
              </h3>
              <p className="text-body-enhanced mb-4">
                Our existing clients became our best validation channel:
              </p>
              <div className="space-y-3">
                <div className="card-hover p-4 flex items-start gap-3">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <div className="font-semibold text-white mb-1">Fanatics</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      Replaced custom integration code with our microservices, reducing
                      their development time by 60%
                    </div>
                  </div>
                </div>
                <div className="card-hover p-4 flex items-start gap-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <div className="font-semibold text-white mb-1">Sonnet Insurance</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      Leveraged our payment and identity microservices for their insurance
                      platform
                    </div>
                  </div>
                </div>
                <div className="card-hover p-4 flex items-start gap-3">
                  <span className="text-2xl">🔌</span>
                  <div>
                    <div className="font-semibold text-white mb-1">Hubba & Boon</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      Early adopters who provided critical feedback that shaped our
                      developer experience
                    </div>
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
            {/* Primary Metrics */}
            <div>
              <h3 className="text-heading-4 mb-6">Product Transformation Success</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card-hover p-8">
                  <div className="text-5xl font-extrabold text-gradient mb-3">20+</div>
                  <div className="text-white font-semibold mb-2">Microservice Products</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Launched across payments, authentication, communications, and data
                    processing categories
                  </div>
                </div>
                <div className="glass-card-hover p-8">
                  <div className="text-5xl font-extrabold text-gradient mb-3">4+</div>
                  <div className="text-white font-semibold mb-2">Enterprise Clients</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Including Fanatics, Sonnet Insurance, Hubba, and Boon using our platform
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div>
              <h3 className="text-heading-4 mb-6">Business & Fundraising Success</h3>
              <div className="space-y-4">
                <div className="card-hover p-6 border-l-4 border-[var(--color-accent-blue)]">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-gradient">$3.76M</div>
                    <div>
                      <div className="font-semibold text-white mb-1">Series A Funding (2020)</div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        Product traction and roadmap were{" "}
                        <Link
                          href="https://betakit.com/buildable-secures-3-76-million-cad-to-empower-developers-with-low-code-software/"
                          className="link-primary"
                        >
                          central to the fundraise
                        </Link>
                        , demonstrating product-market fit to investors
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-hover p-6 border-l-4 border-[var(--color-brand-primary)]">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-gradient">100%</div>
                    <div>
                      <div className="font-semibold text-white mb-1">Business Model Transformation</div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        Successfully pivoted from agency to product company, later rebranding
                        as IntegrationOS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process & Culture Impact */}
            <div>
              <h3 className="text-heading-4 mb-6">Organizational Transformation</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-semibold mb-3">
                    Product Operations
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Introduced agile ceremonies, sprint planning, retrospectives, and
                    user research practices
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-accent-blue)] font-semibold mb-3">
                    Developer Experience Focus
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Established documentation standards, API design principles, and
                    self-service onboarding
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-brand-primary)] font-semibold mb-3">
                    Metrics-Driven Culture
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Implemented analytics tracking, usage dashboards, and data-informed
                    decision-making
                  </div>
                </div>
                <div className="glass-card-hover p-6">
                  <div className="text-[var(--color-brand-primary)] font-semibold mb-3">
                    Team Alignment
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Created shared product vision, aligned engineering and business teams
                    around roadmap
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
                1. Agency Work is Product Research in Disguise
              </h3>
              <p className="text-body-enhanced">
                Many agencies sit on gold mines of product insights but don't realize it.
                By analyzing what we built repeatedly for clients, we identified the highest-value
                abstractions. The best product ideas often come from observing patterns in
                real customer work, not brainstorming in a vacuum.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                2. Process Change is as Hard as Product Building
              </h3>
              <p className="text-body-enhanced">
                Introducing agile methodologies and prioritization frameworks was met with
                resistance. Teams comfortable with client-driven work struggled with
                hypothesis-driven development. Change management—explaining the "why,"
                celebrating small wins, coaching teams—was just as critical as the product
                roadmap itself.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                3. Hybrid Business Models Reduce Risk but Require Discipline
              </h3>
              <p className="text-body-enhanced">
                Maintaining agency revenue while building products was the right call—it gave
                us runway to find product-market fit. But it only works with strict time
                allocation. Without dedicated product time (protected from client escalations),
                you'll never make the transition. We had to say "no" to lucrative agency
                projects to protect product development time.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                4. Your First Customers Should Be Your Harshest Critics
              </h3>
              <p className="text-body-enhanced">
                Converting existing clients to product users was powerful because they already
                trusted us—but they also had high expectations. This forced us to build quality
                from day one. If your product can't pass the scrutiny of people who know your
                capabilities, it won't succeed with strangers.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                5. Fundraising Success Requires Product Traction, Not Just Vision
              </h3>
              <p className="text-body-enhanced">
                We raised our Series A because we could demonstrate real usage metrics,
                enterprise customers, and a clear product roadmap. Investors want to see
                that you've moved beyond idea validation to execution. The product work—
                shipping 20+ microservices and acquiring named customers—made the fundraise
                possible.
              </p>
            </div>

            <div className="card-hover p-8">
              <h3 className="text-heading-4 mb-4 text-gradient">
                6. Rebranding Signals Transformation Completion
              </h3>
              <p className="text-body-enhanced">
                The company's evolution into IntegrationOS wasn't just a name change—it
                represented the successful completion of our transformation journey. When
                your product identity becomes stronger than your service heritage, you know
                the pivot has worked. This validated that we'd built something with lasting
                market value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pb-24 sm:py-24 sm:pb-28">
        <div className="text-center">
          <h2 className="text-heading-section mb-6">Interested in the Full Story?</h2>
          <p className="text-body-enhanced mb-10 max-w-2xl mx-auto">
            Want to discuss product transformation, agency-to-product pivots, or building
            developer platforms?
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
