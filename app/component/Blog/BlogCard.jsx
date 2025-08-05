"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const IMAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL || "http://127.0.0.1:8000/uploads";

const BlogCard = ({ project, ClassName = "" }) => {
  const {
    image,
    title,
    description,
    technologies,
    demo_link,
    github_link,
    created_at,
  } = project;

  const techs = technologies
    ? Array.isArray(technologies)
      ? technologies
      : technologies.split(",").map((t) => t.trim())
    : [];

  return (
    <div
      className={`bg-[var(--bg-one)] text-[var(--text-one)] border border-gray-600 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] ${ClassName}`}
    >
      {/* Blog Image */}
      <div className="relative w-full h-56">
        {image ? (
          <Image
            src={`${IMAGE_URL}/blog/${image}`}
            alt={title}
            fill
            unoptimized
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-700 text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Blog Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-bold hover:text-green-600 transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-[var(--text-two)] line-clamp-3">
            {description.length > 100 ? description.slice(0, 100) + "..." : description}
          </p>
        )}

        {/* Technologies */}
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techs.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Created At */}
        {created_at && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Published: {new Date(created_at).toLocaleDateString()}
          </p>
        )}

        {/* Links */}
        <div className="flex gap-3 pt-3 flex-wrap">
          {demo_link && (
            <Link
              href={demo_link}
              target="_blank"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm transition"
            >
              <FaExternalLinkAlt className="text-sm" />
              Live Demo
            </Link>
          )}
          {github_link && (
            <Link
              href={github_link}
              target="_blank"
              className="flex items-center gap-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-md text-sm transition"
            >
              <FaGithub className="text-sm" />
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
