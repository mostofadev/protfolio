// app/context/ThemeContext.js or components/ThemeProvider.js

"use client";

import { createContext, useEffect, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  // ✅ Load theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme");

    if (stored) {
      try {
        const { value } = JSON.parse(stored);
        setDarkMode(value === "dark");
        document.documentElement.classList.toggle("dark", value === "dark");
      } catch {
        setDarkMode(stored === "dark");
        document.documentElement.classList.toggle("dark", stored === "dark");
      }
    }

    setIsThemeLoaded(true); // ✅ Confirm theme is loaded
  }, []);

  // ✅ Save to localStorage when darkMode changes
  useEffect(() => {
    if (!isThemeLoaded) return;

    const value = darkMode ? "dark" : "light";
    localStorage.setItem("theme", JSON.stringify({ value, timestamp: Date.now() }));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode, isThemeLoaded]);

  // ✅ Theme toggle function
  const toggleTheme = () => setDarkMode((prev) => !prev);

  // ✅ Don't render until theme is loaded
  if (!isThemeLoaded) {
    return (
      ''
    );
  }

  return (
    <ThemeContext.Provider value={{ theme: darkMode ? "dark" : "light", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
