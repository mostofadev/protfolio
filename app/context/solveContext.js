'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { BlogServices, Portfolio } from "../services/solveServices";

const SolveContext = createContext();


export const SolveProvider =({children})=>{
  const [FeaturedProjects, setFeaturedProjects] = useState([]);
  const [Blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(null)
const SolveProject = async () => {
    try {
      setLoading(true);
      const data = await Portfolio();
      setFeaturedProjects(data?.data || []);
    } catch (error) {
      setError(error)
      console.error("Error fetching featured projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const SolveBlog = async () => {
    try {
      setLoading(true);
      const data = await BlogServices();
      setBlog(data?.data || []);
    } catch (error) {
      setError(error)
      console.error("Error fetching featured projects:", error);
    }finally{
      setLoading(false)
    }
  }
return (
    <SolveContext.Provider
      value={{
        FeaturedProjects,
        Blog,
        loading,
        SolveProject,
        SolveBlog
      }}
    >
      {children}
    </SolveContext.Provider>
  );
};

// Hook
export const useSolve = () => useContext(SolveContext);
