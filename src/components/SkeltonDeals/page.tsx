import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="relative max-w-[392px] animate-pulse">
        
      {/* Skeleton for the main image */}
      <div className="w-full h-[400px] bg-h5Color rounded-[20px]"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-h4Color to-transparent opacity-85 z-10 rounded-[20px]"></div>

      {/* Top-right icon skeleton */}
      <div className="absolute right-3 top-3 z-10 w-10 h-10 bg-h4Color rounded-full"></div>

      {/* Price card skeleton */}
      <div className="absolute left-[2%] bottom-[3%] w-[90px] max-w-[110px] z-50 rounded-[12px] h-[124px] bg-h4Color"></div>

      {/* Deal details skeleton */}
      <div className="absolute left-[28%] bottom-[2%] z-50 rounded-[12px] w-[70%] max-w-[70%] h-[135px]">
        <div className="flex flex-col space-y-2 px-4 py-3">
          <div className="h-4 bg-h4Color rounded w-2/3"></div>
          <div className="flex space-x-4">
            <div className="h-4 bg-h4Color rounded w-1/4"></div>
            <div className="h-4 bg-h4Color rounded w-1/4"></div>
          </div>
          <div className="h-8 bg-h4Color rounded w-full"></div>
        </div>
      </div>

      {/* Rating skeleton */}
      <div className="absolute right-[14%] bottom-[28%] z-10 flex items-center space-x-1">
        <div className="w-6 h-4 bg-h4Color rounded"></div>
        <div className="w-4 h-4 bg-h4Color rounded-full"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;


