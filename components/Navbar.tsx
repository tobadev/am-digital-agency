"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AmLogo from "@/public/am-logo.svg";

// TODO: Implement next-intl or next-i18next for actual i18n
// Routes will become /de/services, /fr/about, etc.
// Language selection here should redirect to /{locale}/current-path
type Lang = "EN" | "DE" | "FR" | "IT";

const navItems = [
  { num: "01", label: "Home", href: "/" },
  { num: "02", label: "Services", href: "/services" },
  { num: "03", label: "Work", href: "/work" },
  { num: "04", label: "About", href: "/about" },
  { num: "05", label: "Contact", href: "/contact" },
];

const languages: { code: Lang; label: string }[] = [
  { code: "EN", label: "English" },
  { code: "DE", label: "Deutsch" },
  { code: "FR", label: "Français" },
  { code: "IT", label: "Italiano" },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("EN");
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const selectLang = (l: Lang) => {
    setLang(l);
    // TODO: router.push(`/${l.toLowerCase()}${pathname}`) when i18n is set up
  };

  return (
    <>
      {/* Logo — separate fixed element, no z-index so mix-blend-difference blends with page content */}
      {!isMenuOpen && (
        <Link
          href="/"
          className="fixed top-6 left-6 md:left-10 mix-blend-difference pointer-events-auto"
        >
          <AmLogo className="h-6 md:h-7 w-auto" aria-label="AM Digital Agency" />
        </Link>
      )}

      {/* Menu overlay logo — no blend mode needed */}
      {isMenuOpen && (
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="fixed top-6 left-6 md:left-10 z-50 pointer-events-auto"
        >
          <AmLogo className="h-6 md:h-7 w-auto text-white" aria-label="AM Digital Agency" />
        </Link>
      )}

      {/* Menu button */}
      <nav className="fixed top-0 right-0 z-50 px-6 md:px-10 py-6 pointer-events-none">
        <button
          onClick={toggleMenu}
          className="text-xs font-bold uppercase tracking-widest bg-black/80 backdrop-blur-sm border border-white/15 px-7 py-3 rounded-full hover:border-white/40 transition-colors pointer-events-auto"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-black transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col px-6 md:px-10 lg:px-20 pt-24 pb-12">
          <div className="max-w-5xl mx-auto w-full flex-1 min-h-0 overflow-y-auto flex flex-col justify-center">
            {/* Nav links */}
            <div className="flex flex-col shrink-0">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group border-t border-white/10 py-6 md:py-8 flex items-center gap-6 md:gap-12 transition-all duration-300 ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 75 + 150}ms` : "0ms",
                  }}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 w-12 shrink-0 transition-colors duration-300 group-hover:text-neutral-500">
                    {item.num}
                  </span>
                  <span
                    className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none transition-all duration-300 group-hover:translate-x-3 ${
                      pathname === item.href
                        ? "text-white"
                        : "text-neutral-600 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  {pathname === item.href && (
                    <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom bar — info + language, pinned to bottom with clear separation */}
          <div
            className={`max-w-5xl mx-auto w-full shrink-0 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-500 ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isMenuOpen ? `${navItems.length * 75 + 250}ms` : "0ms",
            }}
          >
            {/* Left — contact info */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="mailto:hello@amdigital.agency"
                className="text-sm text-neutral-600 hover:text-white transition-colors uppercase tracking-widest"
              >
                hello@amdigital.agency
              </a>
              <span className="w-1 h-1 rounded-full bg-neutral-700 hidden md:block" />
              <span className="text-sm text-neutral-700 uppercase tracking-widest">
                London, UK
              </span>
            </div>

            {/* Right — language selector */}
            <div className="flex items-center gap-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => selectLang(l.code)}
                  className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-colors ${
                    lang === l.code
                      ? "text-white bg-white/10"
                      : "text-neutral-700 hover:text-white"
                  }`}
                >
                  {l.code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
