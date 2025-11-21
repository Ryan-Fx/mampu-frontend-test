import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getUserDetail } from "@/lib/api";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "container mx-auto py-6 space-y-4 p-4 lg:p-8",
        poppins.className
      )}
    >
      <Button asChild variant="outline">
        <Link href="/users">Back to Users</Link>
      </Button>

      <Card className="max-w-xl mx-auto shadow-2xl">
        <CardHeader>
          <CardTitle className="text-xl">{user.name}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>

          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              className="text-blue-600 underline"
            >
              {user.website}
            </a>
          </p>

          <div>
            <strong>Company:</strong>
            <p className="ml-2">{user.company.name}</p>
            <p className="ml-2 italic text-sm">{user.company.catchPhrase}</p>
          </div>

          <div>
            <strong>Address:</strong>
            <p className="ml-2">
              {user.address.street}, {user.address.suite}
            </p>
            <p className="ml-2">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
