import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import NewsCard from "@/components/NewsCard";
import { newsPosts } from "@/data/news";

export default function LatestNews() {
  const t = useTranslations("home");
  const tUi = useTranslations("ui");
  const latest = newsPosts.slice(0, 4);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t("news_heading")}
            </h2>
            <Link
              href="/resources/news"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-crimson"
            >
              {tUi("view_all")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.07} className="h-full">
              <NewsCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
