import React from "react";
import Image from "next/image";

import { Hero2, hero3, leftArrow } from "../../../../../public/images/page";
import { Button } from "@/components/page";
const ContactBanner = () => {
  return (
    <section className="my-20  flex justify-center relative  mx-5 ">
      <Image
        src={Hero2}
        alt="hero"
        width={1300}
        height={1300}
        className="rounded-xl "
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div> */}
      <div className="absolute inset-0 ">
        <Image
          src={hero3}
          alt="hero"
          width={1300}
          height={1300}
          className="rounded-xl "
        />
      </div>

      {/* remove m-10  */}
      <div className="absolute bottom-20 left-20 z-40 ">
        <strong className=" lg:text-4xl  sm:text-xl  text-white font-Sans text-2xl font-bold">
          Need Help On
        </strong>

        <h1 className="lg:text-4xl sm:text-xl   text-white  py-2 font-Sans text-2xl font-bold">
          Online Booking ?
        </h1>

        {/* Ensure High Z-Index and Cursor Pointer for Button */}
        <Button className=" bg-white text-primary flex justify-center items-center gap-3 pr-10 pl-5 font-bold mt-5">
          <span>Contact Us</span>
          <Image src={leftArrow} alt="leftArrow" width={20} height={20} />
        </Button>
      </div>
    </section>
  );
};

export default ContactBanner;
