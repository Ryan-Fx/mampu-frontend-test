import { User } from "@/types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getUsers(): Promise<User[]> {
  const res = await fetch(API_URL, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function getUserDetail(id: number) {
  const res = await fetch(`${API_URL}/${id}`);

  if (!res.ok) throw new Error("Failed to fetch user detail");
  return res.json();
}
