
"use client";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const userAxios = axios.create({
  baseURL: BASE_URL,
});

userAxios.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("auth-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

userAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("auth-token");

      if (typeof window !== "undefined") {
        window.location.href = "/admin/login";
      }
    }

    return Promise.reject(error);
  }
);

export default userAxios;
