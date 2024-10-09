"use client";
import { HeroBanner } from "@/components/page";
import React, { useEffect, useState } from "react";

export const Hero = () => {
  // const [backgroundImage, setBackgroundImage] = useState("/bannery.svg"); // Default image

  // useEffect(() => {
  //   const fetchBackgroundImage = async () => {
  //     try {
  //       const response = await fetch("/api/image");
  //       const data = await response.json();
  //       // setBackgroundImage(data.imageUrl);
  //     } catch (error) {
  //       console.error("Error fetching background image:", error);
  //     }
  //   };

  //   fetchBackgroundImage();
  // }, []);

  return (
    <section
      className="relative bg-cover bg-no-repeat w-[85%] mx-auto rounded-xl overflow-hidden mt-10 "
      // style={{ backgroundImage: `url(${backgroundImage})`, height: "393px" }} // Ensure height is dynamic if needed
    >
      <HeroBanner />
      {/* Gradient Background to Ensure Contrast */}
      <div className="absolute inset-0 top-20 m-10 left-12  sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l z-40">
        <strong className="font-serif text-5xl text-highlight z-50 sm:text-2xl md:text-3xl lg:text-5xl">
          Get 20% OFF
        </strong>

        <h1 className="text-3xl font-decorativeSerif text-white sm:text-5xl z-50">
          Prime Week
        </h1>
        <h1 className="text-3xl font-decorativeSerif text-white sm:text-4xl z-50">
          19/9 - 26/9
        </h1>

        {/* Ensure High Z-Index and Cursor Pointer for Button */}
        <button className="flex items-center w-full  md:w-1/3 lg:w-1/4 rounded my-2 bg-white text-primary px-6 md:px-12 py-2 md:py-3 text-sm md:text-base font-medium hover:bg-primary hover:text-white cursor-pointer z-50 focus:outline-none focus:ring focus:ring-primary/50 active:bg-primary transition duration-300 ease-in-out sm:w-1/4">
          Book Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>

      
      
    </section>
  );
};

export default Hero;
