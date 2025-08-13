import HomeTitleContainer from "../Container/HomeTitleContainer";
import TestimonialCard from "./TestimonialsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./CustomArrow";
import { useHome } from "@/app/context/HomeContext";
import { useEffect, useState } from "react";
import HomeTitleSkeleton from "../Skeleton/HomeTitleSkeleton";
import TestimonialCardSkeleton from "../Skeleton/TestimonialCardSkeleton";

function Testimonials() {
  const { fetchTestimonials, testimonials, loading } = useHome(); 

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div>
      {loading ? (
        <HomeTitleSkeleton />
      ) : (
        <HomeTitleContainer
          Description="See how I've helped our clients succeed. It’s a highly customizable, creative, modern, visually stunning, and Bootstrap 5 HTML5 template."
          Title="Testimonials"
          Gray={false}
        />
      )}

      <section className="bg-[var(--bg-one)] py-12">
        <div className="container mx-auto px-6 lg:px-12 relative">
          {/* Slick Carousel */}
          <Slider {...sliderSettings} className="mx-auto relative">
            {loading
              ? Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="p-4">
                      <TestimonialCardSkeleton />
                    </div>
                  ))
              : testimonials.map((testimonial, index) => (
                  <div key={index} className="p-4">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
