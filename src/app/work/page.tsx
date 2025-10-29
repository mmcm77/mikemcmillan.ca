import Link from "next/link";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Work() {
  const workData = [
    {
      title: "2025-Present",
      content: (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Lightspeed Commerce
          </h3>
          <p className="text-neutral-400 text-sm mb-4">
            Group Product Manager | July 2025 – Present
          </p>
          <p className="text-neutral-300 text-sm md:text-base mb-4">
            Building the foundation of financial services for Lightspeed
            merchants, worldwide.
          </p>
          <div className="mb-6">
            <h4 className="text-white text-sm font-semibold mb-3">
              Focus areas:
            </h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-purple-400">•</span>
                <span>Financial services product strategy</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-purple-400">•</span>
                <span>Global merchant payment solutions</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-purple-400">•</span>
                <span>Product infrastructure and scalability</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024-2025",
      content: (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Interac Corp.
          </h3>
          <p className="text-neutral-400 text-sm mb-4">
            Product Leader | April 2024 – July 2025
          </p>
          <p className="text-neutral-300 text-sm md:text-base mb-4">
            Building the digital wallet infrastructure for Canada. Led product
            strategy and development for Interac&apos;s next-generation payment
            and identity solutions.
          </p>
          <div className="mb-6">
            <h4 className="text-white text-sm font-semibold mb-3">
              Key achievements:
            </h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-blue-400">✓</span>
                <span>Digital wallet product strategy and roadmap</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-blue-400">✓</span>
                <span>Cross-functional leadership across engineering, design, and business teams</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-blue-400">✓</span>
                <span>Payment infrastructure modernization initiatives</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020-2024",
      content: (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Okra.ng
          </h3>
          <p className="text-neutral-400 text-sm mb-4">
            Product Lead | May 2020 – Feb 2024
          </p>
          <p className="text-neutral-300 text-sm md:text-base mb-4">
            I joined{" "}
            <Link href="https://okra.ng/" className="link-primary">
              Okra
            </Link>{" "}
            as their first product hire and played a pivotal role in building
            the company from the ground up. As the product lead, I launched over
            100 UI/API products across three core segments – open finance data,
            identity verification, and payments.
          </p>
          <p className="text-neutral-300 text-sm md:text-base mb-6">
            My work spearheaded geographic expansion into Nigeria, South Africa,
            and Kenya, solidifying Okra&apos;s position as Africa&apos;s top
            open finance infrastructure provider. I consistently prioritized user
            research and data-driven insights to craft exceptional user
            experiences.
          </p>
          <Link
            href="/work/okra"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium mb-6 text-sm md:text-base"
          >
            Read Full Case Study →
          </Link>
          <div className="mb-6">
            <h4 className="text-white text-sm font-semibold mb-3">
              Key achievements:
            </h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-purple-400">✓</span>
                <span>Launched 100+ products across 3 core segments</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-purple-400">✓</span>
                <span>Expanded into Nigeria, South Africa, and Kenya</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-purple-400">✓</span>
                <span>
                  Established as Africa&apos;s leading open finance provider
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2019-2020",
      content: (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Buildable.io
          </h3>
          <p className="text-neutral-400 text-sm mb-4">
            Product Manager | May 2019 – May 2020
          </p>
          <p className="text-neutral-300 text-sm md:text-base mb-4">
            At Buildable.io{" "}
            <span className="text-neutral-400">
              (now rebranded as{" "}
              <Link
                href="https://www.integrationos.com/"
                className="link-primary"
              >
                IntegrationOS
              </Link>
              )
            </span>
            , I played a crucial role in steering the company&apos;s
            transformation from a digital agency model to a product-centric
            organization.
          </p>
          <p className="text-neutral-300 text-sm md:text-base mb-6">
            My implementation of agile methodologies and prioritization
            frameworks streamlined product development processes, ensuring
            alignment between business goals and user needs.
          </p>
          <Link
            href="/work/buildable"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium mb-6 text-sm md:text-base"
          >
            Read Full Case Study →
          </Link>
          <div className="mb-6">
            <h4 className="text-white text-sm font-semibold mb-3">
              Key achievements:
            </h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-blue-400">✓</span>
                <span>Launched 20+ microservice products</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-blue-400">✓</span>
                <span>
                  Built client portfolio: Fanatics, Sonnet Insurance, Hubba,
                  Boon
                </span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-blue-400">✓</span>
                <span>
                  Contributed to securing{" "}
                  <Link
                    href="https://betakit.com/buildable-secures-3-76-million-cad-to-empower-developers-with-low-code-software/"
                    className="link-primary"
                  >
                    Series A funding
                  </Link>{" "}
                  in 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2017-2019",
      content: (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Bookmark.com
          </h3>
          <p className="text-neutral-400 text-sm mb-4">
            Head of Product | July 2017 – April 2019
          </p>
          <p className="text-neutral-300 text-sm md:text-base mb-4">
            Initially joining Bookmark.com as their growth marketing and
            operations lead, I was quickly promoted to Head of Product. This
            role required a rapid pivot, and I successfully led the team in
            repositioning the platform with an &apos;AI-powered&apos; focus as a
            key market differentiator.
          </p>
          <p className="text-neutral-300 text-sm md:text-base mb-6">
            My leadership was instrumental in scaling the MVP and ultimately
            contributing to the company&apos;s strategic{" "}
            <Link
              href="https://markets.businessinsider.com/news/stocks/moneris-invests-and-partners-with-bookmark-to-deliver-online-business-solutions-for-canadian-small-businesses-1028828832"
              className="link-primary"
            >
              acquisition
            </Link>{" "}
            in 2019.
          </p>
          <Link
            href="/work/bookmark"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium mb-6 text-sm md:text-base"
          >
            Read Full Case Study →
          </Link>
          <div className="mb-6">
            <h4 className="text-white text-sm font-semibold mb-3">
              Key achievements:
            </h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-blue-400">✓</span>
                <span>Repositioned platform with AI-powered focus</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-blue-400">✓</span>
                <span>Led product scaling from MVP to acquisition</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-blue-400">✓</span>
                <span>Strategic acquisition in 2019</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2013-2017",
      content: (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Bid13.com
          </h3>
          <p className="text-neutral-400 text-sm mb-4">
            Product Manager | November 2013 – June 2017
          </p>
          <p className="text-neutral-300 text-sm md:text-base mb-4">
            At{" "}
            <Link href="https://bid13.com/" className="link-primary">
              Bid13.com
            </Link>
            , an ecommerce marketplace for storage auctions, I worked closely
            with the leadership team to introduce and successfully establish the
            product in the market.
          </p>
          <p className="text-neutral-300 text-sm md:text-base mb-6">
            I focused on innovative solutions to capture market share and played
            a key role in designing and implementing systems that streamlined
            product development processes.
          </p>
          <div className="mb-6">
            <h4 className="text-white text-sm font-semibold mb-3">
              Key achievements:
            </h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-purple-400">✓</span>
                <span>
                  Established ecommerce marketplace for storage auctions
                </span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-purple-400">✓</span>
                <span>
                  Drove expansion from Canada into USA and Australia
                </span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-purple-400">✓</span>
                <span>Streamlined product development processes</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2011-2013",
      content: (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Insight Sports
          </h3>
          <p className="text-neutral-400 text-sm mb-4">
            Marketing | July 2011 – November 2013
          </p>
          <p className="text-neutral-300 text-sm md:text-base mb-4">
            Beginning as an intern at{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Insight_Sports"
              className="link-primary"
            >
              Insight Sports
            </Link>
            , a sports media asset operator, I quickly transitioned into a
            full-time role where I contributed to international marketing
            campaigns and digital strategies.
          </p>
          <p className="text-neutral-300 text-sm md:text-base mb-6">
            My work focused on enhancing the company&apos;s digital presence and
            reach across their media portfolio, which included the NHL Network,
            WFN (World Fishing Network), GolTV, and MLG (Major League Gaming).
          </p>
          <div className="mb-6">
            <h4 className="text-white text-sm font-semibold mb-3">
              Media portfolio:
            </h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-blue-400">•</span>
                <span>NHL Network</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-blue-400">•</span>
                <span>WFN (World Fishing Network)</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-blue-400">•</span>
                <span>GolTV</span>
              </div>
              <div className="flex gap-2 items-start text-neutral-300 text-xs md:text-sm">
                <span className="text-blue-400">•</span>
                <span>MLG (Major League Gaming)</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main>
      <section className="py-12 sm:py-16">
        <div className="mb-12">
          <h1 className="text-display-hero text-gradient mb-8">My work</h1>
          <p className="text-body-large-enhanced mb-8 max-w-3xl">
            On a mission to build beautiful, high-impact products that solve
            real customer problems. Here&apos;s a timeline of my journey so far:
          </p>
        </div>
      </section>

      <Timeline data={workData} />
    </main>
  );
}
