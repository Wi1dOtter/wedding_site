"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/content/siteConfig";
import { Container } from "@/components/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/90 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-charcoal focus:px-4 focus:py-2 focus:text-cream"
      >
        {siteConfig.a11y.skipToContent}
      </a>
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-serif text-xl text-charcoal tracking-[0.12em] uppercase"
        >
          {siteConfig.couple.shortName}
        </Link>
        <nav
          aria-label={siteConfig.a11y.navLabel}
          className="hidden lg:flex"
        >
          <ul className="flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/80">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-olive"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="lg:hidden rounded-full border border-charcoal/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={
            isOpen ? siteConfig.a11y.closeMenuLabel : siteConfig.a11y.openMenuLabel
          }
          onClick={toggleMenu}
        >
          {isOpen ? siteConfig.a11y.closeMenuLabel : siteConfig.a11y.openMenuLabel}
        </button>
      </Container>
      <nav
        id="mobile-menu"
        aria-label={siteConfig.a11y.navLabel}
        className={`lg:hidden overflow-hidden border-t border-border bg-cream/95 transition-[max-height,opacity] duration-300 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="py-6">
          <ul className="flex flex-col gap-5 text-sm font-semibold uppercase tracking-[0.22em] text-charcoal/80">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-olive"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
