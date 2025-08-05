"use client";
import AllPageContainer from "../component/Container/AllPageContainer";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Layout from "../component/layout/Layout";
import ResumeComponent from "../component/AllPage/Resume/Resume";
import AllPageContainerSkeleton from "../component/Skeleton/AllPageContainerSkeleton";
import { useEffect, useState } from "react";
import ResumeSkeleton from "../component/Skeleton/ResumeSkeleton";
function Resume() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a loading delay of 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  return (
    <Layout>
      <div className="bg-[var(--bg-one)] ">
        {loading ? (
          <AllPageContainerSkeleton />
        ) : (
          <AllPageContainer
            Title="Online Resume"
            Button="Download PDF Version"
            icon={<DocumentTextIcon className="w-6 h-6 text-white" />}
          />
        )}

        {loading ? (
          <ResumeSkeleton />
        ) : (
          <div className="">
            <ResumeComponent />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Resume;
