import axios from '../lib/axiosInstance';


export const AllBlog = async (page = 1) => {
  const response = await axios.get(`/admin/blog?page=${page}`);
  console.log(response.data);
  
  return response.data;
};
export const SingleBlog = async (id) => {
  const response = await axios.get(`/admin/blog/${id}`);
 // console.log(response);
  
  return response.data.data;
};
export const deleteBlog = async (id) => {
  const response = await axios.delete(`/admin/blog/${id}`);
  return response.data;
  
};

export const createBlog = async (formData) => {
  const response = await axios.post(`/admin/blog`,formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  )
  //console.log(response.data);
  
  return response.data
}

export const updateBlog = async (id,formData) => {
  const response = await axios.post(`/admin/blog/${id}`,formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  )
  return response.data
}