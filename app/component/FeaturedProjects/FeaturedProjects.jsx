"use client";

import { useEffect, useState } from "react";
import HomeTitleContainer from "../Container/HomeTitleContainer";
import FeaturedProjectCard from "./FeaturedProjectCard";
import FeaturedProjectCardSkeleton from "../Skeleton/FeaturedProjectCardSkeleton"; // ইমপোর্ট করো
import { useHome } from "@/app/context/HomeContext";
import HomeTitleSkeleton from "../Skeleton/HomeTitleSkeleton";

export default function FeaturedProjects() {
  const { featuredProjects, fetchFeaturedProjects,loading } = useHome();
 
  useEffect(() => {
    fetchFeaturedProjects();
  }, []);

  return (
    <section>
      {loading ? <HomeTitleSkeleton gray={false} /> :
      <HomeTitleContainer
        Description="My step-by-step guide ensures a smooth project journey, from the initial consultation to the final delivery. I take care of every detail, allowing you to focus on what you do best."
        Title="Featured Projects"
        Button="View Portfolio"
        To="/portfolio"
      />
      }
      

      <div className="bg-[var(--bg-two)] py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 mx-6 sm:mx-20 md:mx-20">
          {loading ? (  
            Array(6).fill(0).map((_, i) => (
              <FeaturedProjectCardSkeleton key={i} />
            ))
          ) : featuredProjects && featuredProjects.length > 0 ? (
            featuredProjects.map((project) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                ClassName=" bg-[var(--bg-one)]"
              />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-400">
              No featured projects found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
