import React from "react";
import { CheckCircle2, Rocket, Target, BarChart, Users } from "lucide-react";

const benefitCards = [
  {
    icon: <Rocket size={20} />,
    title: "Fast Delivery",
    description:
      "We deliver projects on time without compromising quality, ensuring your speed to market.",
  },
  {
    icon: <Target size={20} />,
    title: "Client-Focused",
    description:
      "Your success is our priority. We listen deeply and deliver tailored solutions that work.",
  },
  {
    icon: <BarChart size={20} />,
    title: "Scalable Solutions",
    description:
      "Build for today, scale for tomorrow with our robust and future-proof technologies.",
  },
  {
    icon: <Users size={20} />,
    title: "Expert Team",
    description:
      "Direct access to senior architects and product specialists who understand your industry.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-muted/30 dark:bg-muted/10 relative border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint text-xs font-black mb-6 uppercase tracking-[0.2em]">
            Performance
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground tracking-tight leading-tight">
            Why the Best Companies <br />{" "}
            <span className="text-primary">Trust Us</span>
          </h2>
          <p className="text-muted-foreground text-xl mb-12 leading-relaxed font-medium max-w-lg">
            Leafclutch bridges the gap between complex engineering and intuitive
            business outcomes.
          </p>

          <div className="space-y-6">
            {[
              {
                text: "Future-Proof Tech Stack",
                sub: "Using React, Next.js, and specialized AI models.",
              },
              {
                text: "Precision Delivery",
                sub: "Weekly sprints with transparent progress tracking.",
              },
              {
                text: "Strategic Consulting",
                sub: "We help define your roadmap, not just write code.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="mt-1">
                  <CheckCircle2
                    className="text-mint group-hover:scale-125 transition-transform"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-black text-foreground">
                    {item.text}
                  </h4>
                  <p className="text-muted-foreground font-medium">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {benefitCards.map((card, index) => (
            <div
              key={index}
              className="p-4 bg-secondary/50 dark:bg-secondary/20 border border-border/50 rounded-[2.5rem] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group h-full"
            >
              <div className="bg-card dark:bg-card/80 rounded-[2rem] p-8 h-full flex flex-col items-start border border-border/20 shadow-sm">
                <div className="w-12 h-12 bg-primary/5 dark:bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">
                  {card.title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}

          {/* Decorative Background Glow */}
          <div className="absolute -z-10 w-full h-full bg-primary/5 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
