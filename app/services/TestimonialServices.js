import axios from '../lib/axiosInstance';

// সব testimonial আনবে (pagination সহ)
export const getAllTestimonials = async (page = 1) => {
  const response = await axios.get(`/admin/testimonial?page=${page}`);
  return response.data;
};

// একটি testimonial আনবে (by ID)
export const getSingleTestimonial = async (id) => {
  const response = await axios.get(`/admin/testimonial/${id}`);
  return response.data.data;
};

// testimonial ডিলিট করবে
export const deleteTestimonial = async (id) => {
  const response = await axios.delete(`/admin/testimonial/${id}`);
  return response.data;
};

// নতুন testimonial তৈরি করবে
export const createTestimonial = async (formData) => {
  const response = await axios.post(`/admin/testimonial`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// testimonial আপডেট করবে
export const updateTestimonial = async (id, formData) => {
  const response = await axios.post(`/admin/testimonial/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
