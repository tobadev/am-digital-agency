import { Work } from "@/components/Work";
import { Footer } from "@/components/Footer";

export default function WorkPage() {
  return (
    <div className="animate-in fade-in duration-500 pt-32">
      <div className="px-6 md:px-10 max-w-5xl mx-auto">
        <div className="mb-40 mt-16 md:mt-20">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">Work</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-12">
            Selected<br />projects.
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
            A curated collection of our most impactful work. Strategy, design, and development for ambitious companies.
          </p>
        </div>
      </div>
      <Work />
      <Footer />
    </div>
  );
}
