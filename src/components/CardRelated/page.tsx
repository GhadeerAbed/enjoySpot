"use client";
import React from "react";
import Image from "next/image";
import { Article, Activity } from "../../types/page";
import { arrowBlue, test2 } from "../../../public/images/page";

export const CardRelated = ({ activity }: { activity: Article }) => {
  if (!activity) return null;

  return (
    <>
      <div className="p-3 shadow-cardShadow rounded-lg overflow-hidden relative bg-white">
        {/* Main Image */}
        <a href="#" className="block relative">
          <Image
            alt="Activity Image"
            src={test2}
            className="h-48 w-full  object-cover rounded-lg"
            width={500}
            height={400}
          />
        </a>

        {/* Title */}
        <div className="mt-3">
          <div className="font-bold text-xl text-primary font-abel">
            {activity.name}
          </div>
        </div>

        {/* Date and Time */}
        <div className="flex  mt-2 max-sm:flex-col ">
          <div className="text-h6Color text-sm"> {activity.activated}</div>
          <div className="ml-10">
            <div className="bg-gray-100 text-xs rounded-full p-1  text-center  sm:mx-1 w-20 ">
              {activity.category}
            </div>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="w-12 h-12  rounded-tl-full absolute bottom-0 right-0 shadow-lg">
          <div className="relative">
            <Image
              src={arrowBlue}
              width={70}
              height={57}
              alt=""
              className="absolute left-0 top-1 mx-1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRelated;
