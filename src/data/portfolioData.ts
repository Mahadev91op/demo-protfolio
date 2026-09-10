export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Full Stack" | "Creative Web" | "3D & WebGL" | "AI & Cloud";
  tags: string[];
  metrics: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  accentColor: string;
  previewGradient: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number;
    badge: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const portfolioData = {
  personal: {
    name: "Mahadev",
    title: "Creative Full-Stack & 3D Web Developer",
    tagline: "Architecting high-performance digital experiences with cutting-edge 3D interactive design and modern full-stack engineering.",
    bio: "I am a passionate developer focused on the intersection of intuitive UX, silky-smooth animations, and rock-solid full-stack architecture. From interactive Three.js 3D web applications to scalable Next.js cloud platforms, I turn ambitious ideas into seamless digital realities.",
    location: "India / Remote Worldwide",
    availability: "Available for new projects & full-time roles",
    email: "mahadev.dev01@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    stats: [
      { label: "Completed Projects", value: "24+" },
      { label: "Client Satisfaction", value: "100%" },
      { label: "Years Experience", value: "3+" },
      { label: "Performance Score", value: "99/100" },
    ],
  },

  skills: [
    {
      title: "Frontend Engineering",
      iconName: "Layout",
      skills: [
        { name: "Next.js 14/15", level: 95, badge: "Expert", description: "App Router, SSR/SSG, Server Actions, Dynamic SEO" },
        { name: "React 18/19", level: 95, badge: "Expert", description: "Custom hooks, Concurrent mode, State optimization" },
        { name: "TypeScript", level: 90, badge: "Advanced", description: "Strict type safety, Generics, Complex schemas" },
        { name: "Tailwind CSS", level: 96, badge: "Expert", description: "Responsive layouts, Design systems, Glassmorphism" },
      ],
    },
    {
      title: "Creative & 3D Web",
      iconName: "Boxes",
      skills: [
        { name: "Three.js & WebGL", level: 88, badge: "Advanced", description: "Custom shaders, 3D particle systems, Camera physics" },
        { name: "GSAP & ScrollTrigger", level: 94, badge: "Expert", description: "Pinning, timeline sequences, scrubbed parallax" },
        { name: "Lenis Smooth Scroll", level: 92, badge: "Advanced", description: "60+ FPS synchronized scroll-linked motion" },
        { name: "Canvas & Web Audio", level: 82, badge: "Proficient", description: "Interactive visualizations, particles, audio nodes" },
      ],
    },
    {
      title: "Backend & Cloud",
      iconName: "Server",
      skills: [
        { name: "Node.js & Express", level: 88, badge: "Advanced", description: "High-throughput RESTful & GraphQL microservices" },
        { name: "PostgreSQL & Prisma", level: 85, badge: "Advanced", description: "Relational database schema modeling & optimization" },
        { name: "MongoDB", level: 88, badge: "Advanced", description: "Document aggregation pipelines & indexing" },
        { name: "NextAuth & Firebase", level: 90, badge: "Advanced", description: "Secure OAuth, JWT, role-based access control" },
      ],
    },
    {
      title: "DevOps & Tooling",
      iconName: "Cpu",
      skills: [
        { name: "Git & GitHub Actions", level: 90, badge: "Advanced", description: "CI/CD pipelines, automated testing, branching" },
        { name: "Docker & Containerization", level: 80, badge: "Proficient", description: "Multi-stage container builds & local dev setups" },
        { name: "Vercel & AWS", level: 86, badge: "Advanced", description: "Edge functions, S3 storage, serverless deployment" },
        { name: "Figma to Code", level: 94, badge: "Expert", description: "Pixel-perfect translation from UI prototypes" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "aether-ai",
      title: "AetherAI Studio",
      subtitle: "Next-Gen Generative AI Workflow & Canvas",
      description: "An ultra-fast creative studio powering prompt-to-3D asset generation and AI workflows. Built with Next.js App Router, Three.js preview canvas, and streaming AI responses.",
      category: "AI & Cloud",
      tags: ["Next.js 14", "Three.js", "Tailwind CSS", "OpenAI", "TypeScript"],
      metrics: "Sub-50ms latency • 12k+ active generation queries",
      demoUrl: "https://example.com/aetherai",
      githubUrl: "https://github.com/mahadev/aether-ai-studio",
      featured: true,
      accentColor: "#0066FF",
      previewGradient: "from-blue-600 via-sky-500 to-indigo-600",
    },
    {
      id: "novapay-fintech",
      title: "NovaPay Neo-Bank",
      subtitle: "High-Volume Financial Dashboard & Analytics",
      description: "An enterprise-grade financial portal featuring real-time crypto & fiat transaction telemetry, animated cash flow charts with GSAP, and biometric-grade security.",
      category: "Full Stack",
      tags: ["React", "GSAP ScrollTrigger", "Node.js", "PostgreSQL", "Tailwind CSS"],
      metrics: "Processed $2.4M+ demo volume • 99.9% uptime",
      demoUrl: "https://example.com/novapay",
      githubUrl: "https://github.com/mahadev/novapay-fintech",
      featured: true,
      accentColor: "#0284C7",
      previewGradient: "from-sky-600 via-cyan-500 to-blue-700",
    },
    {
      id: "omnistore-3d",
      title: "OmniStore Spatial Commerce",
      subtitle: "Interactive 3D Product Customizer & E-Commerce",
      description: "An immersive e-commerce shopping platform where customers inspect 3D models with physical material shaders, rotate 360 degrees, and checkout seamlessly with Stripe.",
      category: "3D & WebGL",
      tags: ["Three.js", "WebGL", "Next.js", "Stripe API", "Lenis"],
      metrics: "45% increase in user session duration • 60 FPS rendering",
      demoUrl: "https://example.com/omnistore",
      githubUrl: "https://github.com/mahadev/omnistore-3d",
      featured: true,
      accentColor: "#2563EB",
      previewGradient: "from-blue-700 via-indigo-500 to-sky-600",
    },
    {
      id: "devpulse-cloud",
      title: "DevPulse Observability",
      subtitle: "Real-time Cloud Telemetry & Microservices Health",
      description: "Full-stack monitoring platform visualizing distributed logs, server latency heatmaps, and automatic alert notifications through live WebSockets.",
      category: "Full Stack",
      tags: ["TypeScript", "Next.js", "WebSockets", "Tailwind", "Docker"],
      metrics: "Live monitoring for 50+ microservices • Real-time socket stream",
      demoUrl: "https://example.com/devpulse",
      githubUrl: "https://github.com/mahadev/devpulse-telemetry",
      featured: true,
      accentColor: "#0369A1",
      previewGradient: "from-sky-700 via-blue-600 to-teal-500",
    },
  ] as Project[],

  experience: [
    {
      period: "2023 - Present",
      role: "Lead Full-Stack & Creative Developer",
      company: "Modern Tech Studio",
      location: "Remote",
      description: [
        "Architected scalable Next.js web applications handling over 100k monthly active users.",
        "Pioneered interactive 3D WebGL experiences and GSAP scroll-triggered UI animations that boosted conversion by 34%.",
        "Mentored junior developers and established code quality standards with TypeScript and automated testing.",
      ],
      technologies: ["Next.js", "Three.js", "GSAP", "TypeScript", "Tailwind CSS", "Node.js"],
    },
    {
      period: "2022 - 2023",
      role: "Frontend Engineer & UI Specialist",
      company: "InnovateX Solutions",
      location: "Hybrid",
      description: [
        "Built responsive web portals and reusable component libraries using React and Tailwind CSS.",
        "Integrated complex REST & GraphQL backend services with robust caching and error handling.",
        "Enhanced Web Vitals scores across client platforms to achieve 98+ PageSpeed benchmarks.",
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Redux", "REST APIs"],
    },
    {
      period: "2021 - 2022",
      role: "Web Development Specialist",
      company: "Freelance & Open Source",
      location: "Remote",
      description: [
        "Delivered 15+ custom web applications for international startup founders and digital agencies.",
        "Published open-source animation utilities and UI components for the modern web developer community.",
      ],
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3 Animations", "Node.js", "Git"],
    },
  ] as ExperienceItem[],

  testimonials: [
    {
      quote: "Mahadev's ability to blend high-end 3D graphics and butter-smooth scrolling with robust full-stack architecture is rare. Our launch received incredible praise from our investors.",
      author: "Alex Morgan",
      role: "Founder & CEO, TechVanguard",
      avatar: "AM",
    },
    {
      quote: "Working with Mahadev was an absolute pleasure. He delivered our Next.js platform ahead of schedule with flawless GSAP animations that blew our team away.",
      author: "Priya Sharma",
      role: "Product Director, CloudPulse",
      avatar: "PS",
    },
    {
      quote: "The attention to detail in every micro-interaction, clean code structure, and responsive design makes Mahadev a top-tier creative engineer.",
      author: "David Chen",
      role: "CTO, NextGen Media",
      avatar: "DC",
    },
  ],

  workflowSteps: [
    {
      number: "01",
      title: "Discovery & Architecture",
      description: "Deep dive into product requirements, user journeys, data modeling, and performance specifications.",
    },
    {
      number: "02",
      title: "3D Prototyping & Motion Design",
      description: "Designing responsive layouts, interactive 3D WebGL scenes, and choreography of GSAP scroll triggers.",
    },
    {
      number: "03",
      title: "Full-Stack Implementation",
      description: "Writing clean, type-safe Next.js code with reusable components, secure APIs, and database optimizations.",
    },
    {
      number: "04",
      title: "Performance Polish & Launch",
      description: "Rigorous lighthouse audits, frame-rate profiling, cross-browser verification, and global CDN deployment.",
    },
  ],
};
