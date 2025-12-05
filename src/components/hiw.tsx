"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1",
      title: "Paste Your GitHub Link",
      desc: "Drop your repository URL — public or private — and RepoPaglu instantly fetches and analyzes your file structure.",
    },
    {
      step: "Step 2",
      title: "AI Understands Your Code",
      desc: "Every file, dependency, controller, service, and utility is parsed like a real engineer does.",
    },
    {
      step: "Step 3",
      title: "Generate Tests, Docs & Reports",
      desc: "Within seconds, RepoPaglu produces Jest tests, README, API docs, architecture maps and more.",
    },
    {
      step: "Step 4",
      title: "Download, Review & Ship",
      desc: "All generated outputs are clean, structured, production-ready and easy to integrate into your workflow.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative w-full py-28 bg-white dark:bg-black text-black dark:text-white overflow-hidden"
    >
      {/* Soft Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 
                      w-[500px] h-[500px] 
                      bg-gray-20/15 dark:bg-gray-700/30 
                      blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-semibold tracking-tight"
        >
          How It Works
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-lg"
        >
          A simple, powerful workflow designed to turn any repository into high-quality outputs instantly.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 
                         bg-white/70 dark:bg-black/40 backdrop-blur-xl
                         hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600
                         transition-all relative"
            >
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {s.step}
              </span>

              <h3 className="text-2xl font-semibold mt-1">{s.title}</h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed">
                {s.desc}
              </p>

              <ArrowRight className="absolute bottom-6 right-6 text-gray-400 dark:text-gray-500 size-5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
