import { useState, useEffect } from "react";
import HomeTitleContainer from "../Container/HomeTitleContainer";
import ServicesCard from "./ServicesCard";
import HomeTitleSkeleton from "../skeleton/HomeTitleSkeleton";
import ServicesCardSkeleton from "../skeleton/ServicesCardSkeleton";

import webImage from '@/public/assets/img/web.png'
import mobileImage from '@/public/assets/img/mobile.jpg'
import apiImage from '@/public/assets/img/api.png'
import uxImage from '@/public/assets/img/ux.png'
import ecomImage from '@/public/assets/img/ecom.png'
import cluedImage from '@/public/assets/img/clude.png'
import databaseImage from '@/public/assets/img/database.png'
import maintenanceImage from '@/public/assets/img/devops.png'

const WhatIDo = () => {
  const [loading, setLoading] = useState(true);

  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and dynamic websites using React, Next.js, and Laravel.',
      image: { src: webImage, alt: 'Web Development' },
    },
    {
      title: 'Mobile App Development',
      description: 'Developing high-performance apps for both Android and iOS using React Native and Flutter.',
      image: { src: mobileImage, alt: 'Mobile App Development' },
    },
    {
      title: 'API Development',
      description: 'Creating secure and scalable RESTful & GraphQL APIs for web and mobile apps.',
      image: { src: apiImage, alt: 'API Development' },
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces with a focus on user experience and accessibility.',
      image: { src: uxImage, alt: 'UI/UX Design' },
    },
    {
      title: 'E-commerce Solutions',
      description: 'Building complete online store systems with custom cart, payment, and admin features.',
      image: { src: ecomImage, alt: 'E-commerce Solutions' },
    },
    {
      title: 'Cloud Deployment',
      description: 'Deploying applications on AWS, DigitalOcean, and other cloud platforms with CI/CD.',
      image: { src: cluedImage, alt: 'Cloud Deployment'},
    },
    {
      title: 'Database Design',
      description: 'Designing efficient and scalable relational and NoSQL databases.',
      image: { src: databaseImage, alt: 'Database Design' },
    },
    {
      title: 'Software Maintenance',
      description: 'Ongoing support, performance optimization, and bug fixing for live systems.',
      image: { src: maintenanceImage, alt: 'Software Maintenance' },
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <HomeTitleSkeleton  />
      ) : (
        <HomeTitleContainer
          Description='I have more than 5 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.'
          Title='What I do'
          Button='Services & Pricing'
          To='/Services_Pricing'
          Gray={false}
        />
      )}

      {loading ? (
        <ServicesCardSkeleton />
      ) : (
        <ServicesCard services={services} />
      )}
    </>
  );
};

export default WhatIDo;
