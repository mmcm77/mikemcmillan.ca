import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selected product work — Mike McMillan",
  description:
    "Selected product work by Mike McMillan across open finance, applied AI, developer platforms, payments, and commerce.",
};

const caseStudies = [
  {
    href: "/work/okra",
    number: "01",
    company: "Okra",
    years: "2020—2024",
    discipline: "Open finance · Category creation · Platform",
    title: "Building Africa’s open-finance infrastructure from the ground up",
    question:
      "How do you build a coherent platform across markets where banking standards, regulation, and infrastructure all vary?",
    scope: ["First product hire", "100+ products", "3 countries", "$35M+ raised"],
  },
  {
    href: "/work/bookmark",
    number: "02",
    company: "Bookmark",
    years: "2017—2019",
    discipline: "Applied AI · Positioning · Growth",
    title: "Turning an AI website builder into a product customers understood",
    question:
      "How do you move AI from an impressive capability to a trustworthy, outcome-led customer proposition?",
    scope: ["Head of Product", "MVP to scale", "AI positioning", "Strategic partnership"],
  },
  {
    href: "/work/buildable",
    number: "03",
    company: "Buildable",
    years: "2019—2020",
    discipline: "Developer platform · Business-model transition",
    title: "Productizing the repeatable core of an agency business",
    question:
      "How do you convert custom integration work into a platform without losing delivery momentum or customer trust?",
    scope: ["Product Manager", "20+ products", "$3.7M raised", "4 enterprise clients"],
  },
];

const experience = [
  {
    years: "2025—Present",
    company: "Lightspeed Commerce",
    role: "Group Product Manager",
    focus: "Building the foundations of financial services for merchants worldwide.",
  },
  {
    years: "2024—2025",
    company: "Interac",
    role: "Product Leader",
    focus: "Product strategy for next-generation wallet, payment, and identity infrastructure.",
  },
  {
    years: "2020—2024",
    company: "Okra",
    role: "Product Lead · First product hire",
    focus: "Built a modular open-finance platform across Nigeria, South Africa, and Kenya.",
  },
  {
    years: "2019—2020",
    company: "Buildable",
    role: "Product Manager",
    focus: "Helped shift a digital agency toward a repeatable developer-platform model.",
  },
  {
    years: "2017—2019",
    company: "Bookmark",
    role: "Head of Product",
    focus: "Led an AI website builder from MVP toward a strategic investment and partnership.",
  },
  {
    years: "2013—2017",
    company: "Bid13",
    role: "Product Manager",
    focus: "Grew a storage-auction marketplace across Canada, the United States, and Australia.",
  },
  {
    years: "2011—2013",
    company: "Insight Sports",
    role: "Digital products",
    focus: "Worked across digital media, audiences, and emerging product channels.",
  },
];

export default function WorkPage() {
  return (
    <main className="work-page section-shell">
      <header className="page-hero work-hero">
        <p className="eyebrow">Selected work</p>
        <h1>Product work is a record of decisions, not a list of features.</h1>
        <p className="page-deck">
          These stories cover category creation, infrastructure, applied AI,
          and business-model change—the moments when the product question was
          larger than the interface.
        </p>
      </header>

      <section className="work-index" aria-label="Case studies">
        {caseStudies.map((study) => (
          <article className="work-entry" key={study.href}>
            <div className="work-entry-index">
              <span>{study.number}</span>
              <span>{study.years}</span>
            </div>
            <div className="work-entry-main">
              <p className="work-entry-meta">{study.company} · {study.discipline}</p>
              <h2><Link href={study.href}>{study.title}</Link></h2>
              <p className="work-entry-question">{study.question}</p>
              <ul aria-label={`${study.company} project scope`}>
                {study.scope.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <Link className="work-entry-link" href={study.href} aria-label={`Read the ${study.company} case study`}>
              Read case study <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </section>

      <section className="experience-section" aria-labelledby="experience-title">
        <div className="experience-intro">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-title">The compact version.</h2>
          <p>Selected case studies go deep. This index shows the broader progression.</p>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={`${item.company}-${item.years}`}>
              <span>{item.years}</span>
              <div>
                <h3>{item.company}</h3>
                <p className="experience-role">{item.role}</p>
              </div>
              <p>{item.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-cta">
        <p className="eyebrow">Still building</p>
        <h2>The career archive is only half the story.</h2>
        <Link href="/lab" className="button button-primary">See current experiments</Link>
      </section>
    </main>
  );
}
