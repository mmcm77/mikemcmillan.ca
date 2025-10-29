import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[var(--color-bg-primary)]/80 border-b border-[var(--color-border-secondary)]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-heading-4 text-gradient font-bold">
            MM
          </Link>
          <div className="flex space-x-6 sm:space-x-8">
            <Link
              href="/"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/work"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors font-medium"
            >
              Work
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
