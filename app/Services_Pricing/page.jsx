"use client";
import Questions from "../component/AllPage/Questions";
import ServicesPricingCard from "../component/AllPage/ServicesPricingCard";
import AllPageContainer from "../component/Container/AllPageContainer";
import HomeTitleContainer from "../component/Container/HomeTitleContainer";

import QuestionsPhoto from "@/public/assets/img/light.png";
import Layout from "../component/layout/Layout";
import Image from "next/image";
import AllPageContainerSkeleton from "../component/Skeleton/AllPageContainerSkeleton";
import { useEffect, useState } from "react";
import ServicesPricingCardSkeleton from "../component/Skeleton/ServicesPricingCardSkeleton";
import HomeTitleSkeleton from "../component/Skeleton/HomeTitleSkeleton";
import QuestionsSkeleton from "../component/Skeleton/QuestionsSkeleton";

function ServicesPricing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const cardData = [
    {
      title: "Basic",
      price: "900",
      duration: "Per Month",
      features: [
        "Web Development",
        "UI/UX Design",
        "Webflow Development",
        "Website Optimization",
        "24/7 Support",
      ],
      buttonText: "Choose Basic",
      link: "#",
    },
    {
      title: "Standard",
      price: "1500",
      duration: "Per Month",
      features: [
        "Advanced Development",
        "Custom UI/UX",
        "Webflow Pro",
        "SEO Optimization",
        "Dedicated Support",
      ],
      buttonText: "Choose Standard",
      link: "#",
    },
    {
      title: "Premium",
      price: "2500",
      duration: "Per Month",
      features: [
        "Full-Stack Development",
        "Custom Designs",
        "E-Commerce Solutions",
        "Website Performance",
        "24/7 Premium Support",
      ],
      buttonText: "Choose Premium",
      link: "#",
    },
  ];

  return (
    <Layout>
      <div>
        {loading ? (
          <AllPageContainerSkeleton />
        ) : (
          <AllPageContainer
            Title="Services & Pricing"
            Description="I have 5+ years of development experience building software for the web and mobile devices. You can take a look at my online resume and project portfolio to find out more about my skills and experiences."
            Button="Hire Me"
          />
        )}

        <div className=" bg-[var(--bg-one)] p-4 sm:p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <>
                <ServicesPricingCardSkeleton />
                <ServicesPricingCardSkeleton />
                <ServicesPricingCardSkeleton />
              </>
            ) : (
              cardData.map((data, index) => (
                <ServicesPricingCard key={index} data={data} />
              ))
            )}
          </div>
        </div>

        {loading ? (
          <AllPageContainerSkeleton />
        ) : (
          <AllPageContainer
            Title="Want to hire me for custom package?"
            Description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore."
            Button="Hire Me"
          />
        )}
        {loading ? (
          <HomeTitleSkeleton />
        ) : (
          <HomeTitleContainer
            Title="Have any questions?"
            Description="You can use this section to address any queries your potential clients may have."
            Gray={false}
          />
        )}
        
        {loading ? <QuestionsSkeleton /> : 
        
        
        <div className="bg-[var(--bg-one)] ">
          <div className="flex justify-between items-center  mx-6 sm:mx-20 lg:mx-20">
            <div className=" w-full  lg:w-1/2 ">
              {" "}
              {/* Set width to 50% */}
              <Questions />
            </div>

            <div className="lg:w-1/2 hidden lg:block lg:flex lg:justify-center">
              {" "}
              {/* Set width to 50% */}
              <Image
                src={QuestionsPhoto}
                alt="Questions Illustration"
                className="w-1/2 h-auto"
              />
            </div>
          </div>
        </div>
        }
      </div>
    </Layout>
  );
}

export default ServicesPricing;
