import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import ArticleShell from "@/components/ArticleShell";
import { newsPosts } from "@/data/news";

export function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  return post ? { title: post.title } : {};
}

export default async function NewsArticlePage({
  params,
}: PageProps<"/[locale]/news/[slug]">) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const index = newsPosts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const post = newsPosts[index];
  const suggested = newsPosts.filter((_, i) => i !== index).slice(0, 3);

  return (
    <ArticleShell
      activeTab="news"
      date={post.date}
      title={post.title}
      suggested={suggested}
      suggestedHrefPrefix="/news"
    >
      {post.content.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </ArticleShell>
  );
}
