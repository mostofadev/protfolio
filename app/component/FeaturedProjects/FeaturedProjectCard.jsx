/* eslint-disable react/prop-types */
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TButton from "../core/TButton";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";

const FeaturedProjectCard = ({ project, ClassName }) => {
  const {theme} = useTheme();
  const IMAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

  const techs = project.technologies
    ? Array.isArray(project.technologies)
      ? project.technologies
      : project.technologies.split(",").map((t) => t.trim())
    : project.tags
    ? project.tags.split(",").map((t) => t.trim())
    : [];

  return (
    <div
      className={`bg-[var(--bg-one)] text-[var(--text-one)] border ${theme === "dark" ? 'border-gray-200' : 'border-gray-700'}   rounded-2xl p-2 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer ${ClassName}`}
    >
      {/* Image */}
      <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-sm">
        {project.image ? (
          <Image
            src={`${IMAGE_URL}/featured_projects/${project.image}`}
            alt={project.title}
            fill
            unoptimized
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700 text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Title */}
      <Link href={`/portfolio/${project.id}`}>
         <h3 className="mt-4 text-xl font-bold tracking-tight">
        
        {project.title}
      </h3>
        </Link>
     

      {/* Description */}
      {/* <p className="mt-2 text-sm leading-relaxed line-clamp-3 text-[var(--text-two)]">
        {project.description}
      </p> */}

      {/* Technologies */}
      {/* <div className="mt-4 flex flex-wrap gap-2">
        {techs.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold select-none"
          >
            {tech}
          </span>
        ))}
      </div> */}

      {/* Category and Technology */}
      {/* <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
        <span>
          <strong>Category:</strong> {project.category?.name || "N/A"}
        </span>
        <span>
          <strong>Tech:</strong> {project.technology?.name || "N/A"}
        </span>
      </div> */}

      {/* Completed Date */}
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        <strong>Completed:</strong> {project.completed_at || "N/A"}
      </p>

      {/* Team Info */}
      {/* <p className="mt-1 italic text-sm text-gray-500 dark:text-gray-400">
        {project.is_team_project
          ? `Team Role: ${project.team_role || "Member"}`
          : "Individual Project"}
      </p> */}

      {/* Links */}
      <div className="mt-5 flex flex-wrap gap-3">
        {project.demo_link && (
          <TButton
            Type="link"
            to={project.demo_link}
            className="w-full sm:w-auto py-1 px-3 rounded-lg text-sm hover:bg-green-600 transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            Icon={<FaExternalLinkAlt />}
          >
            Live Demo
          </TButton>
        )}
        {project.github_link && (
          <Link
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-300 text-gray-900 hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-full text-sm font-semibold shadow-md transition-colors duration-300"
          >
            <FaGithub />
            GitHub
          </Link>
        )}
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
