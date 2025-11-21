import { getUsers } from "@/lib/api";

export default async function UserPage() {
  const users = await getUsers();
  console.log(users);

  return <div>UserPage</div>;
}
