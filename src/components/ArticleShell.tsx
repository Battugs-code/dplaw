import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/site/Reveal";
import { ResourceCard, ResourceTabs, type ResourceListItem } from "@/components/ResourceList";

export type SiblingLink = { slug: string; title: string };

export default function ArticleShell({
  activeTab,
  date,
  title,
  children,
  suggested,
  suggestedHrefPrefix,
}: {
  activeTab: "news" | "legal-update" | "archived";
  date: string;
  title: string;
  children: ReactNode;
  suggested: ResourceListItem[];
  suggestedHrefPrefix: string;
}) {
  const t = useTranslations("ui");

  return (
    <article className="mx-auto max-w-[1300px] px-5 py-12 sm:px-8">
      <ResourceTabs active={activeTab} />

      <Reveal>
        <header className="mx-auto mt-14 max-w-4xl text-center">
          <h1 className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
            {title}
          </h1>
          <time className="mt-4 block text-sm text-muted">{date}</time>
        </header>
      </Reveal>

      <Reveal>
        <div className="mx-auto mt-10 max-w-4xl space-y-5 leading-relaxed text-body">
          {children}
        </div>
      </Reveal>

      {suggested.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-display text-xl font-semibold text-ink">
            {t("suggested_news")}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {suggested.map((item) => (
              <ResourceCard
                key={item.slug}
                item={item}
                hrefPrefix={suggestedHrefPrefix}
              />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
