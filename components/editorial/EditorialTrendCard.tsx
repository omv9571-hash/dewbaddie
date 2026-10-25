import { Flame, Sparkles, Check, Info } from "lucide-react";
import { EditorialTrend } from "@/lib/content";

interface EditorialTrendCardProps {
  trend: EditorialTrend;
}

export default function EditorialTrendCard({ trend }: EditorialTrendCardProps) {
  return (
    <div className="rounded-3xl bg-[#FFFAFC] border border-[#FFE9F1] p-6 sm:p-7 flex flex-col justify-between hover:border-[#FF2E88]/30 hover:shadow-md transition-all duration-300">
      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE9F1] text-[#FF2E88] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            {trend.badge}
          </span>
          <span className="text-xs text-[#2A0F1E]/60 font-medium">
            {trend.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#2A0F1E] leading-snug">
          {trend.name}
        </h3>

        {/* Summary */}
        <p className="text-sm text-[#2A0F1E]/80 leading-relaxed">
          {trend.summary}
        </p>

        {/* Trend Context */}
        <div className="p-4 rounded-2xl bg-[#FFE9F1]/40 border border-[#FFE9F1] space-y-2 text-xs">
          <p className="font-bold text-[#2A0F1E] flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-[#FF2E88]" />
            <span>Why it’s trending:</span>
          </p>
          <p className="text-[#2A0F1E]/75 leading-relaxed pl-5">
            {trend.whyTrending}
          </p>
        </div>

        {/* Who it suits & considerations */}
        <div className="space-y-2 text-xs text-[#2A0F1E]/80">
          <p className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[#FF2E88] shrink-0 mt-0.5" />
            <span><strong>Who it suits:</strong> {trend.whoItSuits}</span>
          </p>
          <p className="flex items-start gap-2">
            <Info className="w-4 h-4 text-[#C9A8FF] shrink-0 mt-0.5" />
            <span><strong>Things to know:</strong> {trend.considerations}</span>
          </p>
        </div>

        {/* Verified price / market range if available */}
        {trend.verifiedPrice && (
          <div className="pt-2 flex items-center justify-between text-xs border-t border-[#FFE9F1] text-[#2A0F1E]/60">
            <span>Market Range: <strong className="text-[#2A0F1E]">{trend.verifiedPrice}</strong></span>
            {trend.priceCheckedAt && <span>Checked: {trend.priceCheckedAt}</span>}
          </div>
        )}
      </div>

      {/* Non-commerce disclosure */}
      <div className="pt-4 mt-4 border-t border-[#FFE9F1]/80">
        <p className="text-[11px] text-[#2A0F1E]/60 italic leading-tight">
          {trend.disclosure}
        </p>
      </div>
    </div>
  );
}

