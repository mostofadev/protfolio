"use client";
import { useEffect } from "react";
import PHeader from "../component/AllPage/Portfolio/PHeader";
import FeaturedProjectCard from "../component/FeaturedProjects/FeaturedProjectCard";
import Layout from "../component/layout/Layout";
import PagePagination from "../component/core/pagination/pagePagination";
import FeaturedProjectCardSkeleton from "../component/Skeleton/FeaturedProjectCardSkeleton";
import PagePaginationSkeleton from "../component/Skeleton/PagePaginationSkeleton";
import { usePage } from "../context/PageContext"; // নাম পরিবর্তন

function Portfolio() {
  const {
    FeaturedProjects,
    loading,
    fetchProjects,  // SolveProject -> fetchProjects
  } = usePage();

  useEffect(() => {
    fetchProjects();
  }, []);

  // const handlePageChange = (page) => {
  //   if (page >= 1 && page <= pagination.last_page) {
  //     setCurrentPage(page);
  //   }
  // };

  return (
    <Layout>
      <div className="bg-[var(--bg-one)] min-h-screen">
        <PHeader loading={loading} />

        <div className="py-12 px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array(6)
                .fill(0)
                .map((_, i) => <FeaturedProjectCardSkeleton key={i} />)
            ) : FeaturedProjects && FeaturedProjects.length > 0 ? (
              FeaturedProjects.map((project, index) => (
                <FeaturedProjectCard
                  key={index}
                  project={project}
                  ClassName="border-[var(--bg-one)] bg-[var(--bg-two)]"
                />
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-400">
                No Projects Found.
              </p>
            )}
          </div>
        </div>

        {/* Pagination section commented out */}
        {/* <div className="pb-8">
          {loading ? (
            <PagePaginationSkeleton />
          ) : (
            <PagePagination
              pagination={pagination}
              onPageChange={handlePageChange}
            />
          )}
        </div> */}
      </div>
    </Layout>
  );
}

export default Portfolio;
