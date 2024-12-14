import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <main>
      <section className="bg-black text-white">
        <div>
          <div>
            <div className="text-xl font-extrabold sm:text-4xl">
              Hey, I{"'"}m Mike 👋
            </div>
            <div className="py-12 sm:text-l/relaxed">
              I{"'"}m a product leader with a decade of{" "}
              <Link href="/work" className="text-blue-400">
                experience
              </Link>{" "}
              in product management, strategy, and go-to-market execution.
              Throughout my career, I{"'"}ve demonstrated a consistent ability
              to build products from scratch, attracting over $50 million in
              venture funding to support my vision.
              <br />
              <br />I thrive on leading and developing high-performing R&D
              teams, partnering effectively with sales and marketing
              organizations, and tackling complex problems with a strategic,
              hands-on approach.
            </div>
            <div className="py-12 sm:text-l/relaxed"></div>
          </div>
        </div>

        <div className="container">
          <h2 className="text-lg font-medium sm:text-2xl py-8">
            Let{"'"}s connect!
          </h2>
          <ul className="flex sm:flex-row gap-6">
            <li>
              <a
                className="inline-flex items-center justify-center px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-md"
                href="https://www.linkedin.com/in/mcmillanm"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center justify-center px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-md"
                href="https://github.com/mmcm77"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center justify-center px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-md"
                href="mailto:mikemcmillan55@gmail.com"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
