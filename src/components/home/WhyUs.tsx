import { useTranslations } from "next-intl";
import Reveal from "@/components/site/Reveal";
import { heroImages } from "@/data/site";

type Value = { key: string; title: string; text: string };

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-[#232323]/70 p-6 text-center backdrop-blur-sm sm:p-7">
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/85">{text}</p>
    </div>
  );
}

export default function WhyUs() {
  const t = useTranslations("home");
  const values = t.raw("values") as Value[];

  const mission = { title: t("mission_title"), text: t("mission_text") };
  const community = { title: t("community_title"), text: t("community_text") };
  const firstGroup = [mission, community, ...values.slice(0, 2)];
  const secondGroup = values.slice(2);

  return (
    <>
      {/* WHY US — photo background, centered white text (original slide 2) */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImages[1]})` }}
      >
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <div className="relative mx-auto flex min-h-[70vh] max-w-[1100px] flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
              {t("why_us_heading")}
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-white sm:text-xl">
              {t("why_us_intro")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Community / first values — photo background (original slide 3) */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImages[2]})` }}
      >
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        <div className="relative mx-auto grid max-w-[1100px] gap-6 px-5 py-20 sm:grid-cols-2 sm:px-8 lg:py-24">
          {firstGroup.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 0.08}>
              <ValueCard title={v.title} text={v.text} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Remaining values — photo background (original slide 4) */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImages[3]})` }}
      >
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        <div className="relative mx-auto grid max-w-[1100px] gap-6 px-5 py-20 sm:grid-cols-2 sm:px-8 lg:py-24">
          {secondGroup.map((v, i) => (
            <Reveal key={v.key} delay={(i % 2) * 0.08}>
              <ValueCard title={v.title} text={v.text} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
