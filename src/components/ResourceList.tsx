import { getTranslations } from "next-intl/server";
import Image from "@/components/common/Image";
import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import { externalLinks } from "@/data/site";
import clsx from "clsx";

export type ResourceListItem = {
  slug: string;
  title: string;
  date: string;
  image: string | null;
};

type Tab = "news" | "legal-update" | "archived";

export default async function ResourceList({
  active,
  items,
  hrefPrefix,
}: {
  active: Tab;
  items: ResourceListItem[];
  hrefPrefix: string;
}) {
  const t = await getTranslations("resources");
  const tNav = await getTranslations("nav");

  const tabs: { key: Tab; label: string; href: string }[] = [
    { key: "news", label: t("news_heading"), href: "/resources/news" },
    {
      key: "legal-update",
      label: t("legal_update_heading"),
      href: "/resources/legal-update",
    },
    {
      key: "archived",
      label: t("archived_heading"),
      href: "/resources/archived-legal-update",
    },
  ];

  const heading =
    active === "news"
      ? t("news_heading")
      : active === "legal-update"
        ? t("legal_update_heading")
        : t("archived_heading");

  return (
    <>
      <PageHeader title={heading} subtitle={tNav("resources")} />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2 border-b border-line pb-5">
            {tabs.map((tab) => (
              <Link
                key={tab.key}
                href={tab.href}
                className={clsx(
                  "rounded-sm px-4 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors",
                  tab.key === active
                    ? "bg-crimson text-white"
                    : "text-body hover:bg-cream hover:text-crimson"
                )}
              >
                {tab.label}
              </Link>
            ))}
            <a
              href={externalLinks.laws}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-sm px-4 py-2 text-[13px] font-semibold uppercase tracking-wide text-body transition-colors hover:bg-cream hover:text-crimson"
            >
              {tNav("resources_laws")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-4 divide-y divide-line">
          {items.map((item, i) => (
            <Reveal key={item.slug} delay={Math.min(i, 6) * 0.05}>
              <Link
                href={`${hrefPrefix}/${item.slug}`}
                className="group flex items-center gap-6 py-6 transition-colors"
              >
                <div className="relative hidden h-20 w-32 shrink-0 overflow-hidden rounded-sm bg-cream sm:block">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <time className="tabular text-xs font-semibold uppercase tracking-widest text-crimson">
                    {item.date}
                  </time>
                  <h2 className="mt-1.5 font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-crimson sm:text-2xl">
                    {item.title}
                  </h2>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-crimson" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
