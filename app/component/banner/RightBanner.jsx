import Image from "next/image";
import Photo from "@/public/assets/img/1689443313537.jpeg"; // Replace with your image path

const RightBanner = () => {
  return (
    <div className="relative flex justify-center items-center xl:block hidden">
      {/* Rotating Green Dashed Border */}
      <div className="absolute inset-0 w-80 h-80 bg-transparent border-4 border-green-500 border-dashed animate-border-spin rounded-xl"></div>

      {/* Image with Green Border and Shadow */}
      <div className="w-64 h-64 bg-white border-4 border-green-500 rounded-xl flex items-center justify-center overflow-hidden shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-3xl">
        <Image
          src={Photo}
          alt="Your Image"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default RightBanner;
