import Links from "@/components/LinksSection";

export default function Home() {
  return (
    <main>
      <section className="bg-black text-white mt-36">
        {" "}
        <div className="mx-auto max-w-screen-xl px-4 py-36">
          <header className="mx-auto max-w-xl text-center">
            {" "}
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Mike McMillan
            </h1>
            <div className="mt-4 sm:text-xl/relaxed">Product manager 🏗️</div>
            <div className="mt-4 sm:text-l/relaxed">
              Product leader with a decade of experience across Product
              Management, Strategy and GTM.
            </div>
          </header>
        </div>
        <Links />
      </section>
    </main>
  );
}
