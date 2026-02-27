import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Navbar";
import { routing } from "@/i18n/routing";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amdigital.agency'),
  openGraph: {
    type: 'website',
    siteName: 'AM Digital Agency',
    locale: 'en',
    images: [{ url: '/og.webp', width: 2400, height: 1260, alt: 'AM Digital Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.webp'],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${poppins.variable} min-h-screen bg-brand-black text-white selection:bg-white selection:text-black font-sans`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="relative z-0 pt-0">{children}</main>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
