// components/Admin/CreateButton.jsx
"use client";

import Link from "next/link";

export default function CreateButton({ href = "/admin/blog/create", text = "Create" }) {
  return (
    <div className="my-6">
      <Link
        href={href}
        className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
      >
        {text}
      </Link>
    </div>
  );
}
