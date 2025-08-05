import { useTheme } from "@/app/context/ThemeContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TestimonialCardSkeleton = () => {
  const { theme } = useTheme();

  const baseColor = theme === "dark" ? "#e2e8f0" : "#2d3748";
  const highlightColor = theme === "dark" ? "#f0f4f8" : "#4a5568";

  return (
    <div className="bg-[var(--bg-two)] p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <Skeleton
          circle
          width={64}
          height={64}
          baseColor={baseColor}
          highlightColor={highlightColor}
          className="mr-4"
        />
        <div className="flex-1">
          <Skeleton
            height={20}
            width={`80%`}
            baseColor={baseColor}
            highlightColor={highlightColor}
            className="mb-2"
          />
          <Skeleton
            height={16}
            width={`60%`}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </div>
      </div>
      <Skeleton
        count={4}
        height={16}
        baseColor={baseColor}
        highlightColor={highlightColor}
      />
    </div>
  );
};

export default TestimonialCardSkeleton;
