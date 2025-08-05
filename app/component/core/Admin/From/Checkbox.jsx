import React from "react";

export default function CheckboxWithLabel({
  id,
  name,
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input
        id={id || name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        {...rest}
      />
      <label
        htmlFor={id || name}
        className={`text-sm font-medium text-gray-700`}
      >
        {label}
      </label>
    </div>
  );
}
