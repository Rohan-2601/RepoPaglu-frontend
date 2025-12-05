"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/lib/authGuard";
import api from "@/lib/api";
import { motion } from "framer-motion";

export default function GenerateTests() {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) router.push("/auth/login");
  }, []);

  const [repo, setRepo] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("");
  const [error, setError] = useState("");

  const steps = [
    "Cloning repository…",
    "Extracting files…",
    "Building dependency graph…",
    "Summarizing code…",
    "Indexing embeddings…",
    "Creating batches…",
    "Generating tests with AI…",
    "Preparing ZIP file…",
  ];

  const runStep = (i: number) =>
    new Promise((resolve) => setTimeout(resolve, 700)); // smooth animation

  const handleGenerate = async () => {
    if (!repo) return setError("Please enter a GitHub repo URL.");
    setError("");

    setLoading(true);
    setStep("");

    // Fake the step-by-step animation (UI only)
    for (let i = 0; i < steps.length; i++) {
      setStep(steps[i]);
      await runStep(i);
    }

    try {
      const response = await api.post("api/generate", { repo }, { responseType: "blob" });

      // Create ZIP download
      const blob = new Blob([response.data], { type: "application/zip" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "tests.zip";
      link.click();

      setStep("Done! ZIP downloaded.");
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to generate tests.");
    }

    setLoading(false);
  };

  return (
    <section className="relative min-h-screen px-6 py-20 bg-white dark:bg-black text-black dark:text-white flex flex-col items-center">

      {/* Page title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-bold mb-10 text-center tracking-tight"
      >
        Generate Automated Unit Tests
      </motion.h1>

      {/* Input box */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-xl p-8 rounded-2xl 
                   bg-white dark:bg-black 
                   border border-gray-200 dark:border-gray-800 shadow-sm"
      >
        <label className="text-lg font-semibold">GitHub Repository URL</label>
        <input
          className="w-full mt-3 p-4 rounded-xl 
                     bg-gray-50 dark:bg-gray-900 
                     border border-gray-200 dark:border-gray-800 
                     outline-none text-black dark:text-white focus:border-black dark:focus:border-white transition"
          placeholder="https://github.com/username/repo"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
        />

        {error && <p className="mt-3 text-red-600 text-sm font-medium">{error}</p>}

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-6 w-full text-center p-4 rounded-xl 
                     bg-black dark:bg-white text-white dark:text-black 
                     font-bold hover:opacity-80 
                     transition disabled:opacity-50"
        >
          {loading ? "Generating…" : "Generate Tests"}
        </button>
      </motion.div>

      {/* Progress Box */}
      {loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-10 w-full max-w-xl p-8 rounded-2xl
                     bg-white dark:bg-black 
                     border border-gray-200 dark:border-gray-800 
                     shadow-sm text-center"
        >
          <p className="text-lg font-medium mb-4">{step}</p>

          <div className="h-2 w-full bg-gray-100 dark:bg-gray-900 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((steps.indexOf(step) + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.4 }}
              className="h-full bg-black dark:bg-white"
            />
          </div>
        </motion.div>
      )}

    </section>
  );
}
