import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export default async function ProBonoPage({
  params,
}: PageProps<"/[locale]/pro-bono">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pro_bono");
  const tUi = await getTranslations("ui");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <>
      <PageHeader title={t("heading")} subtitle={t("sub")} />
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
        <Reveal>
          <div className="space-y-6 text-[17px] leading-relaxed text-body">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl leading-relaxed text-ink" : undefined}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <Link
            href="/news/regarding-filing-complaints-to-government-organizations-and-officials"
            className="group mt-10 flex items-center justify-between gap-6 rounded-md border border-line bg-cream p-6 transition-colors hover:border-crimson"
          >
            <div>
              <time className="tabular text-xs font-semibold uppercase tracking-widest text-crimson">
                2021.04.24
              </time>
              <p className="mt-2 font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-crimson">
                Regarding filing complaints to government organizations and
                officials
              </p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-crimson" />
          </Link>
        </Reveal>

        <Reveal>
          <p className="mt-12 text-sm text-muted">
            <Link
              href="/pro-bono-requirements"
              className="font-semibold uppercase tracking-wide text-crimson underline-offset-4 hover:underline"
            >
              {tUi("read_more")} →
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
