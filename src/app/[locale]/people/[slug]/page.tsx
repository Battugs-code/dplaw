import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "@/components/common/Image";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/site/Reveal";
import { people } from "@/data/people";
import { ArrowLeft, IdCard, Mail, Phone } from "lucide-react";

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/people/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const person = people.find((p) => p.slug === slug);
  return person ? { title: `${person.name} – ${person.role}` } : {};
}

export default async function PersonPage({
  params,
}: PageProps<"/[locale]/people/[slug]">) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ui");
  const person = people.find((p) => p.slug === slug);
  if (!person) notFound();

  const name = person.nameI18n[locale] ?? person.name;
  const role = person.roleI18n[locale] ?? person.role;

  return (
    <article className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 lg:py-16">
      <Reveal>
        <Link
          href="/people"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-crimson"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t("back_to_people")}
        </Link>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-[320px_1fr]">
        {/* Left column — round photo + contact, like the original */}
        <Reveal className="lg:self-start">
          <div>
            <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full bg-soft lg:mx-0 lg:h-72 lg:w-72">
              <Image
                src={person.photo}
                alt={name}
                fill
                sizes="288px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="mt-8 space-y-4 text-[15px] font-medium text-ink">
              {person.phone ? (
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <a
                    href={`tel:${person.phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-crimson"
                  >
                    {person.phone}
                  </a>
                </p>
              ) : null}
              {person.email ? (
                <p className="flex items-center gap-3 break-all">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a
                    href={`mailto:${person.email}`}
                    className="transition-colors hover:text-crimson"
                  >
                    {person.email}
                  </a>
                </p>
              ) : null}
              <p>
                <a
                  href={`/vcards/${person.slug}.vcf`}
                  download
                  className="inline-flex items-center gap-3 font-semibold text-[#1d8cb5] transition-colors hover:text-[#156a8c]"
                >
                  <IdCard className="h-4 w-4" />
                  {t("vcard_download")}
                </a>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right column — name, role, bio */}
        <div className="lg:border-l lg:border-line lg:pl-12">
          <Reveal>
            <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              {name}
            </h1>
            <p className="mt-1.5 font-display text-lg font-medium text-muted">
              {role}
            </p>
          </Reveal>

          {person.bio.length > 0 ? (
            <Reveal>
              <div className="mt-7 max-w-none space-y-5 leading-relaxed text-body">
                {person.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
          ) : null}

          {person.sections.map((section) => (
            <Reveal key={section.heading}>
              <section className="mt-10">
                <h2 className="font-display text-xl font-semibold text-ink">
                  {section.heading}
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-body marker:text-crimson">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
