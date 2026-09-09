import { useTranslations } from "next-intl";
import Reveal from "@/components/site/Reveal";

type Value = { key: string; title: string; text: string };

export default function WhyUs() {
  const t = useTranslations("home");
  const values = t.raw("values") as Value[];

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_2fr]">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t("why_us_heading")}
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-body">
              {t("why_us_intro")}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full border-l-2 border-crimson bg-white p-8">
              <h3 className="font-display text-2xl font-semibold text-ink">
                {t("mission_title")}
              </h3>
              <p className="mt-4 leading-relaxed text-body">
                {t("mission_text")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full border-l-2 border-crimson bg-white p-8">
              <h3 className="font-display text-2xl font-semibold text-ink">
                {t("community_title")}
              </h3>
              <p className="mt-4 leading-relaxed text-body">
                {t("community_text")}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.key} delay={(i % 4) * 0.06} className="h-full">
              <div className="group flex h-full flex-col bg-white p-7 transition-colors duration-300 hover:bg-crimson-soft/40">
                <span className="tabular text-xs font-semibold tracking-widest text-crimson">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink transition-colors group-hover:text-crimson">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
