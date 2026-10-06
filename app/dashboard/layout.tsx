import "@/app/globals.css";
import Link from "next/link";

export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return (
    <section>
      <nav className="mb-6 flex flex-wrap justify-center gap-2 border-b border-blue-100 bg-blue-50 px-4 py-3">
        <Link
          href="/dashboard"
          className="rounded-lg px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
        >
          Overview
        </Link>

        <Link
          href="/dashboard/applications"
          className="rounded-lg px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
        >
          Applications
        </Link>
      </nav>
      {children}
    </section>
  );
}
