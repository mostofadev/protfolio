"use client";
import { createContext, useContext, useState } from "react";

import { showCustomToast } from "../lib/showCustomToast";
import { createCategory, deleteCategory, getAllCategories, getSingleCategory, updateCategory } from "../services/CategoryServices";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [singleCategory, setSingleCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    per_page: 10,
  });
  const [error, setError] = useState(null);

  const getAllCategoriesHandle = async (page = 1) => {
    setLoading(true);
    try {
      const response = await getAllCategories(page);

      let categoryData = [];
      let paginationData = {};

      if (Array.isArray(response.data)) {
        categoryData = response.data;
        paginationData = {
          current_page: 1,
          last_page: 1,
          per_page: categoryData.length,
          total: categoryData.length,
        };
      } else if (response.data && Array.isArray(response.data.data)) {
        categoryData = response.data.data;
        paginationData = response.data;
      }

      setCategories(categoryData);
      setPagination({
        current_page: paginationData.current_page || 1,
        last_page: paginationData.last_page || 1,
        total: paginationData.total || categoryData.length,
        per_page: paginationData.per_page || 10,
      });

      setError(null);
    } catch (err) {
      setError("Failed to load categories");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const createCategoryHandle = async (formData) => {
    setLoading(true);
    try {
      const res = await createCategory(formData);
      await getAllCategoriesHandle(pagination.current_page);
      setError(null);
      return res;
    } catch (err) {
      if (err.response?.data?.errors) {
        const allErrors = Object.values(err.response.data.errors)
          .flat()
          .join(", ");
        setError(allErrors);
        showCustomToast({
          title: "Validation Error",
          message: allErrors,
          type: "error",
        });
      } else {
        setError(err.response?.data?.message || "Something went wrong");
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

  const deleteCategoryHandle = async (id) => {
    setLoading(true);
    try {
      await deleteCategory(id);
      await getAllCategoriesHandle(pagination.current_page);
      setError(null);
      showCustomToast({
        title: "Category Deleted",
        message: "Category deleted successfully!",
        type: "success",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to delete category");
      showCustomToast({
        title: "Delete Error",
        message: "Failed to delete category!",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const getSingleCategoryHandle = async (id) => {
    try {
      const data = await getSingleCategory(id);
      setSingleCategory(data);
      return data;
    } catch (err) {
      console.error(err);
      setError("Failed to fetch category");
    }
  };

  const updateCategoryHandle = async (id, formData) => {
    setLoading(true);
    try {
      const res = await updateCategory(id, formData);
      await getAllCategoriesHandle(pagination.current_page);
      await getSingleCategoryHandle(id);
      setError(null);
      return res;
    } catch (err) {
      if (err.response?.data?.errors) {
        const allErrors = Object.values(err.response.data.errors)
          .flat()
          .join(", ");
        setError(allErrors);
        showCustomToast({
          title: "Validation Error",
          message: allErrors,
          type: "error",
        });
      } else {
        setError(err.response?.data?.message || "Something went wrong");
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
    <CategoryContext.Provider
      value={{
        categories,
        singleCategory,
        loading,
        error,
        pagination,
        getAllCategoriesHandle,
        createCategoryHandle,
        deleteCategoryHandle,
        updateCategoryHandle,
        getSingleCategoryHandle,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => useContext(CategoryContext);
