// src/app/users/[id]/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface UserDetail {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

// ---- SEO Metadata ----
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  ).then((res) => res.json());

  return {
    title: `${user.name} | User Details`,
    description: `Details and profile info for user ${user.name}`,
  };
}

// ---- Main Page ----
export default async function UserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const user: UserDetail = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  ).then((res) => res.json());

  return (
    <div className="container mx-auto py-6 space-y-4">
      <Link href="/users">
        <Button variant="outline">⬅ Back to list</Button>
      </Link>

      <Card className="max-w-xl mx-auto">
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
