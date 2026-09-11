import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { externalLinks } from "@/data/site";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="border-t border-line bg-footer text-body">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_0.7fr]">
        <div>
          <h2 className="font-display text-[15px] font-semibold text-ink">
            {t("disclaimer_heading")}
          </h2>
          <p className="mt-3 max-w-prose text-[13px] leading-relaxed">
            {t("disclaimer")}
          </p>
        </div>
        <div>
          <h2 className="font-display text-[15px] font-semibold text-ink">
            {t("address_heading")}
          </h2>
          <p className="mt-3 max-w-xs text-[13px] leading-relaxed">
            {t("address")}
          </p>
          <p className="mt-2 text-[13px]">
            <a
              href="mailto:info@dplaw.mn"
              className="transition-colors hover:text-crimson"
            >
              info@dplaw.mn
            </a>
          </p>
        </div>
        <div>
          <h2 className="font-display text-[15px] font-semibold text-ink">
            {t("links_heading")}
          </h2>
          <ul className="mt-3 space-y-2 text-[13px]">
            <li>
              <a
                href={externalLinks.gowu}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-crimson"
              >
                GOWU
              </a>
            </li>
            <li>
              <a
                href={externalLinks.lexub}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-crimson"
              >
                LEXUB
              </a>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-crimson">
                {tNav("resources_itgemj")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-between gap-2 px-5 pb-8 pt-2 text-[13px] font-medium text-ink sm:px-8">
        <p>{t("copyright")}</p>
        <p>
          {t("developed_by")}{" "}
          <a
            href="https://gerege.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-crimson transition-colors hover:text-crimson-dark"
          >
            gerege.agency
          </a>
        </p>
      </div>
    </footer>
  );
}
