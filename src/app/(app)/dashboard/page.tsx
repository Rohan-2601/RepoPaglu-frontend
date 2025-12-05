

"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/lib/authGuard";
import { 
  Code2, FileText, BookOpen, Layers, ArrowRight
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Dashboard() {
  const router = useRouter();

  // Auth check is now handled in AppLayout


  const tools = [
    {
      title: "Generate Tests",
      desc: "Create Jest unit tests with async flows & edge cases.",
      icon: <Code2 className="w-6 h-6 text-black dark:text-white" />,
      link: "/generate",
      color: "bg-gray-100 dark:bg-gray-800",
    },
    {
      title: "API Documentation",
      desc: "Auto-generate endpoints, params & response schemas.",
      icon: <BookOpen className="w-6 h-6 text-black dark:text-white" />,
      link: "/docs",
      color: "bg-gray-100 dark:bg-gray-800",
    },
    {
      title: "README Generator",
      desc: "Build production-ready READMEs instantly.",
      icon: <FileText className="w-6 h-6 text-black dark:text-white" />,
      link: "/readme",
      color: "bg-gray-100 dark:bg-gray-800",
    },
    {
      title: "Tech Stack Analysis",
      desc: "Visualize architecture, dependencies & services.",
      icon: <Layers className="w-6 h-6 text-black dark:text-white" />,
      link: "/tech",
      color: "bg-gray-100 dark:bg-gray-800",
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back! Here's what's happening with your repositories.
          </p>
        </div>
        
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, idx) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => router.push(tool.link)}
            className="group cursor-pointer p-6 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all hover:shadow-md"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${tool.color}`}>
              {tool.icon}
            </div>
            <h3 className="text-lg font-semibold text-black dark:text-white group-hover:underline decoration-1 underline-offset-4 transition-all">
              {tool.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
              {tool.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quick Start & Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Panel — Quick Start Guide */}
        <div className="lg:col-span-2 p-8 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-black dark:text-white mb-6">Quick Start Guide</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "1. Connect Repo", desc: "Paste your GitHub URL to start analysis." },
              { title: "2. Generate Tests", desc: "AI builds Jest tests for your components." },
              { title: "3. Create Docs", desc: "Get API docs & READMEs in seconds." },
              { title: "4. Export Code", desc: "Copy or download the generated files." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 font-bold text-sm bg-black text-white dark:bg-white dark:text-black">
                  {i + 1}
                </div>
                <h4 className="font-medium text-black dark:text-white">{step.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-black dark:bg-white text-white dark:text-black relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Upgrade to Pro</h3>
              <p className="text-gray-300 dark:text-gray-600 text-sm mb-4">Get unlimited generations and advanced architecture insights.</p>
              <Dialog>
                <DialogTrigger asChild>
                  <button 
                    className="w-full py-2 bg-white dark:bg-black text-black dark:text-white rounded-lg text-sm font-semibold hover:opacity-90 transition"
                  >
                    Upgrade Now
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-md rounded-3xl p-8 border border-gray-200 dark:border-gray-800 
  bg-white/70 dark:bg-black/60 backdrop-blur-xl shadow-2xl 
  animate-in fade-in-0 zoom-in-95">
  
  <DialogHeader>
    <DialogTitle className="text-2xl font-bold text-black dark:text-white">
      Upgrade to Pro
    </DialogTitle>
    <DialogDescription className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
      Unlock unlimited generations, deeper architecture insights, smart PR review, 
      and future premium tools. Pro will launch once we cross <strong>50+ users</strong>.
    </DialogDescription>
  </DialogHeader>

  {/* Feature Highlights */}
  <div className="mt-6 space-y-4">
    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 dark:bg-gray-900">
      <span className="text-black dark:text-white text-sm font-semibold">✓ Unlimited Test Generation</span>
    </div>
    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 dark:bg-gray-900">
      <span className="text-black dark:text-white text-sm font-semibold">✓ Better API Documentation Tools</span>
    </div>
    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 dark:bg-gray-900">
      <span className="text-black dark:text-white text-sm font-semibold">✓ Architecture & Dependency Map</span>
    </div>
  </div>

</DialogContent>

              </Dialog>
            </div>
          </motion.div>

         <div className="p-6 rounded-2xl bg-white/70 dark:bg-black/40 
                border border-gray-200 dark:border-gray-800 
                backdrop-blur-xl shadow-sm transition-all">

  <h3 className="text-sm font-bold text-black dark:text-white mb-4 uppercase tracking-widest">
    Quick Tips
  </h3>

  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">

    <li className="flex items-start gap-2">
      <span className="text-green-600 dark:text-green-400 font-bold mt-0.5">✓</span>
      <span>Use only <strong>public GitHub repositories</strong> for analysis.</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-green-600 dark:text-green-400 font-bold mt-0.5">✓</span>
      <span>Keep controllers small and focused on one responsibility.</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-green-600 dark:text-green-400 font-bold mt-0.5">✓</span>
      <span>Follow consistent naming for files, functions, and variables.</span>
    </li>

    

   

   

  </ul>
</div>

        </div>
      </div>
    </motion.div>
  );
}

