import React from "react";
import clsx from "clsx";

export default function IconButton({ onClick, title, icon: Icon, color = "blue" }) {
  const colors = {
    blue: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    green: "bg-green-50 text-green-600 hover:bg-green-100",
    red: "bg-red-50 text-red-600 hover:bg-red-100",
    gray: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  return (
    <button
      onClick={onClick}
      title={title}
      className={clsx(
        "p-1.5 rounded-md transition-colors",
        colors[color] || colors.gray
      )}
    >
      <Icon fontSize="small" />
    </button>
  );
}
