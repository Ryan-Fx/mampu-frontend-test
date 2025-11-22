import UsersTable from "@/components/users/users-table";
import { getUsers } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Take-Home Test | Users List",
  description:
    "Browse a list of users fetched from JSONPlaceholder. Includes name, email, and website displayed in a responsive table format.",
};

export default async function UserPage() {
  const users = await getUsers();
  // console.log(users);

  return (
    <main className="w-full p-4 lg:p-8">
      <div className="space-y-4 lg:space-y-6">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center">
          Users List
        </h1>
        <UsersTable users={users} />
      </div>
    </main>
  );
}
