import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const tasks = [
  {
    title: "Setup & Tools",
    description:
      "Next.js 16 (App Router), TypeScript, Tailwind CSS + Shadcn UI, Jest + RTL, dev server berjalan lancar.",
  },
  {
    title: "Users List Page (/users)",
    description:
      "Fetch data API, responsive table (Name, Email, Website), loading skeleton, error state, search & sort, accessible table semantics.",
  },
  {
    title: "User Detail Page (/users/[id])",
    description:
      "Fetch user detail API, card UI (Name, Username, Email, Phone, Website, Company, Address), loading & error states, Back to list link, SEO metadata.",
  },
  {
    title: "Styling & UX",
    description:
      "Modern layout, responsive mobile + desktop, skeleton UI, empty state messages, accessible & polished design.",
  },
  {
    title: "Testing",
    description:
      "Users List: rows render, search filter, loading & error states. User Detail: detail render, loading & error states. Jest + RTL with mocked network calls.",
  },
  {
    title: "Bonus",
    description:
      "ISR: cache users for e.g. 60s with fetch({ next: { revalidate: 60 }}). Pagination on users page (users table).",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Mampu Take-Home Test – Frontend Implementation
      </h1>
      <p className="text-center text-gray-600 font-medium mb-8">
        Tech stack: Next.js 16, TypeScript, Tailwind CSS, Shadcn UI, Jest + RTL.
      </p>

      <div className="grid gap-4 lg:gap-6 md:grid-cols-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 shadow-2xl lg:hover:scale-105 transition duration-300"
          >
            <div className="flex items-center mb-3">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              <h2 className="text-lg font-semibold">{task.title}</h2>
            </div>
            <p className="text-gray-700 text-sm">{task.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center space-y-2 md:space-y-0 md:flex justify-center items-center md:space-x-4">
        <p className="text-gray-600">All tasks completed ✅</p>

        <Button asChild>
          <Link href="/users">Go to Users Page</Link>
        </Button>
      </div>
    </div>
  );
}
