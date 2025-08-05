import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTheme } from "@/app/context/ThemeContext";

const BlogCardSkeleton = () => {
  const { theme } = useTheme();
  const baseColor = theme === "dark" ? "#e2e8f0" : "#2d3748";
  const highlightColor = theme === "dark" ? "#f5f5f5" : "#4a5568";

  return (
    <div className={`rounded-2xl border ${theme ? "border-gray-700" : "border-gray-600"} dark:border-gray-700 overflow-hidden shadow-sm bg-[var(--bg-one)] p-4 space-y-4`}>
      <Skeleton
        height={224}
        baseColor={baseColor}
        highlightColor={highlightColor}
        className="w-full"
      />
      <Skeleton
        height={20}
        width="80%"
        baseColor={baseColor}
        highlightColor={highlightColor}
      />
      <Skeleton
        count={2}
        height={14}
        baseColor={baseColor}
        highlightColor={highlightColor}
      />
      <div className="flex gap-2 flex-wrap">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Skeleton
              key={i}
              width={60}
              height={24}
              baseColor={baseColor}
              highlightColor={highlightColor}
              className="rounded-full"
            />
          ))}
      </div>
      <Skeleton
        height={12}
        width="50%"
        baseColor={baseColor}
        highlightColor={highlightColor}
      />
      <div className="flex gap-3 pt-2">
        <Skeleton
          width={90}
          height={32}
          baseColor={baseColor}
          highlightColor={highlightColor}
          className="rounded-md"
        />
        <Skeleton
          width={90}
          height={32}
          baseColor={baseColor}
          highlightColor={highlightColor}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
