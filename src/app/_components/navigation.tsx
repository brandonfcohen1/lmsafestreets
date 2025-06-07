"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./container";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md dark:bg-slate-800">
      <Container>
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            LM Safe Streets
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/posts" className="hover:text-blue-600">
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/posts"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navigation;
