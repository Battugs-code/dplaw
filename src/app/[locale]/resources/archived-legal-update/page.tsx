import { setRequestLocale } from "next-intl/server";
import ResourceList from "@/components/ResourceList";
import { archivedUpdates } from "@/data/updates";

export default async function ArchivedLegalUpdatePage({
  params,
}: PageProps<"/[locale]/resources/archived-legal-update">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <ResourceList
      active="archived"
      items={archivedUpdates}
      hrefPrefix="/legal-update"
    />
  );
}
