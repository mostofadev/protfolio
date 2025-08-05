import axios from '../lib/axiosInstance';

export const getAllCategories = async (page = 1) => {
  const response = await axios.get(`/admin/category?page=${page}`);
  return response.data;
};

export const getSingleCategory = async (id) => {
  const response = await axios.get(`/admin/category/${id}`);
  return response.data.data;
};

export const deleteCategory = async (id) => {
  const response = await axios.delete(`/admin/category/${id}`);
  return response.data;
};

export const createCategory = async (formData) => {
  const response = await axios.post(`/admin/category`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateCategory = async (id, formData) => {
  const response = await axios.post(`/admin/category/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
