import { createContext, useContext, useState } from 'react';
import { getBlog, getBlogPostById } from '../services/BlogPageServices';
const BlogPageContext = createContext();

export const BlogPageProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [singleBlog, setSingleBlog] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        total: 0,
        per_page: 10,
    });

    const getBlogPostsHandle = async (page = 1) => {
        setLoading(true);
        try {
            const response = await getBlog(page);
            let blogData = [];
            let paginationData = {};

            if (Array.isArray(response.data)) {
                blogData = response.data;
                paginationData = {
                    current_page: 1,
                    last_page: 1,
                    per_page: blogData.length,
                    total: blogData.length,
                };
            } else if (response.data && Array.isArray(response.data.data)) {
                blogData = response.data.data;
                paginationData = response.data;
            }

            setBlogs(blogData);
            setPagination({
                current_page: paginationData.current_page,
                last_page: paginationData.last_page,
                total: paginationData.total,
                per_page: paginationData.per_page,
            });
            setError(null);
        } catch (err) {
            console.error(err);
            setError("Failed to load blog posts");
            setBlogs([]);
            setPagination({
                current_page: 1,
                last_page: 1,
                total: 0,
                per_page: 10,
            });
        } finally {
            setLoading(false);
        }
    };

    const getSingleBlogPostHandle = async (id) => {
        setLoading(true);
        try {
            const response = await getBlogPostById(id);
            setSingleBlog(response.data);
            setError(null);
        } catch (err) {
            console.error(err);
            setError("Failed to load blog post");
        } finally {
            setLoading(false);
        }
    };

    return (
        <BlogPageContext.Provider
            value={{
                blogs,
                singleBlog,
                loading,
                error,
                pagination,
                getBlogPostsHandle,
                getSingleBlogPostHandle,
            }}
        >
            {children}
        </BlogPageContext.Provider>
    );
};

export const useBlogPageContext = () => useContext(BlogPageContext);
