import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab — Mike McMillan",
  description:
    "A working notebook of products, experiments, and product principles from Mike McMillan.",
};

const experiments = [
  {
    number: "01",
    title: "Clubpicks",
    type: "Sports · Community",
    description:
      "A sports-picks community product exploring how groups make predictions, compare results, and stay engaged across a season.",
    question:
      "How can the ritual of making picks feel social without making the product noisy?",
  },
  {
    number: "02",
    title: "Decision tools",
    type: "Product practice",
    description:
      "Small, reusable tools for turning scattered research, constraints, and customer evidence into decisions a team can act on.",
    question:
      "What is the lightest structure that improves a decision without slowing it down?",
  },
  {
    number: "03",
    title: "Narrow AI utilities",
    type: "Applied AI",
    description:
      "Prototypes that put models inside specific, repeatable jobs—research synthesis, product critique, and operational handoffs.",
    question:
      "Where does an intelligent capability remove real work rather than add another interface?",
  },
];

const principles = [
  {
    label: "Start with the loop",
    text: "A product becomes legible when its smallest useful loop works. Find that loop before expanding the surface area.",
  },
  {
    label: "Make the system visible",
    text: "Infrastructure earns trust when people can understand what happened, what happens next, and how to recover.",
  },
  {
    label: "Treat constraints as material",
    text: "Regulation, technical limits, and go-to-market reality are not interruptions to product work. They shape the product.",
  },
  {
    label: "Prefer evidence to theatre",
    text: "A small thing in real use teaches more than a large concept presented perfectly.",
  },
];

export default function LabPage() {
  return (
    <div className="section-shell min-h-screen text-[var(--color-text-primary)]">
      <header className="border-b border-[var(--color-border-secondary)] pb-14 pt-16 sm:pb-20 sm:pt-24 lg:grid lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-28">
        <div className="lg:col-span-8">
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#2457d6] dark:text-[#7da7ff]">
            Lab / Working notebook
          </p>
          <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Products are clearer when they meet the world early.
          </h1>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-8 lg:col-span-4 lg:mt-1">
          <p className="max-w-md text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
            This is where I keep the smaller bets: things I am building,
            questions I am testing, and ideas that are still allowed to change.
          </p>
          <p className="font-mono text-xs leading-5 text-[var(--color-text-tertiary)]">
            Edited as the work changes.
            <br />
            Toronto, Canada.
          </p>
        </div>
      </header>

      <main>
        <section
          aria-labelledby="current-focus-heading"
          className="grid gap-10 border-b border-[var(--color-border-secondary)] py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24"
        >
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
              01 / Current focus
            </p>
          </div>

          <div className="lg:col-span-9">
            <h2
              id="current-focus-heading"
              className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl"
            >
              Building smaller, testable products alongside platform-scale
              product work.
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:mt-16">
              <div className="border-t-2 border-[#2457d6] pt-4 dark:border-[#7da7ff]">
                <h3 className="text-sm font-semibold tracking-[-0.01em]">
                  Community mechanics
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                  Designing participation, feedback, and friendly competition
                  without manufacturing engagement.
                </p>
              </div>
              <div className="border-t border-[var(--color-border-secondary)] pt-4">
                <h3 className="text-sm font-semibold tracking-[-0.01em]">
                  Financial infrastructure
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                  Making complex systems understandable and useful to the
                  people and businesses that depend on them.
                </p>
              </div>
              <div className="border-t border-[var(--color-border-secondary)] pt-4">
                <h3 className="text-sm font-semibold tracking-[-0.01em]">
                  Applied AI
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                  Finding narrow, durable jobs where intelligent software
                  improves an outcome—not just the demo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="experiments-heading"
          className="py-16 sm:py-20 lg:py-24"
        >
          <div className="grid gap-6 border-b border-[var(--color-border-secondary)] pb-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
                02 / Selected experiments
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2
                id="experiments-heading"
                className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl"
              >
                Questions with working software behind them.
              </h2>
            </div>
          </div>

          <ol>
            {experiments.map((experiment) => (
              <li
                key={experiment.number}
                className="grid gap-5 border-b border-[var(--color-border-secondary)] py-9 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-11 lg:grid-cols-12 lg:gap-10"
              >
                <span className="font-mono text-xs text-[#2457d6] dark:text-[#7da7ff] lg:col-span-1">
                  {experiment.number}
                </span>
                <div className="lg:col-span-3">
                  <h3 className="text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                    {experiment.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.13em] text-[var(--color-text-tertiary)]">
                    {experiment.type}
                  </p>
                </div>
                <p className="max-w-xl text-sm leading-6 text-[var(--color-text-secondary)] sm:col-start-2 lg:col-span-4 lg:col-start-auto lg:text-base lg:leading-7">
                  {experiment.description}
                </p>
                <div className="sm:col-start-2 lg:col-span-4 lg:col-start-auto">
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
                    Working question
                  </p>
                  <p className="max-w-md text-sm leading-6 text-[var(--color-text-primary)]">
                    {experiment.question}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex justify-end pt-8">
            <a
              href="https://github.com/mmcm77"
              target="_blank"
              rel="noreferrer"
              aria-label="See Mike McMillan's public work on GitHub (opens in a new tab)"
              className="inline-flex min-h-11 items-center border-b border-[#2457d6] text-sm font-medium text-[#2457d6] transition-colors hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2457d6] dark:border-[#7da7ff] dark:text-[#7da7ff] dark:focus-visible:outline-[#7da7ff]"
            >
              See public work on GitHub
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
            </a>
          </div>
        </section>

        <section
          aria-labelledby="principles-heading"
          className="grid gap-10 border-t border-[var(--color-border-secondary)] py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24"
        >
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
              03 / Working notes
            </p>
          </div>

          <div className="lg:col-span-9">
            <h2
              id="principles-heading"
              className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl"
            >
              Principles in use, not rules set in stone.
            </h2>

            <dl className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:mt-16">
              {principles.map((principle, index) => (
                <div
                  key={principle.label}
                  className="border-t border-[var(--color-border-secondary)] py-7 sm:py-8"
                >
                  <dt className="flex items-baseline gap-4 text-base font-semibold tracking-[-0.015em]">
                    <span className="font-mono text-xs font-normal text-[#2457d6] dark:text-[#7da7ff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {principle.label}
                  </dt>
                  <dd className="mt-4 max-w-md text-sm leading-6 text-[var(--color-text-secondary)] sm:pl-9">
                    {principle.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border-secondary)] py-10 sm:flex sm:items-baseline sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-[var(--color-text-secondary)]">
          The useful parts of this page will change. That is the point of a
          lab.
        </p>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-tertiary)] sm:mt-0">
          Build · observe · revise
        </p>
      </footer>
    </div>
  );
}
