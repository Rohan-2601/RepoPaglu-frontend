

"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { motion } from "framer-motion";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { Globe } from "@/components/ui/globe";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <BackgroundLines
      className="relative w-full min-h-screen flex flex-col items-center justify-center 
                 px-6 py-32 bg-white dark:bg-black text-black dark:text-white"
    >
      {/* Soft Glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 
                   w-[700px] h-[700px] 
                   bg-gray-200/50 dark:bg-gray-700/30 
                   blur-[200px] rounded-full pointer-events-none -z-20"
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-4"
      >
        <AnimatedShinyText
          className="group inline-flex items-center px-5 py-1.5 text-sm font-medium 
                     border border-gray-300 dark:border-gray-700 
                     rounded-full bg-white/70 dark:bg-black/40 
                     backdrop-blur-xl text-gray-700 dark:text-gray-300"
        >
          ✨ Introducing RepoPaglu
          <ArrowRightIcon className="ml-1 size-3 group-hover:translate-x-1 transition" />
        </AnimatedShinyText>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center font-semibold text-5xl md:text-6xl leading-tight tracking-tight"
      >
        Turn Any GitHub Repo Into  
        <br />
        <span className="font-bold">Tests, Docs & Insights Instantly</span>
      </motion.h1>

      {/* Typing line */}
      <div className="mt-6 text-[18px] text-gray-700 dark:text-gray-300 font-medium">
        <TypingAnimation>
          Generate tests • API docs • README • Architecture reports
        </TypingAnimation>
      </div>

      {/* Subtitle */}
      <p className="mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400 text-lg">
        An AI developer assistant that reads your entire codebase and produces automated tests,
        documentation, summaries and technical insights.
      </p>

      {/* CTAs -- FIX APPLIED */}
      <div className="mt-8 flex gap-4 pointer-events-auto z-50">
        <button
          className="px-6 py-3 rounded-xl bg-black dark:bg-white 
                     text-white dark:text-black text-lg font-medium 
                     shadow-lg hover:bg-gray-900 dark:hover:bg-gray-200 transition cursor-pointer"
          onClick={() => router.push("/dashboard")}
        >
          Get Started Free
        </button>

        <button
          className="px-6 py-3 rounded-xl 
                     border border-gray-400 dark:border-gray-600 
                     text-gray-700 dark:text-gray-300 
                     text-lg font-medium 
                     hover:bg-gray-100 dark:hover:bg-gray-900 transition cursor-pointer"
          onClick={() => router.push("/dashboard")}
        >
          Paste GitHub Link →
        </button>
      </div>

      {/* Preview Box (Commented Out) */}
      {/* 
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-4xl mt-16 rounded-3xl shadow-xl 
                   border border-gray-200 dark:border-gray-700 
                   bg-white/80 dark:bg-black/40 
                   backdrop-blur-xl p-3"
      >
        <div
          className="aspect-video w-full rounded-2xl 
                     bg-gradient-to-br 
                     from-gray-200 to-gray-300 
                     dark:from-gray-700 dark:to-gray-800 
                     animate-pulse"
        />
      </motion.div>
      */}
    </BackgroundLines>
  );
}
