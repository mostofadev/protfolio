import React, { useState } from "react";

export default function Input({
  label,
  name,
  type = "text",
  placeholder = " ",
  readOnly = false,
  disabled = false,
  error = "",
  errors ="",
  className = "",
  ...rest
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
        className={`
          peer w-full rounded-xl px-4 pt-6 pb-2 text-sm border 
          ${error ? "border-red-500" : "border-gray-300"} 
          focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
          transition-all bg-white text-gray-800
          shadow-sm focus:shadow-md
          placeholder-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed
          read-only:bg-gray-100 read-only:text-gray-500
        `}
      />

      <label
        htmlFor={name}
        className={`
          absolute left-4 px-1 transition-all bg-white 
          ${focused || rest?.defaultValue || rest?.value ? "-top-2 text-xs text-indigo-600" : "top-4 text-sm text-gray-500"}
          pointer-events-none
        `}
      >
        {label}
      </label>

      {error && <p className="text-xs text-red-500 mt-1 pl-1">{error}</p>}
      {errors && <p className="text-xs text-red-500 mt-1 pl-1">{errors}</p>}
    </div>
  );
}
