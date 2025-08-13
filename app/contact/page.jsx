"use client";

import ContactComponent from "../component/AllPage/Contact/ContactComponent";
// import MyGoogleMap from "../component/AllPage/Contact/GoogleMap";
import SocialIcon from "../component/AllPage/SocialIcon";
import AllPageContainer from "../component/Container/AllPageContainer";
import HomeTitleContainer from "../component/Container/HomeTitleContainer";
import ContactFrom from "../component/AllPage/Contact/ContactFrom";
import Layout from "../component/layout/Layout";

// ✅ Heroicons v2 ব্যবহার
import {
  DevicePhoneMobileIcon,
  MapPinIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import AllPageContainerSkeleton from "../component/Skeleton/AllPageContainerSkeleton";
import SocialIconSkeleton from "../component/Skeleton/SocialIconSkeleton";
import ContactComponentSkeleton from "../component/Skeleton/ContactComponentSkeleton";
import HomeTitleSkeleton from "../component/Skeleton/HomeTitleSkeleton";
import ContactFormSkeleton from "../component/Skeleton/ContactFormSkeleton";

function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  const socialIcons = [
    {
      Url: "https://github.com",
      Icon: (
        <svg
          className="w-6 h-6 text-[var(--text-two)]"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.77 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.26 1.84 1.26 1.07 1.834 2.81 1.304 3.495.996.108-.775.42-1.304.762-1.603-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.526.118-3.176 0 0 1.008-.322 3.3 1.23a11.45 11.45 0 0 1 6 0c2.29-1.553 3.295-1.23 3.295-1.23.656 1.65.244 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.623-5.48 5.92.43.37.823 1.096.823 2.21v3.277c0 .32.216.694.825.576C20.565 22.27 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z" />
        </svg>
      ),
      Name: "GitHub",
    },
    {
      Url: "https://instagram.com",
      Icon: (
        <svg
          className="w-6 h-6 text-[var(--text-two)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
        </svg>
      ),
      Name: "Instagram",
    },
    {
      Url: "https://twitter.com",
      Icon: (
        <svg
          className="w-6 h-6 text-[var(--text-two)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.29 20.25c7.55 0 11.68-6.254 11.68-11.677 0-.18 0-.36-.01-.54A8.3 8.3 0 0 0 22 5.92a8.19 8.19 0 0 1-2.36.65 4.13 4.13 0 0 0 1.81-2.27 8.22 8.22 0 0 1-2.61 1 4.11 4.11 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.28 4.11 4.11 0 0 0 1.27 5.48A4.08 4.08 0 0 1 2.8 9.71v.05a4.11 4.11 0 0 0 3.3 4.03 4.09 4.09 0 0 1-1.85.07 4.11 4.11 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 18.41a11.62 11.62 0 0 0 6.29 1.84" />
        </svg>
      ),
      Name: "Twitter",
    },
    {
      Url: "https://linkedin.com",
      Icon: (
        <svg
          className="w-6 h-6 text-[var(--text-two)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.76.78 1.76 1.75-.79 1.76-1.76 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.06-1.87-3.06s-2.16 1.46-2.16 2.96v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.62 2 3.62 4.59v5.59z" />
        </svg>
      ),
      Name: "LinkedIn",
    },
  ];

  const data = [
    {
      icon: <DevicePhoneMobileIcon className="w-6 h-6 text-white" />,
      title: "WhatsApp",
      contact: "01613302799",
    },
    {
      icon: <MapPinIcon className="w-6 h-6 text-white" />,
      title: "Location",
      contact: "123 Example Street, City, Country",
    },
    {
      icon: <InboxArrowDownIcon className="w-6 h-6 text-white" />,
      title: "Email",
      contact: "kmostofa479@gamil.com",
    },
  ];

  return (
    <Layout>
      <div className="">
        {loading ? (
          <AllPageContainerSkeleton />
        ) : (
          <AllPageContainer
            Title="Contact"
            Description="Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to evans@yourwebsite.com. Want to get connected? Follow me on the social channels below."
          />
        )}

        {loading ? <SocialIconSkeleton /> : <SocialIcon Icon={socialIcons} />}

        {loading ? (
          <AllPageContainerSkeleton />
        ) : (
          <HomeTitleContainer
            Title="Contact Details"
            Description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
            Gray={false}
            Border={false}
          />
        )}
        {loading ? (
          <ContactComponentSkeleton />
        ) : (
          <div className="py-6 bg-[var(--bg-one)]">
            <ContactComponent Data={data} />
          </div>
        )}

        {loading ? (
          <HomeTitleSkeleton />
        ) : (
          <HomeTitleContainer
            Title="Get In Touch"
            Description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
            Gray={false}
            Border={false}
          />
        )}

        {loading ? (
          <ContactFormSkeleton />
        ) : (
          <div className="py-6 bg-[var(--bg-one)]">
            <ContactFrom />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Contact;
