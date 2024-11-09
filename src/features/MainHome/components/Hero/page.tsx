import Image from "next/image";
import React from "react";
import { Button } from "@/components/page";
import { hero, leftArrow } from "../../../../../public/images/page";

export const Hero = () => {
  return (
    <section className="mt-10 relative max-w-7xl mx-auto">
      {/* Hero Image */}
      <Image
        src={hero}
        alt="hero"
        width={1200}
        height={600}
        className="rounded-xl w-full h-auto object-cover max-sm:h-[300px]"
        priority={true} // Optimize for faster loading
      />

      <div className="absolute inset-0 flex flex-col items-start justify-center p-10  lg:p-28 space-y-2 lg:space-y-6 xl:space-y-8 max-sm:items-center">
        <strong className="text-highlight font-Kalnia text-4xl  lg:text-5xl xl:text-6xl">
          Get 20% OFF
        </strong>

        <h1 className="text-white font-Kalnia text-3xl  lg:text-4xl xl:text-5xl">
          Prime Week
        </h1>
        
        <h1 className="text-white font-Kalnia text-3xl  lg:text-4xl xl:text-5xl">
          19/9 - 26/9
        </h1>

        {/* Book Now Button */}
        <Button className="bg-white text-primary flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded font-bold cursor-pointer">
          <span>Book Now</span>
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
    </section>
  );
};

export default Hero;
