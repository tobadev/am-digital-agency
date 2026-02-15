import { Hero } from "@/components/Hero";
import { BrandStatement } from "@/components/BrandStatement";
import { WorkHome } from "@/components/WorkHome";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <BrandStatement />
      <WorkHome />
      <Clients />
      <Footer />
    </div>
  );
}
