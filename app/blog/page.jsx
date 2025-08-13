"use client";

import { useEffect } from "react";
import Layout from "../component/layout/Layout";
import AllPageContainer from "../component/Container/AllPageContainer";
import BlogCard from "../component/Blog/BlogCard";
import PagePagination from "../component/core/pagination/pagePagination";
import BlogCardSkeleton from "../component/Skeleton/BlogCardSkeleton";
import AllPageContainerSkeleton from "../component/Skeleton/AllPageContainerSkeleton";
import PagePaginationSkeleton from "../component/Skeleton/PagePaginationSkeleton";
import { usePage } from "../context/PageContext"; // এখানে নাম পরিবর্তন

function Blog() {
  const {
    error,
    Blog,
    loading,
    fetchBlogs,  // এখানে SolveBlog থেকে fetchBlogs এ নাম পরিবর্তন
  } = usePage();

  useEffect(() => {
    fetchBlogs(); // এখানে SolveBlog() -> fetchBlogs()
  }, []);

  return (
    <Layout>
      <div className="bg-[var(--bg-one)]">
        {loading ? (
          <AllPageContainerSkeleton />
        ) : (
          <AllPageContainer
            Title="A Blog About Software Development And Life"
            Description="Welcome to my blog. Subscribe and get my latest blog post in your inbox."
          />
        )}

        <div className="bg-[var(--bg-one)] py-12">
          {error && <p className="text-center text-red-500">{error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 mx-6 sm:mx-20 md:mx-20">
            {loading
              ? Array(6)
                  .fill(0)
                  .map((_, index) => <BlogCardSkeleton key={index} />)
              : Blog.map((blog, index) => (
                  <BlogCard
                    key={index}
                    project={blog}
                    ClassName="bg-[var(--bg-two)]"
                  />
                ))}
          </div>
        </div>

        {/* Pagination section commented out, কাজ করলে আবার ব্যবহার করতে পারো */}
        {/* <div className="pb-4">
          {loading ? <PagePaginationSkeleton /> : 
           <PagePagination
            pagination={pagination}
            onPageChange={handlePageChange}
          />
          }
        </div> */}
      </div>
    </Layout>
  );
}

export default Blog;
