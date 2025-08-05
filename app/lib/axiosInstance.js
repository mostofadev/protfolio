"use client"
import axios from "axios";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const instance = axios.create({
    baseURL: BASE_URL
})

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
     
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');
     // router.push('/admin/login');
    }
    return Promise.reject(error);
  }
);

export default instance;
