import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "@/components/common/Image";
import Reveal from "@/components/site/Reveal";
import { practiceImages } from "@/data/site";
import clsx from "clsx";

type Area = { id: string; name: string; services: string[] };
type Testimonial = { name: string; role: string; text: string };

export default async function AreasOfPracticePage({
  params,
}: PageProps<"/[locale]/areas-of-practice">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("practice");
  const areas = t.raw("areas") as Area[];
  const anchors = t.raw("anchor_menu") as string[];
  const testimonials = t.raw("testimonials") as Testimonial[];

  return (
    <>
      {/* Centered anchor menu like the original */}
      <nav
        aria-label="Practice areas"
        className="mx-auto flex max-w-[1300px] flex-wrap justify-center gap-x-8 gap-y-2 px-5 pb-4 pt-12 sm:px-8"
      >
        {areas.map((a, i) => (
          <a
            key={a.id}
            href={`#${a.id}`}
            className="font-display text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:text-crimson"
          >
            {anchors[i] ?? a.name}
          </a>
        ))}
      </nav>

      <section className="mx-auto max-w-[1300px] px-5 py-10 sm:px-8">
        <div className="space-y-16 lg:space-y-20">
          {areas.map((area, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={area.id}>
                <section
                  id={area.id}
                  className="grid scroll-mt-32 items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div
                    className={clsx(
                      "relative aspect-[4/3] overflow-hidden bg-soft",
                      flip && "lg:order-2"
                    )}
                  >
                    <Image
                      src={practiceImages[area.id] ?? null}
                      alt={area.name}
                      fill
                      sizes="(min-width:1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className={flip ? "lg:order-1" : undefined}>
                    <h2 className="font-display text-[22px] font-semibold text-ink">
                      {area.name}
                    </h2>
                    <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-body marker:text-ink">
                      {area.services.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-line bg-soft">
        <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-8 lg:py-20">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-semibold text-muted sm:text-[28px]">
              {t("testimonials_heading")}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((tm, i) => (
              <Reveal key={tm.name} delay={(i % 3) * 0.06} className="h-full">
                <figure className="flex h-full flex-col border border-line bg-white p-6">
                  <blockquote className="flex-1 text-sm leading-relaxed text-body">
                    {tm.text}
                  </blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4">
                    <p className="font-display text-[15px] font-semibold text-ink">
                      {tm.name}
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-muted">
                      {tm.role}
                    </p>
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
