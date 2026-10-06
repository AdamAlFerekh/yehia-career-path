import Link from "next/link";
import { opportunities } from "@/data/opportunities";

export default function Opportunities() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Explore
          </p>

          <h1 className="mb-3 text-4xl font-bold text-gray-900">
            Opportunities
          </h1>

          <p className="text-gray-500">
            Discover new opportunities and take the next step in your career.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity) => {
            const destination = `/opportunities/${opportunity.id}`;

            return (
              <div
                key={opportunity.id}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5">
                  <h2 className="text-xl font-bold text-gray-900">
                    {opportunity.title}
                  </h2>

                  <p className="mt-2 font-medium text-gray-600">
                    {opportunity.company}
                  </p>
                </div>

                <div className="mb-6 space-y-2 text-sm text-gray-500">
                  <p>
                    <span className="font-semibold text-gray-700">
                      Location:
                    </span>{" "}
                    {opportunity.location}
                  </p>
                </div>

                <Link
                  href={destination}
                  className="mt-auto rounded-xl bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  View Opportunity →
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 transition hover:text-blue-800"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
