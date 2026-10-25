import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Notice & Editorial Disclosures | DewBaddie",
  description: "Transparency on data privacy, analytics, and editorial content standards.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2E88] hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Home</span>
      </Link>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2E88] uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Transparency</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#2A0F1E]">
          Privacy Notice & Editorial Disclosures
        </h1>
        <p className="text-xs text-[#2A0F1E]/60">Last reviewed: October 2026</p>
      </div>

      <div className="space-y-6 text-[#2A0F1E]/85 text-sm sm:text-base leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-[#2A0F1E]">
            1. Nature of the Website
          </h2>
          <p>
            DewBaddie v1 is an editorial and content showcase platform. DewBaddie does not sell products online, operate an e-commerce checkout, take payments, or process customer orders.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-[#2A0F1E]">
            2. Editorial & Product Information
          </h2>
          <p>
            Any product spotlights or ingredient breakdowns are published solely for editorial education and trend context. We do not make guaranteed medical or dermatological claims. Readers should always check with a qualified dermatologist for specific skin concerns.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-[#2A0F1E]">
            3. Analytics & Personal Data
          </h2>
          <p>
            We respect your privacy. In this release, we only collect aggregated, non-identifiable usage metrics (such as page views and session depth) to improve our editorial content. We do not sell user data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-[#2A0F1E]">
            4. Contact
          </h2>
          <p>
            For editorial questions, collaborations, or concerns, please reach out to:{" "}
            <span className="font-semibold text-[#FF2E88]">hello@dewbaddie.com</span> (Draft).
          </p>
        </section>
      </div>
    </div>
  );
}

