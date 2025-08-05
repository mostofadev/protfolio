
"use client"

import { useEffect, useState } from "react"
import AboutSection from "../component/AllPage/about/about"
import Layout from "../component/layout/Layout"

function About() {
  const [loading, setLoading] = useState(true)

   useEffect(() => {
     const timer = setTimeout(() => {
       setLoading(false);
     }, 1000); // Simulate a loading delay of 2 seconds
 
     return () => clearTimeout(timer); // Cleanup the timer on component unmount
   }, []);
  return (
    <div>
      <Layout>
          <AboutSection loading={loading} />
      </Layout>
      
      
    </div>
  )
}

export default About
