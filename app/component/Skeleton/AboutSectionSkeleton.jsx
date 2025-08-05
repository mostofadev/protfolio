"use client";
import { useTheme } from "@/app/context/ThemeContext"; // যদি তুমি এই কনটেক্সট ইউজ করো
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AboutSectionSkeleton = () => {
  const { theme } = useTheme(); // 'dark' or 'light'

  const baseColor = theme === "dark" ? "#e2e8f0" : "#1a202c" ;       // dark: gray-900, light: gray-300
  const highlightColor = theme === "dark" ? "#f7fafc" : "#2d3748";  // dark: gray-800, light: gray-100

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <section className="py-16 md:py-24 bg-[var(--bg-one)] animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Skeleton */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-square max-w-md mx-auto">
                <Skeleton height={400} className="rounded-xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <Skeleton width={100} height={60} className="rounded-xl" />
              </div>
            </div>

            {/* Content Skeleton */}
            <div className="space-y-4">
              <Skeleton height={36} width={200} />
              <Skeleton count={2} height={20} />
              <Skeleton count={2} height={20} width="95%" />
              <div className="grid grid-cols-2 gap-4 pt-4">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Skeleton circle height={32} width={32} />
                      <Skeleton height={20} width={100} />
                    </div>
                  ))}
              </div>
              <div className="pt-6">
                <Skeleton height={48} width={160} borderRadius={8} />
              </div>
            </div>
          </div>

          {/* Skills Section Skeleton */}
          <div className="mt-16 md:mt-24 bg-[var(--bg-two)] rounded-2xl p-8 md:p-12 space-y-6">
            <div className="flex items-center justify-center mb-6">
              <Skeleton height={28} width={180} className="mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="space-y-2">
                    <Skeleton height={20} width={100} />
                    <Skeleton height={8} width="100%" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </SkeletonTheme>
  );
};

export default AboutSectionSkeleton;
