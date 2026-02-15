import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white px-6 md:px-10">
      <div className="max-w-5xl mx-auto">

        {/* CTA */}
        <div className="border-t border-white/10 pt-32 md:pt-44 pb-32 md:pb-44">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8 block">Next step</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-12">
            Let&apos;s build<br />something great.
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Start a project
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Info grid — asymmetric: contact wider */}
        <div className="border-t border-white/10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 md:gap-12">

          {/* Contact + Address */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 block mb-6">Contact</span>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@amdigital.agency"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                hello@amdigital.agency
              </a>
              <div className="text-sm text-neutral-400 leading-relaxed mt-2">
                <span className="block">27 Old Gloucester Street</span>
                <span className="block">London, WC1N 3AX</span>
                <span className="block">United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 block mb-6">Navigation</span>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 block mb-6">Socials</span>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

        </div>

        {/* Bottom bar — legal info */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-neutral-700 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} AM Digital Agency Ltd &middot; Company No. 14167111
          </p>
          <Link href="/legal" className="text-[10px] text-neutral-700 uppercase tracking-widest hover:text-white transition-colors">
            Legal
          </Link>
        </div>

      </div>
    </footer>
  );
};
