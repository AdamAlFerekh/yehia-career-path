import "@/app/globals.css";
import Link from "next/link";

export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return (
    <section>
        <nav className="flex justify-center gap-6 border-b bg-blue-600 px-4 py-4 text-white mb-3">
          <Link href="/dashboard" className="hover:underline">
            Overview
          </Link>
          <Link href="/dashboard/applications" className="hover:underline">
            Applications
          </Link>
        </nav>
        {children}
        </section>
  );
}
