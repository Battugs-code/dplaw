import { getTranslations, setRequestLocale } from "next-intl/server";
import Reveal from "@/components/site/Reveal";
import NewsCard from "@/components/NewsCard";
import { newsPosts } from "@/data/news";

export default async function ProBonoPage({
  params,
}: PageProps<"/[locale]/pro-bono">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pro_bono");
  const paragraphs = t.raw("paragraphs") as string[];

  const related = newsPosts.find(
    (p) => p.slug === "regarding-filing-complaints-to-government-organizations-and-officials"
  );

  return (
    <section className="mx-auto max-w-[1300px] px-5 py-14 sm:px-8 lg:py-16">
      <Reveal>
        <h1 className="font-display text-2xl font-bold uppercase text-ink sm:text-3xl">
          {t("heading")}
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-body">{t("sub")}</p>
      </Reveal>

      <Reveal>
        <div className="mt-6 space-y-5 leading-relaxed text-body">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>

      {related ? (
        <Reveal>
          <div className="mt-8 max-w-sm">
            <NewsCard post={related} />
          </div>
        </Reveal>
      ) : null}
    </section>
  );
}
