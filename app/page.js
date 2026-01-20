'use client'
import Image from "next/image";
import Layout from "./component/layout/Layout";
import PortfolioBanner from "./component/banner/Banner";
import WhatIDo from "./component/Whatdo/Whatdo";
import FeaturedProjects from "./component/FeaturedProjects/FeaturedProjects";
import Testimonials from "./component/Testimonials/Testimonials";
import Blog from "./component/Blog/Blog";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>

        <NextSeo
        title="Home"
        description="Welcome to MostofaDev - professional web developer."
        canonical="https://mostofadev.com/"
        openGraph={{
          url: "https://mostofadev.com/",
          title: "MostofaDev - Home",
          description: "Welcome to MostofaDev - professional web developer.",
          images: [
            {
              url: "https://mostofadev.com/og-image-home.jpg",
              width: 1200,
              height: 630,
              alt: "MostofaDev Home Image",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@mostofadev",
          handle: "@mostofadev",
        }}
      />
    <Layout>
      <PortfolioBanner />
      <WhatIDo />
      <FeaturedProjects />
      <Testimonials />
      {/* <Blog /> */}
  </Layout>
  </>
  );
}
