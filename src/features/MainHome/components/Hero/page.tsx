"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/page";
import { leftArrow } from "../../../../../public/images/page";
import { API_SERVICES_URLS } from "@/data/page";
import { useSWRHook } from "@/hooks/page";
import SkeletonBanner from "@/components/SkeltonBanner/page";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export const Hero = () => {
  const { data, error } = useSWRHook(API_SERVICES_URLS.HOME_SLIDER);
  console.log(data);
  if (error) return <div>Error loading slider data</div>;
  if (!data) return <div><SkeletonBanner/></div>;

  const sliderItems = data?.data?.slider?.items || [];

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
    <section className="mt-10 relative max-w-7xl mx-auto max-[1290px]:mx-10 max-md:mx-5">
      <Suspense fallback={<SkeletonBanner />}>
        <Slider {...settings}>
          {sliderItems.map((item: any, index: number) => (
            <div key={index} className="">
              <div className="relative">
                <Image
                  src={`https://enjoyspot.premiumasp.net` + item.imagePath}
                  alt={`slider-image-${index}`}
                  width={1200}
                  height={450}
                  className="rounded-xl w-full h-[450px] object-cover max-md:h-[350px]"
                  priority={index === 0}
                  placeholder="blur"
                  blurDataURL={`https://enjoyspot.premiumasp.net${item.imagePath}?w=10&q=10`}
                />

                <div className="absolute inset-0 flex flex-col items-start justify-center p-10 lg:p-28 space-y-2 lg:space-y-6 xl:space-y-8 max-sm:items-center">
                  <strong className="text-highlight font-Kalnia text-4xl lg:text-5xl xl:text-6xl">
                    {item.title}
                  </strong>

                  <h1 className="text-white font-Kalnia text-3xl lg:text-4xl xl:text-5xl">
                    {item.description}
                  </h1>

                  <Button className="bg-white text-primary flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded font-bold cursor-pointer">
                    <span>{item.button}</span>
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
      </Suspense>
    </section>
  );
};

export default Hero;