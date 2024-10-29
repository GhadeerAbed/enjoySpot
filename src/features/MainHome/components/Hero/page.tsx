import Image from "next/image";
import React from "react";
import { Button } from "@/components/page";
import { hero, leftArrow } from "../../../../../public/images/page";

export const Hero = () => {
  return (
    <section className="mt-10 flex justify-center relative lg:mx-[100px] mx-10">
      {/* Hero Image */}
      <Image
        src={hero}
        alt="hero"
        width={1300}
        height={1300}
        className="rounded-xl"
        priority={true} // Optimize for faster loading
      />

      {/* Overlay Content */}
      <div className="absolute inset-0  lg:top-16  lg:left-40     left-[10%] top-[15%] z-40">
        <strong className="lg:text-6xl md:text-4xl sm:text-3xl  text-highlight font-Kalnia">
          Get 20% OFF
        </strong>

        <h1 className="lg:text-6xl md:text-4xl sm:text-3xl  text-white lg:py-2 font-Kalnia">
          Prime Week
        </h1>
        <h1 className="lg:text-6xl md:text-4xl sm:text-3xl  text-white font-Kalnia">
          19/9 - 26/9
        </h1>

        {/* Book Now Button */}
        <Button className="bg-white text-primary flex justify-center items-center gap-3 sm:pr-10 lg:pl-5 font-bold sm:mt-5 mt-1 cursor-pointer z-50 xs:p-1 xs:text-xs lg:text-lg lg:p-3 lg:w-[187px] md:w-[150px] md:h-[40px] sm:p-2  ">
          <span>Book Now</span>
          {/* Left Arrow Image */}
          <Image
            src={leftArrow}
            alt="leftArrow"
            width={20}
            height={20}
            className="xs:w-[10px] lg:w-[20px] md:w-[15px]"
          />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
