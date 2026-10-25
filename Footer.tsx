import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
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

export default function Footer() {
  return (
    <footer className="bg-[#2A0F1E] text-[#FFFAFC] border-t border-[#2A0F1E] mt-auto">
      {/* Top Banner Accent */}
      <div className="h-1.5 bg-gradient-to-r from-[#FF2E88] via-[#C9A8FF] to-[#FFB38A]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading text-3xl font-extrabold tracking-tight text-[#FFFAFC]">
                DEW<span className="text-[#FF2E88]">BADDIE</span>
              </span>
            </Link>
            <p className="text-[#FFE9F1]/80 text-sm sm:text-base max-w-md font-normal leading-relaxed">
              “Skin so dewy it’s rude.” A beauty, personal style, and college-lifestyle destination for Gen Z women. Honest editorial guides, routine breakdowns, and realistic inspiration.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFAFC]/10 hover:bg-[#FF2E88] text-[#FFFAFC] text-xs font-semibold tracking-wide transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Editorial Navigation */}
          <div>
            <h3 className="font-heading text-sm uppercase tracking-wider text-[#C9A8FF] mb-4 font-bold">
              Explore Content
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/the-glow-edit" className="text-[#FFE9F1]/80 hover:text-[#FF2E88] transition-colors">
                  The Glow Edit
                </Link>
              </li>
              <li>
                <Link href="/college-baddie" className="text-[#FFE9F1]/80 hover:text-[#FF2E88] transition-colors">
                  College Baddie Guides
                </Link>
              </li>
              <li>
                <Link href="/trending-now" className="text-[#FFE9F1]/80 hover:text-[#FF2E88] transition-colors">
                  Trending Now
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-[#FFE9F1]/80 hover:text-[#FF2E88] transition-colors">
                  What is a Baddie? (Our Story)
                </Link>
              </li>
            </ul>
          </div>

          {/* Transparency & Disclosures */}
          <div>
            <h3 className="font-heading text-sm uppercase tracking-wider text-[#C9A8FF] mb-4 font-bold">
              Editorial Notice
            </h3>
            <p className="text-xs text-[#FFE9F1]/70 leading-relaxed mb-4">
              DewBaddie v1 is an editorial content and inspiration showcase. We do not sell products online, operate checkout, or process payments.
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="text-[#FFE9F1]/80 hover:text-[#FF2E88] underline underline-offset-2">
                  Privacy Notice & Disclosures
                </Link>
              </li>
              <li className="text-[#FFE9F1]/60">
                Contact: <span className="text-[#FFE9F1]/90">hello@dewbaddie.com</span> (Draft)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div className="mt-12 pt-8 border-t border-[#FFE9F1]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFE9F1]/60">
          <p>© {new Date().getFullYear()} DewBaddie. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted for Gen Z baddies <Sparkles className="w-3.5 h-3.5 text-[#FF2E88]" />
          </p>
        </div>
      </div>
    </footer>
  );
}

