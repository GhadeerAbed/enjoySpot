import React from "react";
import Image from "next/image";
import { Hero2, hero3, leftArrow } from "../../../../../public/images/page";
import { Button } from "@/components/page";
export const ContactBanner = () => {
  return (
    <section className="my-20  flex items-center sm:mx-32 mx-5  relative  ">
      <Image
        src={Hero2}
        alt="hero"
        width={1260}
        height={1260}
        className="rounded-xl "
      />
      <div className="absolute inset-0 ">
        <Image
          src={hero3}
          alt="hero"
          width={1260}
          height={1260}
          className="rounded-xl "
        />
      </div>

      {/* remove m-10  */}
      <div className="absolute  z-40  ml-24">
        <strong className=" lg:text-5xl sm:text-2xl text-xl  text-white font-Sans  font-bold">
          Need Help On
        </strong>

        <h1 className="lg:text-5xl sm:text-2xl text-xl  text-white  py-2 font-Sans font-bold">
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
