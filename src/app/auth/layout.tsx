import React from "react";

export const metadata = {
  title: "Authentication | RepoPaglu",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
