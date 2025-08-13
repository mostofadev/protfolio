"use client";

import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiCalendar, FiUsers } from "react-icons/fi";
import TButton from "../core/TButton";
import { useTheme } from "@/app/context/ThemeContext";
import Image from "next/image";

export default function SinglePortfolio({ project }) {
  console.log("hellooo", project);

  const { theme } = useTheme();
  if (!project) {
    project = {
      title: "My Laravel Project",
      description:
        "This is a clean and elegant portfolio project page created using Next.js. You can pass dynamic data via props.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      demo_link: "https://www.globalxbit.com/",
      github_link: "https://github.com/example/repo",
      completed_at: "2024-12-31",
      features: "User authentication, REST API, Responsive UI",
      tags: ["Laravel", "Vue", "API"],
      project_type: "personal",
      is_team_project: 1,
      team_role: "Backend Developer",
      status: 1,
    };
  }

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const IMAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Project Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-gray-800 mb-4">
          {project.project_type === "personal"
            ? "Personal Project"
            : "Professional Project"}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-text)] mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-[var(--primary-text)] max-w-3xl mx-auto leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Project Image with Loading State */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 bg-gray-100 aspect-video">
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12"></div>
            </div>
          </div>
        )}
        {/* <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsImageLoaded(true)}
        /> */}
        {project.image ? (
          <div className="relative w-full h-full overflow-hidden group">
            <Image
              src={`${IMAGE_URL}/featured_projects/${project.image}`}
              alt={project.title}
              fill
              unoptimized
              className="object-contain w-full h-full transition-transform duration-[4000ms] ease-linear group-hover:translate-y-[-30%]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700 text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <TButton
          Type="link"
          className="w-full sm:w-auto py-3 px-6 rounded-lg text-lg hover:bg-green-600 transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
          Icon={<FiExternalLink className="mr-2" />}
          to={project.demo_link}
        >
          Live Demo
        </TButton>

        <a
          href={project.github_link}
          target="_blank"
          rel="noopener noreferrer"
          className={
            "flex items-center justify-left w-full lg:inline-flex lg:w-auto px-6 py-3 " +
            "bg-gray-900 text-white font-medium rounded-lg shadow-lg " +
            "hover:shadow-xl transition-all hover:scale-105"
          }
        >
          <FiGithub className="mr-2" />
          View Code
        </a>
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Left Column */}
        <div className="space-y-6">
          <div
            className={`bg-[var(--bg-one)] p-6 rounded-xl shadow-md border ${
              theme === "dark" ? "border-gray-200" : "border-gray-700"
            }`}
          >
            <h3 className="text-xl font-semibold text-[var(--primary-text)] mb-4 flex items-center">
              <FiCalendar className="text-[var(--primary-text)] mr-2" />
              Project Timeline
            </h3>
            <p className="text-[var(--primary-text)]">
              Completed on{" : "}
              <span className="font-medium">
                {new Date(project.completed_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
            <div className="mt-3">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 1
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {project.status === 1 ? "Active" : "Inactive"}
              </span>
            </div>
          </div>

          <div
            className={`bg-[var(--bg-one)] p-6 rounded-xl shadow-md border ${
              theme === "dark" ? "border-gray-200" : "border-gray-700"
            }`}
          >
            <h3 className="text-xl font-semibold text-[var(--primary-text)] mb-4 flex items-center">
              <FiUsers className=" mr-2" />
              Team Information
            </h3>
            <p className="text-[var(--primary-text)] mb-2">
              <span className="font-medium">Team Project:</span>{" "}
              {project.is_team_project ? "Yes" : "No"}
            </p>
            {project.is_team_project && (
              <p className="text-[var(--primary-text)]">
                <span className="font-medium">My Role:</span>{" "}
                {project.team_role}
              </p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Key Features Section (commented out to prevent split error) */}
          {/*
          <div className={`bg-[var(--bg-one)] p-6 rounded-xl shadow-md border ${
            theme === "dark" ? "border-gray-200" : "border-gray-700"
          }`}>
            <h3 className="text-xl font-semibold text-[var(--primary-text)] mb-4 flex items-center">
              <FiCode className=" mr-2" />
              Key Features
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-[var(--primary-text)]">
              {project.features?.split(",").map((feature, index) => (
                <li
                  key={index}
                  className="hover:text-green-600 transition-colors"
                >
                  {feature.trim()}
                </li>
              ))}
            </ul>
          </div>
          */}

          {/* Technologies Used Section (commented out to prevent split error) */}
          {/*
          <div className={`bg-[var(--bg-one)] p-6 rounded-xl shadow-md border ${
            theme === "dark" ? "border-gray-200" : "border-gray-700"
          }`}>
            <h3 className="text-xl font-semibold text-[var(--primary-text)] mb-4 flex items-center">
              <FiTag className=" mr-2" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {(Array.isArray(project.tags)
                ? project.tags
                : project.tags?.split(",")
              ).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}
