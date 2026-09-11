import { useTranslations } from "next-intl";
import Reveal from "@/components/site/Reveal";
import NewsCard from "@/components/NewsCard";
import { newsPosts } from "@/data/news";

export default function LatestNews() {
  const t = useTranslations("home");
  const latest = newsPosts.slice(0, 4);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-8 lg:py-20">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-semibold text-muted sm:text-[28px]">
            {t("news_heading")}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06} className="h-full">
              <NewsCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
