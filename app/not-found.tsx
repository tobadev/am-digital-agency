import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { headers } from "next/headers";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-sans",
});

export default async function NotFound() {
  const headersList = await headers();
  const locale = routing.locales.includes(headersList.get("x-locale") as any)
    ? headersList.get("x-locale")!
    : routing.defaultLocale;

  const messages = await getMessages({ locale });

  const t = (messages as any).NotFound;

  return (
    <html lang={locale}>
      <head>
        <title>{`404 — AM Digital Agency`}</title>
      </head>
      <body
        className={`${poppins.variable} min-h-screen bg-brand-black text-white selection:bg-white selection:text-black font-sans`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <div className="h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="font-display text-[clamp(6rem,20vw,14rem)] font-bold leading-none tracking-tighter mb-6">
              {t.title}
            </h1>
            <p className="text-neutral-500 text-lg mb-12">{t.message}</p>
            <a
              href={locale === "en" ? "/" : `/${locale}`}
              className="text-sm uppercase tracking-widest border border-white/15 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              {t.backHome}
            </a>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
