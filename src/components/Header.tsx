"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useRouter } from "next/navigation";

export default function Header() {

  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/80 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800 transition">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-black dark:text-white hover:opacity-80 transition"
        >
          RepoPaglu
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">



    

          {/* Theme Toggle */}
          <AnimatedThemeToggler />

          <button className="px-5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm hover:bg-gray-900 dark:hover:bg-gray-200 transition shadow-sm"
            onClick={() => router.push("/dashboard")}
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 py-4 space-y-4 bg-white/90 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 animate-fadein">

          <Link href="#features" className="block text-black dark:text-white text-lg">
            Features
          </Link>

          <Link href="#pricing" className="block text-black dark:text-white text-lg">
            Pricing
          </Link>

          {/* Theme Toggle in mobile menu */}
          <div className="pt-2">
            <AnimatedThemeToggler />
          </div>

          <button className="w-full px-5 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black text-sm transition hover:bg-gray-900 dark:hover:bg-gray-200">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}






