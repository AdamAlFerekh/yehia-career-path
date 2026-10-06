import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl">
        <section className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-xl sm:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Yehia's Job Journey
          </p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Welcome to Yehia's Job Tracker
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            Yehia is a recent Computer Science graduate from the Lebanese
            University First Branch, looking to find a job within the next
            two months.
          </p>
          <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-blue-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Current Goal
            </p>

            <p className="mt-2 text-2xl font-bold text-blue-900">
              Find a job within two months
            </p>

            <p className="mt-2 text-sm text-blue-700">
              Explore opportunities, track applications, and stay consistent
              with the plan.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/dashboard"
              className="rounded-xl border border-gray-200 bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              View Dashboard
            </Link>

            <Link
              href="/plan"
              className="rounded-xl border border-gray-200 bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              View My Plan
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

