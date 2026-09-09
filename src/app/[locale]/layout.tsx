import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import ApolloClientProvider from "@/lib/apollo/provider";
import { routing } from "@/i18n/routing";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Dashnyam Partners LLC – Mongolian Law Firm",
    template: "%s | Dashnyam Partners LLC",
  },
  description:
    "Dashnyam Partners LLC is a leading Mongolian law firm. Focus, awareness, commitment and practical advice tailored for your success.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${poppins.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-body font-sans">
        <NextIntlClientProvider messages={messages}>
          <ApolloClientProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-crimson focus:text-white focus:px-4 focus:py-2"
            >
              Skip to content
            </a>
            <Header />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </ApolloClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
