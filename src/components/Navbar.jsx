"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "#team" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80"
          : "bg-white/95 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Campus Branding */}
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group transition-transform duration-200 hover:opacity-95"
              aria-label="µLearn CUCEK Campus Chapter"
            >
              <Image
                src="/mulearn-logo.png"
                alt="µLearn Logo"
                width={140}
                height={38}
                priority
                className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="h-6 w-px bg-slate-200" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[12px] sm:text-sm font-extrabold tracking-tight text-slate-800 flex items-center gap-1">
                  CUCEK
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0961F5]" />
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#0961F5] uppercase tracking-wider mt-0.5">
                  Campus Chapter
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-base font-semibold text-slate-600 hover:text-[#0961F5] transition-colors duration-200 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#0961F5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Right Corner (Login Button) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm lg:text-base text-white bg-[#0961F5] hover:bg-[#074ec4] shadow-sm hover:shadow-md hover:shadow-[#0961F5]/25 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Login</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-[#0961F5] hover:bg-blue-50/60 focus:outline-none focus:ring-2 focus:ring-[#0961F5]/40 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                /* Close Icon */
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-100 bg-white/95 backdrop-blur-md ${
          mobileMenuOpen ? "max-h-80 opacity-100 shadow-lg" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pt-3 pb-6 space-y-2">
          <div className="flex items-center gap-2 px-3 py-1.5 mb-1 rounded-lg bg-blue-50/70 border border-blue-100/70 text-xs font-medium text-[#0961F5]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0961F5]" />
            <span>CUCEK Campus Chapter</span>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:text-[#0961F5] hover:bg-blue-50/70 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full font-semibold text-base text-white bg-[#0961F5] hover:bg-[#074ec4] shadow-sm active:scale-95 transition-all"
            >
              <span>Login</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
