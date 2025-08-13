"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  BlogServices,
  Portfolio,
  SinglePortfolio,
  SingleBlog,
} from "../services/PageServices";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [FeaturedProjects, setFeaturedProjects] = useState([]);
  const [Blog, setBlog] = useState([]);
  const [singlePortfolio, setSinglePortfolio] = useState([]);
  const [singleBlog, setSingleBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await Portfolio();
      setFeaturedProjects(data?.data || []);
    } catch (error) {
      setError(error);
      console.error("Error fetching featured projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await BlogServices();
      setBlog(data?.data || []);
    } catch (error) {
      setError(error);
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSinglePortfolio = async (id) => {
    try {
      setLoading(true);
      const data = await SinglePortfolio(id);
      setSinglePortfolio(data?.data || []);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setSinglePortfolio(null);
        setError("Not Found"); 
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleBlog = async (id) => {
    try {
      setLoading(true);
      const data = await SingleBlog(id);
      setSingleBlog(data?.data || []);
    } catch (error) {
      setError(error);
      console.error("Error fetching single blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContext.Provider
      value={{
        FeaturedProjects,
        Blog,
        singlePortfolio,
        singleBlog,
        loading,
        fetchProjects,
        fetchBlogs,
        fetchSinglePortfolio,
        fetchSingleBlog,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

// Hook
export const usePage = () => useContext(PageContext);
