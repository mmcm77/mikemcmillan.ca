import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Mike McMillan — Product leader and hands-on builder",
  description:
    "Mike McMillan is a product leader and hands-on builder working across commerce, financial infrastructure, developer platforms, and applied AI.",
};

const chapters = [
  {
    years: "2011—2017",
    title: "Learning products through markets",
    body: "I started in sports media and digital marketplaces, close to customers, distribution, and the practical mechanics of making a product earn attention. That foundation still shapes how I work: understand the market, find the real constraint, and ship toward evidence.",
  },
  {
    years: "2017—2020",
    title: "From features to product systems",
    body: "At Bookmark and Buildable, the work moved deeper into product strategy—turning an AI capability into a customer proposition, and turning repeatable services into a developer platform. Both taught me that positioning and architecture are product decisions, not adjacent disciplines.",
  },
  {
    years: "2020—2025",
    title: "Building infrastructure in emerging categories",
    body: "At Okra and Interac, I worked on the rails beneath financial products: open-finance APIs, identity, payments, and wallet infrastructure. The challenge was rarely a single interface. It was coordinating standards, trust, regulation, developer experience, and go-to-market into one coherent product system.",
  },
  {
    years: "Now",
    title: "Operating at global scale, staying close to craft",
    body: "Today I lead financial-services product work at Lightspeed. Outside work, I keep building small products and AI workflows because making things is how I sharpen judgment. I am most energized by ambiguous systems that need both strategic clarity and practical execution.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page section-shell">
      <header className="page-hero about-hero">
        <p className="eyebrow">About</p>
        <h1>I’m a product operator who still likes opening the editor.</h1>
        <p className="page-deck">
          My career has moved through media, marketplaces, applied AI,
          developer platforms, and financial infrastructure. The consistent
          thread is building in categories where the playbook is incomplete.
        </p>
      </header>

      <section className="about-story" aria-labelledby="story-title">
        <div className="about-aside">
          <p className="eyebrow">The thread</p>
          <h2 id="story-title">Product is how the pieces become a system.</h2>
        </div>
        <div className="about-chapters">
          {chapters.map((chapter) => (
            <article key={chapter.years}>
              <span>{chapter.years}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-beliefs" aria-labelledby="beliefs-title">
        <p className="eyebrow">What I value</p>
        <h2 id="beliefs-title">Clarity without theatre. Ambition without abstraction.</h2>
        <div className="beliefs-list">
          <p>Speak plainly enough that a difficult decision can be challenged.</p>
          <p>Keep strategy close to customer evidence and commercial reality.</p>
          <p>Give teams context, a meaningful constraint, and room to do their best work.</p>
          <p>Stay curious enough to revise the plan when the system teaches you something new.</p>
        </div>
      </section>

      <section className="about-cta">
        <div>
          <p className="eyebrow">Keep exploring</p>
          <h2>See the work, then see what’s on the bench.</h2>
        </div>
        <div>
          <Link href="/work" className="button button-primary">Selected work</Link>
          <Link href="/lab" className="text-link">Open the lab <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}
