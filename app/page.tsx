import Link from "next/link";

export default function Home() {
  return (
      <div className="mt-3">
        <ul>
        <li><Link href={"plan"}> Plan</Link></li>
        <li><Link href={"opportunities"}> Opportunities</Link></li>
        </ul>
      </div>
  );
}
