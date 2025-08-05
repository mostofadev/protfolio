"use client";
import { createContext, useContext, useState } from 'react';
import {
  AllBlog,
  createBlog,
  deleteBlog,
  updateBlog,
  SingleBlog,
} from '../services/BlogServices';
import { showCustomToast } from '../lib/showCustomToast';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    per_page: 10,
  });
  const [error, setError] = useState(null);

  const getAllBlogsHandle = async (page = 1) => {
    setLoading(true);
    try {
      const response = await AllBlog(page);

      let blogData = [];
      let paginationData = {};

      if (Array.isArray(response.data)) {
        blogData = response.data;
        paginationData = {
          current_page: 1,
          last_page: 1,
          per_page: blogData.length,
          total: blogData.length,
        };
      } else if (response.data && Array.isArray(response.data.data)) {
        blogData = response.data.data;
        paginationData = response.data;
      }

      setBlogs(blogData);
      setPagination({
        current_page: paginationData.current_page || 1,
        last_page: paginationData.last_page || 1,
        total: paginationData.total || blogData.length,
        per_page: paginationData.per_page || 10,
      });

      setError(null);
    } catch (err) {
      setError('Failed to load blogs');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const CreateBlogsHandle = async (formData) => {
    setLoading(true);
    try {
      const res = await createBlog(formData);
      await getAllBlogsHandle(pagination.current_page);
      setError(null);
      
      return res;
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data && err.response.data.errors) {
        const errorsObj = err.response.data.errors;
        const allErrors = Object.values(errorsObj).flat().join(", ");
        setError(allErrors);
        showCustomToast({
          title: "Validation Error",
          message: allErrors,
          type: "error",
        });
      } else if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("");
        showCustomToast({
          title: "Error",
          message: 'Something went wrong',
          type: "error",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const DeleteBlogsHandle = async (id) => {
    setLoading(true);
    try {
      await deleteBlog(id);
      await getAllBlogsHandle(pagination.current_page);
      setError(null);
      showCustomToast({
        title: "Blog deleted",
        message: 'Blog deleted successfully!',
        type: "success",
      });
    } catch (err) {
      console.error(err);
      setError('Failed to delete blog');
      showCustomToast({
        title: "Delete Error",
        message: 'Failed to delete blog!',
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const GetSingleBlogHandle = async (id) => {
    try {
      const data = await SingleBlog(id);
     
      setSingleBlog(data);
      return data;
    } catch (err) {
      console.error(err);
      setError('Failed to fetch blog');
    }
  };

  const UpdateBlogsHandle = async (id, formData) => {
    setLoading(true);
    try {
      const res = await updateBlog(id, formData);
      await getAllBlogsHandle(pagination.current_page);
      await GetSingleBlogHandle(id);
      setError(null);
      return res;
    } catch (err) {
      if (err.response && err.response.data && err.response.data.errors) {
        const errorsObj = err.response.data.errors;
        const allErrors = Object.values(errorsObj).flat().join(", ");
        setError(allErrors);
        showCustomToast({
          title: "Validation Error",
          message: allErrors,
          type: "error",
        });
      } else if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("");
        showCustomToast({
          title: "Error",
          message: 'Something went wrong',
          type: "error",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        singleBlog,
        loading,
        error,
        pagination,
        getAllBlogsHandle,
        CreateBlogsHandle,
        DeleteBlogsHandle,
        UpdateBlogsHandle,
        GetSingleBlogHandle,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);
