"use client";
import React from "react";
import Image from "next/image";
import { Activity } from "../../types/page";
import {
  arrowBlue,
  vistor,
} from "../../../public/images/page";

export const CardVistor = ({ activity }: { activity: Activity }) => {
  if (!activity) return null;

  return (
    <>
      <div className="p-3 shadow-cardShadow rounded-lg overflow-hidden relative bg-white">
        {/* Main Image */}
        <a href="#" className="block relative">
          <Image
            alt="Activity Image"
            src={vistor}
            className="h-48 w-full  object-cover rounded-[20px]" 
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
          <span className="text-h6Color text-sm">2 days ago, 5 min</span>
          
        </div>

        {/* Arrow Icon */}
        
      </div>
    </>
  );
};

export default CardVistor;
