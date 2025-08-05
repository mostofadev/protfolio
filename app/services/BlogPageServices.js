import axios from '../lib/axiosInstance';
  
export const getBlog = async (page = 1) => {
    const response = await axios.get(`/blog/all/?page=${page}`, {
  withCredentials: true
});
    console.log("Blog Response:", response);

    return response.data;

}

export const getBlogPostById = async (id) => {
    const response = await axios.get(`/blog/${id}`);
    return response.data;
}