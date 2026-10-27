import Link from "next/link";
import { Flame, Sparkles, ShieldCheck } from "lucide-react";
import EditorialTrendCard from "@/components/editorial/EditorialTrendCard";
import { getAllTrends } from "@/lib/content";

export const metadata = {
  title: "Trending Now — Editorial Product & Ingredient Decoders | DewBaddie",
  description: "Honest editorial analysis of viral beauty trends, skincare ingredients, and aesthetics. No hype, no fake reviews, non-commerce.",
};

export default function TrendingNowPage() {
  const trends = getAllTrends();

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2E88] uppercase tracking-wider">
          <Flame className="w-4 h-4" />
          <span>Editorial Trend Radar</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2A0F1E] tracking-tight">
          Trending Now
        </h1>
        <p className="text-base sm:text-lg text-[#2A0F1E]/80 leading-relaxed">
          We break down what is genuinely worth knowing, what the viral hype actually means, and whether it makes sense for your skin, budget, and daily life.
        </p>
      </div>

      {/* Editorial Standards Notice */}
      <div className="p-6 rounded-3xl bg-[#FFE9F1] border border-[#FF2E88]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-10 h-10 rounded-2xl bg-[#FF2E88] text-white flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="space-y-1 text-xs sm:text-sm text-[#2A0F1E]/85 leading-relaxed">
          <p className="font-bold text-[#2A0F1E]">
            DewBaddie Editorial Policy
          </p>
          <p>
            DewBaddie v1 is an editorial content destination. <strong>We do not sell products, operate a shopping cart, or collect commissions on sales.</strong> Product and ingredient cards below represent editorial observations, not shopping endorsements or guaranteed medical claims.
          </p>
        </div>
      </div>

      {/* Trend Cards Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#2A0F1E]">
            Current Trend Breakdowns
          </h2>
          <span className="text-xs text-[#2A0F1E]/60">
            Updated October 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trends.map((trend) => (
            <EditorialTrendCard key={trend.slug} trend={trend} />
          ))}
        </div>
      </div>

      {/* Ingredient Education Guide Callout */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#FFE9F1] space-y-4">
        <h3 className="font-heading text-2xl font-bold text-[#2A0F1E]">
          How We Evaluate Trends
        </h3>
        <p className="text-sm sm:text-base text-[#2A0F1E]/80 leading-relaxed max-w-3xl">
          Before breaking down any viral trend, we look for three things: <strong>barrier safety</strong> (does it sensitise or damage the skin?), <strong>real-life longevity</strong> (does it melt in Indian humidity?), and <strong>accessibility</strong> (can you achieve the look without luxury price tags?).
        </p>
      </div>
    </div>
  );
}
