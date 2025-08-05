import axios from '../lib/axiosInstance';
  
export const getPortfolioProjects = async (page = 1) => {
    const response = await axios.get(`/portfolio/all/?page=${page}`, {
  withCredentials: false
});
    console.log("Portfolio Projects Response:", response);
    
    return response.data;

}

export const getPortfolioSingleProject = async (id) => {
    const response = await axios.get(`/portfolio/${id}`);
    return response.data;
}