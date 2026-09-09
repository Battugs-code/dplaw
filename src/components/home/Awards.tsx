import { useTranslations } from "next-intl";
import Image from "@/components/common/Image";
import Reveal from "@/components/site/Reveal";
import { awards } from "@/data/site";

export default function Awards() {
  const t = useTranslations("home");

  return (
    <section className="border-t border-line bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {t("awards_heading")}
          </h2>
        </Reveal>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {awards.map((a, i) => (
            <Reveal key={a.image ?? i} delay={i * 0.05}>
              <div className="relative h-16 w-28 opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-20 sm:w-36">
                <Image
                  src={a.image}
                  alt={a.alt}
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
