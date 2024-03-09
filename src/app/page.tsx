import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-black">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Mike McMillan
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">Product manager 🏗️</p>

            <p className="mt-4 sm:text-l/relaxed">
              Product leader with a decade of experience across Product
              Management, Strategy and GTM.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
