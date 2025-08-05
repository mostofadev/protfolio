'use client'
import Image from "next/image";
import Layout from "./component/layout/Layout";
import PortfolioBanner from "./component/banner/Banner";
import WhatIDo from "./component/Whatdo/Whatdo";
import FeaturedProjects from "./component/FeaturedProjects/FeaturedProjects";
import Testimonials from "./component/Testimonials/Testimonials";
import Blog from "./component/Blog/Blog";

export default function Home() {
  return (
    <>
    <Layout>
      <PortfolioBanner />
      <WhatIDo />
      <FeaturedProjects />
      <Testimonials />
      <Blog />
  </Layout>
  </>
  );
}
