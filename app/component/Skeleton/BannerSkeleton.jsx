import { useTheme } from "@/app/context/ThemeContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LeftBannerSkeleton = () => {
  const { theme } = useTheme();

  
  const baseColor = theme === "dark" ? "#e2e8f0" : "#2d3748" ; // gray-700 vs gray-300
  const highlightColor = theme === "dark" ? "#f0f4f8" : "#4a5568" ; // gray-600 vs gray-100

  return (
    <div className="overflow-hidden h-full relative z-0">
      <div className="mx-0 sm:mx-8 md:mx-20 flex flex-col justify-center items-center md:items-start h-full">
        <div className="text-[var(--text-two)]  sm:px-6  w-full z-10 text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-extrabold uppercase mb-2">
            <Skeleton width={280} height={25} baseColor={baseColor} highlightColor={highlightColor} />
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-4 ">
            <Skeleton width={200} height={30} baseColor={baseColor} highlightColor={highlightColor} />
          </h2>
          <p className="text-base  sm:text-lg md:text-xl mb-6 leading-relaxed tracking-wide opacity-80">
            <Skeleton width={340} count={3} baseColor={baseColor} highlightColor={highlightColor} />
          </p>
          <div className="flex flex-col  sm:flex-row gap-4 justify-center md:justify-start items-center">
            <Skeleton width={350} height={50} baseColor={baseColor} highlightColor={highlightColor} />
            <Skeleton width={350} height={50} baseColor={baseColor} highlightColor={highlightColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const RightBannerSkeleton = () => {
  const { theme } = useTheme();

  const baseColor = theme === "dark" ?  "#e2e8f0"  : "#2d3748" ;
  const highlightColor = theme === "dark" ?   "#f0f4f8" : "#4a5568";

  return (
    <div className="relative flex justify-center items-center xl:block hidden">
      <Skeleton
        width={256}
        height={256}
        baseColor={baseColor}
        highlightColor={highlightColor}
        style={{ borderRadius: "1rem" }}
      />
    </div>
  );
};
