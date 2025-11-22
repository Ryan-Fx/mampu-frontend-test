import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getUserDetail } from "@/lib/api";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import UserDetailCard from "@/components/users/user-detail-card";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const user = await getUserDetail(Number(id));

  return {
    title: `${user.name} | User Detail`,
    description: `Detail information for user ${user.name} including email, phone, company, and address.`,
  };
}

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUserDetail(Number(id));

  return (
    <main className="w-full p-4 lg:p-8">
      <div className={cn("space-y-4 lg:space-y-8", poppins.className)}>
        <h1 className="text-2xl lg:text-3xl font-semibold text-center">
          User Detail
        </h1>

        <UserDetailCard user={user} />

        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/users">Back to Users List</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
