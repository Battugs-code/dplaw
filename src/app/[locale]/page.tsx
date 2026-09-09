import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import LatestNews from "@/components/home/LatestNews";
import Awards from "@/components/home/Awards";

export default async function Home({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <WhyUs />
      <LatestNews />
      <Awards />
    </>
  );
}
