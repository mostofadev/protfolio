/* eslint-disable react/prop-types */
"use client"
import { useTheme } from "@/app/context/ThemeContext";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const {theme} = useTheme();
  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4 p-4 bg-[var(--bg-one)]">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border ${theme === 'dark' ? 'border-gray-200' : 'border-gray-700'} rounded-md shadow-md`}
        >
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left border-b border-gray-300 flex justify-between items-center p-4  bg-[var(--bg-two)] hover: bg-[var(--bg-one)] transition duration-300"
          >
            <span className="font-medium text-[var(--text-one)] ">{item.title}</span>
            <svg
              className={`w-5 h-5 text-[var(--text-one)] transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.7-.3l-4-4a1 1 0 011.4-1.4L10 9.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-.7.3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {/* Accordion Content */}
          {openIndex === index && (
            <div className="p-4 bg-[var(--bg-two)] text-[var(--text-one)]">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
