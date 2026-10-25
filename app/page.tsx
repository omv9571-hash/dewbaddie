import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen, GraduationCap, Flame, Heart, Check, Layers } from "lucide-react";
import ArticleCard from "@/components/content/ArticleCard";
import EditorialTrendCard from "@/components/editorial/EditorialTrendCard";
import { getFeaturedArticle, getAllArticles, getAllTrends } from "@/lib/content";

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

export default function HomePage() {
  const featuredArticle = getFeaturedArticle();
  const allArticles = getAllArticles();
  const secondaryArticles = allArticles.filter((a) => a.slug !== featuredArticle.slug);
  const trends = getAllTrends();

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFE9F1]/80 via-[#FFFAFC] to-[#FFFAFC] pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFE9F1] rounded-full blur-3xl pointer-events-none opacity-80" 
          aria-hidden="true" 
        />
        <div 
          className="absolute top-1/3 right-10 w-72 h-72 bg-[#C9A8FF]/20 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE9F1] border border-[#FF2E88]/20 text-[#FF2E88] text-xs sm:text-sm font-bold tracking-wide uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Gen Z Beauty & Style Editorial</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#2A0F1E] tracking-tight leading-[1.1]">
            Skin so dewy <br className="hidden sm:inline" />
            <span className="text-[#FF2E88]">it’s rude.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#2A0F1E]/80 font-normal leading-relaxed">
            The honest beauty, personal style, and college-lifestyle destination for Gen Z women. Learn what being a baddie means, how to build your personal look, and discover what trends are actually worth your time.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/the-glow-edit/what-is-a-baddie"
              className="btn-pill-primary"
            >
              <span>Read The Baddie Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/the-glow-edit"
              className="btn-pill-secondary"
            >
              <span>Explore The Glow Edit</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Start Here / What is a Baddie? Intro Section */}
      <section className="py-16 sm:py-24 border-t border-[#FFE9F1] bg-[#FFFAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF2E88] uppercase tracking-wider">
              <Heart className="w-4 h-4" />
              <span>Brand Point of View</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2A0F1E] tracking-tight">
              What does being a “baddie” really mean?
            </h2>
            <p className="text-base sm:text-lg text-[#2A0F1E]/80 leading-relaxed">
              Short answer: a baddie is someone who is confident, put together and unapologetic about taking up space. It is not about a rigid stereotype, a fixed budget, or copying every passing micro-trend. It’s an attitude: <strong>you dress for yourself and you do not wait for permission.</strong>
            </p>
          </div>

          {/* Aesthetic Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#FFE9F1] border border-[#FF2E88]/30 space-y-3 relative overflow-hidden">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FF2E88] text-white text-[10px] font-bold uppercase tracking-wider">
                Signature Vibe
              </span>
              <h3 className="font-heading text-xl font-bold text-[#2A0F1E]">Baddie</h3>
              <p className="text-xs text-[#2A0F1E]/75 leading-relaxed">
                Bold, glam, confident. Defined eyes, lined lips, glowy hydrated skin, and intentional fitted silhouettes.
              </p>
              <div className="pt-2 text-xs font-bold text-[#FF2E88]">
                Formula: Fitted tops + cargos + statement jewellery
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFE9F1] text-[#2A0F1E] text-[10px] font-bold uppercase tracking-wider">
                Minimal
              </span>
              <h3 className="font-heading text-xl font-bold text-[#2A0F1E]">Clean Girl</h3>
              <p className="text-xs text-[#2A0F1E]/70 leading-relaxed">
                Fresh and skin-first. Brushed-up brows, dewy tint, slick middle-part bun, and neutral basics.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#2A0F1E]/60">
                Formula: Slick bun + ribbed tank
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFE9F1] text-[#2A0F1E] text-[10px] font-bold uppercase tracking-wider">
                Pastel
              </span>
              <h3 className="font-heading text-xl font-bold text-[#2A0F1E]">Soft Girl</h3>
              <p className="text-xs text-[#2A0F1E]/70 leading-relaxed">
                Sweet and gentle. Blushed cheeks, glossy pink lips, pastel accents, and pleated cardigans.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#2A0F1E]/60">
                Formula: Pleated skirt + cardigan
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFE9F1] text-[#2A0F1E] text-[10px] font-bold uppercase tracking-wider">
                Nostalgic
              </span>
              <h3 className="font-heading text-xl font-bold text-[#2A0F1E]">Y2K</h3>
              <p className="text-xs text-[#2A0F1E]/70 leading-relaxed">
                Shiny, playful nostalgia. Frosted shimmers, thin brows, baby tees, and low-rise denim.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#2A0F1E]/60">
                Formula: Baby tee + low-rise jeans
              </div>
            </div>
          </div>

          {/* Desi / Indian Baddie Spotlight */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#2A0F1E] to-[#3E162D] text-[#FFFAFC] space-y-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2E88]/20 text-[#FF2E88] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Indian Baddie Movement</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#FFFAFC]">
                Bindis, Kohl & Culture Pride: Fusing Heritage with Streetwear
              </h3>
              <p className="text-sm sm:text-base text-[#FFE9F1]/80 leading-relaxed">
                An Indian baddie (or desi baddie) mixes the classic confident attitude with South Asian elements: silver oxidised jhumkas, deep kohl, warm brown lip combos formulated for pigmented lips, and pairing bangles with cargo pants. It is representation and culture celebrated out loud.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/the-glow-edit/what-is-a-baddie#what-is-an-indian-baddie"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF2E88] text-white text-xs sm:text-sm font-bold hover:bg-[#e61c77] transition-all"
              >
                <span>Read the Indian Baddie Breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Glow Edit Featured Section */}
      <section className="py-16 sm:py-20 border-t border-[#FFE9F1] bg-[#FFFAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF2E88] uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Editorial Spotlight</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#2A0F1E]">
                The Glow Edit
              </h2>
              <p className="text-sm sm:text-base text-[#2A0F1E]/75">
                Our in-depth guides, step-by-step beauty tutorials, and honest routines.
              </p>
            </div>
            <Link
              href="/the-glow-edit"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF2E88] hover:underline shrink-0"
            >
              <span>View all guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured flagship card */}
          <ArticleCard article={featuredArticle} featured={true} />

          {/* Secondary preview cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {secondaryArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. College Baddie Section */}
      <section className="py-16 sm:py-20 border-t border-[#FFE9F1] bg-[#FFE9F1]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF2E88] uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Campus Realities</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#2A0F1E]">
                College Baddie
              </h2>
              <p className="text-sm sm:text-base text-[#2A0F1E]/75">
                Looking put-together without buying a whole new wardrobe every semester.
              </p>
            </div>
            <Link
              href="/college-baddie"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF2E88] hover:underline shrink-0"
            >
              <span>View college hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFE9F1] text-[#FF2E88] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-heading text-lg font-bold text-[#2A0F1E]">
                The Repeat-Wardrobe Formula
              </h3>
              <p className="text-xs text-[#2A0F1E]/75 leading-relaxed">
                Rotate 5 foundational pieces (wide cargos, vintage denim, neutral baby tees) and alter the aesthetic with oxidised silver or bold mini bags.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFE9F1] text-[#FF2E88] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-heading text-lg font-bold text-[#2A0F1E]">
                Metro-Proof Base Routine
              </h3>
              <p className="text-xs text-[#2A0F1E]/75 leading-relaxed">
                Concealer pressed, not rubbed. Setting powder focused only on the T-zone and a transfer-resistant 9-to-5 lip combo that survives humidity.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFE9F1] text-[#FF2E88] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-heading text-lg font-bold text-[#2A0F1E]">
                10-Minute Morning Prep
              </h3>
              <p className="text-xs text-[#2A0F1E]/75 leading-relaxed">
                Mascara, combed brows, and a brown lip combo. Three affordable products that deliver maximum impact before an 8 AM lecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trending Now Editorial Features (Strictly Non-Commerce) */}
      <section className="py-16 sm:py-20 border-t border-[#FFE9F1] bg-[#FFFAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF2E88] uppercase tracking-wider">
                <Flame className="w-4 h-4" />
                <span>Editorial Trend Radar</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#2A0F1E]">
                Trending Now
              </h2>
              <p className="text-sm sm:text-base text-[#2A0F1E]/75">
                Honest breakdowns of viral ingredients and products. Informational only — no sales pitch, zero fake ratings.
              </p>
            </div>
            <Link
              href="/trending-now"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF2E88] hover:underline shrink-0"
            >
              <span>Explore all trends</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trends.map((trend) => (
              <EditorialTrendCard key={trend.slug} trend={trend} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Customize Your Look Content Pathways */}
      <section className="py-16 sm:py-20 border-t border-[#FFE9F1] bg-[#FFE9F1]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF2E88] uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Content Pathways</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#2A0F1E]">
              Customize Your Look
            </h2>
            <p className="text-sm sm:text-base text-[#2A0F1E]/75">
              You don’t have to fit one label. Pick the vibe that fits your mood today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-3">
              <span className="text-2xl">✨</span>
              <h3 className="font-heading text-lg font-bold text-[#2A0F1E]">Soft Baddie</h3>
              <p className="text-xs text-[#2A0F1E]/70 leading-relaxed">
                Peachy flush, glazed dewy cheekbones, and soft pink gloss. Perfect for easy weekends and brunch dates.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-3">
              <span className="text-2xl">⚡</span>
              <h3 className="font-heading text-lg font-bold text-[#2A0F1E]">Clean & Put-Together</h3>
              <p className="text-xs text-[#2A0F1E]/70 leading-relaxed">
                Sleek middle-part buns, conditioned brows, and minimal mascara. The everyday college lecture uniform.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-3">
              <span className="text-2xl">🪷</span>
              <h3 className="font-heading text-lg font-bold text-[#2A0F1E]">Desi Fusion</h3>
              <p className="text-xs text-[#2A0F1E]/70 leading-relaxed">
                Micro-bindis with sharp wings, silver oxidised filigree with black tanks, and 90s brown lip combos.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-3">
              <span className="text-2xl">🔥</span>
              <h3 className="font-heading text-lg font-bold text-[#2A0F1E]">Bold Details</h3>
              <p className="text-xs text-[#2A0F1E]/70 leading-relaxed">
                Sharp graphic liner, high-contrast lip outlines, and statement accessories that own the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Instagram Community Section */}
      <section className="py-16 sm:py-20 border-t border-[#FFE9F1] bg-[#FFFAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#FFE9F1] text-[#FF2E88] mx-auto flex items-center justify-center">
            <InstagramIcon className="w-6 h-6" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#2A0F1E]">
            Join the DewBaddie Community
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#2A0F1E]/75">
            Follow along on Instagram for daily routine breakdowns, campus style inspiration, and honest beauty reviews.
          </p>
          <div className="pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A0F1E] hover:bg-[#FF2E88] text-white text-xs sm:text-sm font-bold tracking-wide transition-colors shadow-sm"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@dewbaddie on Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
