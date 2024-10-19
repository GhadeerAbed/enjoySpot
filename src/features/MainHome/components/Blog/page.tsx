"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { activities } from "@/data/layoutData/activite";
import Image from "next/image";
import { leftSlide, rightSlide } from "../../../../../public/images/page";
import { CardBlog } from "@/components/page";

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-0 transform -translate-y-1/2 left-0  z-10 cursor-pointer"
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
      className="absolute top-0  transform -translate-y-1/2 right-0  z-10 cursor-pointer"
      onClick={onClick}
    >
      <Image src={rightSlide} alt="leftArrow" width={24} height={24} />
    </div>
  );
};
export const Blog = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <section className="mt-20  lg:mx-20  mx-5">
      <h1 className="text-center text-xl uppercase  py-2 font-Kalnia">
        DISCOVER MORE
      </h1>
      <h2 className="text-center font-Sans text-4xl font-bold text-h1Color ">
        OUR BLOG
      </h2>

      <div className="mt-20  ">
        <Slider {...settings}>
          {activities.map((activity) => (
            <div key={activity.id} className="px-3 py-10">
              <CardBlog activity={activity} />
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

export default Blog;
