import React from "react";

const SkeletonPaCategory = () => {
  return (
    <div className="">
      <div className="flex justify-center space-x-4  w-full text-center items-center my-10  ">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 animate-pulse w-[70px] h-[40px] "
          >
           
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center lg:shadow-none xs:shadow-md border-b">
        <div className="flex justify-center items-center lg:w-[910px] xs:w-[500px] py-6 mt-5 mb-2">
          <div className="flex gap-4 sm:gap-8 items-center">
           
            <div className="relative w-full sm:w-auto">
              <div className="flex items-center gap-2 border-r border-gray-200 pb-1 text-h6Color">
                <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>

          
            <div className="relative w-full sm:w-auto px-0 sm:px-5">
              <div className="flex items-center gap-2 border-r border-gray-200 pb-1 text-h6Color">
                <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>

            
            <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 animate-pulse"
          >

            <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>

            
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>

            <div className="h-8 bg-blue-200 rounded w-1/2 mb-2"></div>

            <div className="flex items-center mb-2">
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-6 bg-gray-200 rounded-full w-6 ml-2"></div>
            </div>

            <div className="flex gap-2 mb-2">
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            </div>

            <div className="h-10 bg-gray-200 rounded w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonPaCategory;
