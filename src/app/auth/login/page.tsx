"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { loginUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginUser(form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.error || "Login failed");
    }

    setLoading(false);
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 bg-white dark:bg-black transition-colors">
      
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#1a1a1a,transparent)] opacity-20" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-[400px] p-8 rounded-lg 
                   bg-white dark:bg-zinc-950 
                   border border-zinc-200 dark:border-zinc-800 
                   shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-none"
      >
        <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Welcome back
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Enter your credentials to access your account
            </p>
        </div>

        {error && (
          <div className="p-3 mb-4 text-sm text-red-500 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-300">Email</label>
            <input
                type="email"
                placeholder="name@example.com"
                className="w-full p-2.5 rounded-md bg-transparent
                        border border-zinc-300 dark:border-zinc-800 
                        text-zinc-900 dark:text-zinc-100 outline-none
                        focus:border-zinc-900 dark:focus:border-zinc-100 
                        focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 
                        placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                        transition-all text-sm"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Password w/ eye toggle */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-300">Password</label>
            <div className="relative">
                <input
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                className="w-full p-2.5 rounded-md bg-transparent
                            border border-zinc-300 dark:border-zinc-800 
                            text-zinc-900 dark:text-zinc-100 outline-none
                            focus:border-zinc-900 dark:focus:border-zinc-100 
                            focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 
                            placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                            transition-all text-sm"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <span
                className="absolute right-3 top-2.5 cursor-pointer text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
                onClick={() => setShowPass(!showPass)}
                >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
            </div>
          </div>

          {/* Button */}
          <button
            disabled={loading}
            className="mt-2 w-full p-2.5 rounded-md bg-zinc-900 dark:bg-zinc-100 
                       text-white dark:text-zinc-900 font-medium text-sm
                       hover:bg-zinc-800 dark:hover:bg-gray-200 
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-colors shadow-sm"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Switch Page */}
        <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Don&apos;t have an account?{" "}
          <span
            className="text-zinc-900 dark:text-zinc-100 font-medium cursor-pointer hover:underline underline-offset-4"
            onClick={() => router.push("/auth/register")}
          >
            Sign up
          </span>
        </p>
      </motion.div>
    </section>
  );
}
