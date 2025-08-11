"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const IMAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL || "http://127.0.0.1:8000/uploads";

export default function BlogCard({ project, ClassName = "" }) {
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
    <div className={`swiper-slide !h-full !bg-transparent pb-5 !text-left ${ClassName}`}>
      <div
        className="grid h-full w-full cursor-pointer grid-rows-[200px_1fr] grid-cols-1 justify-end gap-3 overflow-hidden rounded-[10px] bg-[var(--bg-one)] bg-cover bg-center p-3 shadow-lg transition-all   hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
      >
        {/* Blog Image */}
        <div className="relative w-full h-full">
          {image ? (
            <Image
              alt={title}
              src={`${IMAGE_URL}/blog/${image}`}
              fill
              unoptimized
              className="rounded-[8px] object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400 rounded-[8px]">
              No Image
            </div>
          )}
        </div>

        {/* Blog Content */}
        <div className="py-1 w-full space-y-2">
          {/* Date */}
          {created_at && (
            <div className="mb-2 flex items-center gap-2">
              <p className="text-xs font-medium text-[var(--primary-color)]">
                {new Date(created_at).toLocaleDateString()}
              </p>
              <p className="text-sm font-medium">|</p>
              <p className="text-xs font-medium text-primary-base">By : Admin</p>
            </div>
          )}

          {/* Title */}
          <h3 className="line-clamp-2 text-sm font-medium text-[var(--primary-color)]">
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-xs text-[var(--primary-color)] line-clamp-3">
              {description.length > 120 ? description.slice(0, 120) + "..." : description}
            </p>
          )}

          {/* Technologies */}
          {techs.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {techs.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-200 text-[var(--primary-color)] text-[10px] font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-3 pt-3 flex-wrap">
            {demo_link && (
              <Link
                href={demo_link}
                target="_blank"
                className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md text-xs transition"
              >
                <FaExternalLinkAlt className="text-xs" />
                Live Demo
              </Link>
            )}
            {github_link && (
              <Link
                href={github_link}
                target="_blank"
                className="flex items-center gap-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded-md text-xs transition"
              >
                <FaGithub className="text-xs" />
                GitHub
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
