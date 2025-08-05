// components/skeleton/ContactComponentSkeleton.jsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTheme } from "@/app/context/ThemeContext";

const ContactComponentSkeleton = () => {
  const { theme } = useTheme();

  const baseColor = theme === "dark" ? "#e2e8f0" : "#2d3748";
  const highlightColor = theme === "dark" ? "#f0f4f8" : "#4a5568";

  return (
    <div className="md:flex md:justify-between px-6 my-6 mx-6 sm:mx-20 md:mx-20 gap-4 flex-wrap">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className={`flex items-center space-x-4 p-4 rounded-lg shadow-md w-full md:w-[30%] bg-[var(--bg-one)]`}
        >
          {/* Icon */}
          <Skeleton
            circle
            width={48}
            height={48}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />

          {/* Text */}
          <div className="flex-1 space-y-2">
            <Skeleton
              height={18}
              width="75%"
              baseColor={baseColor}
              highlightColor={highlightColor}
            />
            <Skeleton
              height={14}
              width="50%"
              baseColor={baseColor}
              highlightColor={highlightColor}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactComponentSkeleton;
