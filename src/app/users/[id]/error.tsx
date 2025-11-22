"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center lg:text-lg space-y-2 lg:space-y-4">
      <h2 className="text-xl font-semibold">Something went wrong!</h2>
      <p className="text-muted-foreground">{error.message}</p>
      <Button className="cursor-pointer" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
