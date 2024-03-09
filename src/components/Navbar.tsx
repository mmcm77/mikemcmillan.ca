"use client";

import React, { useState } from "react";
import Link from "next/link";
import HamburgerIcon from "./icons/HamburgerIcon";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div>Home</div>
        </Link>

        <button
          className="block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HamburgerIcon />
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex gap-4 ${menuOpen ? "block" : "hidden"}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
