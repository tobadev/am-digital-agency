import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";

export default async function GlobalNotFound() {
  // Detect locale from the URL path (e.g. /de/... → "de")
  const headersList = await headers();
  const url = headersList.get("x-invoke-path") || headersList.get("x-matched-path") || "";
  const pathSegment = url.split("/")[1] || "";
  const locale = routing.locales.includes(pathSegment as any) ? pathSegment : routing.defaultLocale;

  const t = await getTranslations({ locale, namespace: "NotFound" });

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "system-ui, sans-serif" }}>
        <div className="h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-[clamp(6rem,20vw,14rem)] font-bold leading-none tracking-tighter mb-6">
            {t("title")}
          </h1>
          <p className="text-neutral-500 text-lg mb-12">{t("message")}</p>
          <a
            href={locale === "en" ? "/" : `/${locale}`}
            className="text-sm uppercase tracking-widest border border-white/15 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            {t("backHome")}
          </a>
        </div>
      </body>
    </html>
  );
}
