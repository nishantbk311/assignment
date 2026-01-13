// import {
//   // Globe,
//   // Smartphone,
//   // Settings,
//   // ShieldCheck,
//   Search,
//   FileText,
//   Code,
//   CheckCircle2,
//   // Brain,
//   // Megaphone,
// } from "lucide-react";

import Gifs from "./Gifs";

export const SERVICES_DATA = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    icon: (
      <Gifs
        src="https://aviintech.com/wp-content/uploads/2023/10/training.gif"
        alt=""
        className="h-[12rem] w-full "
      />
    ),
    features: [
      "Custom Web Apps",
      "E-commerce",
      "CMS Solutions",
      "API Development",
    ],
    href: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
    icon: (
      <Gifs
        src="https://cdn.dribbble.com/userupload/24343475/file/original-93eccd85db71370c542e86f05641dcea.gif"
        alt=""
        className="h-[12rem] w-full "
      />
    ),
    features: ["iOS Apps", "Android Apps", "Cross-platform", "App Maintenance"],
    href: "/services/mobile-development",
  },
  {
    title: "DevOps Solutions",
    description:
      "Streamline your development with CI/CD pipelines, cloud infrastructure, and automation.",
    icon: (
      <Gifs
        src="https://camo.githubusercontent.com/3612102bd88e633329d16eb56f104fc28acb672b0ee077a643c6072420e15db1/68747470733a2f2f6c697665696d616765732e616c676f776f726b732e636f6d2f6e65772d616c676f776f726b732f77702d636f6e74656e742f75706c6f6164732f323032322f30362f32383136313932352f4465764f70732d6d696e2e676966"
        alt=""
        className="h-[12rem] w-full "
      />
    ),
    features: [
      "Cloud Migration",
      "CI/CD Pipelines",
      "Docker & K8s",
      "Infrastructure as Code",
    ],
    href: "/services/devops",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with comprehensive security audits, penetration testing, and compliance.",
    icon: (
      <Gifs
        src="https://cdn.dribbble.com/userupload/28350278/file/original-a51de8316c9957ccea1ae498be54a9e1.gif"
        alt=""
        className="h-[12rem] w-full "
      />
    ),
    features: [
      "Security Audits",
      "Data Protection",
      "Incident Response",
      "Network Security",
    ],
    href: "/services/cybersecurity",
  },
  {
    title: "Data Science & AI",
    description:
      "Transform data into actionable insights with machine learning, analytics and automation.",
    icon: (
      <Gifs
        src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*XgwJgF0EcYUShkNjqz8NeA.gif"
        alt=""
        className="h-[12rem] w-full "
      />
    ),
    features: ["ML Models", "Data Analytics", "AI Integration", "Automation"],
    href: "/services/data-science",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your online presence with SEO, social media marketing, and paid advertising.",
    icon: (
      <Gifs
        src="https://images.squarespace-cdn.com/content/v1/5e59eefe0e4624584d852c64/de039f25-73da-4743-8bb5-ee01a9ccd244/giphy.gif?format=2500w"
        alt=""
        className="h-[12rem] w-full"
      />
    ),
    features: ["SEO", "Social Media", "PPC Campaigns", "Content Strategy"],
    href: "/services/digital-marketing",
  },
];

// export const PROCESS_DATA = [
//   {
//     number: "01",
//     title: "Discovery",
//     description: "Understanding your needs and goals.",
//     icon: <Search className="w-8 h-8" />,
//   },
//   {
//     number: "02",
//     title: "Planning",
//     description: "Creating a detailed roadmap and timeline.",
//     icon: <FileText className="w-8 h-8" />,
//   },
//   {
//     number: "03",
//     title: "Development",
//     description: "Building with agile methodology.",
//     icon: <Code className="w-8 h-8" />,
//   },
//   {
//     number: "04",
//     title: "Delivery",
//     description: "Testing, deployment, and ongoing support.",
//     icon: <CheckCircle2 className="w-8 h-8" />,
//   },
// ];
