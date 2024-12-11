"use client";
import React from "react";
import {
  cabin,
  harbor,
  Harbor1,
  sizeIcon,
  priceIcon,
  Guest,
  duration,
} from "../../../../../../public/images/page";
import Image from "next/image";
import { Button } from "../../../../../components/page";

export const FilterDeals = () => {
  return (
    <div className="flex items-center justify-center     w-full">
      <div className="p-4 space-y-6 rounded-lg  bg-white shadow-md w-[617px] h-[510px] ">
        <div className=" text-primary text-xl font-medium">Filters</div>

        {/* Guests Range */}
        <div className="rounded-lg w-[585px] bg-h5Color h-[52px] px-4">
          <div className="flex items-center h-full justify-between">
            <div className="flex items-center gap-2">
              <Image src={duration} alt="harbor" className="text-primary" />
              <h1 className="text-lg text-primary">Duration</h1>
            </div>
            <div className="flex w-1/2 items-center justify-center space-x-1">
              <p className="text-h6Color text-xs">Min</p>
              <input
                type="range"
                min="1"
                max="10"
                defaultValue="5"
                className="w-[248px] rounded-lg accent-primary cursor-pointer h-1 "
              />
              <p className="text-h6Color text-xs">Max</p>
            </div>
          </div>
        </div>

        {/* Size Range */}
        <div className="rounded-lg w-[585px] bg-h5Color h-[52px] px-4">
          <div className="flex items-center h-full justify-between">
            <div className="flex items-center gap-2">
              <Image src={Guest} alt="harbor" className="text-primary" />
              <h1 className="text-lg text-primary">Guest</h1>
            </div>
            <div className="flex w-1/2 items-center justify-center space-x-1">
              <p className="text-h6Color text-xs">Min</p>
              <input
                type="range"
                min="1"
                max="10"
                defaultValue="5"
                className="w-[248px] rounded-lg accent-primary cursor-pointer h-1 "
              />
              <p className="text-h6Color text-xs">Max</p>
            </div>
          </div>
        </div>

        {/* Price Range */}
        <div className="rounded-lg w-[585px] bg-h5Color h-[52px] px-4">
          <div className="flex items-center h-full justify-between">
            <div className="flex items-center gap-2">
              <Image src={priceIcon} alt="harbor" className="text-primary" />
              <h1 className="text-lg text-primary">Price</h1>
            </div>
            <div className="flex w-1/2 items-center justify-center space-x-1">
              <p className="text-h6Color text-xs">Min</p>
              <input
                type="range"
                min="1"
                max="10"
                defaultValue="5"
                className="w-[248px] rounded-lg accent-primary cursor-pointer h-1 "
              />
              <p className="text-h6Color text-xs">Max</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className=" text-primary underline text-xl">Reset All</div>
          <Button className="bg-primary text-white w-[150px]">Done</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterDeals;
