"use client";
import CardYachts from "@/components/CardYachtsSub/page";
import React from "react";
import { useSWRHook } from "@/hooks/page";
import { API_SERVICES_URLS } from "@/data/page";
import { arrowDown, dataTime, Guest ,location, sort, toggleMenu } from "../../../../../public/images/page";
import Image from "next/image";
import { Button } from "@headlessui/react";

export const CategoryList = ({ id }: { id?: any }) => {
  const { data: activitiesResponse } = useSWRHook(
    API_SERVICES_URLS.GET_ALL_LISTINGS(id)
  );

  if (!activitiesResponse || !activitiesResponse.isSuccess) {
    return <div>Loading...</div>;
  }

  const activities = activitiesResponse.data.data;

  return (
    <div>
       <div className="flex justify-center items-center lg:shadow-none xs:shadow-md border-b">
        <div className="flex justify-center items-center lg:w-[910px] xs:w-[500px] py-6 mt-5 mb-2">
          <div className="flex gap-4 sm:gap-8 items-center">
            <div className="relative w-full sm:w-auto">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-2 border-r border-gray-200 pb-1 text-h6Color transition hover:border-h6Color">
                  <Image src={location} width={18} height={18} alt="location" />
                  <span className=" pr-10 text-h6Color">City</span>
                  <span className="transition group-open:-rotate-180 pr-3">
                    <Image
                      src={arrowDown}
                      width={20}
                      height={20}
                      alt="arrowDown"
                    />
                  </span>
                </summary>
                <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                  <div className="w-full sm:w-96 rounded border border-h6Color bg-white p-4">
                    <input
                      type="text"
                      className="w-full border p-2 rounded-md"
                      placeholder="Enter City"
                    />
                  </div>
                </div>
              </details>
            </div>
            <div className="relative w-full   sm:w-auto px-0 sm:px-5">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-2 border-r border-gray-200 pb-1 text-h6Color transition hover:border-h6Color">
                  <Image src={dataTime} width={18} height={18} alt="location" />
                  <span className="  text-h6Color pr-10">Date&Time</span>
                  <span className="transition group-open:-rotate-180 pr-3">
                    <Image
                      src={arrowDown}
                      width={20}
                      height={20}
                      alt="arrowDown"
                    />
                  </span>
                </summary>
                <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                  <div className="w-full sm:w-96 rounded border border-gray-200 bg-white p-4">
                    <input
                      type="datetime-local"
                      className="w-full border p-2 rounded-md"
                      placeholder="Select Date & Time"
                    />
                  </div>
                </div>
              </details>
            </div>

            <div className="relative w-full sm:w-auto px-0 sm:px-5">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-2 border-r border-gray-200 pb-1 text-h6Color transition hover:border-h6Color">
                  <Image src={Guest} width={18} height={18} alt="location" />
                  <span className=" text-h6Color pr-10">Guest</span>
                  <span className="transition group-open:rotate-180 pr-3">
                    <Image
                      src={arrowDown}
                      width={20}
                      height={20}
                      alt="arrowDown"
                    />
                  </span>
                </summary>
                <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                  <div className="w-full sm:w-96 rounded border border-gray-200 bg-white p-4">
                    <input
                      type="number"
                      className="w-full border p-2 rounded-md"
                      placeholder="Enter number of guests"
                    />
                  </div>
                </div>
              </details>
            </div>

            <Button
              className="bg-primary text-white px-5 sm:px-10 py-2 rounded-lg hover:bg-h1Color transition w-full sm:w-auto"
              type="button"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-end  mt-5 space-x-3 lg:mx-10 xs:mx-3 ">
        <Image
          src={toggleMenu}
          alt=""
          width={34}
          height={34}
          className="cursor-pointer "
        />
        <Image
          src={sort}
          alt=""
          width={34}
          height={34}
          className=" cursor-pointer  "
        />
      </div>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 custom2:grid-cols-3 gap-6 w-full">
      {activities.map((activity: any) => (
        <div key={activity.id} className="py-5">
          <CardYachts activity={activity} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default CategoryList;