"use client"

import { useEffect, useState } from "react"
import { NextSeo } from "next-seo"
import AboutSection from "../component/AllPage/about/about"
import Layout from "../component/layout/Layout"

function About() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Simulate a loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* SEO */}
      <NextSeo
        title="About Me - MostofaDev"
        description="Learn more about Mostofa Kamal, a professional web developer specializing in Next.js and React."
        canonical="https://mostofadev.com/about"
        openGraph={{
          url: "https://mostofadev.com/about",
          title: "About Me - MostofaDev",
          description: "Learn more about Mostofa Kamal, a professional web developer specializing in Next.js and React.",
          images: [
            {
              url: "https://mostofadev.com/og-image-about.jpg",
              width: 1200,
              height: 630,
              alt: "About MostofaDev",
            },
          ],
          site_name: "MostofaDev",
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@mostofadev",
          handle: "@mostofadev",
        }}
      />

      {/* Page Content */}
      <Layout>
        <AboutSection loading={loading} />
      </Layout>
    </>
  )
}

export default About
