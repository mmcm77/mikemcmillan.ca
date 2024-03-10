import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav className="py-12 pb-24 text-gray-300">
      <div className="container mx-auto flex-row items-center justify-between">
        <ul className="flex flex-row gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
