// services/technologyServices.js
import axios from '../lib/axiosInstance';
export const getAllTechnologies = async (page = 1) => {
  const response = await axios.get(`/admin/technology?page=${page}`);
  return response.data;
};

export const getSingleTechnology = async (id) => {
  const response = await axios.get(`/admin/technology/${id}`);
  return response.data.data;
};

export const deleteTechnology = async (id) => {
  const response = await axios.delete(`/admin/technology/${id}`);
  return response.data;
};

export const createTechnology = async (formData) => {
  const response = await axios.post(`/admin/technology`, formData);
  return response.data;
};

export const updateTechnology = async (id, formData) => {
  const response = await axios.post(`/admin/technology/${id}`, formData);
  return response.data;
};
