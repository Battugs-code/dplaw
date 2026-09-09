import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/site/Reveal";

type Area = { id: string; name: string; services: string[] };
type Testimonial = { name: string; role: string; text: string };

export default async function AreasOfPracticePage({
  params,
}: PageProps<"/[locale]/areas-of-practice">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const t = await getTranslations("practice");
  const areas = t.raw("areas") as Area[];
  const anchors = t.raw("anchor_menu") as string[];
  const testimonials = t.raw("testimonials") as Testimonial[];

  return (
    <>
      <PageHeader title={tNav("areas_of_practice")} />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          {/* Sticky anchor nav */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28 space-y-1 border-l border-line" aria-label="Practice areas">
              {areas.map((a, i) => (
                <a
                  key={a.id}
                  href={`#${a.id}`}
                  className="block py-2 pl-4 text-sm font-medium text-muted transition-colors hover:border-crimson hover:text-crimson"
                >
                  {anchors[i] ?? a.name}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-16">
            {areas.map((area, i) => (
              <Reveal key={area.id}>
                <section id={area.id} className="scroll-mt-28">
                  <h2 className="flex items-baseline gap-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    <span className="tabular text-sm font-semibold tracking-widest text-crimson">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {area.name}
                  </h2>
                  <ul className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                    {area.services.map((s) => (
                      <li key={s} className="flex gap-3 border-b border-line pb-3 leading-relaxed text-body">
                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" aria-hidden />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t("testimonials_heading")}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((tm, i) => (
              <Reveal key={tm.name} delay={(i % 3) * 0.07} className="h-full">
                <figure className="flex h-full flex-col rounded-md border border-line bg-white p-7">
                  <span className="font-display text-5xl leading-none text-crimson" aria-hidden>
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-body">
                    {tm.text}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4">
                    <p className="font-display text-base font-semibold text-ink">
                      {tm.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{tm.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
