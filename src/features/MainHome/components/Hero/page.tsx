"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Button } from "@/components/page";
import { leftArrow } from "../../../../../public/images/page";
import { API_SERVICES_URLS } from "@/data/page";
import { useSWRHook } from "@/hooks/page";

export const Hero = () => {
  const { data, error } = useSWRHook(API_SERVICES_URLS.HOME_SLIDER);
  if (error) return <div>Error loading slider data</div>;
  if (!data) return <div>Loading...</div>;

  const sliderItems = data?.data?.slider?.items || [];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
 
  };

  return (
    <section className="mt-10 relative max-w-7xl mx-auto max-[1290px]:mx-10">
      <Slider {...settings}>
        {sliderItems.map((item: any, index: number) => (
          <div key={index} className="">
            <div className="relative">
              {/* Hero Image */}
              <Image
                src={`http://enjoyspot.runasp.net` + item.imagePath}
                alt={`slider-image-${index}`}
                width={1200}
                height={450}
                className="rounded-xl w-full h-[450px] object-cover max-sm:h-[300px] "
                priority={true}
              />

              <div className="absolute inset-0 flex flex-col items-start justify-center p-10 lg:p-28 space-y-2 lg:space-y-6 xl:space-y-8 max-sm:items-center">
                <strong className="text-highlight font-Kalnia text-4xl lg:text-5xl xl:text-6xl">
                  {item.title}
                </strong>

                <h1 className="text-white font-Kalnia text-3xl lg:text-4xl xl:text-5xl">
                  {item.description}
                </h1>

                {/* Book Now Button */}
                <Button className="bg-white text-primary flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded font-bold cursor-pointer">
                  <span>{item.button}</span>
                  {/* Left Arrow Image */}
                  <Image
                    src={leftArrow}
                    alt="leftArrow"
                    width={20}
                    height={20}
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
