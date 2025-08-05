'use client'

import { AuthProvider } from "../context/AuthContext"
import { BlogProvider } from "../context/BlogContext"
import { BlogPageProvider } from "../context/BlogPageContext"
import { CategoryProvider } from "../context/CategoryContext"
import { HomeProvider } from "../context/HomeContext"
import { PortfolioProvider } from "../context/PortfolioContext"
import { PortfolioPageProvider } from "../context/PortfolioPageContext"
import { TechnologyProvider } from "../context/TechnologyContext"
import { TestimonialProvider } from "../context/TestimonialContext"
import { ThemeProvider } from "../context/ThemeContext"


export default function ClientProvider({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BlogProvider>
          <TestimonialProvider>
            <CategoryProvider>
              <TechnologyProvider>
                <PortfolioProvider>
                  <HomeProvider>
                    <PortfolioPageProvider>
                      <BlogPageProvider>
                        {children}
                      </BlogPageProvider>
                    </PortfolioPageProvider>
                  </HomeProvider>
                </PortfolioProvider>
              </TechnologyProvider>
            </CategoryProvider>
          </TestimonialProvider>
        </BlogProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
