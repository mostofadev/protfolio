"use client";
import { createContext, useContext, useState } from "react";
import {
  AllPortfolio,
  createPortfolio,
  deletePortfolio,
  updatePortfolio,
  SinglePortfolio,
} from "../services/PortfolioServices";
import { showCustomToast } from "../lib/showCustomToast";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolios, setPortfolios] = useState([]);
  const [singlePortfolio, setSinglePortfolio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    per_page: 10,
  });
  const [error, setError] = useState(null);

  const getAllPortfoliosHandle = async (page = 1) => {
    setLoading(true);
    try {
      const response = await AllPortfolio(page);

      let portfolioData = [];
      let paginationData = {};

      if (Array.isArray(response.data)) {
        portfolioData = response.data;
        paginationData = {
          current_page: 1,
          last_page: 1,
          per_page: portfolioData.length,
          total: portfolioData.length,
        };
      } else if (response.data && Array.isArray(response.data.data)) {
        portfolioData = response.data.data;
        paginationData = response.data;
      }

      setPortfolios(portfolioData);
      setPagination({
        current_page: paginationData.current_page || 1,
        last_page: paginationData.last_page || 1,
        total: paginationData.total || portfolioData.length,
        per_page: paginationData.per_page || 10,
      });

      setError(null);
    } catch (err) {
      setError("Failed to load portfolios");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const CreatePortfoliosHandle = async (formData) => {
    setLoading(true);
    try {
      const res = await createPortfolio(formData);
      await getAllPortfoliosHandle(pagination.current_page);
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
          message: "Something went wrong",
          type: "error",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const DeletePortfoliosHandle = async (id) => {
    setLoading(true);
    try {
      await deletePortfolio(id);
      await getAllPortfoliosHandle(pagination.current_page);
      setError(null);
      showCustomToast({
        title: "Portfolio deleted",
        message: "Portfolio deleted successfully!",
        type: "success",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to delete portfolio");
      showCustomToast({
        title: "Delete Error",
        message: "Failed to delete portfolio!",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const GetSinglePortfolioHandle = async (id) => {
    try {
      const data = await SinglePortfolio(id);

      setSinglePortfolio(data);
      return data;
    } catch (err) {
      console.error(err);
      setError("Failed to fetch portfolio");
    }
  };

  const UpdatePortfoliosHandle = async (id, formData) => {
    setLoading(true);
    try {
      const res = await updatePortfolio(id, formData);
      await getAllPortfoliosHandle(pagination.current_page);
      await GetSinglePortfolioHandle(id);
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
          message: "Something went wrong",
          type: "error",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolios,
        singlePortfolio,
        loading,
        error,
        pagination,
        getAllPortfoliosHandle,
        CreatePortfoliosHandle,
        DeletePortfoliosHandle,
        UpdatePortfoliosHandle,
        GetSinglePortfolioHandle,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => useContext(PortfolioContext);
