import React from "react";
import Image from "next/image";
import { Hero2, hero3, leftArrow } from "../../../../../public/images/page";
import { Button } from "@/components/page";
export const ContactBanner = () => {
  return (
    <section className="my-20   flex items-center relative max-sm:mx-5 ">
      <Image
        src={Hero2}
        alt="hero"
        width={1260}
        height={400}
        className=" w-full max-sm:rounded-xl max-sm:h-[350px] object-cover"
      />
      <div className="absolute inset-0 ">
        <Image
          src={hero3}
          alt="hero"
          width={1260}
          height={400}
          className="w-full h-full max-sm:rounded-xl object-cover "
        />
      </div>
      <div className="absolute  z-40  ml-24">
        <strong className=" lg:text-5x  text-3xl  text-white font-Sans  font-bold">
          Need Help On
        </strong>

        <h1 className="lg:text-5xl text-3xl   text-white  py-2 font-Sans font-bold">
          Online Booking ?
        </h1>

        <Button className=" bg-white text-primary font-Sans flex justify-center items-center gap-3 pr-10 pl-5 font-bold mt-5">
          <span>Contact Us</span>
          <Image src={leftArrow} alt="leftArrow" width={20} height={20} />
        </Button>
      </div>
    </section>
  );
};

export default ContactBanner;
