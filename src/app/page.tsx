import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-black">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Under Construction
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">Working on some stuff 🏗️</p>
          </div>
        </div>
      </section>
    </main>
  );
}
