import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "@/components/common/Image";
import Reveal from "@/components/site/Reveal";
import ProBonoForm from "@/components/ProBonoForm";

export default async function ProBonoRequirementsPage({
  params,
}: PageProps<"/[locale]/pro-bono-requirements">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pro_bono_req");
  const notes = t.raw("notes") as string[];

  return (
    <section className="mx-auto max-w-[1300px] px-5 py-14 sm:px-8 lg:py-16">
      <Reveal>
        <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          {t("heading")}
        </h1>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[420px_1fr]">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden bg-soft">
            <Image
              src="/images/Image-65-0fa364.png"
              alt=""
              fill
              sizes="(min-width:1024px) 420px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="space-y-4 leading-relaxed text-body">
            {notes.map((n, i) => (
              <p key={i}>{n}</p>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-12">
          <ProBonoForm />
        </div>
      </Reveal>
    </section>
  );
}
