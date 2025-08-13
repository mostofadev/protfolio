import axios from "@/app/lib/axiosInstance";

export const Portfolio = async () => {
  const res = await axios.get(`/home/featured-all`);
  return res.data;
};

export const SinglePortfolio = async (id) => {
  const res = await axios.get(`/portfolio/${id}`)
  return res.data
}
export const BlogServices = async () => {
  const res = await axios.get(`/home/blog-all`);
  return res.data;
};

export const SingleBlog = async (id) => {
  const res = await axios.get(`/blog/${id}`)
  return res.data
}