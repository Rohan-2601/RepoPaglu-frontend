
// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { isLoggedIn } from "@/lib/authGuard";
// import api from "@/lib/api";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";
// import { Code, Server, GitBranch, Box, Lock, Database, Bug } from "lucide-react";

// // Colors for charts (Grayscale / Monochrome)


// export default function TechStackPage() {
//   const router = useRouter();

//   useEffect(() => {
//     if (!isLoggedIn()) router.push("/auth/login");
//   }, []);

//   const [repo, setRepo] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [report, setReport] = useState<any>(null);

//   const handleGenerate = async () => {
//     if (!repo) {
//       setError("Please enter a GitHub repo URL.");
//       return;
//     }
//     setError("");
//     setReport(null);
//     setLoading(true);

//     try {
//       const res = await api.post("api/tech", { repo });
//       setReport(res.data.report);
//     } catch (err: any) {
//       setError(err.response?.data?.error || "Failed to analyze tech stack.");
//     }

//     setLoading(false);
//   };

//   const { resolvedTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Colors for charts
//   // Colors for charts
// const COLORS_LIGHT = ["#000000"];
// const COLORS_DARK = ["#ffffff"];

// const currentColors = resolvedTheme === "dark" ? COLORS_DARK : COLORS_LIGHT;



//   // Build chart data
//   const chartData: { name: string; value: number }[] = report?.languages?.map((lang: string, i: number) => ({
//     name: lang,
//     value: 1,
//   })) || [];

//   return (
//     <section className="relative min-h-screen px-6 py-20 bg-white dark:bg-black text-black dark:text-white flex flex-col items-center">

//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-5xl font-bold mb-8 text-center tracking-tight"
//       >
//         Tech Stack Analyzer
//       </motion.h1>

//       {/* Input Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-xl p-8 rounded-2xl 
//                    bg-white dark:bg-black 
//                    border border-gray-200 dark:border-gray-800 shadow-sm mb-10"
//       >
//         <label className="text-lg font-semibold">GitHub Repository URL</label>

//         <input
//           className="w-full mt-3 p-4 rounded-xl 
//                      bg-gray-50 dark:bg-gray-900 
//                      border border-gray-200 dark:border-gray-800 
//                      outline-none text-black dark:text-white focus:border-black dark:focus:border-white transition"
//           placeholder="https://github.com/username/repo"
//           value={repo}
//           onChange={(e) => setRepo(e.target.value)}
//         />

//         {error && <p className="text-red-600 mt-3 text-sm font-medium">{error}</p>}

//         <button
//           onClick={handleGenerate}
//           className="mt-6 w-full p-4 rounded-xl text-white bg-black dark:bg-white dark:text-black font-bold hover:opacity-80 transition shadow-sm"
//         >
//           {loading ? "Analyzing…" : "Analyze Tech Stack"}
//         </button>
//       </motion.div>

//       {/* Loading */}
//       {loading && (
//         <div className="w-full max-w-3xl space-y-4">
//           {[1, 2, 3].map((i) => (
//             <div
//               key={i}
//               className="w-full h-24 bg-gray-50 dark:bg-gray-900 animate-pulse rounded-2xl border border-gray-200 dark:border-gray-800"
//             />
//           ))}
//         </div>
//       )}

//       {/* PREMIUM UI */}
//       {!loading && report && (
//         <div className="w-full max-w-5xl space-y-12 mb-20">

//           {/* ================== Languages + Chart ================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="p-8 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm"
//           >
//             <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
//               <Code className="w-7 h-7" /> Languages Detected
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

//               {/* Chart */}
//      {/* Languages Box (replacing pie chart) */}
// <div className="w-full h-full p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col gap-4">
//   <p className="text-sm text-gray-600 dark:text-gray-400">
//     Languages detected in the repository:
//   </p>

//   <div className="flex flex-wrap gap-3">
//     {report.languages.map((lang: string, i: number) => (
//       <div
//         key={i}
//         className="px-4 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black text-sm font-medium shadow-sm"
//       >
//         {lang}
//       </div>
//     ))}
//   </div>

//   {report.languages.length === 0 && (
//     <p className="text-gray-500 dark:text-gray-400 text-sm">
//       No languages detected in this repository.
//     </p>
//   )}
// </div>



//               {/* Badges */}
//               <div className="flex flex-wrap gap-3">
//                 {report.languages.map((lang: string, i: number) => (
//                   <span
//                     key={i}
//                     className="px-4 py-2 rounded-lg border border-black dark:border-white text-black dark:text-white font-bold text-sm uppercase tracking-wide"
//                   >
//                     {lang}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* ================== Frameworks ================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="p-8 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm"
//           >
//             <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
//               <Server className="w-7 h-7" /> Frameworks
//             </h2>

//             <div className="flex flex-wrap gap-3">
//               {report.frameworks.map((fw: string) => (
//                 <span
//                   key={fw}
//                   className="px-4 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black font-bold text-sm uppercase tracking-wide"
//                 >
//                   {fw}
//                 </span>
//               ))}
//             </div>
//           </motion.div>

//           {/* ================== Libraries ================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="p-8 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm"
//           >
//             <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
//               <Box className="w-7 h-7" /> Libraries Used
//             </h2>

//             <div className="flex flex-wrap gap-3">
//               {report.libraries.map((lib: string) => (
//                 <span
//                   key={lib}
//                   className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-sm font-medium border border-gray-200 dark:border-gray-800"
//                 >
//                   {lib}
//                 </span>
//               ))}
//             </div>
//           </motion.div>

//           {/* ================== Database ================== */}
//           {report.database && (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="p-8 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm"
//             >
//               <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
//                 <Database className="w-7 h-7" /> Database
//               </h2>

//               <p className="text-xl font-medium">{report.database}</p>
//             </motion.div>
//           )}

//           {/* ================== Strengths ================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="p-8 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm"
//           >
//             <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
//               ⭐ Strengths
//             </h2>

//             <ul className="list-disc ml-5 space-y-3 text-lg text-gray-800 dark:text-gray-200">
//               {report.strengths.map((item: string, i: number) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* ================== Weaknesses ================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="p-8 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm"
//           >
//             <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
//               <Bug className="w-7 h-7" /> Weaknesses
//             </h2>

//             <ul className="list-disc ml-5 space-y-3 text-lg text-gray-800 dark:text-gray-200">
//               {report.weaknesses.map((item: string, i: number) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* ================== Recommendations ================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="p-8 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm"
//           >
//             <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
//               Recommendations
//             </h2>

//             <ul className="list-disc ml-5 space-y-3 text-lg text-gray-800 dark:text-gray-200">
//               {report.recommendations.map((item: string, i: number) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/lib/authGuard";
import api from "@/lib/api";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import {
  Code,
  Server,
  Box,
  Database,
  Bug
} from "lucide-react";

export default function TechStackPage() {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) router.push("/auth/login");
  }, []);

  const [repo, setRepo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [report, setReport] = useState<any>(null);

  const handleGenerate = async () => {
    if (!repo) {
      setError("Please enter a GitHub repo URL.");
      return;
    }
    setError("");
    setReport(null);
    setLoading(true);

    try {
      const res = await api.post("api/tech", { repo });
      setReport(res.data.report);
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to analyze tech stack.");
    }

    setLoading(false);
  };

  useTheme(); // needed for dark mode refresh

  return (
    <section className="relative min-h-screen px-6 py-24 bg-white dark:bg-black text-black dark:text-white flex flex-col items-center transition-all">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-10 text-center tracking-tight"
      >
        Tech Stack Analyzer
      </motion.h1>

      {/* Input Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl p-8 rounded-2xl 
                   bg-white/60 dark:bg-black/40 
                   border border-gray-200 dark:border-gray-800 
                   shadow-xl backdrop-blur-xl mb-14"
      >
        <label className="text-lg font-semibold">GitHub Repository URL</label>

        <input
          className="w-full mt-3 p-4 rounded-xl 
                     bg-gray-100 dark:bg-gray-900/60
                     border border-gray-300 dark:border-gray-700 
                     outline-none text-black dark:text-white 
                     focus:border-black dark:focus:border-white
                     transition-all shadow-inner"
          placeholder="https://github.com/username/repo"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
        />

        {error && (
          <p className="text-red-500 mt-3 text-sm font-medium">
            {error}
          </p>
        )}

        <button
          onClick={handleGenerate}
          className="mt-6 w-full p-4 rounded-xl 
                     text-white bg-black dark:bg-white 
                     dark:text-black font-semibold text-lg
                     hover:opacity-90 transition shadow-md"
        >
          {loading ? "Analyzing…" : "Analyze Tech Stack"}
        </button>
      </motion.div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="w-full max-w-3xl space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full h-24 bg-gray-50 dark:bg-gray-900 animate-pulse rounded-2xl border border-gray-200 dark:border-gray-800"
            />
          ))}
        </div>
      )}

      {/* Results */}
      {!loading && report && (
        <div className="w-full max-w-5xl space-y-12 mb-20">

          {/* LANGUAGES BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-2xl bg-white/70 dark:bg-black/40 
                       border border-gray-300 dark:border-gray-800 
                       shadow-xl backdrop-blur-xl transition-all"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
              <Code className="w-7 h-7" /> Languages Detected
            </h2>

            <div className=" items-start">

              {/* Left Panel (modern list) */}
              <div className="w-full p-6 rounded-xl 
                              flex flex-col gap-2 transition-all">
                

                <div className="flex flex-wrap gap-3">
                  {report.languages.map((lang: string, i: number) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-lg 
                                 bg-black dark:bg-white 
                                 text-white dark:text-black 
                                 text-sm font-semibold tracking-wide shadow-sm"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              </div>

           

            </div>
          </motion.div>

          {/* FRAMEWORKS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-white/70 dark:bg-black/40 
                       border border-gray-300 dark:border-gray-800 
                       shadow-xl backdrop-blur-xl transition-all"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
              <Server className="w-7 h-7" /> Frameworks
            </h2>

            <div className="flex flex-wrap gap-3">
              {report.frameworks.map((fw: string) => (
                <span
                  key={fw}
                  className="px-4 py-2 rounded-lg bg-black dark:bg-white 
                             text-white dark:text-black font-bold text-sm uppercase tracking-wide shadow-sm"
                >
                  {fw}
                </span>
              ))}
            </div>
          </motion.div>

          {/* LIBRARIES */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-white/70 dark:bg-black/40 
                       border border-gray-300 dark:border-gray-800 
                       shadow-xl backdrop-blur-xl transition-all"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
              <Box className="w-7 h-7" /> Libraries Used
            </h2>

            <div className="flex flex-wrap gap-3">
              {report.libraries.map((lib: string) => (
                <span
                  key={lib}
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 
                             text-sm font-medium border border-gray-300 dark:border-gray-700 shadow-sm"
                >
                  {lib}
                </span>
              ))}
            </div>
          </motion.div>

          {/* DATABASE */}
          {report.database && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl bg-white/70 dark:bg-black/40 
                         border border-gray-300 dark:border-gray-800 
                         shadow-xl backdrop-blur-xl transition-all"
            >
              <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
                <Database className="w-7 h-7" /> Database
              </h2>
              <p className="text-xl font-medium">{report.database}</p>
            </motion.div>
          )}

          {/* STRENGTHS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-white/70 dark:bg-black/40 
                       border border-gray-300 dark:border-gray-800 
                       shadow-xl backdrop-blur-xl transition-all"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
               Strengths
            </h2>

            <ul className="list-disc ml-5 space-y-3 text-lg text-gray-800 dark:text-gray-200">
              {report.strengths.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* WEAKNESSES */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-white/70 dark:bg-black/40 
                       border border-gray-300 dark:border-gray-800 
                       shadow-xl backdrop-blur-xl transition-all"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
              <Bug className="w-7 h-7" /> Weaknesses
            </h2>

            <ul className="list-disc ml-5 space-y-3 text-lg text-gray-800 dark:text-gray-200">
              {report.weaknesses.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* RECOMMENDATIONS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-white/70 dark:bg-black/40 
                       border border-gray-300 dark:border-gray-800 
                       shadow-xl backdrop-blur-xl transition-all"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
               Recommendations
            </h2>

            <ul className="list-disc ml-5 space-y-3 text-lg text-gray-800 dark:text-gray-200">
              {report.recommendations.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>

        </div>
      )}
    </section>
  );
}
