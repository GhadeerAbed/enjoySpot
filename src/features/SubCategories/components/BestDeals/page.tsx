"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState, useCallback, useMemo } from "react";
import SkeletonBanner from "@/components/SkeltonBanner/page";
import { Button, Pagination } from "@/components/page";
import { API_SERVICES_URLS } from "@/data/page";
import { useSWRHook } from "@/hooks/page";

// Dynamically imported components
const CardDeals = dynamic(() => import("@/components/CardDeals/page"));
const FilterDeals = dynamic(() => import("./FillterDeal/page"), { ssr: false });
const SkeletonLoader = dynamic(() => import("@/components/SkeltonDeals/page"));
const ExploreMore = dynamic(() =>
  import("@/features/MainHome/components/ExpoloreMore/page").then(
    (mod) => mod.ExploreMore
  )
);

// Static assets
import {
  activity,
  arrowDown,
  bestDeal,
  dataTime,
  Guest,
  location,
  sort,
  toggleMenu,
} from "../../../../../public/images/page";
import Dropdown from "@/components/DropSearchBar/page";

const BestDeals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Fetch data using SWR
  const { data, isLoading, error } = useSWRHook(
    `${API_SERVICES_URLS.GET_ALL_LISTINGS}?page=${currentPage}&pageSize=10`
  );

  const bestDeals = useMemo(
    () => (data?.isSuccess ? data?.data?.data : []),
    [data]
  );

  const totalEntries = useMemo(
    () => (data?.isSuccess ? data?.data?.totalRecords : 0),
    [data]
  );

  const totalPages = useMemo(
    () => Math.ceil(totalEntries / 10),
    [totalEntries]
  );

  const handlePageChange = useCallback(
    (page: number) => setCurrentPage(page),
    []
  );

  const toggleFilterVisibility = useCallback(
    () => setIsFilterVisible((prev) => !prev),
    []
  );

  return (
    <section className="lg:mx-[100px] mx-[20px] sm:mx-[30px]">
      {/* Banner */}
      {isLoading ? (
        <SkeletonBanner />
      ) : (
        <section className="mt-10 flex justify-center relative">
          <Image
            src={bestDeal}
            alt="Best Deal Banner"
            width={1240}
            height={393}
            className="rounded-xl w-full"
            loading="lazy"
          />
          <div className="absolute inset-0 lg:top-6 left-10 z-40">
            <h1 className="text-xl lg:text-5xl font-bold text-highlight py-3">
              Unlock Adventure,
            </h1>
            <h1 className="text-xl lg:text-5xl font-bold text-highlight">
              Unlock Savings,
            </h1>
            <h1 className="text-base lg:text-[1.4rem] text-white opacity-75 py-3">
              Best Deals on Yachts, Desert Safaris <br /> & Watersports
            </h1>
          </div>
        </section>
      )}

      {/* Search Section */}
      <section className="flex justify-center items-center py-6 mt-5 mb-2">
        <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
          {/* City Dropdown */}
          <Dropdown label="City" icon={location} placeholder="Enter City" />
          {/* Activity Dropdown */}
          <Dropdown
            label="Activity"
            icon={activity}
            placeholder="Enter Activity"
          />
          {/* Date & Time Dropdown */}
          <Dropdown
            label="Date & Time"
            icon={dataTime}
            inputType="datetime-local"
          />
          {/* Guest Dropdown */}
          <Dropdown
            label="Guest"
            icon={Guest}
            inputType="number"
            placeholder="Enter number of guests"
          />
          {/* Search Button */}
          <button
            className="bg-primary text-white px-5 sm:px-10 py-2 rounded-lg hover:bg-h1Color transition w-full sm:w-auto"
            type="button"
          >
            Search
          </button>
        </div>
      </section>

      <div className="w-full border-b bg-h6Color"></div>

      {/* Icons */}
      <section className="flex justify-end gap-3 my-3 relative">
        <Image
          src={toggleMenu}
          alt="Toggle Menu"
          width={34}
          height={34}
          className="cursor-pointer"
          onClick={toggleFilterVisibility}
        />
        {isFilterVisible && (
          <div className="absolute right-[5%] top-5 mt-5 sm:w-auto rounded-lg shadow-lg z-[100] border border-gray-300 bg-white transition-all duration-300">
            <FilterDeals />
          </div>
        )}
        <Image src={sort} alt="Sort" width={34} height={34} />
      </section>

      {/* Deals Section */}

      <section className="grid grid-cols-1  custom:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 py-8 sm:py-12">
        {isLoading ? (
          [...Array(6)].map((_, index) =>  <SkeletonLoader key={index} />)
        ) : bestDeals.length > 0 ? (
          bestDeals.map((deal: any) => {
            const priceAfter =
              deal.price && deal.priceDiscountValue
                ? deal.price - deal.priceDiscountValue
                : null;

            return (
              <div key={deal.id} className=" xss:shadow-sm xss:rounded-[20px] ">
                <div className="flex justify-center items-center flex-col mt-5">
                  <CardDeals deal={deal} loading={isLoading} error={error} />
                  <div className="my-5 text-primary lg:hidden md:hidden  ">
                    {priceAfter !== null && (
                      <div className="flex justify-center items-center">
                        <h1 className=" font-bold text-4xl ">{priceAfter}</h1>
                        <span className="mx-1">AED</span>
                      </div>
                    )}
                    <div className="flex justify-center items-center">
                      <h1 className=" font-bold text-2xl line-through opacity-75">
                        {" "}
                        {deal.price}
                      </h1>
                      <span className=" mx-1">AED</span>
                    </div>
                    {/* priceBefore with line-through */}

                    <Button className=" bg-white text-primary  transition flex justify-center items-center w-[250px]  font-bold mt-2 py-2   ">
                      <span>Book Now</span>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center col-span-full">No deals found.</p>
        )}
      </section>

      {/* Pagination */}
      {bestDeals.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalEntries={totalEntries}
        />
      )}

      <ExploreMore />
    </section>
  );
};

export default BestDeals;
