import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User } from "@/types/user";

interface UserDetailProps {
  user: User;
}

export default function UserDetailCard({ user }: UserDetailProps) {
  return (
    <Card className="max-w-xl mx-auto shadow-2xl lg:p-10 lg:hover:scale-105 transition duration-300">
      <CardHeader>
        <CardTitle className="text-lg lg:text-xl font-semibold text-center">
          {user.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 text-sm max-w-3xl">
        <div className="space-y-1">
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              className="text-blue-600 underline hover:opacity-80"
            >
              {user.website}
            </a>
          </p>
        </div>

        <div className="pt-2 border-t">
          <strong>Company:</strong>
          <p className="ml-2 font-medium">{user.company.name}</p>
          <p className="ml-2 italic text-gray-600 text-xs">
            “{user.company.catchPhrase}”
          </p>
        </div>

        <div className="pt-2 border-t">
          <strong>Address:</strong>
          <div className="ml-2 text-gray-700 text-sm">
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
