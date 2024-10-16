import Image from "next/image";
import React from "react";
import {
  birds,
  leftArrow,
  linearGrd,
  mosPopular,
} from "../../../../../public/images/page";
import { Button } from "@/components/page";

const DubaiBirds = () => {
  return (
    <>
      // {/* -------------  {Banner}------------------------ */}
      <div className=" mt-10 mb-10">
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
      </div>
      {/* ------------------------------ArticleButton------------------------------ */}
      <div className="flex ">
        {/* //leftside */}
        <div className="w-2/3 relative">
          <div className="  mx-36 my-10">
            <div className="text-h1Color">
              <span className="text-5xl">.</span>Related article 1
            </div>
            <div className="text-h1Color">
              <span className="text-5xl">.</span>Related article 1
            </div>
            <div className="text-h1Color">
              <span className="text-5xl">.</span>Related article 1
            </div>
            <div className="text-h1Color">
              <span className="text-5xl my-5">.</span>Related article 1
            </div>
          </div>
        </div>
        {/* //rightside */}

        <div className="flex flex-col items-center space-y-3 mx-12">
          <div className="w-full max-w-sm border rounded-lg shadow-borderShadow flex justify-between h-[95px] items-center">
            <Image src={mosPopular} alt="Most Popular" className="w-1/4" />
            <div className="flex-col w-3/4 p-2">
              <div className="font-Sans text-primary mt-3">
                The best 10 things to do on your next trip
              </div>
              <div className="flex mt-3 justify-between">
                <div className="font-Sans text-primary text-xs py-2">
                  2 days ago, 5 min read
                </div>
                <span className="border rounded-full bg-slate-200 px-3 py-1 mb-3 text-xs mr-2">
                  Category 1
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm border rounded-lg shadow-borderShadow flex justify-between h-[95px] items-center">
            <Image src={mosPopular} alt="Most Popular" className="w-1/4" />
            <div className="flex-col w-3/4 p-2">
              <div className="font-Sans text-primary p-2">
                The best 10 things to do on your next trip
              </div>
              <div className="flex mt-4 justify-between">
                <div className="font-Sans text-primary text-xs py-2">
                  2 days ago, 5 min read
                </div>
                <span className="border rounded-full bg-slate-200 px-3 py-1 text-xs mb-3  mr-2">
                  Category 1
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm border rounded-lg shadow-borderShadow flex justify-between h-[111px] items-center">
            <Image src={mosPopular} alt="Most Popular" className="w-1/4" />
            <div className="flex-col w-3/4 p-2">
              <div className="font-Sans text-primary">
                The best 10 things to do on your next trip
              </div>
              <div className="flex mt-4 justify-between">
                <div className="font-Sans text-primary text-xs py-2">
                  2 days ago, 5 min read
                </div>
                <span className="border rounded-full bg-slate-200 px-3 py-1 text-xs mr-2">
                  Category 1
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm border rounded-lg shadow-borderShadow flex justify-between h-[111px] items-center">
            <Image src={mosPopular} alt="Most Popular" className="w-1/4" />
            <div className="flex-col w-3/4 p-2">
              <div className="font-Sans text-primary">
                The best 10 things to do on your next trip
              </div>
              <div className="flex mt-4 justify-between">
                <div className="font-Sans text-primary text-xs py-2">
                  2 days ago, 5 min read
                </div>
                <span className="border rounded-full bg-slate-200 px-3 py-1 text-xs mr-2">
                  Category 1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DubaiBirds;
