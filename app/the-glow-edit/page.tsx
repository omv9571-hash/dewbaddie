import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import ArticleCard from "@/components/content/ArticleCard";
import { getAllArticles, getFeaturedArticle } from "@/lib/content";

export const metadata = {
  title: "The Glow Edit — Content Hub & Guides | DewBaddie",
  description: "Browse all published beauty routines, aesthetic decoders, college style formulas, and honest trend breakdowns.",
};

const CATEGORIES = [
  "All Guides",
  "Personal Style",
  "College Style",
  "Beauty Basics",
  "Hair Routines",
  "Trend Decoder",
];

export default function GlowEditPage() {
  const articles = getAllArticles();
  const featured = getFeaturedArticle();
  const listArticles = articles.filter((a) => a.slug !== featured.slug);

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2E88] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Editorial Hub</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2A0F1E] tracking-tight">
          The Glow Edit
        </h1>
        <p className="text-base sm:text-lg text-[#2A0F1E]/80 leading-relaxed">
          Curated guides, beauty routines, and aesthetic decoders designed for real life. Honest, practical, and skin-first.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 pt-2 border-b border-[#FFE9F1] pb-6">
        {CATEGORIES.map((category, idx) => (
          <button
            key={category}
            type="button"
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              idx === 0
                ? "bg-[#FF2E88] text-white shadow-xs"
                : "bg-[#FFE9F1] text-[#2A0F1E] hover:bg-[#FFE9F1]/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Article Section */}
      <div className="space-y-4">
        <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#2A0F1E]">
          Featured This Week
        </h2>
        <ArticleCard article={featured} featured={true} />
      </div>

      {/* Complete Article Grid */}
      <div className="space-y-6 pt-6">
        <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#2A0F1E]">
          All Guides & Breakdowns
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
