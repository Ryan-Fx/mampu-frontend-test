"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function UserDetailSkeleton() {
  return (
    <main className="w-full p-4 lg:p-8 animate-in fade-in-0">
      <div className="space-y-6 lg:space-y-10">
        {/* Heading */}
        <div className="flex justify-center">
          <Skeleton className="h-8 w-44 lg:h-10 lg:w-56" />
        </div>

        {/* Card Skeleton */}
        <div className="max-w-xl mx-auto border rounded-lg p-6 shadow-sm space-y-5">
          {/* Name */}
          <Skeleton className="h-5 lg:h-6 w-52 mx-auto mb-8" />

          {/* Username */}
          <Skeleton className="h-5 w-40" />

          {/* Email */}
          <Skeleton className="h-5 w-52 lg:w-60" />

          {/* Phone */}
          <Skeleton className="h-5 w-44" />

          {/* Website */}
          <Skeleton className="h-5 w-48" />

          {/* Company */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-48" />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>

        {/* Back Button skeleton sizing match */}
        <div className="flex justify-center">
          <Skeleton className="h-8 w-48 rounded-md" />
        </div>
      </div>
    </main>
  );
}
