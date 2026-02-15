import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AM Digital Agency",
  description: "We ship digital products that actually work. We help ambitious companies build, launch, and scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} min-h-screen bg-brand-black text-white selection:bg-white selection:text-black font-sans`}>
        <Navbar />
        <main className="relative z-0 pt-0">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
