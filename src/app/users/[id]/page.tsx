import { getUserDetail } from "@/lib/api";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const user = await getUserDetail(Number(params.id));

  return {
    title: `${user.name} | User Details`,
    description: `Details and profile info for user ${user.name}`,
  };
}
export default function UserDetail() {
  return <div>UserDetail</div>;
}
