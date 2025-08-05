"use client";
import { createContext, useContext, useState } from "react";
import {
  createTechnology,
  deleteTechnology,
  getAllTechnologies,
  getSingleTechnology,
  updateTechnology,
} from "../services/TechnologyServices";
import { showCustomToast } from "../lib/showCustomToast";

const TechnologyContext = createContext();

export const TechnologyProvider = ({ children }) => {
  const [technologies, setTechnologies] = useState([]);
  const [singleTechnology, setSingleTechnology] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    per_page: 10,
  });
  const [error, setError] = useState(null);

  const getAllTechnologiesHandle = async (page = 1) => {
    setLoading(true);
    try {
      const response = await getAllTechnologies(page);

      let technologyData = [];
      let paginationData = {};

      if (Array.isArray(response.data)) {
        technologyData = response.data;
        paginationData = {
          current_page: 1,
          last_page: 1,
          per_page: technologyData.length,
          total: technologyData.length,
        };
      } else if (response.data && Array.isArray(response.data.data)) {
        technologyData = response.data.data;
        paginationData = response.data;
      }

      setTechnologies(technologyData);
      setPagination({
        current_page: paginationData.current_page || 1,
        last_page: paginationData.last_page || 1,
        total: paginationData.total || technologyData.length,
        per_page: paginationData.per_page || 10,
      });

      setError(null);
    } catch (err) {
      setError("Failed to load technologies");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const createTechnologyHandle = async (formData) => {
    setLoading(true);
    try {
      const res = await createTechnology(formData);
      await getAllTechnologiesHandle(pagination.current_page);
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

  const deleteTechnologyHandle = async (id) => {
    setLoading(true);
    try {
      await deleteTechnology(id);
      await getAllTechnologiesHandle(pagination.current_page);
      setError(null);
      showCustomToast({
        title: "Technology Deleted",
        message: "Technology deleted successfully!",
        type: "success",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to delete technology");
      showCustomToast({
        title: "Delete Error",
        message: "Failed to delete technology!",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const getSingleTechnologyHandle = async (id) => {
    try {
      const data = await getSingleTechnology(id);
      setSingleTechnology(data);
      return data;
    } catch (err) {
      console.error(err);
      setError("Failed to fetch technology");
    }
  };

  const updateTechnologyHandle = async (id, formData) => {
    setLoading(true);
    try {
      const res = await updateTechnology(id, formData);
      await getAllTechnologiesHandle(pagination.current_page);
      await getSingleTechnologyHandle(id);
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
    <TechnologyContext.Provider
      value={{
        technologies,
        singleTechnology,
        loading,
        error,
        pagination,
        getAllTechnologiesHandle,
        createTechnologyHandle,
        deleteTechnologyHandle,
        updateTechnologyHandle,
        getSingleTechnologyHandle,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
};

export const useTechnologyContext = () => useContext(TechnologyContext);
