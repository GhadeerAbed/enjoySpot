import React from "react";

const SkeletonCategory = () => {
  return (
    <div className="lg:w-[305px]">
      <div className="p-3 shadow-cardShadow rounded-xl animate-pulse">
        {/* Placeholder for the image */}
        <div className="relative h-56 w-full rounded-[20px] bg-gray-200"></div>


        {/* Placeholder for the name and rating */}
        <div className="flex justify-between mt-3">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>{" "}
          {/* Placeholder for activity name */}
          <div className="flex items-center justify-center space-x-2">
            <div className="h-6 bg-gray-300 rounded w-12"></div>{" "}
            {/* Placeholder for rating */}
            <div className="h-6 bg-gray-300 rounded w-6"></div>{" "}
            {/* Placeholder for star icon */}
          </div>
        </div>

        {/* Placeholder for guest, cabins, and size */}
        <div className="flex items-center my-2">
          <div className="flex items-center space-x-2 lg:pr-3 border-r border-h6Color lg:px-1 xs:px-1">
            <div className="h-6 bg-gray-300 rounded w-16"></div>{" "}
            {/* Placeholder for guests */}
          </div>
          <div className="flex items-center space-x-2 lg:pl-3 border-r lg:px-1 xs:px-1">
            <div className="h-6 bg-gray-300 rounded w-16"></div>{" "}
            {/* Placeholder for cabins */}
          </div>
          <div className="flex items-center space-x-2 lg:pl-3">
            <div className="h-6 bg-gray-300 rounded w-16"></div>{" "}
            {/* Placeholder for size */}
          </div>
        </div>

        {/* Placeholder for buttons */}
        <div className="flex space-x-2 py-2">
          <div className="h-10 bg-gray-300 rounded w-full"></div>{" "}
          {/* Placeholder for Book Now button */}
          <div className="h-10 bg-gray-300 rounded w-10"></div>{" "}
          {/* Placeholder for convert icon */}
        </div>
      </div>
    </div>
  );
};

export default SkeletonCategory;
