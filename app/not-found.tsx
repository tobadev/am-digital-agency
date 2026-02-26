import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export default function NotFound() {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} min-h-screen bg-brand-black text-white font-sans`}
      >
        <div className="h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="font-display text-[clamp(6rem,20vw,14rem)] font-bold leading-none tracking-tighter mb-6">
            404
          </h1>
          <p className="text-neutral-500 text-lg mb-12">
            This page doesn&apos;t exist.
          </p>
          <a
            href="/"
            className="text-sm uppercase tracking-widest border border-white/15 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Back to home
          </a>
        </div>
      </body>
    </html>
  );
}
