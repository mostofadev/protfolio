import {
  ArrowDownTrayIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const ResumeComponent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[var(--text-one)] ">
            Mostofa Kamal
          </h1>
          <p className="text-green-400 mt-1">
            Full-Stack Web Developer | Laravel • React • Next.js
          </p>
        </div>
        <button className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
          <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
          Download PDF
        </button>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="flex items-center text-[var(--text-two)] ">
          <svg
            className="w-5 h-5 mr-2 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          mostofakamalr2002@gmail.com
        </div>
        <div className="flex items-center text-[var(--text-two)]">
          <svg
            className="w-5 h-5 mr-2 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          +880 016133-02799
        </div>
        <div className="flex items-center text-[var(--text-two)]">
          <svg
            className="w-5 h-5 mr-2 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          Rangpur, BD
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Experience */}
          <div className="bg-[var(--bg-two)] rounded-xl p-6">
            <div className="flex items-center mb-4">
              <BriefcaseIcon className="w-6 h-6 text-green-400 mr-2" />
              <h2 className="text-xl font-bold text-[var(--text-one)]">
                Work Experience
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  position: "Full Stack Developer",
                  company: "Freelance / Self-employed",
                  duration: "2022 - Present",
                  description:
                    "Architected and developed scalable web applications using Laravel (API), React.js, and Next.js. Integrated RESTful APIs, optimized MySQL queries, and  using cPanel",
                },
                {
                  position: "Backend Developer & API Specialist",
                  company: "Freelance / Self-employed",
                  duration: "2020 - 2023",
                  description:
                    "Designed robust backend systems with Laravel . Developed secure authentication systems, implemented role-based access control (RBAC), and created REST & GraphQL APIs for mobile/web integration.",
                },
                {
                  position: "Frontend Engineer",
                  company: "Freelance / Self-employed",
                  duration: "2020- 2021",
                  description:
                    "Developed highly responsive and accessible UIs using React.js, Tailwind CSS, and Material UI. Integrated frontend with backend APIs and ensured cross-browser compatibility.",
                },
                {
                  position: "Web Hosting & Deployment Specialist",
                  company: "Freelance / Self-employed",
                  duration: "2020 - 2022",
                  description:
                    "Managed website deployment using cPanel, WHM, and handled domain & DNS configuration.",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="pl-8 border-l-2 border-green-500 relative"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500"></div>
                  <h3 className="text-lg font-semibold text-[var(--text-one)]">
                    {job.position}
                  </h3>
                  <div className="flex items-center text-[var(--text-two)] text-sm mt-1">
                    <span>{job.company}</span>
                    <span className="mx-2">•</span>
                    <span>{job.duration}</span>
                  </div>
                  <p className="text-[var(--text-two)] mt-2">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="bg-[var(--bg-two)] rounded-xl p-6">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-green-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              <h2 className="text-xl font-bold text-[var(--text-one)]">
                Featured Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "E-commerce Platform",
                  description: "Built with React, Next.js,Laravel and MySql",
                  link: "https://ecommerce-frontend-k2ca.vercel.app",
                },
                {
                  title: "Portfolio CMS",
                  description: "Custom CMS for artists and designers",
                  link: "https://www.mostofadev.com/",
                },
                {
                  title: "Real Estate Listing Platform",
                  description: "Full-stack real estate app with property listings, search filters, galleries, real-time collaboration, Google Maps, and secure authentication.",
                  link: "https://real-estate-platform-gvlr.vercel.app"
                },

                {
                  title: "Hospital Management System",
                  description: "Full-stack hospital management app with patient records, appointment scheduling, doctor dashboard, and real-time updates for efficient hospital operations.",
                  link: "https://health.mostofadev.cloud/"
                },

              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-[var(--bg-one)] p-4 rounded-lg hover:bg-[var(--bg-two)] transition-colors"
                >
                  <h3 className="text-[var(--text-one)] font-medium">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-two)] text-sm mt-1">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="text-green-400 text-sm mt-2 inline-block hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Skills */}
          <div className="bg-[var(--bg-two)] rounded-xl p-6">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-green-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
              <h2 className="text-xl font-bold text-[var(--text-one)]">
                Skills
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { name: "JavaScript/TypeScript", level: 90 },
                { name: "React/Next.js", level: 85 },
                { name: "UI/UX Design", level: 80 },
                { name: "Tailwind CSS", level: 85 },
                { name: "PHP", level: 85 },
                { name: "Laravel", level: 90 },
                { name: "Bootstrap", level: 80 },
                { name: "CSS3", level: 85 },
                { name: "REST API", level: 85 },
                { name: "MySQL", level: 80 },
                { name: "cPanel", level: 85 },
                { name: "Cloud Hosting (e.g., Vercel, Netlify)", level: 80 },
                { name: "Git/GitHub", level: 85 },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[var(--text-two)] text-sm">
                      {skill.name}
                    </span>
                    <span className="text-[var(--text-two)] text-xs">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-[var(--bg-one)] rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-[var(--bg-two)] rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AcademicCapIcon className="w-6 h-6 text-green-400 mr-2" />
              <h2 className="text-xl font-bold text-[var(--text-one)]">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              <div className="pl-8 border-l-2 border-green-500 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500"></div>
                <h3 className="text-[var(--text-one)] font-medium">
                  B.A. (Honours) in English — 3nd Year
                </h3>
                <p className="text-[var(--text-two)] text-sm mt-1">
                  Lalmonirhat Govt. College • 2026 - Present
                </p>
              </div>

              {/* আরও কিছু যোগ করতে চাইলে নিচে নতুন div তৈরি করো */}
              {/* Example: */}
              {/* <div className="pl-8 border-l-2 border-green-500 relative">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500"></div>
      <h3 className="text-[var(--text-one)] font-medium">
        Higher Secondary Certificate (HSC)
      </h3>
      <p className="text-[var(--text-two)] text-sm mt-1">
        [College Name] • 2020 - 2022
      </p>
    </div> */}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-[var(--bg-two)] rounded-xl p-6">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-green-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                ></path>
              </svg>
              <h2 className="text-xl font-bold text-[var(--text-one)]">
                Languages
              </h2>
            </div>

            <div className="space-y-3">
              {[
                { language: "English", level: "Fluent" },
                // { language: "Hindi", level: "Intermediate" },
                { language: "Bangla", level: "Native" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-[var(--text-two)]">
                    {item.language}
                  </span>
                  <span className="text-[var(--text-two)]">{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
