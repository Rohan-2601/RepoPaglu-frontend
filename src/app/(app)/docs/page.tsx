"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/lib/authGuard";
import api from "@/lib/api";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ApiDocsPage() {
  const router = useRouter();

  const [repo, setRepo] = useState("");
  const [docs, setDocs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!isLoggedIn()) router.push("/auth/login");
  }, []);

  const toggle = (key: string) => {
    setOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleGenerate = async () => {
    if (!repo) return setError("Paste a GitHub repo URL.");
    setError("");
    setLoading(true);

    try {
      const res = await api.post("api/docs", { repo });
      if (!Array.isArray(res.data.docs)) {
        setError("Invalid docs format returned by backend.");
        setLoading(false);
        return;
      }
      setDocs(res.data.docs);
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to generate docs");
    }

    setLoading(false);
  };

  return (
    <section className="relative min-h-screen px-6 py-20 bg-white dark:bg-black text-black dark:text-white flex flex-col items-center">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-bold mb-10 tracking-tight"
      >
        API Documentation Generator
      </motion.h1>

      {/* Input Card */}
      <div className="w-full max-w-xl p-8 rounded-2xl
                      bg-white dark:bg-black
                      border border-gray-200 dark:border-gray-800 shadow-sm">
        <label className="text-lg font-semibold">Repository URL</label>

        <input
          value={repo}
          onChange={e => setRepo(e.target.value)}
          placeholder="https://github.com/username/repo"
          className="w-full mt-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-900
                     border border-gray-200 dark:border-gray-800 outline-none focus:border-black dark:focus:border-white transition"
        />

        {error && <p className="mt-3 text-red-600 text-sm font-medium">{error}</p>}

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-6 w-full p-4 rounded-xl bg-black dark:bg-white
                     text-white dark:text-black font-bold hover:opacity-80 transition disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Docs"}
        </button>
      </div>

      {/* Docs Output */}
      <div className="mt-12 w-full max-w-4xl space-y-6">

        {docs.map((ctrl, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-6 rounded-2xl bg-white dark:bg-black 
                       border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-6">{ctrl.controller}</h2>

            {ctrl.routes.map((route: any, idx: number) => {
              const key = `${i}-${idx}`;
              return (
                <div key={key} className="border border-gray-200 dark:border-gray-800 rounded-xl mb-3 overflow-hidden">
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex justify-between items-center px-5 py-4 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 rounded-lg border border-black dark:border-white text-black dark:text-white text-xs font-bold uppercase tracking-wider">
                        {route.method}
                      </span>
                      <span className="text-lg font-medium font-mono">{route.path}</span>
                    </div>
                    {open[key] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {open[key] && (
                    <div className="px-5 py-5 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">

                      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                        {route.description}
                      </p>

                      {/* Params */}
                      {route.params?.length > 0 && (
                        <>
                          <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-500 mb-2">Params</h3>
                          <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 text-sm overflow-x-auto border border-gray-100 dark:border-gray-800">
                            {JSON.stringify(route.params, null, 2)}
                          </pre>
                        </>
                      )}

                      {/* Body */}
                      {route.body && Object.keys(route.body).length > 0 && (
                        <>
                          <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-500 mb-2">Body</h3>
                          <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 text-sm overflow-x-auto border border-gray-100 dark:border-gray-800">
                            {JSON.stringify(route.body, null, 2)}
                          </pre>
                        </>
                      )}

                      {/* Responses */}
                      {route.responses && Object.keys(route.responses).length > 0 && (
                        <>
                          <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-500 mb-2">Responses</h3>
                          <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto border border-gray-100 dark:border-gray-800">
                            {JSON.stringify(route.responses, null, 2)}
                          </pre>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        ))}

      </div>
    </section>
  );
}

