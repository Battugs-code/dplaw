import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
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
  const t = await getTranslations("ui");
  const index = newsPosts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const post = newsPosts[index];

  return (
    <ArticleShell
      backHref="/resources/news"
      backLabel={t("back_to_news")}
      date={post.date}
      title={post.title}
      image={post.image}
      siblingHrefPrefix="/news"
      prev={index > 0 ? newsPosts[index - 1] : null}
      next={index < newsPosts.length - 1 ? newsPosts[index + 1] : null}
    >
      {post.content.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </ArticleShell>
  );
}
