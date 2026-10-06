import { applications } from "@/data/applications";

export default function Dashboard() {
  const applicationCount = applications.length;
  const goal = 10;
  const progress = Math.min((applicationCount / goal) * 100, 100);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Your Progress
        </p>

        <h1 className="mb-3 text-4xl font-bold text-gray-900">
          Dashboard Overview
        </h1>

        <p className="mb-10 text-gray-500">
          Keep applying and keep moving forward.
        </p>
        <div className="mb-8">
          <div className="text-7xl font-bold text-gray-900">
            {applicationCount}
          </div>

          <p className="mt-2 text-lg text-gray-500">
            Applications submitted
          </p>
        </div>

        <div className="mb-4 flex items-center justify-between text-sm font-medium">
          <span className="text-gray-600">Completion</span>
          <span className="text-blue-600">{Math.round(progress)}%</span>
        </div>

        <div className="h-4 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-6 rounded-2xl bg-blue-50 p-5">
          <p className="font-semibold text-blue-900">
            {applicationCount >= goal
              ? "🎉 Goal completed!"
              : `${goal - applicationCount} more applications to reach your goal!`}
          </p>

          <p className="mt-1 text-sm text-blue-700">
            Every application is another step forward.
          </p>
        </div>
      </div>
    </main>
  );
}
