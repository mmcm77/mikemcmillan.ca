import type { Metadata } from "next";
import Link from "next/link";
import CaseArtifact from "@/components/CaseArtifact";
import CaseStudyNav from "@/components/CaseStudyNav";

export const metadata: Metadata = {
  title: "Buildable: From Agency Work to Product Platform | Mike McMillan",
  description:
    "An evidence-led case study on helping Buildable turn recurring agency work into a developer product platform.",
};

export default function BuildableCaseStudy() {
  return (
    <article className="case-page">
      <Link href="/work" className="case-back">
        <span aria-hidden="true">←</span> All work
      </Link>

      <header className="case-hero">
        <p className="case-kicker">Buildable · Developer platform</p>
        <h1 className="case-title">Turning repeated agency work into a product</h1>
        <p className="case-deck">
          Buildable saw the same integration problems recur across client projects. As its
          first product manager, I helped translate that signal into a microservices platform
          while the company continued to serve the clients funding the transition.
        </p>
        <dl className="case-meta">
          <div>
            <dt>Role</dt>
            <dd>Product Manager · first PM hire</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>May 2019–May 2020</dd>
          </div>
          <div>
            <dt>Company</dt>
            <dd>Buildable, now IntegrationOS</dd>
          </div>
        </dl>
      </header>

      <CaseStudyNav
        items={[
          { href: "#buildable-context", label: "Context" },
          { href: "#buildable-decisions", label: "Decisions" },
          { href: "#buildable-system", label: "Learning loop" },
          { href: "#buildable-outcomes", label: "Outcomes" },
          { href: "#buildable-retrospective", label: "Reflection" },
        ]}
      />

      <section className="case-section" aria-labelledby="buildable-context">
        <p className="case-section-label">Context</p>
        <h2 id="buildable-context">A valuable pattern hidden inside services work</h2>
        <div className="case-prose">
          <p>
            Buildable was a digital agency delivering custom software. Project after project
            required similar payment, authentication, email, and data-transformation logic.
            The founding team saw an opportunity to package that repeated work as a platform.
          </p>
          <p>
            The transition carried real constraints: client delivery still paid the bills,
            product-market fit was unproven, and workflows designed around fixed projects had
            to make room for continuous discovery and iteration.
          </p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="buildable-question">
        <p className="case-section-label">Product question</p>
        <h2 id="buildable-question">
          How could we turn recurring integration work into a repeatable product without
          abandoning the revenue engine that made the bet possible?
        </h2>
        <aside className="case-callout">
          The agency was not baggage to escape. It was a source of customer evidence,
          production use cases, and early design partners.
        </aside>
      </section>

      <section className="case-section" aria-labelledby="buildable-role">
        <p className="case-section-label">Responsibility</p>
        <h2 id="buildable-role">Create the product practice and guide the pivot</h2>
        <div className="case-prose">
          <p>
            I led product discovery, roadmap definition, and the introduction of product
            rituals. I worked across engineering, client delivery, and go-to-market to decide
            which repeated capabilities deserved to become products and how to introduce them
            without disrupting existing commitments.
          </p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="buildable-decisions">
        <p className="case-section-label">Decisions</p>
        <h2 id="buildable-decisions">Use delivery evidence to reduce the risk of the pivot</h2>
        <div className="case-grid">
          <div className="case-card">
            <h3>Mine the work already done</h3>
            <p>
              We reviewed more than 20 client projects, identified recurring integration
              needs, and compared their engineering cost and market potential.
            </p>
          </div>
          <div className="case-card">
            <h3>Ship small, independent services</h3>
            <p>
              A catalog of focused microservices let developers adopt one capability at a
              time and let the team test demand without betting on a single large release.
            </p>
          </div>
          <div className="case-card">
            <h3>Stage the allocation shift</h3>
            <p>
              Capacity moved from mostly client work toward mostly product work as beta usage
              and product demand created evidence for the next investment.
            </p>
          </div>
        </div>
        <CaseArtifact
          id="buildable-system"
          title="A pivot earned through evidence"
          description="Instead of separating agency and product work, the operating model turned delivery into a continuous source of validated product signals."
          steps={[
            {
              label: "Observe",
              title: "Mine recurring client work",
              detail: "Compare repeated integration needs across more than 20 projects rather than generalizing from one request.",
            },
            {
              label: "Package",
              title: "Extract one reusable service",
              detail: "Turn the clearest pattern into an independent capability with a narrow adoption path.",
            },
            {
              label: "Validate",
              title: "Return to real workloads",
              detail: "Design partners test whether the service survives beyond the implementation that inspired it.",
            },
            {
              label: "Invest",
              title: "Shift capacity with demand",
              detail: "Usage and commercial evidence earn the next movement from client delivery toward platform work.",
            },
          ]}
          caption="The loop reduces risk at each turn: service work supplies evidence, product reuse tests it, and validated demand funds the next product investment."
          loop
        />
      </section>

      <section className="case-section" aria-labelledby="buildable-execution">
        <p className="case-section-label">Execution</p>
        <h2 id="buildable-execution">Turn customers into a continuous learning loop</h2>
        <div className="case-prose">
          <p>
            Two-week sprints, user stories, retrospectives, and regular research replaced a
            purely project-driven cadence. Existing clients became design partners: their
            real integration problems tested whether the services were reusable beyond one
            implementation.
          </p>
          <p>
            An early-access program, technical guides, architecture content, and a freemium
            path helped developers evaluate the platform directly. The public feedback loop
            informed both the roadmap and the language used to explain the product.
          </p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="buildable-outcomes">
        <p className="case-section-label">Outcomes</p>
        <h2 id="buildable-outcomes">A product foundation for the company’s next chapter</h2>
        <dl className="case-stats">
          <div className="case-stat">
            <dt>20+</dt>
            <dd>Microservice products launched</dd>
          </div>
          <div className="case-stat">
            <dt>4+</dt>
            <dd>Enterprise clients represented in the portfolio</dd>
          </div>
          <div className="case-stat">
            <dt>$3.76M CAD</dt>
            <dd>
              Series A later raised by the company, as reported by{" "}
              <Link href="https://betakit.com/buildable-secures-3-76-million-cad-to-empower-developers-with-low-code-software/">
                BetaKit
              </Link>
            </dd>
          </div>
          <div className="case-stat">
            <dt>IntegrationOS</dt>
            <dd>
              The company’s current identity and continued platform direction. Visit{" "}
              <Link href="https://www.integrationos.com/">the product</Link>.
            </dd>
          </div>
        </dl>
      </section>

      <section className="case-section" aria-labelledby="buildable-retrospective">
        <p className="case-section-label">Retrospective</p>
        <h2 id="buildable-retrospective">What changed in my thinking</h2>
        <div className="case-prose">
          <p>
            A services business can be a unusually rich product discovery engine. The hard
            part is distinguishing a reusable market problem from the incidental needs of a
            single client.
          </p>
          <p>
            I also learned that business-model change has to be sequenced. The most credible
            roadmap was not a clean break from agency work; it was a series of investments
            earned by product evidence.
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
