import Link from "next/link";
import { Sparkles, Clock, ArrowRight } from "lucide-react";
import { Article } from "@/lib/content";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFE9F1] via-[#FFFAFC] to-[#FFE9F1]/40 border border-[#FF2E88]/20 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          <div className="space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#FF2E88] text-white text-xs font-bold uppercase tracking-wider">
                Featured Editorial
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FFE9F1] text-[#2A0F1E] text-xs font-semibold">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[#2A0F1E]/60">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#2A0F1E] leading-tight">
              <Link href={`/the-glow-edit/${article.slug}`} className="hover:text-[#FF2E88] transition-colors">
                {article.title}
              </Link>
            </h2>

            <p className="text-base sm:text-lg text-[#2A0F1E]/80 leading-relaxed">
              {article.summary}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-white/80 border border-[#FFE9F1] text-xs text-[#2A0F1E]/70 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href={`/the-glow-edit/${article.slug}`}
                className="btn-pill-primary inline-flex text-sm"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Aesthetic Editorial Badge card */}
          <div className="w-full lg:w-72 shrink-0 p-6 rounded-2xl bg-white border border-[#FFE9F1] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFE9F1] text-[#FF2E88] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="font-heading font-extrabold text-sm text-[#2A0F1E]">
              The Core Manifesto
            </p>
            <p className="text-xs text-[#2A0F1E]/70 leading-relaxed">
              “A baddie is someone who is confident, put together and unapologetic about taking up space. Skin so dewy it’s rude.”
            </p>
            <div className="text-xs font-bold text-[#FF2E88]">
              By {article.author} • Updated {article.date}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between p-6 rounded-3xl bg-[#FFFAFC] border border-[#FFE9F1] hover:border-[#FF2E88]/40 hover:shadow-md transition-all duration-300 group">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full bg-[#FFE9F1] text-[#FF2E88] text-xs font-bold">
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-[#2A0F1E]/60">
            <Clock className="w-3 h-3" />
            {article.readingTime}
          </span>
        </div>

        <h3 className="font-heading text-lg sm:text-xl font-bold text-[#2A0F1E] group-hover:text-[#FF2E88] transition-colors leading-snug">
          <Link href={`/the-glow-edit/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p className="text-sm text-[#2A0F1E]/75 line-clamp-3 leading-relaxed">
          {article.summary}
        </p>

        {article.draft && (
          <span className="inline-block px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold tracking-wide uppercase">
            Draft Preview
          </span>
        )}
      </div>

      <div className="pt-5 mt-4 border-t border-[#FFE9F1]/80 flex items-center justify-between text-xs">
        <span className="text-[#2A0F1E]/60">{article.date}</span>
        <Link
          href={`/the-glow-edit/${article.slug}`}
          className="inline-flex items-center gap-1 font-bold text-[#FF2E88] group-hover:translate-x-0.5 transition-transform"
        >
          <span>Read guide</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

