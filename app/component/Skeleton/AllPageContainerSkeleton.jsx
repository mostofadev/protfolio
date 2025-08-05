// components/skeleton/AllPageContainerSkeleton.jsx

import { useTheme } from "@/app/context/ThemeContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllPageContainerSkeleton = ({gray = true}) => {
  const { theme } = useTheme();

  const baseColor = theme === "dark" ? "#e2e8f0" : "#2d3748";       // dark: gray-300, light: gray-700
  const highlightColor = theme === "dark" ? "#f0f4f8" : "#4a5568";  // dark: gray-200, light: gray-600

  return (
    <div className={`${gray ?"bg-[var(--bg-one)]" : "bg-[var(--bg-two)]" } border-b border-[var(--bg-two)] py-12 animate-pulse`}>
      <div className="w-full text-center mx-auto flex justify-center flex-col items-center gap-6 px-4">
        <Skeleton
          height={56}
          width={320}
          baseColor={baseColor}
          highlightColor={highlightColor}
          className="rounded"
        />
        <Skeleton
          count={3}
          height={24}
          width={460}
          baseColor={baseColor}
          highlightColor={highlightColor}
          className="rounded"
        />
        <Skeleton
          height={48}
          width={180}
          baseColor={baseColor}
          highlightColor={highlightColor}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default AllPageContainerSkeleton;
