import { useTheme } from "@/app/context/ThemeContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomeTitleSkeleton = ( {gray = true}) => {
  const { theme } = useTheme();

  const baseColor = theme === "dark" ? "#e2e8f0" : "#2d3748";       // dark: gray-700, light: gray-300
  const highlightColor = theme === "dark" ?  "#f0f4f8" : "#4a5568";  // dark: gray-600, light: gray-100

  return (
    <div className={`py-12 px-6 ${gray ?"bg-[var(--bg-one)]" : "bg-[var(--bg-two)]" }  animate-pulse`}>
      <div className=" flex lg:justify-start justify-center mb-8 mx-4 sm:mx-20">
        <Skeleton
          width={300}
          height={48}
          baseColor={baseColor}
          highlightColor={highlightColor}
          className="rounded"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start justify-center lg:justify-between items-center gap-6 mx-4 sm:mx-20">
        <div className="w-full lg:w-1/2 space-y-4">
          <Skeleton
            count={3}
            baseColor={baseColor}
            highlightColor={highlightColor}
            height={20}
            className="rounded"
          />
        </div>

        <div className="mt-4 lg:mt-0">
          <Skeleton
            width={240}
            height={48}
            baseColor={baseColor}
            highlightColor={highlightColor}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeTitleSkeleton;
