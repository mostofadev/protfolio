'use client';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useTheme } from '@/app/context/ThemeContext';

function QuestionsSkeleton() {
  const { theme } = useTheme();

  const baseColor = theme === 'dark' ? '#e2e8f0' : '#2d3748';
  const highlightColor = theme === 'dark' ? '#f0f4f8' : '#4a5568' ;

  return (
    <div className="bg-[var(--bg-one)] py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-6 sm:mx-20 gap-6">
        {/* Accordion Skeleton - Left side */}
        <div className="w-full lg:w-1/2 space-y-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`rounded-lg border ${theme === 'dark' ?   'border-gray-300' : 'border-gray-700'} p-4 shadow-sm`}
            >
              <Skeleton
                height={20}
                width={`60%`}
                baseColor={baseColor}
                highlightColor={highlightColor}
                className="mb-3"
              />
              <Skeleton
                count={1}
                height={12}
                baseColor={baseColor}
                highlightColor={highlightColor}
                className="mb-1"
              />
            </div>
          ))}
        </div>

        {/* Image Skeleton - Right side */}
        <div className="w-full lg:w-1/2 hidden lg:flex justify-center">
          <Skeleton
            height={300}
            width={300}
            baseColor={baseColor}
            highlightColor={highlightColor}
            circle={false}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionsSkeleton;
