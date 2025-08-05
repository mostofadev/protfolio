import axios from '../lib/axiosInstance';

export const getFeaturedProjects = async () => {
  const response = await axios.get(`/home/featured-projects`);
  return response.data;
};

export const getAllTestimonials = async () => {
  const response = await axios.get(`/home/testimonials`);
  return response.data;
};

export const getAllBlogs = async () => {
  const response = await axios.get(`/home/blogs`);
  return response.data;
};
