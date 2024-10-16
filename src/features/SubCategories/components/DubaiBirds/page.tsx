import Image from "next/image";
import React from "react";
import { birds, leftArrow, linearGrd } from "../../../../../public/images/page";
import { Button } from "@/components/page";

const DubaiBirds = () => {
  return (
    <>
      // {/* -------------  {Banner}------------------------ */}
      <section className=" mt-10">
        <div className=" relative ">
          <div className="flex justify-center text-center">
            <Image src={birds} alt="birdsDubai" className="rounded-lg" />
          </div>

          <div className="absolute top-10  left-40  space-y-5  z-40 ">
            <div className=" lg:text-5xl  sm:text-2xl text-xl text-highlight font-Kalnia font-bold ">
              The rarest species of
            </div>
            <div className=" lg:text-5xl  sm:text-2xl text-xl text-highlight font-Kalnia font-bold ">
              birds in the Dubai
            </div>
            <div className=" lg:text-5xl  sm:text-2xl text-xl text-highlight font-Kalnia font-bold ">
              Dubai desert
            </div>

            <div className="space-x-5 my-5">
              <span className="font-Sans text-white text-xs">
                2days ago. 5min read
              </span>
              <span className="font-Sans text-primary bg-white rounded-full p-2 text-xs ">
                Category 1
              </span>
            </div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <Image src={linearGrd} alt="linearGradient" />
          </div>
        </div>
      </section>



      <section className="">
        <div className="w-3/4   relative ">
          <div className="absolute left-36 top-1/2    bottom-0 ">
            <div className="text-h1Color">
               Realted article 1
            </div>
            <div className="text-h1Color">
              <span className="text-5xl">.</span>Realted article 1
            </div>
            <div className="text-h1Color">
              <span className="text-5xl">.</span>Realted article 1
            </div>
            <div className="text-h1Color">
              <span className="text-5xl my-5">.</span>Realted article 1
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DubaiBirds;
