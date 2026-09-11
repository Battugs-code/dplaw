import { useTranslations } from "next-intl";
import Image from "@/components/common/Image";
import Reveal from "@/components/site/Reveal";
import { awards } from "@/data/site";

export default function Awards() {
  const t = useTranslations("home");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1300px] px-5 pb-20 pt-4 sm:px-8">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-semibold uppercase text-muted sm:text-[28px]">
            {t("awards_heading")}
          </h2>
        </Reveal>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {awards.map((a, i) => (
            <Reveal key={a.image ?? i} delay={i * 0.04}>
              <div className="relative h-24 w-24 sm:h-28 sm:w-32">
                <Image
                  src={a.image}
                  alt={a.alt}
                  fill
                  sizes="128px"
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
