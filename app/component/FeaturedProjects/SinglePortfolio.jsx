"use client";

import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiCalendar, FiUsers, FiCode, FiTag, FiChevronLeft } from "react-icons/fi";
import TButton from "../core/TButton";
import { useTheme } from "@/app/context/ThemeContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SinglePortfolio({ project }) {
  const { theme } = useTheme();
  const router = useRouter();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const IMAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

  // Fallback data if no project is provided
  if (!project) {
    project = {
      title: "My Laravel Project",
      description: "This is a clean and elegant portfolio project page created using Next.js. You can pass dynamic data via props.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      demo_link: "https://www.globalxbit.com/",
      github_link: "https://github.com/example/repo",
      completed_at: "2024-12-31",
      features: "User authentication, REST API, Responsive UI, Database management, Payment integration",
      tags: ["Laravel", "Vue", "API", "MySQL", "TailwindCSS"],
      project_type: "personal",
      is_team_project: 1,
      team_role: "Backend Developer",
      status: 1,
      challenges: "Implementing secure payment processing while maintaining performance.",
      solutions: "Integrated Stripe API with caching mechanisms to optimize transaction speed.",
      long_description: "A comprehensive web application built with Laravel and Vue.js that provides a seamless user experience. The project includes user authentication, RESTful API design, and a responsive interface that works across all devices."
    };
  }

  // Parse features and tags from strings to arrays
  const featuresList = project.features?.split(",").map(feature => feature.trim()) || [];
  const tagsList = Array.isArray(project.tags) ? project.tags : project.tags?.split(",").map(tag => tag.trim()) || [];

  // Format date
  const formattedDate = new Date(project.completed_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center text-[var(--primary-text)] hover:text-green-600 transition-colors mb-6"
      >
        <FiChevronLeft className="mr-1" /> Back to Portfolio
      </button>

      {/* Project Header */}
      <div className="text-center mb-10">
        <div className="flex flex-wrap justify-center gap-3 mb-5">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${project.project_type === "personal" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
            {project.project_type === "personal" ? "Personal Project" : "Professional Project"}
          </span>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${project.status === 1 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {project.status === 1 ? "Active" : "Completed"}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-text)] mb-5">
          {project.title}
        </h1>
        
        <p className="text-xl text-[var(--primary-text)] max-w-3xl mx-auto leading-relaxed mb-8">
          {project.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <TButton
            Type="link"
            className="w-full sm:w-auto py-3 px-6 rounded-lg text-lg bg-green-600 hover:bg-green-700 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            Icon={<FiExternalLink className="mr-2" />}
            to={project.demo_link}
          >
            Live Demo
          </TButton>

          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <FiGithub className="mr-2" />
            View Code
          </a>
        </div>
      </div>

      {/* Project Image - UPDATED TO COVER AREA BEAUTIFULLY */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 bg-gray-100 dark:bg-gray-800 aspect-video">
        {project.image ? (
          <div className="relative w-full h-full overflow-hidden group">
            <Image
              src={`${IMAGE_URL}/featured_projects/${project.image}`}
              alt={project.title}
              fill
              unoptimized
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
              onLoad={() => setIsImageLoaded(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                <div className="animate-pulse rounded-full bg-gray-300 dark:bg-gray-600 h-12 w-12"></div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
            No Image Available
          </div>
        )}
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
        <button
          className={`py-3 px-6 font-medium border-b-2 transition-colors ${activeTab === "overview" ? "border-green-500 text-green-600" : "border-transparent text-[var(--primary-text)] hover:text-green-500"}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`py-3 px-6 font-medium border-b-2 transition-colors ${activeTab === "features" ? "border-green-500 text-green-600" : "border-transparent text-[var(--primary-text)] hover:text-green-500"}`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`py-3 px-6 font-medium border-b-2 transition-colors ${activeTab === "tech" ? "border-green-500 text-green-600" : "border-transparent text-[var(--primary-text)] hover:text-green-500"}`}
          onClick={() => setActiveTab("tech")}
        >
          Technologies
        </button>
      </div>

      {/* Tab Content */}
      <div className="mb-12">
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Details */}
            <div className="space-y-6">
              <div className="bg-[var(--bg-one)] p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-[var(--primary-text)] mb-4 flex items-center">
                  <FiCalendar className="text-green-500 mr-2" />
                  Project Timeline
                </h3>
                <p className="text-[var(--primary-text)] mb-2">
                  Completed on <span className="font-medium text-green-600">{formattedDate}</span>
                </p>
                <div className="mt-4">
                  <h4 className="font-medium text-[var(--primary-text)] mb-2">Project Description</h4>
                  <p className="text-[var(--primary-text)] opacity-80">
                    {project.long_description || project.description}
                  </p>
                </div>
              </div>

              <div className="bg-[var(--bg-one)] p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-[var(--primary-text)] mb-4 flex items-center">
                  <FiUsers className="text-green-500 mr-2" />
                  Team Information
                </h3>
                <p className="text-[var(--primary-text)] mb-2">
                  <span className="font-medium">Team Project:</span>{" "}
                  <span className={project.is_team_project ? "text-green-600" : "text-[var(--primary-text)]"}>
                    {project.is_team_project ? "Yes" : "No"}
                  </span>
                </p>
                {project.is_team_project && (
                  <p className="text-[var(--primary-text)]">
                    <span className="font-medium">My Role:</span>{" "}
                    <span className="text-green-600">{project.team_role}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="space-y-6">
              <div className="bg-[var(--bg-one)] p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-[var(--primary-text)] mb-4">Challenges</h3>
                <p className="text-[var(--primary-text)] opacity-80">
                  {project.challenges || "Every project comes with its unique set of challenges that require creative problem-solving and technical expertise."}
                </p>
              </div>

              <div className="bg-[var(--bg-one)] p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-[var(--primary-text)] mb-4">Solutions</h3>
                <p className="text-[var(--primary-text)] opacity-80">
                  {project.solutions || "Through careful planning, research, and implementation of best practices, these challenges were successfully overcome."}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="bg-[var(--bg-one)] p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-[var(--primary-text)] mb-6 flex items-center">
              <FiCode className="text-green-500 mr-2" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuresList.map((feature, index) => (
                <div key={index} className="flex items-start p-4 rounded-lg bg-[var(--bg-two)]">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mt-0.5 mr-3">
                    {index + 1}
                  </div>
                  <span className="text-[var(--primary-text)]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tech" && (
          <div className="bg-[var(--bg-one)] p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-[var(--primary-text)] mb-6 flex items-center">
              <FiTag className="text-green-500 mr-2" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {tagsList.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 transition-transform hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-[var(--primary-text)] mb-4">Interested in this project?</h2>
        <p className="text-[var(--primary-text)] opacity-80 max-w-2xl mx-auto mb-6">
          Feel free to reach out if you'd like to learn more about this project or discuss potential collaborations.
        </p>
        <TButton
          Type="link"
          className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
          to="/contact"
        >
          Get In Touch
        </TButton>
      </div>
    </div>
  );
}