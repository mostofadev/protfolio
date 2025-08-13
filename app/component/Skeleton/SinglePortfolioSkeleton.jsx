"use client";

import React from "react";
import { useTheme } from "@/app/context/ThemeContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SinglePortfolioSkeleton() {
  const { theme } = useTheme();

  const baseColor = theme === "dark" ? "#e2e8f0" : "#2d3748";
  const highlightColor = theme === "dark" ? "#f0f4f8" : "#4a5568";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <Skeleton
          height={32}
          width={160}
          baseColor={baseColor}
          highlightColor={highlightColor}
          className="mx-auto mb-4 rounded-full"
        />
        <Skeleton
          height={48}
          width="75%"
          baseColor={baseColor}
          highlightColor={highlightColor}
          className="mx-auto mb-3 rounded-lg"
        />
        <Skeleton
          height={20}
          width="85%"
          baseColor={baseColor}
          highlightColor={highlightColor}
          className="mx-auto rounded"
        />
      </div>

      {/* Image placeholder */}
      <div className="relative rounded-2xl overflow-hidden  mb-12 aspect-video">
        <Skeleton
          height="100%"
          width="100%"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <Skeleton
          height={48}
          width={160}
          baseColor={baseColor}
          highlightColor={highlightColor}
          className="rounded-lg"
        />
        <Skeleton
          height={48}
          width={160}
          baseColor={baseColor}
          highlightColor={highlightColor}
          className="rounded-lg"
        />
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Left column skeletons */}
        <div className="space-y-6">
          <div className="bg-[var(--bg-two)] p-6 rounded-xl  border border-gray-200 dark:border-gray-700">
            <Skeleton
              height={24}
              width="50%"
              baseColor={baseColor}
              highlightColor={highlightColor}
              className="mb-4 rounded"
            />
            <Skeleton
              height={18}
              width="75%"
              baseColor={baseColor}
              highlightColor={highlightColor}
              className="mb-2 rounded"
            />
            <Skeleton
              height={18}
              width="35%"
              baseColor={baseColor}
              highlightColor={highlightColor}
              className="rounded"
            />
            <Skeleton
              height={28}
              width={100}
              baseColor={baseColor}
              highlightColor={highlightColor}
              className="mt-3 rounded-full"
            />
          </div>

          <div className="bg-[var(--bg-two)] p-6 rounded-xl  border border-gray-200 dark:border-gray-700">
            <Skeleton
              height={24}
              width="50%"
              baseColor={baseColor}
              highlightColor={highlightColor}
              className="mb-4 rounded"
            />
            <Skeleton
              height={18}
              width="25%"
              baseColor={baseColor}
              highlightColor={highlightColor}
              className="mb-2 rounded"
            />
            <Skeleton
              height={18}
              width="50%"
              baseColor={baseColor}
              highlightColor={highlightColor}
              className="rounded"
            />
          </div>
        </div>

        {/* Right column skeletons */}
        <div className="space-y-6">
          <div className="bg-[var(--bg-two)] p-6 rounded-xl  border border-gray-200 dark:border-gray-700">
            <Skeleton
              height={24}
              width="35%"
              baseColor={baseColor}
              highlightColor={highlightColor}
              className="mb-4 rounded"
            />
            <Skeleton
              count={3}
              height={18}
              width="100%"
              baseColor={baseColor}
              highlightColor={highlightColor}
              className="rounded mb-2"
            />
          </div>

          <div className="bg-[var(--bg-two)] p-6 rounded-xl  border border-gray-200 dark:border-gray-700">
            <Skeleton
              height={24}
              width="35%"
              baseColor={baseColor}
              highlightColor={highlightColor}
              className="mb-4 rounded"
            />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3].map((i) => (
                <Skeleton
                  key={i}
                  height={32}
                  width={80}
                  baseColor={baseColor}
                  highlightColor={highlightColor}
                  className="rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
