import "./globals.css";
import "./globals.css";

export const metadata = {
  title: "RepoPaglu",
  description: "AI-powered repo → tests, docs, README generator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {/* MAIN CONTENT */}
        <div className="min-h-screen flex flex-col">
          <main className="flex-1 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}





