"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Card from "@/components/Card/page";
import Image from "next/image";
import { leftSlide, rightSlide } from "../../../../../public/images/page";
import { useEffect, useState } from "react";
import { API_SERVICES_URLS } from "@/data/page";
import { useSWRHook } from "@/hooks/page";

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-0 transform -translate-y-1/2 -left-10 max-sm:left-0 z-10 cursor-pointer"
      onClick={onClick}
    >
      <Image src={leftSlide} alt="leftArrow" width={24} height={24} />
    </div>
  );
};

// Custom Right Arrow
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-0 transform -translate-y-1/2 -right-10 max-sm:right-0 z-10 cursor-pointer"
      onClick={onClick}
    >
      <Image src={rightSlide} alt="rightArrow" width={24} height={24} />
    </div>
  );
};

export const Activities = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const {data:activities} = useSWRHook(API_SERVICES_URLS.GET_ALL_LISTINGS)
  console.log(activities?.data?.data)
  // Check screen size on mount
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 468);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Update on resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: !isMobile,
    nextArrow: !isMobile ? <NextArrow /> : null,
    prevArrow: !isMobile ? <PrevArrow /> : null,
    swipe: true,
    touchMove: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (currentSlide: number) => {
      // Hide the scroll hint if the user has started scrolling
      if (currentSlide > 0) {
        setShowScrollHint(false);
      }
    },
  };

  return (
    <section className="relative mt-20 max-w-7xl mx-auto max-sm:mx-5">
      <h1 className="text-center text-xl uppercase text-secondary py-2 font-Kalnia">
        Explore
      </h1>
      <h2 className="text-center font-Sans text-xl ss:text-4xl font-bold text-h1Color">
        MOST POPULAR ACTIVITIES
      </h2>

      <div className="relative sm:mx-20  mt-20">
        {/* Fade effect on the right */}
        <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white pointer-events-none z-10"></div>

        {/* Slider Component */}
        <Slider {...settings}>
          {activities?.data?.data?.map((activity:any) => (
            <div key={activity.id} className="px-2 py-12">
              <Card activity={activity} />
            </div>
          ))}
        </Slider>

        {/* Swipe hint on mobile */}
        {isMobile && showScrollHint && (
          <div className="absolute right-5 bottom-5 text-sm text-gray-500 animate-pulse z-20">
            Swipe for more &rarr;
          </div>
        )}
      </div>

      <div className="text-center -mt-3">
        <a href={`/most_populer-activities`} className="text-primary font-semibold underline">
          View All
        </a>
      </div>
    </section>
  );
};

export default Activities;
