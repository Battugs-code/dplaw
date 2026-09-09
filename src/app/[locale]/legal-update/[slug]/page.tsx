import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Fragment } from "react";
import ArticleShell from "@/components/ArticleShell";
import { archivedUpdates, legalUpdates } from "@/data/updates";
import { FileDown } from "lucide-react";

const all = [...legalUpdates, ...archivedUpdates];

export function generateStaticParams() {
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/legal-update/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = all.find((p) => p.slug === slug);
  return post ? { title: post.title } : {};
}

export default async function LegalUpdateArticlePage({
  params,
}: PageProps<"/[locale]/legal-update/[slug]">) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ui");
  const index = all.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const post = all[index];

  // Group consecutive list items into <ul>
  const blocks: { type: string; text: string }[] = post.content;
  const rendered: React.ReactNode[] = [];
  let list: string[] = [];
  const flushList = (key: string) => {
    if (list.length) {
      const items = list;
      rendered.push(
        <ul key={key} className="space-y-2 pl-1">
          {items.map((li, j) => (
            <li key={j} className="flex gap-3">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" aria-hidden />
              <span>{li}</span>
            </li>
          ))}
        </ul>
      );
      list = [];
    }
  };
  blocks.forEach((b, i) => {
    if (b.type === "list_item") {
      list.push(b.text);
      return;
    }
    flushList(`ul-${i}`);
    if (b.type === "heading") {
      rendered.push(
        <h2
          key={`h-${i}`}
          className="pt-4 font-display text-2xl font-semibold text-ink"
        >
          {b.text}
        </h2>
      );
    } else {
      rendered.push(<p key={`p-${i}`}>{b.text}</p>);
    }
  });
  flushList("ul-end");

  return (
    <ArticleShell
      backHref="/resources/legal-update"
      backLabel={t("back_to_updates")}
      date={post.date}
      title={post.title}
      image={post.image}
      siblingHrefPrefix="/legal-update"
      prev={index > 0 ? all[index - 1] : null}
      next={index < all.length - 1 ? all[index + 1] : null}
    >
      {rendered.map((node, i) => (
        <Fragment key={i}>{node}</Fragment>
      ))}
      {post.pdfs && post.pdfs.length > 0 ? (
        <div className="not-prose pt-4">
          {post.pdfs.map((pdf, i) => (
            <a
              key={pdf}
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 inline-flex items-center gap-2 rounded-sm border border-crimson px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-crimson transition-colors hover:bg-crimson hover:text-white"
            >
              <FileDown className="h-4 w-4" />
              {t("download_pdf")}
              {post.pdfs.length > 1 ? ` ${i + 1}` : ""}
            </a>
          ))}
        </div>
      ) : null}
    </ArticleShell>
  );
}
