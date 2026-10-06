import { applications } from "@/data/applications";

export default function Applications() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Applications
          </p>

          <h1 className="mb-3 text-4xl font-bold text-gray-900">
            My Applications
          </h1>

          <p className="text-gray-500">
            Here are the opportunities you have applied for.
          </p>
        </div>


        <div className="space-y-4">
          {applications.map((application, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {application.opportunity}
                  </h2>

                  <p className="mt-1 text-gray-500">
                    {application.company}
                  </p>
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                  {application.status}
                </span>
              </div>

              <div className="mt-5 border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-500">
                  Application #{index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
