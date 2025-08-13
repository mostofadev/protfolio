"use client";

import { useHome } from "@/app/context/HomeContext";
import HomeTitleContainer from "../Container/HomeTitleContainer";
import BlogCard from "./BlogCard"; 
import { useEffect, useState } from "react";
import BlogCardSkeleton from "../Skeleton/BlogCardSkeleton";
import HomeTitleSkeleton from "../Skeleton/HomeTitleSkeleton";

function Blog() {
  const { fetchBlogs, blogs,loading } = useHome(); 

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bg-[var(--bg-two)] py-4">
      {loading ? (
        <HomeTitleSkeleton gray={false} />
      ) : (
        <HomeTitleContainer
          Description="More than 1500+ agencies using Portfolify."
          Title="Latest Blog Posts"
          Button="See All Articles"
          To="/blog"
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-6 sm:mx-20 md:mx-20">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, index) => <BlogCardSkeleton key={index} />)
          : blogs.map((blog, index) => (
              <BlogCard
                key={index}
                project={blog}
                ClassName="bg-[var(--bg-one)]"
              />
            ))}
      </div>
    </div>
  );
}

export default Blog;
