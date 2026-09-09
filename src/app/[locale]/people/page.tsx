import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Image from "@/components/common/Image";
import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";
import { people } from "@/data/people";
import { Mail, Phone } from "lucide-react";

export default async function PeoplePage({
  params,
}: PageProps<"/[locale]/people">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("people_page");

  return (
    <>
      <PageHeader title={t("heading")} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.07}>
              <Link href={`/people/${p.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-cream">
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 border-l-2 border-transparent pl-4 transition-colors group-hover:border-crimson">
                  <h2 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-crimson">
                    {p.nameI18n[locale] ?? p.name}
                  </h2>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-widest text-crimson">
                    {p.roleI18n[locale] ?? p.role}
                  </p>
                  <div className="mt-3 space-y-1 text-sm text-muted">
                    {p.phone ? (
                      <p className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5" /> {p.phone}
                      </p>
                    ) : null}
                    {p.email ? (
                      <p className="flex items-center gap-2 break-all">
                        <Mail className="h-3.5 w-3.5 shrink-0" /> {p.email}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
