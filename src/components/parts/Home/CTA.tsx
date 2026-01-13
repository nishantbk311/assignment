import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-center text-primary-foreground relative overflow-hidden shadow-2xl">
        {/* Background elements using the primary color scheme */}
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--gradient-primary)] opacity-95"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tighter">
            Ready to Build the Future?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-14 leading-relaxed font-medium">
            Schedule a session with our solution architects to map out your
            digital strategy and engineering roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="w-full sm:w-auto px-12 py-6 bg-white text-primary font-black text-xl rounded-2xl flex items-center justify-center gap-4 hover:shadow-[0_20px_40px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95 group">
              <Calendar size={24} />
              Book Free Strategy Call
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="w-full sm:w-auto px-12 py-6 bg-transparent border-2 border-white/20 text-white font-black text-xl rounded-2xl hover:bg-white/10 transition-all">
              Our Process
            </button>
          </div>
        </div>

        {/* Brand-aligned decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-[60px]"></div>
      </div>
    </section>
  );
};
