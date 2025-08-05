import { useTheme } from "@/app/context/ThemeContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ServicesCardSkeleton = () => {
  const { theme } = useTheme();

  const baseColor = theme === "dark" ? "#e2e8f0" : "#2d3748";       
  const highlightColor = theme === "dark" ? "#f0f4f8" : "#4a5568";  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-20 my-12">
      {Array(8).fill(0).map((_, i) => (
        <div
          key={i}
          className={`border  rounded-lg p-4 shadow-md ${theme === "dark" ?  "bg-white border-gray-200" : "bg-gray-800 border-gray-700"}`}
        >
          <Skeleton 
            circle 
            width={64} 
            height={64} 
            baseColor={baseColor} 
            highlightColor={highlightColor} 
          />
          <Skeleton 
            height={24} 
            width={`60%`} 
            className="mt-4 rounded" 
            baseColor={baseColor} 
            highlightColor={highlightColor} 
          />
          <Skeleton 
            count={3} 
            className="mt-2 rounded" 
            baseColor={baseColor} 
            highlightColor={highlightColor} 
          />
        </div>
      ))}
    </div>
  );
};

export default ServicesCardSkeleton;
