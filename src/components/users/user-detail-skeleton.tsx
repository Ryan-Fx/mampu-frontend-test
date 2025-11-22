import { Skeleton } from "@/components/ui/skeleton";

export default function UserDetailSkeleton() {
  return (
    <main className="w-full p-4 lg:p-8 animate-in fade-in-0">
      <div className="space-y-6 lg:space-y-10">
        {/* Heading */}
        <div className="flex justify-center">
          <Skeleton
            className="h-8 w-44 lg:h-10 lg:w-56"
            data-testid="skeleton"
          />
        </div>

        {/* Card Skeleton */}
        <div className="max-w-xl mx-auto border rounded-lg p-6 shadow-sm space-y-5">
          {/* Name */}
          <Skeleton
            className="h-5 lg:h-6 w-52 mx-auto mb-8"
            data-testid="skeleton"
          />

          {/* Username */}
          <Skeleton className="h-5 w-40" data-testid="skeleton" />

          {/* Email */}
          <Skeleton className="h-5 w-52 lg:w-60" data-testid="skeleton" />

          {/* Phone */}
          <Skeleton className="h-5 w-44" data-testid="skeleton" />

          {/* Website */}
          <Skeleton className="h-5 w-48" data-testid="skeleton" />

          {/* Company */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" data-testid="skeleton" />
            <Skeleton className="h-4 w-40" data-testid="skeleton" />
            <Skeleton className="h-4 w-48" data-testid="skeleton" />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" data-testid="skeleton" />
            <Skeleton className="h-4 w-40" data-testid="skeleton" />
            <Skeleton className="h-4 w-40" data-testid="skeleton" />
          </div>
        </div>

        {/* Back Button skeleton */}
        <div className="flex justify-center">
          <Skeleton className="h-8 w-48 rounded-md" data-testid="skeleton" />
        </div>
      </div>
    </main>
  );
}
