import { getTranslations, setRequestLocale } from "next-intl/server";
import Reveal from "@/components/site/Reveal";
import LocalTime from "@/components/LocalTime";
import { contactBgImage, contactInfo } from "@/data/site";
import { Mail, MapPin, Phone } from "lucide-react";

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBgImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden />
      <div className="relative mx-auto grid min-h-[calc(100dvh-104px)] max-w-[1300px] items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2">
        {/* Big local time like the original */}
        <Reveal>
          <LocalTime label={t("local_time_label")} />
        </Reveal>

        {/* Contact card */}
        <Reveal delay={0.1}>
          <div className="ml-auto max-w-md bg-white/90 p-8 backdrop-blur-sm sm:p-10">
            <h1 className="font-display text-xl font-semibold text-ink">
              {t("heading")}
            </h1>

            <div className="mt-7 space-y-7">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-crimson text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-[15px] font-semibold text-ink">
                    {t("address_label")}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">
                    {t("address")}
                  </p>
                  <a
                    href={contactInfo.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block border border-ink px-4 py-1.5 text-[13px] font-medium text-ink transition-colors hover:border-crimson hover:bg-crimson hover:text-white"
                  >
                    {t("get_direction")}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#27ae60] text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-[15px] font-semibold text-ink">
                    {t("phone_label")}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">
                    {contactInfo.phones.map((p, i) => (
                      <span key={p}>
                        <a
                          href={`tel:${p.replace(/[\s-]/g, "")}`}
                          className="transition-colors hover:text-crimson"
                        >
                          {p}
                        </a>
                        {i < contactInfo.phones.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2980d9] text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-[15px] font-semibold text-ink">
                    {t("email_label")}
                  </h2>
                  <p className="mt-1.5 text-sm text-body">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="transition-colors hover:text-crimson"
                    >
                      {contactInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
