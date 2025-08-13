import { useState, useEffect } from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import { LeftBannerSkeleton, RightBannerSkeleton } from "../Skeleton/BannerSkeleton";

const PortfolioBanner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="bg-[var(--bg-two)] relative w-full flex flex-col lg:flex-row lg:items-left justify-between items-center bg-cover bg-center bg-fixed"
      style={{ height: "70vh" }}
    >
      {isLoading ? <LeftBannerSkeleton /> : <LeftBanner />}
      <div className="w-1/2 flex justify-center">
        {isLoading ? <RightBannerSkeleton /> : <RightBanner />}
      </div>
    </section>
  );
};

export default PortfolioBanner;
