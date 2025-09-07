import type { Metadata } from "next";
import '../styles/globals.css'
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A clean and professional portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-mono">
        {/* Navigation bar visible on every page */}
        <Navigation />
        
        {/* Page content */}
        <main className="flex-grow bg-background-color">{children}</main>
        
        {/* Footer */}
        <footer className="bg-surface text-center py-4 text-sm text-accent-hover">
          © {new Date().getFullYear()} Eros Anthony Serrano. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
