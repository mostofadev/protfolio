"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { useState } from "react";

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

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const techs = technologies
    ? Array.isArray(technologies)
      ? technologies
      : technologies.split(",").map((t) => t.trim())
    : [];

  return (
    <div
      className={`group relative h-full pb-5 text-left ${ClassName}`}
    >
      <div className="relative h-full w-full cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--bg-one)] to-[var(--bg-two)] p-5 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-[var(--bg-two)]/40">
        
        {/* Gradient Glow Background */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

        {/* Blog Image */}
        <div className="relative h-56 w-full overflow-hidden rounded-xl mb-4 border border-[var(--bg-two)] shadow-lg">
          {image && !imageError ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-two)]">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--bg-two)] border-t-green-500"></div>
                </div>
              )}
              <Image
                alt={title}
                src={`${IMAGE_URL}/blog/${image}`}
                fill
                unoptimized
                className={`rounded-xl object-cover transition-all duration-700 ${
                  imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
                } group-hover:scale-105`}
                loading="lazy"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
            </>
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-[var(--bg-two)] text-[var(--text-two)] rounded-lg">
              <FaUser className="text-3xl opacity-60" />
            </div>
          )}

          {/* Date Badge */}
          {created_at && (
            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg shadow-md">
              <p className="text-xs font-medium text-white flex items-center gap-1">
                <FaCalendarAlt className="text-green-400" />
                {new Date(created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          )}
        </div>

        {/* Blog Content */}
        <div className="relative space-y-3">
          {/* Title */}
          <h3 className="font-bold text-lg lg:text-xl text-[var(--text-one)] group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-sm text-[var(--text-two)] leading-relaxed line-clamp-3">
              {description}
            </p>
          )}

          {/* Technologies */}
          {techs.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {techs.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-green-500/10 to-blue-500/10 text-[var(--text-two)] text-xs font-medium rounded-full border border-green-400/20 shadow-sm group-hover:border-green-400/40"
                >
                  {tech}
                </span>
              ))}
              {techs.length > 3 && (
                <span className="px-2 py-1 bg-[var(--bg-two)]/60 text-[var(--text-two)] text-xs font-medium rounded-full opacity-70">
                  +{techs.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-[var(--bg-two)]/50 my-3"></div>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <div className="flex items-center text-xs text-[var(--text-two)]">
              <FaUser className="mr-1 text-green-400" />
              <span>By Admin</span>
            </div>

            <div className="flex gap-2">
              {demo_link && (
                <Link
                  href={demo_link}
                  target="_blank"
                  className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 shadow hover:shadow-lg group/link"
                >
                  <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-0.5 transition-transform" />
                  Demo
                </Link>
              )}
              {github_link && (
                <Link
                  href={github_link}
                  target="_blank"
                  className="flex items-center gap-1.5 bg-[var(--bg-two)] hover:bg-[var(--bg-two)]/80 text-[var(--text-two)] px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 shadow hover:shadow-lg group/link"
                >
                  <FaGithub className="text-xs group-hover/link:scale-110 transition-transform" />
                  Code
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400/30 transition-all duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
}
