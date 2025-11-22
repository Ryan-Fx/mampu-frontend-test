import type { User } from "@/types/user";

export function filterAndSortUsers(
  users: User[],
  query: string,
  sortAsc: boolean
) {
  return users
    .filter((user) =>
      `${user.name} ${user.email}`.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
}
