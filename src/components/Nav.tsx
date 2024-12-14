import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="py-8 mb-24">
      <div className="flex justify-center space-x-8">
        <Link
          href="/"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/work"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Work
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
