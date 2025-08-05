import {
  ArrowLongRightIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/20/solid";

import AdvancedTypewriter from "./Typewrite";
import TButton from "../core/TButton";
import Link from "next/link";

function LeftBanner() {
  const description = ["Designer", "Developer", "Creator"];

  return (
    <div className="overflow-hidden h-full relative z-0">
      <div className="mx-0 sm:mx-8 md:mx-20 flex flex-col justify-center items-center md:items-start h-full">
        <div className="text-[var(--text-one)] px-4 sm:px-6 md:px-12 w-full z-10 text-center md:text-left">
          <h2 className="text-lg sm:text-xl leading-[1.2] font-extrabold uppercase">
            Hi, I&apos;m a Freelancer
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-4">
            <AdvancedTypewriter texts={description} speed={1000} />
          </h2>
          <p className="text-[var(--text-one)] text-base sm:text-lg md:text-xl mb-6 leading-relaxed tracking-wide opacity-80">
            I&apos;m a software engineer specializing in scalable web apps.
            Explore my blog, project portfolio, and online resume.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <TButton
              Type="link"
              className="w-full sm:w-auto py-3 px-6 rounded-lg text-lg hover:bg-green-600 transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              Icon={<ArrowLongRightIcon className="w-5 h-5" />}
              to="/portfolio"
            >
              View Portfolio
            </TButton>
            <Link
              href="/resume"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-800 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-gray-700 transition duration-300 hover:shadow-md hover:scale-105"
            >
              <DocumentDuplicateIcon className="w-5 h-5" />
              <span>View Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
