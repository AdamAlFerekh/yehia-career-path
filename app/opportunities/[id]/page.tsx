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
      <main>
        <h1>Opportunity not found</h1>
        <Link href="/opportunities"> ← Back to opportunities </Link>
      </main>
    );
  }
  return (
    <main>
      <h1>{selectedOpportunity.title}</h1>
      <p>Company: {selectedOpportunity.company}</p>
      <p>Location: {selectedOpportunity.location}</p>
      <p>{selectedOpportunity.description}</p>
      <Link href="/opportunities"> ← Back to opportunities </Link>
    </main>
  );
}
