import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import LocalTime from "@/components/LocalTime";
import { contactInfo } from "@/data/site";
import { Mail, MapPin, Phone } from "lucide-react";

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <PageHeader title={t("heading")} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <LocalTime label={t("local_time_label")} />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-md border border-line bg-white p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-crimson-soft text-crimson">
                  <MapPin className="h-5 w-5" />
                </span>
                <h2 className="font-display text-lg font-semibold text-ink">
                  {t("address_label")}
                </h2>
              </div>
              <p className="mt-4 leading-relaxed text-body">{t("address")}</p>
              <a
                href={contactInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-crimson underline-offset-4 hover:underline"
              >
                {t("get_direction")} <span aria-hidden>↗</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-md border border-line bg-white p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-crimson-soft text-crimson">
                  <Phone className="h-5 w-5" />
                </span>
                <h2 className="font-display text-lg font-semibold text-ink">
                  {t("phone_label")}
                </h2>
              </div>
              <div className="mt-4 space-y-1.5">
                {contactInfo.phones.map((p) => (
                  <p key={p}>
                    <a
                      href={`tel:${p.replace(/[\s-]/g, "")}`}
                      className="tabular text-body transition-colors hover:text-crimson"
                    >
                      {p}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-md border border-line bg-white p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-crimson-soft text-crimson">
                  <Mail className="h-5 w-5" />
                </span>
                <h2 className="font-display text-lg font-semibold text-ink">
                  {t("email_label")}
                </h2>
              </div>
              <p className="mt-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-body transition-colors hover:text-crimson"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
