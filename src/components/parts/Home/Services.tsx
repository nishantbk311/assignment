import React from "react";
import {
  //   Globe,
  //   Smartphone,
  //   Cloud,
  //   Shield,
  //   Bot,
  //   TrendingUp,
  ArrowRight,
} from "lucide-react";
import Gifs from "../AllServices/Gifs";
import TrainingCTA from "./TrainingCTA";
import { Link } from "react-router-dom";

const serviceList = [
  {
    icon: (
      <Gifs
        // src="https://aviintech.com/wp-content/uploads/2023/10/training.gif"
        src="https://lottie.host/2ce4fd10-cf6e-472c-84f0-d7ed4221a19c/wPbVH9oZ8u.lottie"
        // alt=""
        className="h-[12rem] w-full "
      />
    ),

    title: "Web Development",
    description:
      "Creating high-performance, responsive websites and modern web applications tailored to your business goals.",
    href: "/services/web-development",
  },
  {
    icon: (
      <Gifs
        // src="https://cdn.dribbble.com/userupload/24343475/file/original-93eccd85db71370c542e86f05641dcea.gif"
        src="https://lottie.host/49dbf432-a55a-4721-bd96-4b660dedbb0e/ufJQbyW1ci.lottie"
        // alt=""
        className="h-[12rem] w-full "
      />
    ),

    title: "Mobile App Development",
    description:
      "Building intuitive and feature-rich Android and iOS applications that provide exceptional user experiences.",
    href: "/services/mobile-development",
  },
  {
    icon: (
      <Gifs
        // src="https://camo.githubusercontent.com/3612102bd88e633329d16eb56f104fc28acb672b0ee077a643c6072420e15db1/68747470733a2f2f6c697665696d616765732e616c676f776f726b732e636f6d2f6e65772d616c676f776f726b732f77702d636f6e74656e742f75706c6f6164732f323032322f30362f32383136313932352f4465764f70732d6d696e2e676966"
        src="https://lottie.host/d9d80db0-2de5-4883-ad60-9187c7fd57f1/DoraQiPibU.lottie"
        // alt=""
        className="h-[12rem] w-full "
      />
    ),

    title: "DevOps Solutions",
    description:
      "Optimizing development workflows and maintaining secure, scalable cloud infrastructure for enterprise-grade stability.",
    href: "/services/devops",
  },
  {
    icon: (
      <Gifs
        // src="https://cdn.dribbble.com/userupload/28350278/file/original-a51de8316c9957ccea1ae498be54a9e1.gif"
        // src="https://lottie.host/7c0b08ea-baa8-486f-8e9c-c460f5519163/gY1cltP1y4.lottie"
        src="https://lottie.host/75c8b880-479b-4eb2-ab86-b6eeb1ca045d/VMO59MdVIj.lottie"
        // alt=""
        className="h-[12rem] w-full "
      />
    ),
    title: "Cybersecurity",
    description:
      "Protecting your digital assets with advanced threat detection, data encryption, and comprehensive security audits.",
    href: "/services/cybersecurity",
  },
  {
    icon: (
      <Gifs
        // src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*XgwJgF0EcYUShkNjqz8NeA.gif"
        src="https://lottie.host/dcef0e14-4941-41f4-81b2-efc5401e646f/vwF0QOlEn6.lottie"
        // alt=""
        className="h-[12rem] w-full "
      />
    ),

    title: "Data Science & AI",
    description:
      "Harnessing the power of machine learning and big data to drive intelligent decision-making and automate operations.",
    href: "/services/data-science",
  },
  {
    icon: (
      <Gifs
        // src="https://images.squarespace-cdn.com/content/v1/5e59eefe0e4624584d852c64/de039f25-73da-4743-8bb5-ee01a9ccd244/giphy.gif?format=2500w"
        // src="https://lottie.host/73fce23a-0a3a-4107-aaf7-53f5d5f7bef1/OaGipfpxkq.lottie"
        src="https://lottie.host/ad0b5708-d705-4737-9622-2f144060ede9/wKfV30hrDN.lottie"
        // alt=""
        className="h-[12rem] w-full"
      />
    ),
    title: "Digital Marketing",
    description:
      "Boosting your brand's online visibility and growth through data-driven strategies and targeted search optimization.",
    href: "/services/digital-marketing",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="section-padding bg-background relative transition-colors duration-500 border-t"
    >
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4 mb-16">
          <p className="text-mint font-bold uppercase tracking-widest text-sm">
            What we offer
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-foreground">
            Comprehensive Technology <br /> Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From custom software to AI automation, we deliver end-to-end
            solutions that transform your business operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="group p-10 bg-card border border-border rounded-[2.5rem] text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-5 text-primary leading-tight">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-10 text-[1.1rem] flex-grow">
                {service.description}
              </p>

              <Link
                to={service.href}
                className="inline-flex self-start items-center text-[#0EA5E9] dark:text-[#38BDF8] font-bold group/link hover:underline decoration-2 underline-offset-4"
              >
                <span className="text-[1.05rem]">Learn more</span>
                <ArrowRight className="ml-2 w-5 h-5 inline transition-transform group-hover/link:translate-x-2" />
              </Link>
            </div>
          ))}
        </div>
        <TrainingCTA />
      </div>
    </section>
  );
};

export default Services;
