"use client";

import Link from "next/link";

export default function LinkButton({ RightIcon,Icon =null, href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition ${className}`}
    >
      {Icon}
      {children}
      {RightIcon}
    </Link>
  );
}
