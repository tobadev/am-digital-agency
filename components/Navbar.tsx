"use client";

import React, { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

type Lang = "en" | "de";

const navItems = [
  { num: "01", key: "home" as const, href: "/" as const },
  { num: "02", key: "services" as const, href: "/services" as const },
  { num: "03", key: "work" as const, href: "/work" as const },
  { num: "04", key: "about" as const, href: "/about" as const },
  { num: "05", key: "contact" as const, href: "/contact" as const },
];

const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as Lang;
  const t = useTranslations("Navbar");

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

  const switchLocale = (target: Lang) => {
    if (target === locale) return;
    router.replace(pathname as any, { locale: target });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top bar — logo + menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex justify-between items-center pointer-events-none">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="pointer-events-auto z-50 relative"
        >
          <svg viewBox="41 0 199 32" className="h-6 md:h-7 w-auto" fill="white" aria-label="AM Digital Agency">
            <path d="m41.6 15.6c0 8.3 5.3 13.8 12.1 13.8 4.2 0 7.2-2 8.8-4.3v3.9h6.7v-26.5h-6.7v3.7c-1.6-2.2-4.5-4.2-8.8-4.2-6.8 0-12.1 5.4-12.1 13.6zm20.9 0.1c0 5.1-3.4 7.8-7.1 7.8-3.6 0-7-2.8-7-7.9 0-5 3.4-7.7 7-7.7 3.7 0 7.1 2.8 7.1 7.8zm49.9 13.3h6.7v-15.6c0-7.3-4.5-11.3-10.8-11.3-3.9 0-7.4 2-9.1 5.1-1.9-3.3-5.3-5.1-9.4-5.1-3.3 0-6.1 1.4-7.8 3.6v-3.2h-6.7v26.5h6.7v-14.7c0-4.2 2.4-6.4 6-6.4 3.5 0 5.9 2.2 5.9 6.4v14.7h6.7v-14.7c0-4.2 2.3-6.4 5.9-6.4 3.6 0 5.9 2.2 5.9 6.4z"/>
            <path fillOpacity="0.9" d="m125.4 8.4c0 2.2 1.5 3.7 3.3 3.7 1.1 0 2-0.5 2.4-1.2v1.1h1.8v-9.6h-1.8v3.4c-0.5-0.7-1.4-1.1-2.4-1.1-1.8 0-3.3 1.4-3.3 3.7zm5.7 0c0 1.4-0.9 2.1-1.9 2.1-1 0-1.9-0.8-1.9-2.1 0-1.4 0.9-2.1 1.9-2.1 1 0 1.9 0.7 1.9 2.1zm3.8 3.6h1.8v-7.2h-1.8zm0.9-8.1c0.7 0 1.1-0.4 1.1-1 0-0.6-0.4-1.1-1.1-1.1-0.6 0-1.1 0.5-1.1 1.1 0 0.6 0.5 1 1.1 1zm1.6 4.5c0 2.2 1.5 3.7 3.3 3.7 1.1 0 2-0.5 2.4-1.2v1.1c0 1.4-0.8 2-1.8 2-0.9 0-1.6-0.5-1.8-1.1h-1.8c0.2 1.6 1.6 2.6 3.7 2.6 2.3 0 3.5-1.5 3.5-3.5v-7.2h-1.8v1c-0.4-0.6-1.3-1.1-2.4-1.1-1.8 0-3.3 1.4-3.3 3.7zm5.7 0c0 1.4-0.9 2.1-1.9 2.1-1 0-1.9-0.8-1.9-2.1 0-1.4 0.9-2.1 1.9-2.1 1 0 1.9 0.7 1.9 2.1zm3.8 3.6h1.8v-7.2h-1.8zm0.9-8.1c0.7 0 1.1-0.4 1.1-1 0-0.6-0.4-1.1-1.1-1.1-0.6 0-1.1 0.5-1.1 1.1 0 0.6 0.5 1 1.1 1zm3.4 5.9c0 1.6 0.9 2.2 2.3 2.2h1.1v-1.5h-0.8c-0.6 0-0.8-0.2-0.8-0.7v-3.5h1.6v-1.5h-1.6v-1.8h-1.8v1.8h-0.9v1.5h0.9zm4.2-1.4c0 2.2 1.5 3.7 3.3 3.7 1.1 0 2-0.5 2.4-1.1v1h1.8v-7.2h-1.8v1c-0.4-0.5-1.2-1.1-2.4-1.1-1.8 0-3.3 1.4-3.3 3.7zm5.7 0c0 1.4-0.9 2.1-1.9 2.1-1 0-1.9-0.7-1.9-2.1 0-1.4 0.9-2.1 1.9-2.1 1 0 1.9 0.8 1.9 2.1zm3.8 3.6h1.8v-9.6h-1.8zm-39.5 12.4c0 2.2 1.5 3.7 3.3 3.7 1.1 0 2-0.5 2.4-1.1v1h1.8v-7.2h-1.8v1c-0.4-0.6-1.2-1.1-2.4-1.1-1.8 0-3.3 1.4-3.3 3.7zm5.7 0c0 1.4-0.9 2.1-1.9 2.1-1 0-1.9-0.8-1.9-2.1 0-1.4 0.9-2.1 1.9-2.1 1 0 1.9 0.7 1.9 2.1zm3.3 0c0 2.2 1.5 3.7 3.3 3.7 1.1 0 2-0.5 2.4-1.2v1.2c0 1.3-0.8 1.9-1.8 1.9-0.9 0-1.6-0.5-1.8-1.1h-1.8c0.2 1.6 1.6 2.7 3.7 2.7 2.3 0 3.5-1.6 3.5-3.5v-7.3h-1.8v1c-0.4-0.6-1.3-1.1-2.4-1.1-1.8 0-3.3 1.4-3.3 3.7zm5.7 0c0 1.4-0.9 2.1-1.9 2.1-1 0-1.9-0.8-1.9-2.1 0-1.4 0.9-2.1 1.9-2.1 1 0 1.9 0.7 1.9 2.1zm6.9-2.2c0.9 0 1.7 0.6 1.7 1.5h-3.4c0.1-1 0.8-1.5 1.7-1.5zm3.4 3.5h-2c-0.2 0.5-0.6 0.9-1.4 0.9-0.9 0-1.6-0.6-1.7-1.7h5.2c0.1-0.2 0.1-0.4 0.1-0.7 0-2.1-1.5-3.5-3.6-3.5-2.1 0-3.6 1.4-3.6 3.7 0 2.3 1.5 3.7 3.6 3.7 1.8 0 3-1 3.4-2.4zm6.5 2.3h1.9v-4.2c0-2-1.2-3.1-2.9-3.1-0.9 0-1.7 0.4-2.2 1v-0.9h-1.8v7.2h1.8v-4c0-1.1 0.7-1.8 1.6-1.8 1 0 1.6 0.7 1.6 1.8zm2.5-3.6c0 2.3 1.5 3.7 3.6 3.7 1.8 0 3-1 3.4-2.5h-2c-0.2 0.6-0.7 1-1.4 1-1 0-1.7-0.8-1.7-2.2 0-1.4 0.7-2.1 1.7-2.1 0.7 0 1.2 0.3 1.4 1h2c-0.4-1.7-1.6-2.6-3.4-2.6-2.1 0-3.6 1.5-3.6 3.7zm11.6 1.5l-1.9-5.1h-2l2.9 7-1.6 3.6h1.9l4.5-10.6h-2z"/>
          </svg>
        </Link>

        <button
          onClick={toggleMenu}
          className="text-xs font-bold uppercase tracking-widest bg-black/80 backdrop-blur-sm border border-white/15 px-7 py-3 rounded-full hover:border-white/40 transition-colors pointer-events-auto z-50 relative"
        >
          {isMenuOpen ? t("close") : t("menu")}
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
                    {t(`items.${item.key}`)}
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
                href={`mailto:${t("email")}`}
                className="text-sm text-neutral-600 hover:text-white transition-colors uppercase tracking-widest"
              >
                {t("email")}
              </a>
              <span className="w-1 h-1 rounded-full bg-neutral-700 hidden md:block" />
              <span className="text-sm text-neutral-700 uppercase tracking-widest">
                {t("location")}
              </span>
            </div>

            {/* Right — language selector */}
            <div className="flex items-center gap-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => switchLocale(l.code)}
                  className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-colors ${
                    locale === l.code
                      ? "text-white bg-white/10"
                      : "text-neutral-700 hover:text-white"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
