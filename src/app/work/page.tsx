import Link from "next/link";
import React from "react";
export default function Work() {
  return (
    <main>
      <section className="py-12 sm:py-16">
        <div className="">
          <h1 className="text-display-hero text-gradient mb-8">My work</h1>
          <p className="text-body-large-enhanced mb-16 max-w-3xl">
            On a mission to build beautiful, high-impact products that solve real
            customer problems. Here{"'"}s a summary of my work so far:
          </p>

          <hr className="border-[var(--color-border-secondary)] mb-12" />

          {/* New adventure */}
          <div className="py-6 pb-12">
            <h2 className="text-heading-3 mb-2">New adventure</h2>
            <p className="text-caption mb-4">Coming soon...</p>
          </div>

          {/* Okra.ng */}
          <div className="py-6">
            <h2 className="text-heading-3 mb-2">Okra.ng</h2>
            <p className="text-caption mb-4">
              Product Lead | May 2020 – Feb 2024
            </p>

            <div className="text-body-enhanced">
              I joined{" "}
              <Link href="https://okra.ng/" className="link-primary">
                Okra
              </Link>{" "}
              as their first product hire and played a pivotal role in building
              the company from the ground up. As the product lead, I launched
              over 100 UI/API products across three core segments – open finance
              data, identity verification, and payments. <br />
              <br />
              My work spearheaded geographic expansion into Nigeria, South
              Africa, and Kenya, solidifying Okra{"'"}s position as Africa{"'"}s
              top open finance infrastructure provider. I consistently
              prioritized user research and data-driven insights to craft
              exceptional user experiences. Additionally, my focus on process
              improvements and team development fostered a culture of innovation
              and rapid iteration.
            </div>
          </div>

          {/* Buildable.io */}
          <div className="py-6">
            <h2 className="text-heading-3 mb-2">Buildable.io</h2>
            <p className="text-caption mb-4">
              Product Manager | May 2019 – May 2020
            </p>

            <div className="text-body-enhanced">
              At Buildable.io {"(now rebranded as "}
              <Link
                href="https://www.integrationos.com/"
                className="link-primary"
              >
                IntegrationOS
              </Link>
              {")"}, I played a crucial role in steering the company{"'"}s
              transformation from a digital agency model to a product-centric
              organization. My implementation of agile methodologies and
              prioritization frameworks streamlined product development
              processes, ensuring alignment between business goals and user
              needs.
              <br />
              <br />
              During my tenure, I successfully launched over 20 microservice
              products, building a robust client portfolio that included
              Fanatics, Sonnet Insurance, Hubba, and Boon. My emphasis on
              product-led growth was a key factor in the company securing{" "}
              <Link
                href="https://betakit.com/buildable-secures-3-76-million-cad-to-empower-developers-with-low-code-software/"
                className="link-primary"
              >
                Series A funding
              </Link>{" "}
              in 2020.
            </div>
          </div>

          {/* Bookmark.com */}
          <div className="py-6">
            <h2 className="text-heading-3 mb-2">Bookmark.com</h2>
            <p className="text-caption mb-4">
              Head of Product | July 2017 – April 2019
            </p>

            <div className="text-body-enhanced">
              Initially joining Bookmark.com as their growth marketing and
              operations lead, I was quickly promoted to Head of Product. This
              role required a rapid pivot, and I successfully led the team in
              repositioning the platform with an {"'"}AI-powered{"'"} focus as a
              key market differentiator. <br />
              <br />
              My leadership was instrumental in scaling the MVP and ultimately
              contributing to the company{"'"}s strategic{" "}
              <Link
                href="https://markets.businessinsider.com/news/stocks/moneris-invests-and-partners-with-bookmark-to-deliver-online-business-solutions-for-canadian-small-businesses-1028828832"
                className="link-primary"
              >
                acquisition
              </Link>{" "}
              in 2019.
            </div>
          </div>

          {/* Bid13.com */}
          <div className="py-6">
            <h2 className="text-heading-3 mb-2">Bid13.com</h2>
            <p className="text-caption mb-4">
              Product Manager | November 2013 – June 2017
            </p>

            <div className="text-body-enhanced">
              At{" "}
              <Link href="https://bid13.com/" className="link-primary">
                Bid13.com
              </Link>
              , an ecommerce marketplace for storage auctions, I worked closely
              with the leadership team to introduce and successfully establish
              the product in the market. <br />
              <br />I focused on innovative solutions to capture market share
              and played a key role in designing and implementing systems that
              streamlined product development processes. My efforts were
              instrumental in driving the company{"'"}s expansion from Canada
              into the USA and Australia.
            </div>
          </div>

          {/* Insight Sports */}
          <div className="py-6 pb-12">
            <h2 className="text-heading-3 mb-2">Insight Sports</h2>
            <p className="text-caption mb-4">
              Marketing | July 2011 – November 2013
            </p>

            <div className="text-body-enhanced">
              Beginning as an intern at{" "}
              <Link
                href="https://en.wikipedia.org/wiki/Insight_Sports"
                className="link-primary"
              >
                Insight Sports
              </Link>
              , a sports media asset operator, I quickly transitioned into a
              full-time role where I contributed to international marketing
              campaigns and digital strategies. <br />
              <br />
              My work focused on enhancing the company{"'"}s digital presence
              and reach across their media portfolio, which included the NHL
              Network, WFN {"(World Fishing Network)"}, GolTV, and MLG{" "}
              {"(Major League Gaming)"}.
            </div>
          </div>

          <hr className="border-[var(--color-border-secondary)] mt-12" />
        </div>
      </section>
    </main>
  );
}
