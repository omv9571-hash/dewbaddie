import Link from "next/link";
import { Sparkles, Heart, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "What is a Baddie? — Brand Story & Manifesto | DewBaddie",
  description: "Confidence, self-expression, and intentional personal style. Discover what DewBaddie stands for.",
};

export default function OurStoryPage() {
  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2E88] uppercase tracking-wider">
          <Heart className="w-4 h-4" />
          <span>Brand Manifesto</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#2A0F1E] tracking-tight">
          What Is a Baddie?
        </h1>
        <p className="text-xl sm:text-2xl font-heading text-[#FF2E88] font-bold">
          “Skin so dewy it’s rude.”
        </p>
      </div>

      <div className="space-y-8 text-[#2A0F1E]/85 leading-relaxed text-base sm:text-lg">
        {/* Core Definition Block */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FFE9F1]/60 border border-[#FFE9F1] space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#2A0F1E]">
            It’s an attitude, not a carbon copy.
          </h2>
          <p className="text-base sm:text-lg text-[#2A0F1E]/80 leading-relaxed">
            You’ve seen the word under a million selfies, reels, and outfit pics. <em>Baddie.</em> But what does it really mean? Short answer: <strong>a baddie is someone who is confident, put together and unapologetic about taking up space.</strong>
          </p>
          <p className="text-base sm:text-lg text-[#2A0F1E]/80 leading-relaxed">
            The “bad” here is not about being a bad person. It means bold and fearless. You know your worth, you dress for yourself, and you do not wait for permission.
          </p>
        </div>

        {/* The 4 DewBaddie Pillars */}
        <div className="space-y-5 pt-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2A0F1E]">
            What DewBaddie Stands For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-2">
              <div className="flex items-center gap-2 font-heading font-bold text-[#2A0F1E] text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#FF2E88]" />
                <span>Skin So Dewy It’s Rude</span>
              </div>
              <p className="text-sm text-[#2A0F1E]/75 leading-relaxed">
                Nourishing barrier routines and high-hydration skin prep over heavy camouflage. Glowy, healthy “face card” energy that feels good all day.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-2">
              <div className="flex items-center gap-2 font-heading font-bold text-[#2A0F1E] text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#FF2E88]" />
                <span>Desi Representation & Pride</span>
              </div>
              <p className="text-sm text-[#2A0F1E]/75 leading-relaxed">
                Celebrating South Asian features, warm brown skin tones, traditional hair oiling, silver jhumkas, and kohl-lined eyes with modern streetwear.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-2">
              <div className="flex items-center gap-2 font-heading font-bold text-[#2A0F1E] text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#FF2E88]" />
                <span>Accessible College Realities</span>
              </div>
              <p className="text-sm text-[#2A0F1E]/75 leading-relaxed">
                Practical 10-minute routines and repeat-wardrobe capsule formulas. You don’t need an unlimited budget to look effortlessly put together.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#FFE9F1] space-y-2">
              <div className="flex items-center gap-2 font-heading font-bold text-[#2A0F1E] text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#FF2E88]" />
                <span>Honest Editorial Standards</span>
              </div>
              <p className="text-sm text-[#2A0F1E]/75 leading-relaxed">
                Zero fake reviews, zero invented product claims. We break down beauty ingredients and viral aesthetics with complete transparency.
              </p>
            </div>
          </div>
        </div>

        {/* Read the complete guide CTA */}
        <div className="p-8 rounded-3xl bg-[#2A0F1E] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-heading text-xl font-bold">
              Want the full style & makeup breakdown?
            </h3>
            <p className="text-sm text-[#FFE9F1]/80">
              Read our comprehensive guide to aesthetics, brown lip combos, and outfit formulas.
            </p>
          </div>
          <Link
            href="/the-glow-edit/what-is-a-baddie"
            className="btn-pill-primary shrink-0 text-xs sm:text-sm"
          >
            <span>Read The Full Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
