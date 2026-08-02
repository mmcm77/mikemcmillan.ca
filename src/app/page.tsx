import Link from "next/link";

const selectedWork = [
  {
    number: "01",
    href: "/work/okra",
    eyebrow: "Open finance infrastructure · 2020–2024",
    title: "Building a product category where the standards did not exist yet",
    description:
      "As Okra’s first product hire, I helped turn an early thesis into a modular open-finance platform spanning data, identity, and payments across three African markets.",
    outcome: "100+ products · 3 markets · $35M+ raised",
  },
  {
    number: "02",
    href: "/work/bookmark",
    eyebrow: "Applied AI · 2017–2019",
    title: "Making an AI capability useful, legible, and commercially valuable",
    description:
      "At Bookmark, I helped reposition an AI website builder around the customer outcome, then led the product from MVP toward a strategic investment and partnership.",
    outcome: "MVP to strategic partnership · Product and positioning",
  },
  {
    number: "03",
    href: "/work/buildable",
    eyebrow: "Developer platform · 2019–2020",
    title: "Turning repeatable agency work into a product platform",
    description:
      "At Buildable, I helped move the company from bespoke delivery toward reusable integration products and a developer-first operating model.",
    outcome: "20+ products · $3.7M raised · 4 enterprise clients",
  },
];

const principles = [
  {
    number: "01",
    title: "Start with the system",
    body: "The feature is rarely the whole problem. I map incentives, constraints, data, and distribution before choosing what to build.",
  },
  {
    number: "02",
    title: "Make the hard thing legible",
    body: "Infrastructure, payments, and AI create value only when customers can understand, trust, and adopt them.",
  },
  {
    number: "03",
    title: "Treat product as a commercial discipline",
    body: "A roadmap is a sequence of business bets. I connect product decisions to adoption, revenue, risk, and durable advantage.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="home-hero section-shell">
          <p className="eyebrow">Toronto · Building globally</p>
          <h1>I build the systems behind everyday commerce.</h1>
          <div className="hero-support">
            <p className="hero-deck">
              I’m Mike—a product leader and hands-on builder working across
              payments, financial infrastructure, developer platforms, and
              applied AI.
            </p>
            <div className="hero-actions">
              <Link href="/work" className="button button-primary">
                Explore selected work <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/lab" className="text-link">
                See what I’m building now <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="hero-proof" aria-label="Experience highlights">
            <span>10+ years in product</span>
            <span>Financial infrastructure across Africa and North America</span>
            <span>0→1, scale, and transformation</span>
          </div>
        </section>

        <section className="selected-work section-shell" aria-labelledby="selected-work-title">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="selected-work-title">The decisions behind the outcomes.</h2>
            </div>
            <Link href="/work" className="text-link section-link">
              View the full archive <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="project-list">
            {selectedWork.map((project) => (
              <Link href={project.href} className="project-row" key={project.href}>
                <span className="project-number" aria-hidden="true">
                  {project.number}
                </span>
                <div className="project-copy">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-outcome">
                  <span>{project.outcome}</span>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="now-section section-shell" aria-labelledby="now-title">
          <div className="now-intro">
            <p className="eyebrow">Now</p>
            <h2 id="now-title">Operating at scale. Still making things from scratch.</h2>
          </div>
          <div className="now-grid">
            <article>
              <p className="now-label">At work</p>
              <h3>Financial services at Lightspeed</h3>
              <p>
                Building the product foundations that help merchants access and
                use financial services around the world.
              </p>
            </article>
            <article>
              <p className="now-label">After hours</p>
              <h3>Products, agents, and small bets</h3>
              <p>
                Prototyping consumer products and practical AI workflows to stay
                close to the craft of shipping.
              </p>
              <Link href="/lab" className="text-link">
                Open the lab <span aria-hidden="true">→</span>
              </Link>
            </article>
          </div>
        </section>

        <section className="principles-section section-shell" aria-labelledby="principles-title">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Operating principles</p>
              <h2 id="principles-title">A product practice shaped by infrastructure.</h2>
            </div>
          </div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="career-section section-shell" aria-labelledby="career-title">
          <p className="eyebrow">Career thread</p>
          <h2 id="career-title">
            From digital marketplaces to developer platforms to global
            financial infrastructure.
          </h2>
          <div className="career-line" role="list" aria-label="Career history">
            {[
              ["2025—", "Lightspeed", "Financial services"],
              ["2024—25", "Interac", "Wallet infrastructure"],
              ["2020—24", "Okra", "Open finance"],
              ["2019—20", "Buildable", "Developer platform"],
              ["2017—19", "Bookmark", "Applied AI"],
            ].map(([years, company, focus]) => (
              <div role="listitem" key={company}>
                <span>{years}</span>
                <strong>{company}</strong>
                <small>{focus}</small>
              </div>
            ))}
          </div>
          <Link href="/about" className="text-link">
            Read the longer story <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="section-shell footer-grid">
          <div>
            <p className="eyebrow">Let’s talk</p>
            <h2>Good products start with a useful conversation.</h2>
          </div>
          <div className="footer-contact">
            <p>
              I’m always interested in thoughtful conversations about product,
              financial infrastructure, applied AI, and things worth building.
            </p>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/mcmillanm" target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="https://github.com/mmcm77" target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
        <div className="section-shell footer-meta">
          <span>© {new Date().getFullYear()} Mike McMillan</span>
          <span>Designed to make the work visible.</span>
        </div>
      </footer>
    </>
  );
}
