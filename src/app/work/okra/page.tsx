import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Okra: Building Open Finance Infrastructure | Mike McMillan",
  description:
    "An evidence-led case study on building and expanding Okra's open finance platform across Nigeria, South Africa, and Kenya.",
};

export default function OkraCaseStudy() {
  return (
    <article className="case-page">
      <Link href="/work" className="case-back">
        <span aria-hidden="true">←</span> All work
      </Link>

      <header className="case-hero">
        <p className="case-kicker">Okra · Open finance infrastructure</p>
        <h1 className="case-title">Building the platform while defining the category</h1>
        <p className="case-deck">
          Okra was building open banking infrastructure in markets without established
          standards. As its first product hire, I helped turn that ambition into a modular
          platform, a developer-first go-to-market motion, and a repeatable approach to
          expansion.
        </p>
        <dl className="case-meta">
          <div>
            <dt>Role</dt>
            <dd>Product Lead · first product hire</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>May 2020–February 2024</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>Nigeria, South Africa, and Kenya</dd>
          </div>
        </dl>
      </header>

      <section className="case-section" aria-labelledby="okra-context">
        <p className="case-section-label">Context</p>
        <h2 id="okra-context">An infrastructure problem without a shared playbook</h2>
        <div className="case-prose">
          <p>
            <Link href="https://okra.ng/">Okra</Link> provides APIs that connect businesses
            to financial data and payment rails. When I joined, the company had five people
            and a strong thesis, but the surrounding market was still forming.
          </p>
          <p>
            Banks used different authentication systems and data formats. Regulatory
            frameworks were evolving. Developers and businesses first had to understand
            what open finance could enable before they could evaluate a product in the
            category.
          </p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="okra-question">
        <p className="case-section-label">Product question</p>
        <h2 id="okra-question">
          How might one platform serve distinct financial use cases and markets without
          becoming a slow-moving monolith?
        </h2>
        <aside className="case-callout">
          The work had two simultaneous jobs: make fragmented financial infrastructure
          usable, and give developers enough confidence to build a business on top of it.
        </aside>
      </section>

      <section className="case-section" aria-labelledby="okra-role">
        <p className="case-section-label">Responsibility</p>
        <h2 id="okra-role">From product architecture to market expansion</h2>
        <div className="case-prose">
          <p>
            I led product strategy and prioritization, partnered with engineering and design
            on delivery, and worked with sales and marketing on go-to-market. As the company
            grew from five to more than 40 people, I hired and mentored product managers and
            established research, analytics, and planning practices.
          </p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="okra-decisions">
        <p className="case-section-label">Decisions</p>
        <h2 id="okra-decisions">Three bets shaped the platform</h2>
        <div className="case-grid">
          <div className="case-card">
            <h3>Compose, do not bundle</h3>
            <p>
              Separate connectivity, use-case, and payment layers let teams ship capabilities
              independently and reuse the core platform as local requirements changed.
            </p>
          </div>
          <div className="case-card">
            <h3>Treat developer experience as distribution</h3>
            <p>
              Interactive documentation, SDKs in five languages, realistic sandbox data,
              and self-service onboarding made technical evaluation part of go-to-market.
            </p>
          </div>
          <div className="case-card">
            <h3>Expand one market at a time</h3>
            <p>
              Nigeria established the product foundation. South Africa and Kenya followed
              with deliberate adaptations for local banks, regulation, and payment rails.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="okra-execution">
        <p className="case-section-label">Execution</p>
        <h2 id="okra-execution">A portfolio governed by evidence and constraints</h2>
        <div className="case-prose">
          <p>
            Roadmap choices balanced revenue potential, strategic value, customer research,
            and engineering cost. That framework made tradeoffs legible across functions and
            protected the team from turning every request into a commitment.
          </p>
          <p>
            The platform ultimately spanned data access, identity verification, transaction
            analysis, account-to-account payments, and recurring payments. Workshops,
            hackathons, office hours, and technical content helped prospective users understand
            both the category and the implementation path.
          </p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="okra-outcomes">
        <p className="case-section-label">Outcomes</p>
        <h2 id="okra-outcomes">A reusable platform with regional reach</h2>
        <dl className="case-stats">
          <div className="case-stat">
            <dt>100+</dt>
            <dd>Products and features shipped across data, identity, and payments</dd>
          </div>
          <div className="case-stat">
            <dt>150+</dt>
            <dd>Financial institution integrations</dd>
          </div>
          <div className="case-stat">
            <dt>3</dt>
            <dd>Country markets served</dd>
          </div>
          <div className="case-stat">
            <dt>$35M+</dt>
            <dd>Venture capital raised by the company across multiple rounds</dd>
          </div>
        </dl>
      </section>

      <section className="case-section" aria-labelledby="okra-retrospective">
        <p className="case-section-label">Retrospective</p>
        <h2 id="okra-retrospective">What changed in my thinking</h2>
        <div className="case-prose">
          <p>
            Category creation is partly an education problem. A technically excellent API
            cannot create demand if the market does not yet understand the outcome it enables.
          </p>
          <p>
            I also came to see geographic expansion as product work, not simply a sales
            motion. Composable architecture made expansion possible, but local research and
            deliberate adaptation made it useful.
          </p>
        </div>
      </section>

      <footer className="case-footer">
        <Link href="/work" className="case-back">
          <span aria-hidden="true">←</span> All work
        </Link>
        <a href="https://www.linkedin.com/in/mcmillanm">Discuss the work</a>
      </footer>
    </article>
  );
}
