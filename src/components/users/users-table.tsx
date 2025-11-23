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
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  const ITEMS_PER_PAGE = 5;

  const filteredUsers = useMemo(() => {
    const filtered = users.filter((user) =>
      `${user.name} ${user.email}`.toLowerCase().includes(query.toLowerCase())
    );

    return filtered.sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
  }, [users, query, sortAsc]);

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="space-y-4">
      {/* search + sort controls */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between relative">
        <Input
          type="text"
          placeholder="Search name or email..."
          className="w-full md:w-72 md:pl-8"
          value={query}
          onChange={(e) => {
            setCurrentPage(1);
            setQuery(e.target.value);
          }}
        />

        <Search className="hidden md:inline-block md:absolute md:size-4 size-5 left-2 top-1/2 -translate-y-1/2 text-gray-500" />

        <Button
          className="cursor-pointer"
          variant="outline"
          onClick={() => {
            setCurrentPage(1);
            setSortAsc((prev) => !prev);
          }}
        >
          Sort by Name ({sortAsc ? "A → Z" : "Z → A"})
        </Button>
      </div>

      {/* empty state */}
      {filteredUsers.length === 0 && (
        <p className="text-gray-500 text-center py-10">No users found.</p>
      )}

      {filteredUsers.length > 0 && (
        <>
          {/* responsive table */}
          <div className="overflow-x-auto">
            {/* desktop table */}
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
                {paginatedUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    data-testid={`desktop-user-row-${user.id}`}
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onClick={() => router.push(`/users/${user.id}`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") router.push(`/users/${user.id}`);
                    }}
                  >
                    <TableCell className="py-4">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="text-blue-500">
                      {user.website}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* mobile card view */}
            <div className="md:hidden space-y-3">
              {paginatedUsers.map((user) => (
                <Link
                  key={user.id}
                  href={`/users/${user.id}`}
                  data-testid={`mobile-user-row-${user.id}`}
                  className="block border rounded-md p-3 shadow-xl hover:bg-muted transition-colors"
                >
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <p className="text-sm text-blue-500 break-all">
                    {user.website}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* pagination */}
          <div className="fixed bottom-0 left-0 w-full bg-background border-t py-3 flex items-center justify-center gap-6 z-50">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </Button>

            <span className="text-sm">
              Page <strong>{currentPage}</strong> of{" "}
              <strong>{totalPages}</strong>
            </span>

            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </section>
  );
}
