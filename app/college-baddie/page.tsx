import Link from "next/link";
import { GraduationCap, Sparkles, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import ArticleCard from "@/components/content/ArticleCard";
import { getAllArticles } from "@/lib/content";

export const metadata = {
  title: "College Baddie — Campus Style, Routines & Outfit Formulas | DewBaddie",
  description: "Practical guides for looking put-together on campus without breaking the bank. Commute-proof makeup, repeat wardrobe formulas, and 8 AM routines.",
};

export default function CollegeBaddiePage() {
  const allArticles = getAllArticles();
  const collegeArticle = allArticles.find((a) => a.category === "College Style") || allArticles[0];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2E88] uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          <span>Campus Lifestyle</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2A0F1E] tracking-tight">
          College Baddie
        </h1>
        <p className="text-base sm:text-lg text-[#2A0F1E]/80 leading-relaxed">
          How to look put-together for 8 AM lectures, humid commutes, and campus life without spending your entire allowance or waking up at dawn.
        </p>
      </div>

      {/* Featured College Guide */}
      <div className="space-y-4">
        <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#2A0F1E]">
          Featured Campus Guide
        </h2>
        <ArticleCard article={collegeArticle} featured={true} />
      </div>

      {/* Campus Practical Formulas Grid */}
      <div className="space-y-6 pt-4">
        <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#2A0F1E]">
          Everyday Campus Formulas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-3xl bg-[#FFFAFC] border border-[#FFE9F1] space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFE9F1] text-[#FF2E88] text-xs font-bold uppercase">
              Wardrobe
            </span>
            <h3 className="font-heading text-xl font-bold text-[#2A0F1E]">
              The Cargo & Jhumka Formula
            </h3>
            <p className="text-sm text-[#2A0F1E]/75 leading-relaxed">
              Pair wide-leg black or beige utility cargos with a simple fitted cropped tee, retro sneakers, and oxidised silver jhumkas. The perfect balance of comfort and intentional aesthetic.
            </p>
            <div className="p-3 rounded-2xl bg-[#FFE9F1]/50 text-xs font-bold text-[#2A0F1E]">
              Key Piece: Silver oxidised filigree earrings
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-3xl bg-[#FFFAFC] border border-[#FFE9F1] space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFE9F1] text-[#FF2E88] text-xs font-bold uppercase">
              Makeup
            </span>
            <h3 className="font-heading text-xl font-bold text-[#2A0F1E]">
              Metro-Proof Base Routine
            </h3>
            <p className="text-sm text-[#2A0F1E]/75 leading-relaxed">
              Skip heavy foundations in crowded metros. Dot concealer only where needed, press with a damp sponge, dust translucent powder on your T-zone, and finish with a setting spray.
            </p>
            <div className="p-3 rounded-2xl bg-[#FFE9F1]/50 text-xs font-bold text-[#2A0F1E]">
              Pro-Tip: Press, don’t rub. Set only oily zones.
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-3xl bg-[#FFFAFC] border border-[#FFE9F1] space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFE9F1] text-[#FF2E88] text-xs font-bold uppercase">
              Routines
            </span>
            <h3 className="font-heading text-xl font-bold text-[#2A0F1E]">
              5-Minute Lecture Rush
            </h3>
            <p className="text-sm text-[#2A0F1E]/75 leading-relaxed">
              When you overslept your alarm: curl lashes, apply one coat of mascara, swipe a brown liner with tinted balm, and slick hair back into a claw-clip twist.
            </p>
            <div className="p-3 rounded-2xl bg-[#FFE9F1]/50 text-xs font-bold text-[#2A0F1E]">
              Time Required: Under 5 minutes total
            </div>
          </div>
        </div>
      </div>

      {/* College Baddie Manifesto */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#FFE9F1]/40 border border-[#FFE9F1] space-y-4">
        <h3 className="font-heading text-2xl font-bold text-[#2A0F1E]">
          The Golden Rule of College Style
        </h3>
        <p className="text-sm sm:text-base text-[#2A0F1E]/80 leading-relaxed max-w-3xl">
          Nobody in college needs to buy a whole new wardrobe every week. Style isn’t about how much you spent; it’s about having one strong statement piece while keeping everything else effortless, functional, and authentic to you.
        </p>
        <div className="pt-2">
          <Link href="/the-glow-edit/what-is-a-baddie" className="btn-pill-primary text-xs">
            <span>Read The Full Baddie Manifesto</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
