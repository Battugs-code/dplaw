import { setRequestLocale } from "next-intl/server";
import ResourceList from "@/components/ResourceList";
import { legalUpdates } from "@/data/updates";

export default async function LegalUpdatePage({
  params,
}: PageProps<"/[locale]/resources/legal-update">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <ResourceList
      active="legal-update"
      items={legalUpdates}
      hrefPrefix="/legal-update"
    />
  );
}
