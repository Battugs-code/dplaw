"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { heroImages } from "@/data/site";

export default function Hero() {
  const t = useTranslations("home");
  const tNav = useTranslations("nav");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroImages.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  const line1 = t.has("hero_line1") ? t("hero_line1") : null;
  const line2 = t.has("hero_line2") ? t("hero_line2") : null;
  const tagline = t.has("hero_tagline") ? t("hero_tagline") : null;

  return (
    <section className="relative isolate overflow-hidden bg-night text-white">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages[index]})` }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </AnimatePresence>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-night/85 via-night/60 to-night/30"
        aria-hidden
      />
      <div className="mx-auto flex min-h-[82dvh] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8">
        <motion.p
          className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-white/70"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-block h-px w-10 bg-crimson" aria-hidden />
          Dashnyam Partners LLC
        </motion.p>
        {line1 ? (
          <>
            <motion.h1
              className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {line1}
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl font-display text-2xl italic leading-snug text-white/85 sm:text-3xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              {line2}
            </motion.p>
          </>
        ) : (
          <motion.h1
            className="max-w-3xl font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {tagline}
          </motion.h1>
        )}
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Link
            href="/areas-of-practice"
            className="rounded-sm bg-crimson px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-crimson-dark"
          >
            {tNav("areas_of_practice")}
          </Link>
          <Link
            href="/contact"
            className="rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
          >
            {tNav("contact_us")}
          </Link>
        </motion.div>
      </div>
      {heroImages.length > 1 ? (
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-crimson" : "w-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
