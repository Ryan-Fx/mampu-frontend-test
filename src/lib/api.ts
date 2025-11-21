import { User } from "@/types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getUsers(): Promise<User[]> {
  const res = await fetch(API_URL, {
    next: { revalidate: 60 },
  });

  return res.json();
}
