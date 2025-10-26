import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Default Title",
  description: "Default Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-black ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
          <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
            
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-black dark:text-white"> Default Logo </Link>

            {/* Navigation Links */}
            <div className="flex gap-6">
              <Link href="/" className="link max-w-md text-lg leading-8"> Home </Link>
              <Link href="/about" className="link max-w-md text-lg leading-8">
                About
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto p-6">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="w-full bg-white dark:bg-black py-6 mt-8">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6">
            {/* Left side - Logo or brand name */}
            <Link href="/" className="text-lg font-semibold text-black dark:text-white"> Default Logo </Link>

            {/* Center - Navigation links */}
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="link"> About </Link>
              <Link href="#" className="link"> Privacy Policy </Link>
            </div>

            {/* Right side - Copyright */}
            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Default Title. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}