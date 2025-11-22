"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function UsersSkeleton() {
  return (
    <main className="w-full p-4 lg:p-8">
      <div className="space-y-6">
        {/* Page Title Skeleton */}
        <div className="flex justify-center">
          <Skeleton
            className="h-8 w-48 lg:h-10 lg:w-64"
            data-testid="skeleton"
          />
        </div>

        {/* Search + Sort Controls Skeleton */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <Skeleton
            className="h-7 lg:h-8 w-full md:w-72"
            data-testid="skeleton"
          />
          <Skeleton
            className="h-7 lg:h-8 w-full md:w-40"
            data-testid="skeleton"
          />
        </div>

        {/* Desktop Table Skeleton */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 text-left">
                  <Skeleton
                    className="h-4 lg:h-6 w-20"
                    data-testid="skeleton"
                  />
                </th>
                <th className="py-2 text-left">
                  <Skeleton
                    className="h-4 lg:h-6 w-24"
                    data-testid="skeleton"
                  />
                </th>
                <th className="py-2 text-left">
                  <Skeleton
                    className="h-4 lg:h-6 w-20"
                    data-testid="skeleton"
                  />
                </th>
              </tr>
            </thead>

            {/* Skeleton Rows */}
            <tbody>
              {Array.from({ length: 8 }).map((_, i) => (
                <tr key={i}>
                  <td className="py-4">
                    <Skeleton
                      className="h-4 lg:h-6 w-52"
                      data-testid="skeleton"
                    />
                  </td>
                  <td>
                    <Skeleton
                      className="h-4 lg:h-6 w-52"
                      data-testid="skeleton"
                    />
                  </td>
                  <td>
                    <Skeleton
                      className="h-4 lg:h-6 w-42"
                      data-testid="skeleton"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card List Skeleton */}
        <div className="md:hidden space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="p-3 space-y-2">
              <Skeleton className="h-4 w-40" data-testid="skeleton" />
              <Skeleton className="h-4 w-52" data-testid="skeleton" />
              <Skeleton className="h-4 w-32" data-testid="skeleton" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
