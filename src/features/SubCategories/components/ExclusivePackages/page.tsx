import Image from "next/image";
import React from "react";
import {
  exclusiveBanner,
  fastYachts,
  helicoptarExclusive,
  leftArrow,
  sort,
  yachtExclusive,
} from "../../../../../public/images/page";
import { Button } from "@/components/page";
import { exclusivDatas } from "@/data/layoutData/exclusive";
import { ExpoloreMore } from "@/features/MainHome/components/page";

export const ExculsivePackages = () => {
  return (
    <section className="mt-10 mx-[80px]">
      {/* --------------------Banner-------------- */}
      <div className="flex justify-center relative ">
        <Image src={exclusiveBanner} alt="exclusiveBanner" />
          
        <div className="absolute top-1/4  bottom-3/4 z-40 text-center  ">
          <h1 className=" text-white font-abel pb-5 opacity-75">
            tailord Experiences For Ever Advanture 
          </h1>
          <h1 className=" lg:text-5xl  font-bold  sm:text-2xl  text-xl text-highlight font-Kalnia pb-5">
            Discover Our ,
          </h1>
          <h1 className=" lg:text-5xl font-bold sm:text-2xl text-xl text-highlight font-Kalnia">
            Exclusive Packages ,
          </h1>


          {/* Ensure High Z-Index and Cursor Pointer for Button */}
        </div>
      </div>

      {/* --------------------Buttons-------------- */}

      <div className="flex relative text-center justify-center my-5">
        <div className=" flex  space-x-10 mt-10 text-primary font-Sans">
          <div className="border rounded-full  p-1 px-5 bg-white">
            City Name
          </div>
          <div className="border rounded-full p-1 px-5 bg-white">City Name</div>
          <div className="border rounded-full p-1 px-5 bg-white">City Name</div>
          <div className="border rounded-full p-1 px-5 bg-white">City Name</div>
          <div className="border rounded-full p-1 px-5 bg-white">City Name</div>
          <div className="border rounded-full p-1 px-5 bg-white">City Name</div>
          <div className="border rounded-full p-1 px-5 bg-white">City Name</div>
        </div>
        <div className="absolute right-7 bottom-0 mr-10">
          <Image src={sort} alt="sorButton" className="" />
        </div>
      </div>

      {/* --------------------Cards-------------- */}

      {exclusivDatas.map((offer, id) => {
        return (
          <div className="" key={id}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 justify-center my-10 border rounded-lg  relative">
              <div className="bg-white shadow-md overflow-hidden rounded-l-lg">
                <Image
                  src={yachtExclusive}
                  alt="YACHT"
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="bg-white shadow-md overflow-hidden">
                <Image
                  src={helicoptarExclusive}
                  alt="HELICOPTER"
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="bg-white shadow-md rounded-r-lg overflow-hidden">
                <Image
                  src={fastYachts}
                  alt="JETSKI"
                  className="w-full h-60 object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-85"></div>

              <div className="absolute bottom-5 left-3 space-y-2 mx-5">
                <h1 className="font-bold font-Sans   text-white">
                  {offer.name}
                </h1>
                <p className="font-Sans text-gray-200 text-xs max-w-[600px] ">
                  {offer.deals}
                </p>
              </div>

              <div className="absolute bottom-5 right-3">
                <div className="flex bg-white bg-opacity-50 rounded-full px-3 space-x-5 ">
                  <div className="flex space-x-1">
                    <h1 className="font-bold font-Sans text-white ">
                      {offer.priceAfter}
                    </h1>
                    <span className="text-xs mt-2 text-white font-bold z-40 font-Sans">
                      AED
                    </span>
                  </div>
                  <div className="line-through text-white font-Sans">
                    {offer.priceBefore} AED
                  </div>
                </div>

                <Button className="bg-white text-primary flex justify-center items-center gap-3 font-Sans pr-10 pl-5 font-bold mt-2">
                  <span>Check Availability</span>
                  <Image
                    src={leftArrow}
                    alt="leftArrow"
                    width={20}
                    height={20}
                  />
                </Button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="">
        <ExpoloreMore />
      </div>
    </section>
  );
};

export default ExculsivePackages;
