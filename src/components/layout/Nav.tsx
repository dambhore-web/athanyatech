"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-brand-paper transition-shadow duration-300 ${
        scrolled ? "shadow-brand border-b border-brand-line" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-xl text-brand-navy tracking-wide">
          ATHANYA<span className="text-brand-cyan">.</span>
          <span className="font-body font-semibold text-xs tracking-[3px] text-brand-slate ml-1 uppercase">Technologies</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-body text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "text-brand-blue"
                    : "text-brand-ink-soft hover:text-brand-navy"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="font-body text-sm font-bold bg-brand-blue text-white px-5 py-2.5 rounded hover:bg-brand-navy transition-colors"
            >
              Get a Free Quote
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-brand-navy transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-brand-navy transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-brand-navy transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-brand-paper border-t border-brand-line px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-body font-semibold text-base block ${
                    pathname === link.href ? "text-brand-blue" : "text-brand-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="font-body font-bold bg-brand-blue text-white px-5 py-2.5 rounded inline-block"
              >
                Get a Free Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
