import axios from "@/app/lib/axiosInstance";

export const Portfolio = async () => {
  const res = await axios.get(`/home/featured-all`);
  console.log("portfolio", res.data);

  return res.data;
};

export const BlogServices = async () => {
  const res = await axios.get(`/home/blog-all`);
  console.log("portfolio", res.data);

  return res.data;
};
