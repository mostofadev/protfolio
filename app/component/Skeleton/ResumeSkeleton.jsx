'use client';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useTheme } from '@/app/context/ThemeContext';

const ResumeSkeleton = () => {
  const { theme } = useTheme();

  const baseColor = theme === 'dark' ? '#e2e8f0' : '#2d3748';       // gray-700 / gray-200
  const highlightColor = theme === 'dark' ? '#f0f4f8' : '#4a5568';  // gray-600 / gray-100

  return (
    <div
      className={`my-12 px-12 max-w-4xl mx-auto p-6 space-y-10 select-none bg-[var(--bg-two)] ${highlightColor}`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="space-y-3 w-3/5">
          <Skeleton
            baseColor={baseColor}
            highlightColor={highlightColor}
            height={32}
            width="100%"
            borderRadius={8}
          />
          <Skeleton
            baseColor={baseColor}
            highlightColor={highlightColor}
            height={20}
            width="100%"
            borderRadius={8}
          />
        </div>
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          height={44}
          width={240}
          borderRadius={8}
        />
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <Skeleton
              
              baseColor={baseColor}
              highlightColor={highlightColor}
              height={24}
              width={270}
            />
            <Skeleton
              baseColor={baseColor}
              highlightColor={highlightColor}
              height={18}
              width="75%"
              borderRadius={8}
            />
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column */}
        <section
          className={`lg:col-span-2 rounded-xl p-6 space-y-8 bg-[var(--bg-one)]`}
        >
          {/* Work Experience Header */}
          <div className="flex items-center space-x-3 mb-6">
            <Skeleton
              circle
              baseColor={baseColor}
              highlightColor={highlightColor}
              height={28}
              width={28}
            />
            <Skeleton
              baseColor={baseColor}
              highlightColor={highlightColor}
              height={24}
              width={160}
              borderRadius={8}
            />
          </div>

          {/* Experience Items */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="pl-8  relative  space-y-3 mt-1"
             
            >
              <div
               
              />
              <Skeleton
                baseColor={baseColor}
                highlightColor={highlightColor}
                height={20}
                width="60%"
                borderRadius={8}
              />
              <Skeleton
                baseColor={baseColor}
                highlightColor={highlightColor}
                height={16}
                width="45%"
                borderRadius={8}
              />
              <Skeleton
                baseColor={baseColor}
                highlightColor={highlightColor}
                height={16}
                width="100%"
                borderRadius={8}
              />
              <Skeleton
                baseColor={baseColor}
                highlightColor={highlightColor}
                height={16}
                width="80%"
                borderRadius={8}
              />
            </div>
          ))}

          {/* Projects Header */}
          <div className="flex items-center space-x-3 mt-12 mb-6">
            <Skeleton
              circle
              baseColor={baseColor}
              highlightColor={highlightColor}
              height={28}
              width={28}
            />
            <Skeleton
              baseColor={baseColor}
              highlightColor={highlightColor}
              height={24}
              width={160}
              borderRadius={8}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`rounded-lg p-5 bg-[var(--bg-two)] space-y-4`}
              >
                <Skeleton
                  baseColor={baseColor}
                  highlightColor={highlightColor}
                  height={20}
                  width="75%"
                  borderRadius={8}
                />
                <Skeleton
                  baseColor={baseColor}
                  highlightColor={highlightColor}
                  height={16}
                  width="90%"
                  className="mt-3"
                  borderRadius={8}
                />
                <Skeleton
                  baseColor={baseColor}
                  highlightColor={highlightColor}
                  height={16}
                  width="55%"
                  className="mt-2"
                  borderRadius={8}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Right Column */}
        <section
          className={`rounded-xl p-6 space-y-8 bg-[var(--bg-one)]`}
        >
          {/* Skills Header */}
          <div className="flex items-center space-x-3 mb-6">
            <Skeleton
              circle
              baseColor={baseColor}
              highlightColor={highlightColor}
              height={28}
              width={28}
            />
            <Skeleton
              baseColor={baseColor}
              highlightColor={highlightColor}
              height={24}
              width={160}
              borderRadius={8}
            />
          </div>

          {/* Skill bars */}
          

          <div className="">

            {[...Array(6)].map((_, i) => {
            const widthPercent = 40 + i * 10;
            return (
              <div key={i} className="space-y-2 my-6">
                <div className="flex justify-between mb-1">
                  <div className="flex justify-between items-center space-x-4">
                    <Skeleton
                    baseColor={baseColor}
                    highlightColor={highlightColor}
                    height={10}
                    width={80}
                    
                  />
                  {/* <Skeleton
                    baseColor={baseColor}
                    highlightColor={highlightColor}
                    height={16}
                    width={30}
                    borderRadius={8}
                  /> */}
                  </div>
                  <Skeleton
                    baseColor={baseColor}
                    highlightColor={highlightColor}
                    height={10}
                    width={35}
                    borderRadius={8}
                  />
                </div>
                <div
                  className="rounded-full overflow-hidden"
                  style={{ height: 12, backgroundColor: baseColor }}
                >
                  <div
                    className={`rounded-full ${highlightColor} h-2`}
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
          </div>


          
          <div className="my-3">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className={`rounded-lg my-12 p-5 bg-[var(--bg-two)] space-y-4`}
              >
                <Skeleton
                  baseColor={baseColor}
                  highlightColor={highlightColor}
                  height={20}
                  width="75%"
                  borderRadius={8}
                />
                <Skeleton
                  baseColor={baseColor}
                  highlightColor={highlightColor}
                  height={16}
                  width="90%"
                  className="mt-3"
                  borderRadius={8}
                />
                <Skeleton
                  baseColor={baseColor}
                  highlightColor={highlightColor}
                  height={16}
                  width="55%"
                  className="mt-2"
                  borderRadius={8}
                />
              </div>
            ))}
          </div>
        </section>

         
      </div>
    </div>
  );
};

export default ResumeSkeleton;
