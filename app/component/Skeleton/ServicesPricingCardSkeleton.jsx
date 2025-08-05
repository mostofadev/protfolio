// components/skeleton/ServicesPricingCardSkeleton.jsx

'use client';

import { useTheme } from '@/app/context/ThemeContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


function ServicesPricingCardSkeleton() {
  const { theme } = useTheme();

  const baseColor = theme === 'dark' ? '#e2e8f0' : '#2d3748';
  const highlightColor = theme === 'dark' ? '#f0f4f8' : '#4a5568'; 

  return (
    <div className="p-4">
      <div className={`rounded-2xl shadow-lg p-6 bg-[var(--bg-two)] ${highlightColor} transition-colors duration-300`}>
        {/* Header Skeleton */}
        <div className={`border-b ${theme === 'dark' ? 'border-gray-200' : 'border-gray-800'} my-6 text-center`}>
          <Skeleton height={16} width={96} baseColor={baseColor} highlightColor={highlightColor} className="mx-auto mb-3 rounded-md" />
          <Skeleton height={24} width={144} baseColor={baseColor} highlightColor={highlightColor} className="mx-auto mb-2 rounded-md" />
          <Skeleton height={16} width={80} baseColor={baseColor} highlightColor={highlightColor} className="mx-auto mb-4 rounded-md" />
        </div>

        {/* Features Skeleton */}
        <ul className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <li key={i} className="flex items-center gap-3">
              <Skeleton circle width={20} height={20} baseColor={baseColor} highlightColor={highlightColor} />
              <Skeleton height={20} width={545} baseColor={baseColor} highlightColor={highlightColor} className="rounded-md" />
            </li>
          ))}
        </ul>

        {/* Button Skeleton */}
        <div className="mt-6 text-center">
          <Skeleton height={40} width={144} baseColor={baseColor} highlightColor={highlightColor} className="rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default ServicesPricingCardSkeleton;
