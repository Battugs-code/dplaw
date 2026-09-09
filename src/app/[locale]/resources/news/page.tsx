import { setRequestLocale } from "next-intl/server";
import ResourceList from "@/components/ResourceList";
import { newsPosts } from "@/data/news";

export default async function NewsPage({
  params,
}: PageProps<"/[locale]/resources/news">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <ResourceList active="news" items={newsPosts} hrefPrefix="/news" />
  );
}
