// BlogSkeleton.tsx
import React from "react";

const BlogSkeleton = () => {
  return (
    <section className="mt-20 max-w-7xl mx-auto max-md:mx-5">
      <div className=" flex justify-between mx-5">
      <h1 className="text-center text-xl w-10 h-10 uppercase py-2 font-Kalnia bg-h4Color animate-pulse"></h1>
      <h2 className="text-center font-Sans text-4xl  w-10 h-10 font-bold  bg-h4Color animate-pulse"></h2>
      </div>
      <div className="mt-20">
        <div className="flex overflow-hidden">
          {/* Skeleton for each blog card */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="lg:px-3 px-2 py-10 w-full">
              <div className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center -mt-3">
        <div className="bg-gray-200 h-6 w-10 mx-auto animate-pulse"></div>
      </div>
    </section>
  );
};

export default BlogSkeleton;