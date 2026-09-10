import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahadev — Creative Full-Stack & 3D Web Developer",
  description:
    "Portfolio of Mahadev, a Creative Full-Stack Developer specializing in high-performance Next.js, Three.js 3D WebGL, and silky-smooth GSAP ScrollTrigger animations.",
  keywords: [
    "Mahadev",
    "Full Stack Developer",
    "Creative Developer",
    "Three.js",
    "GSAP",
    "Next.js Portfolio",
    "Tailwind CSS",
    "ScrollTrigger",
    "WebGL",
  ],
  authors: [{ name: "Mahadev" }],
  openGraph: {
    title: "Mahadev — Creative Full-Stack & 3D Web Developer",
    description:
      "Crafting high-performance digital experiences with cutting-edge 3D interactive design and modern full-stack engineering.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-[#f8faff] text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 min-h-screen relative">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
