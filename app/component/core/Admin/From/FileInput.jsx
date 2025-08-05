import React, { useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default function FileInput({ label, name, onChange, accept, multiple = false, error = "" }) {
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const files = e.target.files;
    if (files?.length) {
      setFileName(
        multiple
          ? `${files.length} file(s) selected`
          : files[0].name
      );
    } else {
      setFileName("");
    }

    if (onChange) onChange(e);
  };

  return (
    <div className="w-full mb-4">
      {label && (
        <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <label
        htmlFor={name}
        className={`
          flex items-center justify-between gap-2 
          border rounded-xl px-4 py-3
          bg-white text-gray-700 cursor-pointer shadow-sm 
          hover:border-indigo-500 hover:ring-2 hover:ring-indigo-100
          transition-all duration-200
          ${error ? "border-red-500 hover:border-red-600 hover:ring-red-200" : "border-gray-300"}
        `}
      >
        <div className="flex items-center gap-2">
          <UploadFileIcon className={error ? "text-red-500" : "text-indigo-500"} />
          <span className="text-sm truncate max-w-[200px]">
            {fileName || "Choose file(s)..."}
          </span>
        </div>
        <span className="text-xs text-gray-400">Browse</span>
      </label>

      <input
        type="file"
        id={name}
        name={name}
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        className="hidden"
      />

      {error && <p className="text-xs text-red-600 mt-1 pl-1">{error}</p>}
    </div>
  );
}
