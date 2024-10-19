"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { activities } from "@/data/layoutData/activite";
import Card from "@/components/Card/page";
import Image from "next/image";
import { leftSlide, rightSlide } from "../../../../../public/images/page";

// Custom Left Arrow
// Custom Left Arrow
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-0 transform -translate-y-1/2 -left-10  z-10 cursor-pointer"
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
      className="absolute top-0  transform -translate-y-1/2 -right-10  z-10 cursor-pointer"
      onClick={onClick}
    >
      <Image src={rightSlide} alt="leftArrow" width={24} height={24} />
    </div>
  );
};

export const Activities = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Adding custom right arrow
    prevArrow: <PrevArrow />, // Adding custom left arrow
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-20  lg:mx-20 mx-5">
      <h1 className="text-center text-xl uppercase text-secondary py-2 font-Kalnia">
        Explore
      </h1>
      <h2 className="text-center font-Sans text-2xl sm:text-4xl font-bold text-h1Color ">
        MOST POPULAR ACTIVITIES
      </h2>


        <div className=" md:mx-20 mx-10 mt-20">
          <Slider {...settings} >
            {activities.map((activity) => (
              <div key={activity.id} className="px-4 py-12 ">
                <Card activity={activity} />
              </div>
            ))}
          </Slider>
        </div>


      <div className="text-center -mt-3 ">
        <a href="#" className="text-primary font-semibold underline">
          View All
        </a>
      </div>
    </section>
  );
};

export default Activities;
