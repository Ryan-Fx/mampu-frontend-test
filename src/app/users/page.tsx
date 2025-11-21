import UsersTable from "@/components/users/users-table";
import { getUsers } from "@/lib/api";

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
