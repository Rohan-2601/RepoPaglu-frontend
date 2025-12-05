"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppHeader from "@/components/AppHeader/AppHeader";
import AppSidebar from "@/components/AppSidebar/AppSidebar";
import Footer from "@/components/Footer";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      router.push("/auth/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-white dark:bg-black">
      {/* SIDEBAR (Desktop + Mobile) */}
      <AppSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <div className="flex-1 flex flex-col min-h-screen lg:pl-64 transition-all duration-300">
        {/* HEADER */}
        <AppHeader 
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full p-6 lg:p-10 max-w-7xl mx-auto">
          {children}
        </main>

        <div className="p-6 lg:px-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
