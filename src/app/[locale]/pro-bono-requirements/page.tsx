import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "@/components/common/Image";
import PageHeader from "@/components/site/PageHeader";
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
    <>
      <PageHeader title={t("heading")} />
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
        <Reveal>
          <div className="relative aspect-[16/7] overflow-hidden rounded-md bg-cream">
            <Image
              src="/images/Image-65-0fa364.png"
              alt=""
              fill
              sizes="(min-width:1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10">
            <ProBonoForm />
          </div>
        </Reveal>

        <Reveal>
          <ul className="mt-10 space-y-4">
            {notes.map((n, i) => (
              <li key={i} className="flex gap-3 leading-relaxed text-body">
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" aria-hidden />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
