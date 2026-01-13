import React from "react";
import {
  Globe,
  Smartphone,
  Server,
  Shield,
  Database,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const serviceList = [
  {
    icon: <Globe size={28} />,
    title: "Web Engineering",
    description:
      "Enterprise-grade React applications and high-conversion platforms built for speed.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Ecosystems",
    description:
      "Seamless iOS and Android experiences using Flutter and React Native.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: <Server size={28} />,
    title: "Cloud & DevOps",
    description:
      "Automated CI/CD pipelines and scalable AWS/GCP infrastructure management.",
    color: "bg-mint/10 text-mint",
  },
  {
    icon: <Database size={28} />,
    title: "AI & Data Intelligence",
    description:
      "Custom LLM integrations and predictive analytics to power your business decisions.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: <Shield size={28} />,
    title: "Cyber Resilience",
    description:
      "Advanced penetration testing and secure architecture design to protect assets.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Growth Strategy",
    description:
      "Data-driven marketing and SEO strategies that drive measurable ROI.",
    color: "bg-mint/10 text-mint",
  },
];

export const Services: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-black mb-6 uppercase tracking-[0.2em]">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground tracking-tight">
            Our Core Expertise
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-medium">
            We don't just build software; we engineer competitive advantages
            using the latest technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="group p-10 bg-card border border-border rounded-3xl flex flex-col items-start text-left transition-all duration-500 hover:border-primary/30 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                {service.icon}
              </div>
              <div
                className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-foreground tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8 font-medium">
                {service.description}
              </p>
              <a
                href="#"
                className="mt-auto flex items-center gap-3 text-primary font-bold text-base hover:gap-5 transition-all"
              >
                Explore Solution <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
