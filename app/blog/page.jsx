"use client";

import { useEffect, useState } from "react";
import Layout from "../component/layout/Layout";
import AllPageContainer from "../component/Container/AllPageContainer";
import BlogCard from "../component/Blog/BlogCard";
import { useBlogPageContext } from "../context/BlogPageContext";
import PagePagination from "../component/core/pagination/pagePagination";
import BlogCardSkeleton from "../component/Skeleton/BlogCardSkeleton";
import AllPageContainerSkeleton from "../component/Skeleton/AllPageContainerSkeleton";
import PagePaginationSkeleton from "../component/Skeleton/PagePaginationSkeleton";
import { useSolve } from "../context/solveContext";

function Blog() {
  const {
        error,
        Blog,
        loading,
        SolveBlog } =
    useSolve();
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    SolveBlog();
  }, []);

  // const handlePageChange = (page) => {
  //   if (page >= 1 && page <= pagination.last_page) {
  //     setCurrentPage(page);
  //   }
  // };

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

            {}
          </div>
        </div>

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
