"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { heroImages } from "@/data/site";

export default function Hero() {
  const t = useTranslations("home");

  const tagline = t.has("hero_line1")
    ? `${t("hero_line1")} ${t("hero_line2")}`
    : t("hero_tagline");

  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImages[0]})` }}
      />
      <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden />

      <div className="mx-auto flex min-h-[calc(100dvh-104px)] max-w-[1300px] items-center px-5 py-20 sm:px-8">
        <motion.h1
          className="max-w-2xl font-display text-3xl font-semibold leading-snug sm:text-4xl lg:text-[40px] lg:leading-[1.3]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {tagline}
        </motion.h1>
      </div>
    </section>
  );
}
