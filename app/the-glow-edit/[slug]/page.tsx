import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, User, ArrowLeft, Sparkles, CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";
import ShareButton from "@/components/content/ShareButton";
import { getArticleBySlug, getAllArticles, Article } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | DewBaddie",
    };
  }

  return {
    title: `${article.metaTitle} | DewBaddie`,
    description: article.metaDescription,
    keywords: article.tags,
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllArticles();
  const relatedArticles = allArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <article className="py-10 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Breadcrumb Navigation */}
      <div>
        <Link
          href="/the-glow-edit"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2E88] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to The Glow Edit</span>
        </Link>
      </div>

      {/* Header Area */}
      <header className="space-y-4 border-b border-[#FFE9F1] pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#FFE9F1] text-[#FF2E88] text-xs font-bold uppercase tracking-wider">
            {article.category}
          </span>
          {article.draft && (
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase">
              Draft Preview
            </span>
          )}
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2A0F1E] tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-[#2A0F1E]/80 leading-relaxed font-normal">
          {article.summary}
        </p>

        {/* Metadata bar */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-[#2A0F1E]/65">
          <span className="inline-flex items-center gap-1.5">
            <User className="w-4 h-4 text-[#FF2E88]" />
            <span>{article.author}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#FF2E88]" />
            <span>{article.date}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#FF2E88]" />
            <span>{article.readingTime}</span>
          </span>
        </div>
      </header>

      {/* Table of Contents */}
      {article.tableOfContents && article.tableOfContents.length > 0 && (
        <nav aria-label="Table of contents" className="p-6 rounded-3xl bg-[#FFE9F1]/40 border border-[#FFE9F1] space-y-3">
          <p className="font-heading text-sm font-bold uppercase tracking-wider text-[#2A0F1E] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF2E88]" />
            <span>In this guide</span>
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm list-decimal list-inside pl-1 text-[#2A0F1E]/80">
            {article.tableOfContents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-[#FF2E88] transition-colors underline-offset-2 hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Main Body Sections */}
      <div className="space-y-10 text-[#2A0F1E]/90 leading-relaxed text-base sm:text-lg">
        {article.sections.map((section, idx) => (
          <section key={section.id || idx} id={section.id} className="space-y-5 scroll-mt-24">
            {section.heading && (
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#2A0F1E] pt-4 border-t border-[#FFE9F1]">
                {section.heading}
              </h2>
            )}

            {section.subheading && (
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#2A0F1E]">
                {section.subheading}
              </h3>
            )}

            {section.paragraphs && section.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="leading-relaxed">
                {para}
              </p>
            ))}

            {/* Callouts (What to try / What to avoid) */}
            {section.callout && (
              <div
                className={`p-5 sm:p-6 rounded-2xl border text-sm sm:text-base space-y-1.5 ${
                  section.callout.type === "try"
                    ? "bg-[#FFE9F1] border-[#FF2E88]/30 text-[#2A0F1E]"
                    : "bg-rose-50 border-rose-200 text-rose-950"
                }`}
              >
                <div className="font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                  {section.callout.type === "try" ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#FF2E88]" />
                      <span className="text-[#FF2E88]">{section.callout.title || "What to try"}</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-4 h-4 text-rose-600" />
                      <span className="text-rose-700">{section.callout.title || "What to avoid"}</span>
                    </>
                  )}
                </div>
                <p className="leading-relaxed">
                  {section.callout.text}
                </p>
              </div>
            )}

            {/* Tables */}
            {section.table && (
              <div className="overflow-x-auto my-6 rounded-2xl border border-[#FFE9F1] bg-white shadow-xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#FFE9F1]/60 text-[#2A0F1E] border-b border-[#FFE9F1]">
                      {section.table.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-3 sm:p-4 font-heading font-bold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#FFE9F1]/60">
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#FFFAFC] transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3 sm:p-4 text-[#2A0F1E]/85">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Lists */}
            {section.list && (
              <div className="my-4">
                {section.list.type === "ordered" ? (
                  <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base pl-2">
                    {section.list.items.map((item, lIdx) => (
                      <li key={lIdx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="space-y-2.5 text-sm sm:text-base">
                    {section.list.items.map((item, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-[#FF2E88] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </section>
        ))}

        {/* FAQs Section */}
        {article.faqs && article.faqs.length > 0 && (
          <section id="faq" className="space-y-6 pt-6 border-t border-[#FFE9F1] scroll-mt-24">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2E88] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Common Questions</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#2A0F1E]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {article.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#FFE9F1] space-y-2"
                >
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#2A0F1E]">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-[#2A0F1E]/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Tags & Footer Navigation */}
      <footer className="pt-8 border-t border-[#FFE9F1] space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#FFE9F1]/60 text-xs font-semibold text-[#2A0F1E]/75"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ShareButton />
          </div>
        </div>

        {/* Related Content Recommendations */}
        {relatedArticles.length > 0 && (
          <div className="space-y-4 pt-4">
            <h3 className="font-heading text-xl font-bold text-[#2A0F1E]">
              More from The Glow Edit
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/the-glow-edit/${rel.slug}`}
                  className="p-5 rounded-2xl bg-[#FFE9F1]/20 border border-[#FFE9F1] hover:border-[#FF2E88]/40 hover:bg-[#FFE9F1]/40 transition-all block space-y-1.5"
                >
                  <span className="text-[10px] font-bold text-[#FF2E88] uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="font-heading font-bold text-base text-[#2A0F1E]">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#2A0F1E]/70 line-clamp-2">
                    {rel.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </footer>
    </article>
  );
}
