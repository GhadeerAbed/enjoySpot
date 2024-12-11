import React from "react";

const SkeletonBanner = () => {
  return (
    <section className="mt-10 relative max-w-7xl mx-auto max-[1290px]:mx-10 max-md:mx-5">
      <div className="relative">
        {/* Skeleton for Hero Image */}
        <div className="rounded-xl w-full h-[450px] max-md:h-[350px] bg-h5Color animate-pulse"></div>

        <div className="absolute inset-0 flex flex-col items-start justify-center p-10 lg:p-28 space-y-2 lg:space-y-6 xl:space-y-8 max-sm:items-center">
          {/* Skeleton for Title */}
          <div className="h-10 bg-h4Color rounded w-2/4 animate-pulse"></div>
          {/* Skeleton for Description */}
          <div className="h-8 bg-h4Color rounded w-1/3 animate-pulse"></div>
          {/* Skeleton for Button */}
          <div className="h-10 bg-h4Color rounded w-1/4 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default SkeletonBanner;
