"use client";

import { useMemo, useState } from "react";
import type { User } from "@/types/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

interface UsersProps {
  users: User[];
}

export default function UsersTable({ users }: UsersProps) {
  const [query, setQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const router = useRouter();

  const filteredUsers = useMemo(() => {
    const filtered = users.filter((user) =>
      `${user.name} ${user.email}`.toLowerCase().includes(query.toLowerCase())
    );

    return filtered.sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
  }, [users, query, sortAsc]);

  return (
    <section className="space-y-4">
      {/* Search + Sort Controls */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between relative">
        <Input
          type="text"
          placeholder="Search name or email..."
          className="w-full md:w-72 pl-8"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Search className="hidden md:inline-block absolute size-5 left-2 top-1/2 -translate-y-1/2 text-gray-500" />

        <Button variant="outline" onClick={() => setSortAsc((prev) => !prev)}>
          Sort by Name ({sortAsc ? "A → Z" : "Z → A"})
        </Button>
      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <p className="text-gray-500 text-center py-10">No users found.</p>
      )}

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        {/* Desktop Table */}
        <Table className="hidden md:table">
          <TableCaption>User List</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Website</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow
                key={user.id}
                className="hover:bg-muted/60 cursor-pointer transition-colors"
                role="button"
                tabIndex={0}
                onClick={() => router.push(`/users/${user.id}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") router.push(`/users/${user.id}`);
                }}
              >
                <TableCell className="py-4">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-blue-500">{user.website}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {filteredUsers.map((user) => (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className="block border rounded p-3 shadow-md hover:bg-muted transition-colors"
            >
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-blue-500 break-all">{user.website}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
