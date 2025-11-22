"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function UsersSkeleton() {
  return (
    <main className="w-full p-4 lg:p-8">
      <div className="space-y-6">
        {/* Page Title Skeleton */}
        <div className="flex justify-center">
          <Skeleton className="h-8 w-48 lg:h-10 lg:w-64" />
        </div>

        {/* Search + Sort Controls */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <Skeleton className="h-10 w-full md:w-72" />
          <Skeleton className="h-10 w-full md:w-40" />
        </div>

        {/* Desktop Table Skeleton */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="">
                <th className="py-2 text-left">
                  <Skeleton className="h-4 w-20" />
                </th>
                <th className="py-2 text-left">
                  <Skeleton className="h-4 w-24" />
                </th>
                <th className="py-2 text-left">
                  <Skeleton className="h-4 w-20" />
                </th>
              </tr>
            </thead>

            {/* Skeleton Rows */}
            <tbody>
              {Array.from({ length: 6 }).map((_, i) => (
                <tr key={i}>
                  <td className="py-4">
                    <Skeleton className="h-4 w-40" />
                  </td>
                  <td>
                    <Skeleton className="h-4 w-52" />
                  </td>
                  <td>
                    <Skeleton className="h-4 w-42" />
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
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-52" />
              <Skeleton className="h-4 w-32" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
