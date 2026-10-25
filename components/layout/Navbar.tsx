"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "The Glow Edit", href: "/the-glow-edit" },
  { name: "College Baddie", href: "/college-baddie" },
  { name: "Trending Now", href: "/trending-now" },
  { name: "Our Story", href: "/our-story" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFAFC]/90 backdrop-blur-md border-b border-[#FFE9F1]">
      {/* Top editorial micro-bar */}
      <div className="bg-[#2A0F1E] text-[#FFE9F1] text-xs py-1.5 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#FF2E88]" />
        <span>DewBaddie Editorial — Skin so dewy it’s rude.</span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group focus:outline-none"
        >
          <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2A0F1E] group-hover:text-[#FF2E88] transition-colors">
            DEW<span className="text-[#FF2E88]">BADDIE</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                  active
                    ? "bg-[#FFE9F1] text-[#FF2E88]"
                    : "text-[#2A0F1E]/80 hover:text-[#2A0F1E] hover:bg-[#FFE9F1]/50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions (Editorial Instagram link & primary CTA) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DewBaddie on Instagram"
            className="p-2 rounded-full text-[#2A0F1E]/70 hover:text-[#FF2E88] hover:bg-[#FFE9F1] transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <Link
            href="/the-glow-edit"
            className="btn-pill-primary text-xs tracking-wider uppercase py-2 px-4 shadow-sm"
          >
            Explore Guides
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DewBaddie on Instagram"
            className="p-2 rounded-full text-[#2A0F1E] hover:text-[#FF2E88]"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#2A0F1E] hover:bg-[#FFE9F1] transition-colors focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFAFC] border-b border-[#FFE9F1] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                  active
                    ? "bg-[#FFE9F1] text-[#FF2E88]"
                    : "text-[#2A0F1E] hover:bg-[#FFE9F1]/40"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/the-glow-edit"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-pill-primary w-full text-center py-3 text-sm"
            >
              Explore Guides
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

