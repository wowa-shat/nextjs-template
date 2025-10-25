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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation Bar */}
        <header className="w-full bg-black shadow-sm sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
            
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold white">
              Default Logo
            </Link>

            {/* Navigation Links */}
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
