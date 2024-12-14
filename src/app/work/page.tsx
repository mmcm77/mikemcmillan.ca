import Link from "next/link";
import React from "react";
export default function Work() {
  return (
    <main>
      <section className="bg-black text-white">
        <div className="">
          <div className="text-xl font-extrabold sm:text-4xl">My work </div>
          <div className="py-12 sm:text-l/relaxed">
            On a misson to build beautiful, high-impact products that solve real
            customer problems. Here{"'"}s a summary of my work so far:
          </div>

          <hr className="border-gray-500 pb-12" />

          {/* New adventure */}
          <div className="py-4 pb-12">
            <div className="text-l font-bold sm:text-2xl">New adventure</div>
            <div className="text-md text-gray-300">Coming soon...</div>
          </div>

          {/* Okra.ng */}
          <div className="py-4">
            <div className="text-l font-bold sm:text-2xl">Okra.ng</div>
            <div className="text-md text-gray-300">
              Product Lead | May 2020 – Feb 2024
            </div>

            <div className="py-4 sm:text-l/relaxed">
              I joined{" "}
              <Link href="https://okra.ng/" className="text-blue-400">
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
          <div className="py-4">
            <div className="text-l font-bold sm:text-2xl">Buildable.io</div>
            <div className="text-md text-gray-300">
              Product Manager | May 2019 – May 2020
            </div>

            <div className="py-4 sm:text-l/relaxed">
              At Buildable.io {"(now rebranded as "}
              <Link
                href="https://www.integrationos.com/"
                className="text-blue-400"
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
                className="text-blue-400"
              >
                Series A funding
              </Link>{" "}
              in 2020.
            </div>
          </div>

          {/* Bookmark.com */}
          <div className="py-4">
            <div className="text-l font-bold sm:text-2xl">Bookmark.com</div>
            <div className="text-md text-gray-300">
              Head of Product | July 2017 – April 2019
            </div>

            <div className="py-4 sm:text-l/relaxed">
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
                className="text-blue-400"
              >
                acquisition
              </Link>{" "}
              in 2019.
            </div>
          </div>

          {/* Bid13.com */}
          <div className="py-4">
            <div className="text-l font-bold sm:text-2xl">Bid13.com</div>
            <div className="text-md text-gray-300">
              Product Manager | November 2013 – June 2017
            </div>

            <div className="py-4 sm:text-l/relaxed">
              At{" "}
              <Link href="https://bid13.com/" className="text-blue-400">
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
          <div className="pb-12 pt-4">
            <div className="text-l font-bold sm:text-2xl">Insight Sports</div>
            <div className="text-md text-gray-300">
              Marketing | July 2011 – November 2013
            </div>

            <div className="py-4 sm:text-l/relaxed">
              Beginning as an intern at{" "}
              <Link
                href="https://en.wikipedia.org/wiki/Insight_Sports"
                className="text-blue-400"
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

          <hr className="border-gray-500 py-12" />
        </div>
      </section>
    </main>
  );
}
