'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function FullFillImage({
  src,
  alt = '',
  fallback = '/fallback.png',
  className = '',
  rounded = 'full', // none | sm | md | lg | full
  style = {},
  priority = false,
  unoptimized = false,
  onClick,
}) {
  const [imgSrc, setImgSrc] = useState(src || fallback);

  useEffect(() => {
    setImgSrc(src || fallback);
  }, [src, fallback]);

  const handleError = () => {
    if (imgSrc !== fallback) {
      setImgSrc(fallback);
    }
  };

  const roundedMap = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };
  const roundedClass = roundedMap[rounded] ?? 'rounded-full';

  return (
    <div
      className={`relative overflow-hidden ${roundedClass} ${className}`}
      style={style}
      onClick={onClick}
    >
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          className="select-none"
          onError={handleError}
          priority={priority}
          unoptimized={unoptimized}
        />
      )}
    </div>
  );
}
