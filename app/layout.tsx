import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yehia's Job Tracker",
  description: "Track job opportunities, applications, and career progress.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="flex flex-wrap justify-center gap-2 border-b border-gray-200 bg-white px-6 py-4">
          <Link
            href="/"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/plan"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Plan
          </Link>

          <Link
            href="/opportunities"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Opportunities
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Dashboard
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
