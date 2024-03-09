import Link from "next/link";

const LinksSection: React.FC = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-medium mb-4 text-center">
          Let's Connect!
        </h2>
        <ul className="flex sm:flex-row justify-center gap-6">
          <li>
            <Link href="https://www.linkedin.com/in/mmcmillan/">
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
  );
};

export default LinksSection;
