"use client";
import { createContext, useContext, useState } from 'react';

import { showCustomToast } from '../lib/showCustomToast';
import { createTestimonial, deleteTestimonial, getAllTestimonials, getSingleTestimonial, updateTestimonial } from '../services/TestimonialServices';

const TestimonialContext = createContext();

export const TestimonialProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [singleTestimonial, setSingleTestimonial] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    per_page: 10,
  });
  const [error, setError] = useState(null);

  const getAllTestimonialsHandle = async (page = 1) => {
    setLoading(true);
    try {
      const response = await getAllTestimonials(page);
      let dataList = [];
      let paginationData = {};

      if (Array.isArray(response.data)) {
        dataList = response.data;
        paginationData = {
          current_page: 1,
          last_page: 1,
          per_page: dataList.length,
          total: dataList.length,
        };
      } else if (response.data && Array.isArray(response.data.data)) {
        dataList = response.data.data;
        paginationData = response.data;
      }

      setTestimonials(dataList);
      setPagination({
        current_page: paginationData.current_page || 1,
        last_page: paginationData.last_page || 1,
        total: paginationData.total || dataList.length,
        per_page: paginationData.per_page || 10,
      });

      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to load testimonials');
    } finally {
      setLoading(false);
    }
  };

  const createTestimonialHandle = async (formData) => {
    setLoading(true);
    try {
      const res = await createTestimonial(formData);
      await getAllTestimonialsHandle(pagination.current_page);
      setError(null);
      return res;
    } catch (err) {
      console.log(err);
      if (err.response?.data?.errors) {
        const allErrors = Object.values(err.response.data.errors).flat().join(", ");
        setError(allErrors);
        showCustomToast({
          title: "Validation Error",
          message: allErrors,
          type: "error",
        });
      } else {
        setError("Something went wrong");
        showCustomToast({
          title: "Error",
          message: "Something went wrong",
          type: "error",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteTestimonialHandle = async (id) => {
    setLoading(true);
    try {
      await deleteTestimonial(id);
      await getAllTestimonialsHandle(pagination.current_page);
      setError(null);
      showCustomToast({
        title: "Deleted",
        message: "Testimonial deleted successfully!",
        type: "success",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to delete testimonial");
      showCustomToast({
        title: "Error",
        message: "Failed to delete testimonial!",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const getSingleTestimonialHandle = async (id) => {
    try {
      const data = await getSingleTestimonial(id);
      setSingleTestimonial(data);
      return data;
    } catch (err) {
      console.error(err);
      setError("Failed to fetch testimonial");
    }
  };

  const updateTestimonialHandle = async (id, formData) => {
    setLoading(true);
    try {
      const res = await updateTestimonial(id, formData);
      await getAllTestimonialsHandle(pagination.current_page);
      await getSingleTestimonialHandle(id);
      setError(null);
      return res;
    } catch (err) {
      if (err.response?.data?.errors) {
        const allErrors = Object.values(err.response.data.errors).flat().join(", ");
        setError(allErrors);
        showCustomToast({
          title: "Validation Error",
          message: allErrors,
          type: "error",
        });
      } else {
        setError("Something went wrong");
        showCustomToast({
          title: "Error",
          message: "Something went wrong",
          type: "error",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <TestimonialContext.Provider
      value={{
        testimonials,
        singleTestimonial,
        loading,
        error,
        pagination,
        getAllTestimonialsHandle,
        createTestimonialHandle,
        deleteTestimonialHandle,
        getSingleTestimonialHandle,
        updateTestimonialHandle,
      }}
    >
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonialContext = () => useContext(TestimonialContext);
