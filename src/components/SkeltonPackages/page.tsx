// BlogSkeleton.tsx
import React from "react";

const PackageSkeleton = () => {
  return (
    <div className="mx-[100px]">
      <section className="mt-10 relative max-w-7xl mx-auto max-[1290px]:mx-10 max-md:mx-5">
        <div className="relative">
          {/* Skeleton for Hero Image */}
          <div className="rounded-xl w-full h-[450px] max-md:h-[350px] bg-h4Color animate-pulse"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-10 lg:p-28 space-y-2 lg:space-y-6 xl:space-y-8 max-sm:items-center ">
            {/* Skeleton for Title */}
            <div className="h-10 bg-h5Color rounded w-2/4 animate-pulse"></div>
            {/* Skeleton for Description */}
            <div className="h-8 bg-h5Color rounded w-1/3 animate-pulse"></div>
            {/* Skeleton for Button */}
            <div className="h-10 bg-h5Color rounded w-1/4 animate-pulse"></div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="flex overflow-hidden">
          {/* Skeleton for each blog card */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="lg:px-3 px-2 py-10 w-full">
              <div className="bg-h4Color rounded-full h-10 animate-pulse "></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20 max-w-7xl ">
        <div className=" flex justify-between "></div>
        <div className="mt-20">
          <div className="grid grid-cols-3 ">
            {/* Skeleton for each blog card */}
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="lg:px-3  py-10 w-full">
                <div className="bg-h4Color rounded-lg h-64 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center -mt-3"></div>
      </section>{" "}
    </div>
  );
};

export default PackageSkeleton;
