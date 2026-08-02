import type { Metadata } from "next";
import Link from "next/link";
import CaseArtifact from "@/components/CaseArtifact";
import CaseStudyNav from "@/components/CaseStudyNav";

const monerisAnnouncement =
  "https://markets.businessinsider.com/news/stocks/moneris-invests-and-partners-with-bookmark-to-deliver-online-business-solutions-for-canadian-small-businesses-1028828832";

export const metadata: Metadata = {
  title: "Bookmark: Making AI Useful to Small Businesses | Mike McMillan",
  description:
    "An evidence-led case study on turning Bookmark's AI website-building technology into a clear customer outcome and strategic partnership.",
};

export default function BookmarkCaseStudy() {
  return (
    <article className="case-page">
      <Link href="/work" className="case-back">
        <span aria-hidden="true">←</span> All work
      </Link>

      <header className="case-hero">
        <p className="case-kicker">Bookmark · AI website builder</p>
        <h1 className="case-title">Making the outcome more compelling than the AI</h1>
        <p className="case-deck">
          Bookmark’s AIDA could generate a tailored website from a short business brief.
          As Head of Product, I helped move the product from an impressive technical demo
          toward a useful, trusted experience for small-business owners.
        </p>
        <dl className="case-meta">
          <div>
            <dt>Role</dt>
            <dd>Head of Product · promoted from Growth Lead</dd>
          </div>
          <div>
            <dt>Product</dt>
            <dd>AIDA, an AI-assisted website builder</dd>
          </div>
          <div>
            <dt>Milestone</dt>
            <dd>Moneris investment and partnership · 2019</dd>
          </div>
        </dl>
      </header>

      <CaseStudyNav
        items={[
          { href: "#bookmark-context", label: "Context" },
          { href: "#bookmark-decisions", label: "Decisions" },
          { href: "#bookmark-system", label: "Journey" },
          { href: "#bookmark-outcomes", label: "Outcomes" },
          { href: "#bookmark-retrospective", label: "Reflection" },
        ]}
      />

      <section className="case-section" aria-labelledby="bookmark-context">
        <p className="case-section-label">Context</p>
        <h2 id="bookmark-context">Novel technology in a mature, crowded market</h2>
        <div className="case-prose">
          <p>
            Toronto-based Bookmark built AIDA, an Artificial Intelligence Design Assistant
            for small businesses. It used information about a business to generate a custom
            website, but competed with deeply established products including Wix,
            Squarespace, and WordPress.
          </p>
          <p>
            The challenge was not proving that the technology worked. It was translating
            automation into a value proposition customers understood, trusted, and would pay
            for—without trying to match larger competitors feature for feature.
          </p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="bookmark-question">
        <p className="case-section-label">Product question</p>
        <h2 id="bookmark-question">
          How could AI remove the hardest parts of creating a website while leaving owners
          in control of the result?
        </h2>
        <aside className="case-callout">
          Small-business owners did not need a lesson in machine learning. They needed to
          get from an empty canvas to a credible website with less time and uncertainty.
        </aside>
      </section>

      <section className="case-section" aria-labelledby="bookmark-role">
        <p className="case-section-label">Responsibility</p>
        <h2 id="bookmark-role">Connect product, growth, and commercial strategy</h2>
        <div className="case-prose">
          <p>
            After moving from growth into product leadership, I directed product strategy
            and rapid iteration while aligning product, marketing, and sales around common
            activation, conversion, and retention measures. My focus was the customer value
            of the technology, not the novelty of the technology itself.
          </p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="bookmark-decisions">
        <p className="case-section-label">Decisions</p>
        <h2 id="bookmark-decisions">Choose one clear wedge, then reinforce it</h2>
        <div className="case-grid">
          <div className="case-card">
            <h3>Sell time and confidence</h3>
            <p>
              We positioned AIDA around the outcome: answer a handful of questions and get
              a tailored starting point in minutes instead of confronting a blank canvas.
            </p>
          </div>
          <div className="case-card">
            <h3>Assist rather than replace</h3>
            <p>
              Generated design and content suggestions accelerated the work, while editing
              and preview controls kept owners involved in the result.
            </p>
          </div>
          <div className="case-card">
            <h3>Design for partnership</h3>
            <p>
              APIs, webhooks, payment support, and white-label capabilities made the product
              easier to pair with broader small-business offerings.
            </p>
          </div>
        </div>
        <CaseArtifact
          id="bookmark-system"
          title="From blank canvas to owned result"
          description="The product focused automation on the moments where small-business owners felt the most uncertainty."
          steps={[
            {
              label: "Intent",
              title: "Describe the business",
              detail: "A short brief replaces the intimidating first decision and gives the system meaningful constraints.",
            },
            {
              label: "Acceleration",
              title: "Generate a credible draft",
              detail: "AIDA turns the brief into a structured website customers can react to instead of starting from zero.",
            },
            {
              label: "Trust",
              title: "Edit and preview",
              detail: "Owner controls preserve authorship while suggestions remove repetitive design and content work.",
            },
            {
              label: "Value",
              title: "Publish when ready",
              detail: "Freemium evaluation delays payment until the customer can see and believe in the outcome.",
            },
          ]}
          caption="Automation reduces uncertainty step by step; control stays with the customer until value is visible. This is a simplified reconstruction of the activation journey."
        />
      </section>

      <section className="case-section" aria-labelledby="bookmark-execution">
        <p className="case-section-label">Execution</p>
        <h2 id="bookmark-execution">Make customer behaviour the operating cadence</h2>
        <div className="case-prose">
          <p>
            Weekly sessions with small-business owners exposed friction in the creation flow.
            Cohort analysis and support themes showed where activation and conversion broke
            down. The team shipped on two-week cycles so those signals could quickly reach the
            product.
          </p>
          <p>
            A freemium path let customers create and preview a site before paying to publish.
            Shared metrics kept product, marketing, and sales focused on the same journey,
            while usage data sharpened the ideal customer profile and product messaging.
          </p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="bookmark-outcomes">
        <p className="case-section-label">Outcomes</p>
        <h2 id="bookmark-outcomes">A faster product and a strategic distribution path</h2>
        <dl className="case-stats">
          <div className="case-stat">
            <dt>4.5 hours → 8 minutes</dt>
            <dd>Reported reduction in website creation time with AIDA</dd>
          </div>
          <div className="case-stat">
            <dt>MVP → scale</dt>
            <dd>A production platform serving thousands of small-business customers</dd>
          </div>
          <div className="case-stat">
            <dt>2019</dt>
            <dd>
              <Link href={monerisAnnouncement}>Moneris invested in and partnered with Bookmark</Link>{" "}
              to support online business solutions for Canadian small businesses
            </dd>
          </div>
        </dl>
      </section>

      <section className="case-section" aria-labelledby="bookmark-retrospective">
        <p className="case-section-label">Retrospective</p>
        <h2 id="bookmark-retrospective">What changed in my thinking</h2>
        <div className="case-prose">
          <p>
            Positioning is a product constraint, not a marketing layer. Committing to
            AI-assisted speed gave the roadmap a filter and kept a smaller team from chasing
            feature parity with much larger competitors.
          </p>
          <p>
            The experience also reinforced that trust determines whether automation feels
            valuable. The best result came from removing intimidating work while preserving
            enough control for customers to recognize themselves in what AIDA created.
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
