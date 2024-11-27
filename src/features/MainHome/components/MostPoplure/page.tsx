"use client";
import React from "react";
import { ExploreMore } from "../page";
import Image from "next/image";

import {
  activity,
  arrowDown,
  mostpoplur,
  dataTime,
  Guest,
  location,
  sort,
  toggleMenu,
} from "../../../../../public/images/page";
import { bestDeals } from "@/data/layoutData/bestDeals";
import CardDeals from "@/components/CardDeals/page";
import Card from "@/components/Card/page";
import CardMost from "@/components/CardMost/page";
import { useSWRHook } from "@/hooks/page";
import { API_SERVICES_URLS } from "@/data/page";
import CardYachts from "@/components/CardYachtsSub/page";

export const MostPoplure = () => {
  const { data } = useSWRHook(API_SERVICES_URLS.GET_ALL_LISTINGS);
  const mostPoplure = data?.isSuccess ? data?.data?.data : [];
  console.log(mostPoplure);
  return (
    <section className="lg:mx-[100px] xs:mx-[30px]">
      {/* -------------  {Banner}------------------------ */}
      <section className="mt-10 flex justify-center relative ">
        <Image
          src={mostpoplur}
          alt="bestDeal"
          width={1240}
          height={393}
          className="rounded-xl w-full"
        />
        <div className="absolute  lg:top-[30%] xs:top-[20%]  right-10 xs:right-12 custom:right-16 custom2:right-20 z-40">
          <h1 className="text-xl xs:text-xs custom:text-lg custom2:text-2xl lg:text-5xl font-bold text-highlight  font-Kalnia py-2 custom:py-3 custom2:py-5 ">
            Top Destinations For,
          </h1>
          <h1 className="text-xl xs:text-xs  custom:text-xl custom2:text-2xl lg:text-5xl font-bold text-highlight font-Kalnia">
            Your Next Vacation,
          </h1>
          <h1 className="text-base xs:text-[10px] ss:text-xs custom:text-xs  custom2:text-lg lg:text-[1.4rem] text-white py-3 custom:py-5 opacity-75">
            Decide Your destination and plan <br />& Your Next Vacation Now
          </h1>
        </div>
      </section>

      {/* ---------------- {Search}-------------- */}
      <section className="flex justify-center items-center py-6 mt-5 mb-2">
        <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
          {/* City Dropdown */}
          <div className="relative w-full sm:w-auto">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center gap-2 border-r border-gray-200 pb-1 text-h6Color transition hover:border-h6Color">
                <Image src={location} width={18} height={18} alt="location" />
                <span className="text-sm pr-10 text-h6Color">City</span>
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

          {/* Activity Dropdown */}
          <div className="relative w-full sm:w-auto px-0 sm:px-5">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center gap-2 border-r border-gray-200 pb-1 text-h6Color transition hover:border-h6Color">
                <Image src={activity} width={18} height={18} alt="location" />
                <span className="text-sm text-h6Color pr-10">Activity</span>
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
                    type="text"
                    className="w-full border p-2 rounded-md"
                    placeholder="Enter Activity"
                  />
                </div>
              </div>
            </details>
          </div>

          {/* Date & Time Dropdown */}
          <div className="relative w-full sm:w-auto px-0 sm:px-5">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center gap-2 border-r border-gray-200 pb-1 text-h6Color transition hover:border-h6Color">
                <Image src={dataTime} width={18} height={18} alt="location" />
                <span className="text-sm text-h6Color pr-10">Date & Time</span>
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

          {/* Guest Dropdown */}
          <div className="relative w-full sm:w-auto px-0 sm:px-5">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center gap-2 border-r border-gray-200 pb-1 text-h6Color transition hover:border-h6Color">
                <Image src={Guest} width={18} height={18} alt="location" />
                <span className="text-sm text-h6Color pr-10">Guest</span>
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
                    type="number"
                    className="w-full border p-2 rounded-md"
                    placeholder="Enter number of guests"
                  />
                </div>
              </div>
            </details>
          </div>

          {/* Search Button */}
          <button
            className="bg-primary text-white px-5 sm:px-10 py-2 rounded-lg hover:bg-h1Color transition w-full sm:w-auto "
            type="button"
          >
            Search
          </button>
        </div>
      </section>

      {/* ------------------------horiesntal line----------------  */}
      <div className="w-full border-b bg-h6Color "></div>

      {/* ------------------------Icons----------------  */}
      <section className="flex justify-end  mt-5 space-x-1  ">
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
      </section>
      {/* ---------------- {Deals}-------------- */}
      <section className="grid grid-cols-1  ss:grid-cols-2  custom:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 sm:gap-7 py-8 sm:py-12">
        {mostPoplure.map((most: any) => (
          <div key={most.id}>
            <CardYachts activity={most} />
            {/* <CardMost activity={most} /> */}
          </div>
        ))}
      </section>

      <section className="">
        <ExploreMore />
      </section>
    </section>
  );
};

export default MostPoplure;
