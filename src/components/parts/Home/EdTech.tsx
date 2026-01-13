import React from "react";
import {
  GraduationCap,
  Briefcase,
  UserPlus,
  Award,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    icon: <GraduationCap size={28} />,
    title: "Advanced Courses",
    description: "Master the latest frameworks with hands-on labs.",
    tag: "Popular",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Corporate Training",
    description: "Level up your internal teams with custom workshops.",
    tag: "Enterprise",
  },
  {
    icon: <UserPlus size={28} />,
    title: "Mentorship",
    description: "Get guidance from world-class developers.",
    tag: "1-on-1",
  },
  {
    icon: <Award size={28} />,
    title: "Placement",
    description: "Exclusive access to our global network of hiring partners.",
    tag: "Outcome",
  },
];

export const EdTech: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-primary/[0.03] dark:bg-primary/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-black mb-6 uppercase tracking-[0.2em]">
            Education
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground tracking-tight">
            The Academy
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-medium">
            Closing the skills gap in the modern tech ecosystem through
            immersive learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="bg-card border border-border/50 rounded-[2.5rem] p-10 text-center transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-4 group relative flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-muted dark:bg-muted/50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500 group-hover:rotate-3">
                {prog.icon}
              </div>

              <div className="inline-block px-4 py-1.5 bg-secondary/60 dark:bg-secondary/20 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.15em] mb-6">
                {prog.tag}
              </div>

              <h3 className="text-2xl font-black mb-4 text-foreground tracking-tight group-hover:text-primary transition-colors">
                {prog.title}
              </h3>

              <p className="text-muted-foreground font-medium leading-relaxed text-sm">
                {prog.description}
              </p>

              {/* Optional: Subtle background glow on hover */}
              <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity -z-10 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-12 py-5 bg-foreground text-background dark:bg-card dark:text-foreground rounded-2xl font-black text-xl shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:scale-105 transition-all flex items-center gap-4 mx-auto group border border-border active:scale-95">
            Browse All Courses
            <ArrowRight
              size={22}
              className="group-hover:translate-x-2 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
