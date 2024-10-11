"use client";
import React from "react";
import Image from "next/image";
import { Activity } from "../../types/page";
import {
  arrowBlue,
  location,
  pepole,
  star,
  test,
} from "../../../public/images/page";

export const CardBlog = ({ activity }: { activity: Activity }) => {
  if (!activity) return null;

  return (
    <>
      <div className="p-2 shadow-cardShadow rounded-lg overflow-hidden relative">
        {" "}
        {/* Added overflow-hidden to keep everything inside the card */}
        <a href="#" className="relative">
          {/* Increased image height */}
          <Image
            alt="Activity Image"
            src={test}
            className="h-56 w-full rounded-lg object-cover" // Apply rounded-lg for rounded image corners
            width={40}
            height={45}
          />

         
        </a>
        <div className="flex justify-between mt-3">
          <div className="font-bold font-sans text-xl text-primary">
            {activity.name}
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center    border-h6Color">
            <span className="text-h6Color text-[9px] ">2days ago,5min read </span>
          </div>

          <div className="flex items-center ">
            <span className="bg-gray-100 border text-xs rounded-full ml-2 p-1">
              Category{" "}
            </span>
          </div>
        </div>
        <div className="w-14 h-14 bg-gray-50 rounded-tl-full absolute  bottom-0 right-0 ">
          <div className="relative">
            <Image
              src={arrowBlue}
              width={70}
              height={57}
              alt=""
              className="absolute left-1 top-1 mx-1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBlog;
