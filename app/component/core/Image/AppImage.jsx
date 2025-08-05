"use client";

import Image from "next/image";
import { useState } from "react";

export default function AppImage({
  src,
  alt = "",
  width = 40,
  height = 40,
  fallback = "/fallback.png",
  ClassName = "",
  ImageClass="",
  rounded = "full", // full for circular, or "sm", "md", etc.
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div
      className={`relative w-[${width}px] h-[${height}px] overflow-hidden 
        ${rounded !== "none" ? `rounded-${rounded}` : ""} 
        ${ClassName}`}
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={`${ImageClass} `}
        unoptimized
        onError={() => setImgSrc(fallback)}
      />
    </div>
  );
}
