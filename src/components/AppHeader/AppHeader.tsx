"use client";

import { useRouter } from "next/navigation";
import { LogOut, Menu, Moon } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

interface AppHeaderProps {
  onMenuClick?: () => void;
}

export default function AppHeader({ onMenuClick }: AppHeaderProps) {
  const router = useRouter();

  return (
    <header className="w-full z-30 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-6 py-3 sticky top-0 lg:pl-72">
      <div className="flex items-center justify-between h-10">
        
        {/* Mobile Menu Trigger (Visible only on mobile) */}
        <button 
          className="lg:hidden text-gray-600 dark:text-gray-300 p-1 -ml-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
          onClick={onMenuClick}
        >
          <Menu size={24} />
        </button>

        {/* Spacer for desktop alignment if needed, or Breadcrumbs */}
        <div className="hidden lg:block text-sm font-medium text-gray-500">
          {/* Breadcrumbs could go here */}
        </div>

        {/* RIGHT — ACTIONS */}
        <div className="flex items-center gap-4 ml-auto">
          
          <AnimatedThemeToggler />

          <button
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm 
                       bg-gray-100 hover:bg-gray-200 
                       dark:bg-gray-800 dark:hover:bg-gray-700 
                       text-gray-700 dark:text-gray-300 transition"
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/auth/login");
            }}
          >
            <LogOut size={14} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
