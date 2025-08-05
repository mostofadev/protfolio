import { useTheme } from "@/app/context/ThemeContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FeaturedProjectCardSkeleton = () => {
  const { theme } = useTheme();

  const baseColor = theme === "dark" ? "#e2e8f0" : "#2d3748";
  const highlightColor = theme === "dark" ? "#f0f4f8" : "#4a5568";

  return (
    <div
      className={`bg-[var(--bg-one)] text-[var(--text-one)] border rounded-3xl p-8 shadow-lg transition-shadow duration-300 cursor-pointer
      ${theme === "dark" ? "border-gray-300" : "border-gray-700"}`}
    >
      {/* Image placeholder */}
      <div className="relative w-full h-[280px] rounded-2xl overflow-hidden shadow-md mb-6">
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          width="100%"
          height="100%"
          style={{ borderRadius: "1.5rem" }}
        />
      </div>

      {/* Title */}
      <Skeleton
        baseColor={baseColor}
        highlightColor={highlightColor}
        height={36}
        width="90%"
        className="mb-4 rounded"
      />

      {/* Description */}
      <Skeleton
        baseColor={baseColor}
        highlightColor={highlightColor}
        count={2}
        height={18}
        className="mb-5 rounded"
      />

      {/* Technologies badges */}
      <div className="flex flex-wrap gap-3 mb-6">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Skeleton
              key={i}
              baseColor={baseColor}
              highlightColor={highlightColor}
              width={100}
              height={28}
              borderRadius={14}
            />
          ))}
      </div>

      {/* Category and Tech */}
      <div className="flex flex-wrap gap-4 text-base mb-3">
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          width={160}
          height={20}
          className="rounded"
        />
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          width={160}
          height={20}
          className="rounded"
        />
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          width={220}
          height={40}
          borderRadius={10}
        />
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          width={220}
          height={40}
          borderRadius={10}
        />
      </div>
    </div>
  );
};

export default FeaturedProjectCardSkeleton;
