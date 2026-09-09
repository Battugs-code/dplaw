import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("ui");

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-5 py-28 text-center sm:px-8">
      <p className="font-display text-7xl font-semibold text-crimson">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-ink">
        {t("not_found_title")}
      </h1>
      <p className="mt-3 max-w-md text-body">{t("not_found_text")}</p>
      <Link
        href="/"
        className="mt-8 rounded-sm bg-crimson px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-crimson-dark"
      >
        {t("not_found_cta")}
      </Link>
    </section>
  );
}
