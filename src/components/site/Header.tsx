"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { externalLinks, logoUrl } from "@/data/site";
import clsx from "clsx";

type Child = { label: string; href: string; external?: boolean };
type Item = { label: string; href?: string; children?: Child[] };

const LOCALES = [
  { code: "en", label: "English" },
  { code: "mn", label: "Монгол хэл" },
  { code: "ru", label: "Русский" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const tUi = useTranslations("ui");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const items: Item[] = [
    { label: t("home"), href: "/" },
    { label: t("our_people"), href: "/people" },
    { label: t("areas_of_practice"), href: "/areas-of-practice" },
    {
      label: t("resources"),
      children: [
        { label: t("resources_news"), href: "/resources/news" },
        { label: t("resources_legal_update"), href: "/resources/legal-update" },
        {
          label: t("resources_archived_legal_update"),
          href: "/resources/archived-legal-update",
        },
        { label: t("resources_laws"), href: externalLinks.laws, external: true },
        {
          label: t("resources_foreign_investment"),
          href: externalLinks.foreignInvestment,
          external: true,
        },
        { label: t("resources_lexub"), href: externalLinks.lexub, external: true },
        { label: t("resources_itgemj"), href: "/" },
      ],
    },
    {
      label: t("pro_bono"),
      children: [
        { label: t("pro_bono_social_impact"), href: "/pro-bono" },
        { label: t("pro_bono_requirements"), href: "/pro-bono-requirements" },
      ],
    },
    { label: t("contact_us"), href: "/contact" },
  ];

  const isActive = (href?: string) =>
    !!href && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 border-b bg-white/90 backdrop-blur transition-shadow",
        scrolled ? "border-line shadow-[0_1px_12px_rgba(27,21,23,0.06)]" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoUrl ?? ""}
            alt="Dashnyam Partners LLC"
            className="h-9 w-auto lg:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {items.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className={clsx(
                    "flex items-center gap-1 rounded px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors",
                    item.children.some((c) => c.href !== "/" && isActive(c.href))
                      ? "text-crimson"
                      : "text-ink hover:text-crimson"
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 pt-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-md border border-line bg-white py-2 shadow-lg shadow-night/5">
                    {item.children.map((c) =>
                      c.external ? (
                        <a
                          key={c.label}
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-body transition-colors hover:bg-cream hover:text-crimson"
                        >
                          {c.label} <span aria-hidden>↗</span>
                        </a>
                      ) : (
                        <Link
                          key={c.label}
                          href={c.href}
                          className={clsx(
                            "block px-4 py-2 text-sm transition-colors hover:bg-cream hover:text-crimson",
                            isActive(c.href) ? "font-semibold text-crimson" : "text-body"
                          )}
                        >
                          {c.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={clsx(
                  "rounded px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors",
                  isActive(item.href) ? "text-crimson" : "text-ink hover:text-crimson"
                )}
              >
                {item.label}
              </Link>
            )
          )}

          {/* Language switcher */}
          <div className="group relative ml-2">
            <button
              type="button"
              aria-label={t("language_selector")}
              className="flex items-center gap-1.5 rounded border border-line px-3 py-1.5 text-[13px] font-semibold uppercase text-ink transition-colors hover:border-crimson hover:text-crimson"
            >
              <Globe className="h-4 w-4" />
              {locale}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="invisible absolute right-0 top-full z-50 w-44 translate-y-1 pt-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-md border border-line bg-white py-2 shadow-lg shadow-night/5">
                {LOCALES.map((l) => (
                  <Link
                    key={l.code}
                    href={pathname}
                    locale={l.code}
                    className={clsx(
                      "block px-4 py-2 text-sm transition-colors hover:bg-cream hover:text-crimson",
                      locale === l.code ? "font-semibold text-crimson" : "text-body"
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex items-center rounded border border-line text-[13px] font-semibold uppercase">
            {LOCALES.map((l) => (
              <Link
                key={l.code}
                href={pathname}
                locale={l.code}
                className={clsx(
                  "px-2.5 py-1.5",
                  locale === l.code ? "bg-crimson text-white" : "text-ink"
                )}
              >
                {l.code}
              </Link>
            ))}
          </div>
          <button
            type="button"
            aria-label={open ? tUi("close") : tUi("menu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded border border-line p-2 text-ink"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          "overflow-hidden border-t border-line bg-white transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0 border-t-0"
        )}
      >
        <nav className="space-y-1 px-5 py-4" aria-label="Mobile">
          {items.map((item) =>
            item.children ? (
              <details key={item.label} className="group/m">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-ink [&::-webkit-details-marker]:hidden">
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-open/m:rotate-180" />
                </summary>
                <div className="ml-3 border-l border-line pl-3">
                  {item.children.map((c) =>
                    c.external ? (
                      <a
                        key={c.label}
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded px-3 py-2 text-sm text-body"
                      >
                        {c.label} <span aria-hidden>↗</span>
                      </a>
                    ) : (
                      <Link
                        key={c.label}
                        href={c.href}
                        className={clsx(
                          "block rounded px-3 py-2 text-sm",
                          isActive(c.href) ? "font-semibold text-crimson" : "text-body"
                        )}
                      >
                        {c.label}
                      </Link>
                    )
                  )}
                </div>
              </details>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={clsx(
                  "block rounded px-3 py-2.5 text-sm font-semibold uppercase tracking-wide",
                  isActive(item.href) ? "text-crimson" : "text-ink"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
