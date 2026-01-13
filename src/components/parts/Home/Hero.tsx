import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-28 md:pb-44 px-4 bg-[var(--gradient-hero)] dot-grid">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background border border-border shadow-sm mb-12 animate-float font-bold text-xs uppercase tracking-[0.2em] text-foreground/70">
          <Sparkles size={14} className="text-mint" />
          Tech Innovation Specialists
        </div>

        <h1 className="text-6xl md:text-[4rem] font-black text-foreground mb-10 leading-[0.95] max-w-6xl mx-auto">
          Transform Your Business with <br className="hidden md:block" />
          <span className="skew-highlight">
            <span className="gradient-text">Cutting-edge Solutions</span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
          Leafclutch delivers high-performance web solutions, AI integration,
          and digital transformation for industry leaders.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-12 py-6 bg-primary text-primary-foreground rounded-2xl font-black text-xl flex items-center justify-center gap-4 shadow-xl hover:shadow-glow transition-all hover:-translate-y-1 active:scale-95 group">
            Get Started
            <ArrowRight
              size={24}
              className="group-hover:translate-x-2 transition-transform"
            />
          </button>
          <button className="w-full sm:w-auto px-12 py-6 bg-background/50 backdrop-blur-md text-foreground border-2 border-border rounded-2xl font-black text-xl hover:bg-muted transition-all active:scale-95">
            View Work
          </button>
        </div>
      </div>

      {/* Brand-aligned decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-mint/5 rounded-full blur-[140px] pointer-events-none opacity-50"></div>
    </section>
  );
};
