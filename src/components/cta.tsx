"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CTA() {
  const router = useRouter();
  return (
    <section
      className="relative w-full py-28 bg-white dark:bg-black text-black dark:text-white overflow-hidden"
    >
      {/* Soft Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 
                      w-[500px] h-[500px] 
                      bg-gray-15/1 dark:bg-gray-700/30 
                      blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight"
        >
          Ready to Supercharge Your Development Workflow?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-lg"
        >
          Paste your GitHub repository and let RepoPaglu generate tests, documentation,
          and architecture insights in seconds.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button
            className="px-8 py-3 rounded-xl bg-black dark:bg-white 
                       text-white dark:text-black text-lg font-medium 
                       shadow-lg hover:bg-gray-900 dark:hover:bg-gray-200 transition"
            onClick={() => router.push("/dashboard")}
          >
            Get Started Free
          </button>

          <button
            className="px-8 py-3 rounded-xl 
                       border border-gray-400 dark:border-gray-600 
                       text-gray-700 dark:text-gray-300 
                       text-lg font-medium 
                       hover:bg-gray-100 dark:hover:bg-gray-900 transition"
            onClick={() => router.push("/dashboard")}
          >
            Paste GitHub Link →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
