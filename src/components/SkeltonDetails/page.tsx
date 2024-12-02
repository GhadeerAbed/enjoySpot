import React from "react";

const SkeletonDetails = () => {
  return (
<div className="mx-[100px] my-10 ">
    <div className="grid grid-cols-12 gap-4">
      {/* Skeleton for the main media area */}
      <div className="col-span-12 sm:col-span-7">
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg bg-gray-200 animate-pulse"></div>
      </div>

      {/* Skeleton for the thumbnails area */}
      <div className="col-span-12 sm:col-span-5 grid grid-cols-2 gap-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="col-span-1 relative w-full h-[190px] rounded-lg overflow-hidden bg-gray-200 animate-pulse"
          ></div>
        ))}
      </div>
    </div>
    <div className="flex justify-between ">
      {/* Listing Details */}
      <div className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:items-start w-full my-10 ">
        <div className="space-y-4 w-full">
          <div className="flex items-center">
            <div className="h-10 w-1/2 bg-h4Color rounded animate-pulse"></div>
            <div className="text-h6Color flex flex-row px-5 pt-3">
              <div className="h-6 w-32 bg-h4Color rounded animate-pulse ml-5"></div>
              <div className="h-6 w-6 bg-h4Color rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="flex gap-6">
            <p className="text-primary flex items-center">
              <span className="h-8 w-24 bg-h4Color rounded animate-pulse text-3xl font-bold"></span>
              <span className="h-6 w-20 bg-h4Color rounded animate-pulse font-medium ml-2"></span>
            </p>
            <p className="bg-[#00ADEE1A] py-2 px-3 rounded-full text-primary text-sm h-8 w-64 bg-gray-200  animate-pulse"></p>
          </div>
        </div>
      </div>

      {/* Activity Time Picker Skeleton */}
      <div className="h-[400px] w-[500px] my-10 bg-h4Color rounded animate-pulse"></div>
    </div>
    </div>
  );
};


export default SkeletonDetails;
