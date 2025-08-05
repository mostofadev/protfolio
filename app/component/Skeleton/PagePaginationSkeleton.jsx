"use client";

export default function PagePaginationSkeleton() {
  return (
    <div className="flex items-center justify-center space-x-2 mt-6 animate-pulse">
      {/* Prev Skeleton */}
      <div className="w-14 h-8 bg-gray-300 rounded" />

      {/* Page Number Skeletons */}
      {[...Array(5)].map((_, idx) => (
        <div key={idx} className="w-10 h-8 bg-gray-300 rounded" />
      ))}

      {/* Next Skeleton */}
      <div className="w-14 h-8 bg-gray-300 rounded" />
    </div>
  );
}
