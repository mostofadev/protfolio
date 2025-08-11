import axios from '../lib/axiosInstance';
  
export const getPortfolioProjects = async (page = 1) => {
    const response = await axios.get(`/page/project/?page=${page}`);
    console.log("Portfolio Projects Response:", response);
    const data = await response.json();
    return data.data;
}

export const getPortfolioSingleProject = async (id) => {
    const response = await axios.get(`/portfolio/${id}`);
    return response.data;
}