import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="font-display text-[clamp(6rem,20vw,14rem)] font-bold leading-none tracking-tighter mb-6">
        {t("title")}
      </h1>
      <p className="text-neutral-500 text-lg mb-12">{t("message")}</p>
      <Link
        href="/"
        className="text-sm uppercase tracking-widest border border-white/15 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
