import axios from '../lib/axiosInstance';


export const AllPortfolio = async (page = 1) => {
  const response = await axios.get(`/admin/project?page=${page}`);
  console.log(response);
  
  return response.data;
};

export const SinglePortfolio = async (id) => {
  const response = await axios.get(`/admin/project/${id}`);
  return response.data.data;
};

export const deletePortfolio = async (id) => {
  const response = await axios.delete(`/admin/project/${id}`);
  return response.data;
};

export const createPortfolio = async (formData) => {
  const response = await axios.post(`/admin/project`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updatePortfolio = async (id, formData) => {
  const response = await axios.post(`/admin/project/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
