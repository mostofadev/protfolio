"use client";

import SinglePortfolio from "@/app/component/FeaturedProjects/SinglePortfolio";
import Layout from "@/app/component/layout/Layout";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { usePage } from "@/app/context/PageContext";
import SinglePortfolioSkeleton from "@/app/component/Skeleton/SinglePortfolioSkeleton";
import NotFound from "@/app/not-found";
  

function page() {
  const params = useParams();
  const { id } = params;

  const { singlePortfolio, fetchSinglePortfolio, loading } = usePage();

  useEffect(() => {
    if (id) {
      fetchSinglePortfolio(id);
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <SinglePortfolioSkeleton />
      </Layout>
    );
  }

  if (!singlePortfolio || (Array.isArray(singlePortfolio) && singlePortfolio.length === 0)) {
    return (
      <Layout>
        <NotFound  />
      </Layout>
    );
  }

  return (
    <Layout>
      <SinglePortfolio project={singlePortfolio} />
    </Layout>
  );
}

export default page;
