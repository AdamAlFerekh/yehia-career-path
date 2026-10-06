import Link from "next/link";
import { opportunities } from "@/data/opportunities";

export default async function OpportunityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const selectedOpportunity = opportunities.find(
    (opportunity) => opportunity.id === id,
  );

  if (!selectedOpportunity) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center px-6 py-10">
        <div className="w-full max-w-3xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-xl">
            <h1 className="text-3xl font-bold text-gray-900">
              Opportunity not found
            </h1>

            <Link
              href="/opportunities"
              className="mt-6 inline-block rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              ← Back to opportunities
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl sm:p-10">
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Job Opportunity
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {selectedOpportunity.title}
            </h1>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="text-sm font-medium text-gray-500">Company</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {selectedOpportunity.company}
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="text-sm font-medium text-gray-500">Location</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {selectedOpportunity.location}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Description
            </p>

            <p className="text-base leading-7 text-gray-600">
              {selectedOpportunity.description}
            </p>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <Link
              href="/opportunities"
              className="inline-flex rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
            >
              ← Back to opportunities
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
