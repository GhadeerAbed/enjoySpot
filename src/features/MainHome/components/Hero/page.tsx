import Image from "next/image";
import React from "react";
import { hero, leftArrow } from "../../../../../public/images/page";
import { Button } from "@/components/page";

export const Hero = () => {
  return (
    //no need for use client
    //remove overflow hidden bg-no-repeat w-[85%] mx-auto relative bg-cover
    //no need for hero banner component because it static no need any affects
    // when take an svg be sure you take the specific image
    // Image component automatic optimize width and height to fit the screen
    //not font-serif , the font is font-Kalnia
    // all responsive you add is incorrect
    <section className="mt-10  flex justify-center relative  mx-5 ">
      <Image
        src={hero}
        alt="hero"
        width={1300}
        height={1300}
        className="rounded-xl "
      />
      {/* remove m-10  */}
      <div className="absolute inset-0 top-16  left-52 z-40 ">
        <strong className=" lg:text-6xl  sm:text-2xl text-xl text-highlight font-Kalnia">
          Get 20% OFF
        </strong>

        <h1 className="lg:text-6xl sm:text-2xl text-xl  text-white  py-2 font-Kalnia">
          Prime Week
        </h1>
        <h1 className="lg:text-6xl sm:text-2xl text-xl  text-white font-Kalnia">
          19/9 - 26/9
        </h1>

        {/* Ensure High Z-Index and Cursor Pointer for Button */}
        <Button className=" bg-white text-primary flex justify-center items-center gap-3 pr-10 pl-5 font-bold mt-5">
         <span>Book Now</span> 
         <Image src= {leftArrow} alt="leftArrow" width={20} height={20} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
