import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "@/components/common/Image";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/site/Reveal";
import { people } from "@/data/people";
import { ArrowLeft, Mail, Phone } from "lucide-react";

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
    <article className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
      <Reveal>
        <Link
          href="/people"
          className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-crimson"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t("back_to_people")}
        </Link>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,360px)_1fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-cream">
              <Image
                src={person.photo}
                alt={name}
                fill
                sizes="(min-width:1024px) 360px, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="mt-6 space-y-3 rounded-md border border-line bg-cream p-6 text-sm">
              {person.phone ? (
                <p className="flex items-center gap-3 text-body">
                  <Phone className="h-4 w-4 text-crimson" />
                  <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="hover:text-crimson">
                    {person.phone}
                  </a>
                </p>
              ) : null}
              {person.email ? (
                <p className="flex items-center gap-3 break-all text-body">
                  <Mail className="h-4 w-4 shrink-0 text-crimson" />
                  <a href={`mailto:${person.email}`} className="hover:text-crimson">
                    {person.email}
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-crimson">
              {role}
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {name}
            </h1>
          </Reveal>

          {person.bio.length > 0 ? (
            <Reveal>
              <div className="prose-neutral mt-8 max-w-prose space-y-5 text-[17px] leading-relaxed text-body">
                {person.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
          ) : null}

          {person.sections.map((section) => (
            <Reveal key={section.heading}>
              <section className="mt-12">
                <h2 className="flex items-center gap-3 font-display text-2xl font-semibold text-ink">
                  <span className="inline-block h-px w-8 bg-crimson" aria-hidden />
                  {section.heading}
                </h2>
                <ul className="mt-5 space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed text-body">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" aria-hidden />
                      <span>{item}</span>
                    </li>
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
