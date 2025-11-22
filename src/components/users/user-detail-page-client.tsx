"use client";

import UserDetailCard from "./user-detail-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { User } from "@/types/user";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

interface Props {
  user: User;
}

export default function UserDetailPageClient({ user }: Props) {
  return (
    <main className="w-full p-4 lg:p-8">
      <div className={cn("space-y-8 lg:space-y-12", poppins.className)}>
        <h1 className="text-xl lg:text-2xl font-semibold text-center">
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
