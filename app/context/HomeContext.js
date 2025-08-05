"use client";
import { createContext, useContext, useState } from "react";
import {
  getFeaturedProjects,
  getAllTestimonials,
  getAllBlogs,
} from "../services/HomeServices";

// Create Context
const HomeContext = createContext();

// Provider
export const HomeProvider = ({ children }) => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1. Fetch Featured Projects
  const fetchFeaturedProjects = async () => {
    try {
      setLoading(true);
      const data = await getFeaturedProjects();
      setFeaturedProjects(data?.data || []);
    } catch (error) {
      console.error("Error fetching featured projects:", error);
    } finally {
      setLoading(false);
    }
  };

  // 2. Fetch Testimonials
  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const data = await getAllTestimonials();
      setTestimonials(data?.data || []);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  // 3. Fetch Blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await getAllBlogs();
      setBlogs(data?.data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <HomeContext.Provider
      value={{
        featuredProjects,
        testimonials,
        blogs,
        loading,
        fetchFeaturedProjects,
        fetchTestimonials,
        fetchBlogs,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

// Hook
export const useHome = () => useContext(HomeContext);
