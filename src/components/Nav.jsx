import Link from "next/link";

const Nav = () => {
  return (
    <div className="navbar pt-8 pb-24 flex justify-center items-center">
      <div className="flex justify-center items-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
