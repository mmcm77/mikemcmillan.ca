import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-black text-white">
        <div className="">
          <div className="">
            <div className="text-xl font-extrabold sm:text-4xl">
              Hey, I&apos;m Mike 👋
            </div>
            <div className="mt-4 sm:text-xl/relaxed">Product manager 🏗️</div>
            <div className="mt-4 sm:text-l/relaxed">
              Product leader with a decade of experience across product
              management, strategy and GTM.
            </div>
          </div>
        </div>

        <div className="container py-12">
          <h2 className="text-2xl font-medium mb-4">Let&apos;s connect!</h2>
          <ul className="flex sm:flex-row gap-6">
            <li>
              <Link href="https://www.linkedin.com/in/mcmillanm">
                <div className="text-gray-300 hover:underline">LinkedIn</div>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/mmcm77">
                <p className="text-gray-300 hover:underline">GitHub</p>
              </Link>
            </li>
            <li>
              <Link href="mailto:mikemcmillan55@gmail.com">
                <p className="text-gray-300 hover:underline">Email</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
