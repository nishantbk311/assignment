import React from "react";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

// const GIF_SRC =
//   "https://lottie.host/99019f1e-2787-4491-909e-a1b55b5e34d6/ZZ5PylhsXR.lottie";
const GIF_SRC =
  "https://lottie.host/a79224ba-dea4-460d-9b0e-71d8b9b54ddf/L6wMRQBhAS.lottie";

// const HERO_BG = "https://i.postimg.cc/N05X153v/Hero-Bg-Image.jpg";

// const heroBackground: React.CSSProperties = {
//   backgroundImage: `
//     linear-gradient(
//       180deg,
//       rgba(30, 32, 37, 0.88),
//       rgba(42, 45, 58, 0.92)
//     ),
//     url(${HERO_BG})
//   `,
// };

const Hero: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-20 min-h-[90vh] flex flex-col justify-center transition-colors duration-500"
      // style={heroBackground}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-background">
        {/* Subtle dot grid pattern */}
        {/* <div className="absolute inset-0 dot-grid opacity-[0.2] dark:opacity-[0.1]"></div> */}
        {/* The overlay is now theme-aware: subtle gradient in light mode, dark tint in dark mode */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:bg-black/40 pointer-events-none"></div> */}
      </div>

      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl space-y-10">
          {/* Top Badge: Adapts background and text for light/dark visibility */}
          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-primary/20 bg-accent/10 dark:border-sky-500/30 dark:bg-[#0A192F]/80 backdrop-blur-md text-primary dark:text-mint">
            <Sparkles className="w-4 h-4" />
            <span className="text-[0.8rem] font-bold tracking-wider uppercase">
              Enterprise Software & AI Automation
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-[56px] md:text-[6rem] font-heading font-extrabold tracking-tight leading-[1] text-primary dark:text-white">
              We build <br />
              intelligent <br />
              <span className="bg-gradient-to-r from-accent via-primary to-blue-600 dark:from-[#22D3EE] dark:via-[#0EA5E9] dark:to-[#3B82F6] bg-clip-text text-transparent">
                Software & AI.
              </span>
            </h1>
          </div>

          {/* Subtext: Highlight part now uses foreground to match theme */}
          <p className="text-xl md:text-[1.3rem] text-muted-foreground max-w-3xl leading-relaxed font-medium">
            Leafclutch Technologies delivers mission-critical engineering and{" "}
            <span className="text-foreground font-bold">
              responsible AI automation
            </span>{" "}
            tailored for enterprise scale.
          </p>

          {/* Actions: Primary button stays high-contrast (dark) for that "Call to Action" feel */}
          <div className="flex flex-wrap gap-6 pt-4">
            <Link to="/others/contact">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold flex justify-center items-center space-x-3 hover:opacity-90 transition-all transform hover:-translate-y-1 active:scale-95 ">
                <span className="text-xl">Get Started</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
            <Link to="/others/our-projects">
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-border text-foreground rounded-full font-bold hover:bg-secondary transition-all text-xl active:scale-95">
                View Our Work
              </button>
            </Link>
          </div>

          {/* Bottom Features Row: Adapts border color for the theme */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl dark:border-white/10">
            <div className="flex items-center space-x-3 group">
              <Shield className="w-6 h-6 text-accent dark:text-[#38BDF8]" />
              <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                Enterprise-Ready
              </span>
            </div>

            <div className="flex items-center space-x-3 group">
              <Zap className="w-6 h-6 text-accent dark:text-[#38BDF8]" />
              <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                High Performance
              </span>
            </div>

            <div className="flex items-center space-x-3 group">
              <Sparkles className="w-6 h-6 text-accent dark:text-[#38BDF8]" />
              <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                Responsible AI
              </span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center w-[70%] h-[70%] place-self-center">
          <DotLottieReact src={GIF_SRC} loop autoplay />
        </div>
      </div>

      {/* Background Decorative Blur: Uses primary color for a subtle brand glow */}
      {/* <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary/5 dark:bg-blue-600/10 rounded-full blur-[140px] -z-10 pointer-events-none"></div> */}
    </section>
  );
};

export default Hero;
