import { getTranslations } from "next-intl/server";
import Image from "@/components/common/Image";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/site/Reveal";
import { externalLinks } from "@/data/site";
import clsx from "clsx";

export type ResourceListItem = {
  slug: string;
  title: string;
  date: string;
  image: string | null;
};

type Tab = "news" | "legal-update" | "archived";

export function ResourceTabs({ active }: { active: Tab }) {
  return <ResourceTabsInner active={active} />;
}

async function ResourceTabsInner({ active }: { active: Tab }) {
  const t = await getTranslations("resources");
  const tNav = await getTranslations("nav");

  const tabs: { key: Tab | "laws"; label: string; href: string; external?: boolean }[] = [
    { key: "news", label: t("news_heading"), href: "/resources/news" },
    { key: "legal-update", label: t("legal_update_heading"), href: "/resources/legal-update" },
    { key: "archived", label: t("archived_heading"), href: "/resources/archived-legal-update" },
    { key: "laws", label: tNav("resources_laws"), href: externalLinks.laws, external: true },
  ];

  return (
    <nav
      aria-label="Resources"
      className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5"
    >
      {tabs.map((tab) =>
        tab.external ? (
          <a
            key={tab.key}
            href={tab.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-transparent py-2 font-display text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:text-crimson"
          >
            {tab.label}
          </a>
        ) : (
          <Link
            key={tab.key}
            href={tab.href}
            aria-current={tab.key === active ? "page" : undefined}
            className={clsx(
              "border-b-2 py-2 font-display text-[13px] font-semibold uppercase tracking-wide transition-colors",
              tab.key === active
                ? "border-crimson text-crimson"
                : "border-transparent text-ink hover:text-crimson"
            )}
          >
            {tab.label}
          </Link>
        )
      )}
    </nav>
  );
}

export function ResourceCard({
  item,
  hrefPrefix,
}: {
  item: ResourceListItem;
  hrefPrefix: string;
}) {
  return (
    <Link
      href={`${hrefPrefix}/${item.slug}`}
      className="group flex h-full flex-col border border-line bg-white transition-shadow duration-300 hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-soft">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="line-clamp-4 font-display text-[16px] font-semibold leading-snug text-ink transition-colors group-hover:text-crimson">
          {item.title}
        </h2>
        <time className="mt-auto pt-4 text-right text-[13px] text-muted">
          {item.date}
        </time>
      </div>
    </Link>
  );
}

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
  const heading =
    active === "news"
      ? t("news_heading")
      : active === "legal-update"
        ? t("legal_update_heading")
        : t("archived_heading");

  return (
    <section className="mx-auto max-w-[1300px] px-5 py-12 sm:px-8">
      <h1 className="sr-only">{heading}</h1>
      <ResourceTabs active={active} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.slug} delay={Math.min(i % 4, 3) * 0.06} className="h-full">
            <ResourceCard item={item} hrefPrefix={hrefPrefix} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
