import { createContext, useContext, useState } from 'react';
import { getPortfolioProjects } from '../services/PortfolioPageServices';
 
const PortfolioPageContext = createContext();

export const PortfolioPageProvider = ({ children }) => {
    const [portfolio, setPortfolio] = useState([]);
    const [singlePortfolio, setSinglePortfolio] = useState({})
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({
        current_page:1,
        last_page:1,
        total:0,
        per_page:10,
    })


    const getPortfolioProjectsHandle = async (page = 1) => {
        setLoading(true);
        try {
            const response = await getPortfolioProjects(page);
            let portfolioData = [];
            let paginationData = {};

            if (Array.isArray(response.data)) {
                portfolioData = response.data;
                paginationData = {
                    current_page: 1,
                    last_page: 1,
                    per_page: portfolioData.length,
                    total: portfolioData.length,
                };
            } else if (response.data && Array.isArray(response.data.data)) {
                portfolioData = response.data.data;
                paginationData = response.data;
            }

            setPortfolio(portfolioData);
            setPagination({
                current_page: paginationData.current_page,
                last_page: paginationData.last_page,
                total: paginationData.total,
                per_page: paginationData.per_page,
            });
            setError(null);
        } catch (err) {
            setError("Failed to load portfolio projects");
            setPortfolio([]);
            setPagination({
                current_page: 1,
                last_page: 1,
                total: 0,
                per_page: 10,
            });
                per_page: response.per_page,
            
            setError(null);
        }finally{
            setLoading(false);
        }
    }


    const getPortfolioSingleProjectHandle = async (id) => {
        setLoading(true);
        try {
            const response = await getPortfolioSingleProject(id);
            setSinglePortfolio(response.data);
            setError(null);
        } catch (err) {
            setError("Failed to load portfolio project");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }
    return (
         <PortfolioPageContext.Provider value={{
             portfolio,
             loading,
             error,
             pagination,
             getPortfolioProjectsHandle,
             getPortfolioSingleProjectHandle
         }} >
            {children}
         </PortfolioPageContext.Provider>
    )
}


export const usePortfolioPageContext = () => useContext(PortfolioPageContext);