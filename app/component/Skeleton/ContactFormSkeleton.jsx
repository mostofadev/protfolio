import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTheme } from "@/app/context/ThemeContext";

const ContactFormSkeleton = () => {
  const { theme } = useTheme();

  const baseColor = theme === "dark" ? "#e2e8f0" : "#2d3748";
  const highlightColor = theme === "dark" ? "#f0f4f8" : "#4a5568";

  return (
    <div className="border border-[var(--bg-two)] mt-6 mx-6 sm:mx-20 md:mx-20 rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Skeleton
          height={45}
          className="rounded"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          height={45}
          className="rounded"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Skeleton
          height={45}
          className="rounded"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          height={45}
          className="rounded"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>

      <div className="mb-4">
        <Skeleton
          height={100}
          className="rounded"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>

      <div className="mb-4">
        <Skeleton
          height={20}
          width="80%"
          className="rounded"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>

      <div className="mb-2">
        <Skeleton
          height={40}
          width={160}
          className="rounded"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
    </div>
  );
};

export default ContactFormSkeleton;
