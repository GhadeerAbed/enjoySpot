"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../../../../components/Button/page";
import {
  duration,
  empStar,
  hour,
  location,

  stars,
} from "../../../../../public/images/page";

export const ReviewPage = () => {
  // State to manage the selected rating
  const [rating, setRating] = useState<number>(0);

  // Function to handle star click
  const handleStarClick = (index: number) => {
    setRating(index + 1); // Update rating (index is 0-based, so add 1)
  };

  return (
    <div className="flex items-center justify-center w-full my-10 space-y-10">
      <div className="w-[370px] h-[496px] rounded-lg bg-white shadow-lg">
        <div className="flex w-full my-5">
          <div className="text-center w-1/3 h-[72px] border-r">
            <div className="text-3xl font-medium text-h1Color">07</div>
            <div className="text-h1Color font-medium">Oct, Mon</div>
          </div>
          <div className="w-2/3 px-10">
            <div className="text-primary text-xl font-bold">Helicopter Ride</div>
            <div className="text-xs text-h6Color">#717254</div>
          </div>
        </div>
        <div className="mb-3 flex justify-center space-x-7">
          <div className="flex">
            <Image src={hour} alt="" className="mr-2" />
            <span className="text-h6Color">10:30 PM</span>
          </div>
          <div className="flex">
            <Image src={duration} alt="dataTime" className="mr-2" />
            <span className="text-h6Color">20 Mins</span>
          </div>
          <div className="flex">
            <Image src={location} alt="location" className="mr-2" />
            <span className="text-h6Color">Location</span>
          </div>
        </div>

        <div className="flex justify-between items-center mx-7 my-5">
          <div className="font-medium text-h6Color">Rate:</div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Image
                src={i < rating ? stars : empStar} // Conditional to display filled or empty stars
                alt="star"
                className="cursor-pointer"
                key={i}
                onClick={() => handleStarClick(i)} // Handle star click
              />
            ))}
          </div>
        </div>

        <div className="mx-7 my-5">
          <textarea
            className="w-full mx-auto h-[150px] border border-h4Color rounded-[20px] mb-4"
            placeholder="Write your review"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="flex flex-col mx-7 my-5">
          <Button className="w-1/2 mx-auto bg-primary mt-5 text-white">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
