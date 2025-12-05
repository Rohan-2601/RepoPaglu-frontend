"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  Code,
  FileText,
  Zap,
  Cpu,
  Layout,
  Terminal,
} from "lucide-react";

const features = [
  {
    Icon: Cpu,
    name: "Deep Code Understanding",
    description: "Reads every file, module, and dependency to build an engineer-level mental model of your architecture.",
    href: "/dashboard",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:col-start-1 lg:col-span-2",
  },
  {
    Icon: Terminal,
    name: "Developer-Grade Tests",
    description: "Creates context-aware Jest tests with real cases, edge scenarios, and async flows.",
    href: "/dashboard",
    cta: "See examples",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:col-start-3 lg:col-span-1",
  },
  {
    Icon: FileText,
    name: "Instant Documentation",
    description: "Auto-generates production-ready READMEs, API docs, and setup guides.",
    href: "/dashboard",
    cta: "View docs",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:col-start-1 lg:col-span-1",
  },
  {
    Icon: Layout,
    name: "Architecture Insights",
    description: "Visualizes controllers, routes, and services in a clean, understandable structure.",
    href: "/dashboard",
    cta: "Explore",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:col-start-2 lg:col-span-2",
  },
  {
    Icon: Zap,
    name: "Save Dev Time",
    description: "Removes repetitive boilerplate work so you can focus on building features.",
    href: "/dashboard",
    cta: "Start now",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-3 lg:col-start-2 lg:col-span-1",
  },
  {
    Icon: Code,
    name: "Full API Specs",
    description: "Generates endpoints, parameters, and response schemas automatically.",
    href: "/dashboard",
    cta: "Generate",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-3 lg:col-start-1 lg:col-span-1",
  },
];

export default function Features() {
  return (
    <section className="relative w-full py-24 bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      
      {/* Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-[800px] h-[800px] 
                      bg-gray-100/50 dark:bg-gray-800/30 
                      blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Everything You Need to <br />
            <span className="text-gray-500 dark:text-gray-400">Understand Any Repository</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            RepoPaglu transforms your codebase into actionable insights, automated tests, and comprehensive documentation.
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
