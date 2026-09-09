import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { externalLinks, logoUrl } from "@/data/site";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="border-t-2 border-crimson bg-night text-sm text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_0.7fr]">
        <div>
          <h2 className="font-display text-lg font-semibold text-white">
            {t("disclaimer_heading")}
          </h2>
          <p className="mt-4 max-w-prose text-[13px] leading-relaxed text-white/60">
            {t("disclaimer")}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-white">
            {t("address_heading")}
          </h2>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/60">
            {t("address")}
          </p>
          <p className="mt-3 text-[13px] text-white/60">
            <a
              href="mailto:info@dplaw.mn"
              className="transition-colors hover:text-white"
            >
              info@dplaw.mn
            </a>
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-white">
            {t("links_heading")}
          </h2>
          <ul className="mt-4 space-y-2 text-[13px]">
            <li>
              <a
                href={externalLinks.gowu}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                GOWU <span aria-hidden>↗</span>
              </a>
            </li>
            <li>
              <a
                href={externalLinks.lexub}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                LEXUB <span aria-hidden>↗</span>
              </a>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                {tNav("resources_itgemj")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-[12px] text-white/50 sm:px-8">
          <p>{t("copyright")}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoUrl ?? ""} alt="" className="h-7 w-auto opacity-70 invert" />
        </div>
      </div>
    </footer>
  );
}
