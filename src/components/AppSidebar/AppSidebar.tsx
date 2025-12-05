"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Wrench,
  FileText,
  BookOpen,
  Layers,
  Settings,
  LogOut,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Generate Tests",
    href: "/generate",
    icon: Wrench,
  },
  {
    title: "API Docs",
    href: "/docs",
    icon: BookOpen,
  },
  {
    title: "README",
    href: "/readme",
    icon: FileText,
  },
  {
    title: "Tech Stack",
    href: "/tech",
    icon: Layers,
  },
];

interface AppSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AppSidebar({ isOpen, onClose }: AppSidebarProps) {
  const pathname = usePathname();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, []);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [pathname]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed left-0 top-0 h-screen w-64 flex flex-col bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 z-50 transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-800">
          <Link href="/dashboard" className="text-xl font-bold tracking-tight">
            RepoPaglu
          </Link>
          {/* Close Button (Mobile) */}
          <button 
            className="lg:hidden text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-black dark:hover:text-white"
                )}
              >
                <item.icon size={18} />
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Footer / User */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
          
          
          <div className="flex items-center gap-3 px-3 py-2.5">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <User size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.name || "User"}</p>
              <p className="text-xs text-gray-500 truncate">{user?.email || "user@example.com"}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
