"use client";
import React from "react";
import Image from "next/image";
import { Activity } from "../../types/page";
import {
  arrowBlue,
  test2,
} from "../../../public/images/page";

export const CardBlog = ({ activity }: { activity: Activity }) => {
  if (!activity) return null;

  return (
    <>
      <div className="p-3 shadow-cardShadow rounded-lg overflow-hidden relative bg-white">
        {/* Main Image */}
        <a href="#" className="block relative">
          <Image
            alt="Activity Image"
            src={test2}
            className="h-48 w-full  object-cover" 
            width={500}
            height={400}
          />
        </a>

        {/* Title */}
        <div className="mt-3">
          <div className="font-bold font-sans text-xl text-primary">
            {activity.name}
          </div>
        </div>

        {/* Date and Time */}
        <div className="flex  mt-2 max-sm:flex-col">
          <span className="text-h6Color text-sm">2 days ago, 5 min read</span>
          <span className="bg-gray-100 text-xs rounded-full px-2 py-1 sm:ml-8 w-20 max-sm:mt-2">
            Category 1
          </span>
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

export default CardBlog;
