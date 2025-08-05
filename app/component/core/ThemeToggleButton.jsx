"use client"
import {  useTheme } from "@/app/context/ThemeContext";
;
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-l-lg shadow-lg z-50">

    
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-two text-text-one  hover:text-white transition-all duration-300"
    >
      {theme === "light" ? (
        <>
          <FaMoon className="text-lg" />
        </>
      ) : (
        <>
          <FaSun className="text-lg" />
        </>
      )}
    </button>
    </div>
  );
};

export default ThemeToggleButton;
