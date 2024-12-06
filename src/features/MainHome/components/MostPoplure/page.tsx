"use client";
import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ExploreMore } from "../page";
import { 
  activity, arrowDown, mostpoplur, dataTime, Guest, location, sort, toggleMenu 
} from "../../../../../public/images/page";
import { useSWRHook } from "@/hooks/page";
import { API_SERVICES_URLS } from "@/data/page";
import SkeletonCategory from "@/components/SkeltonCategory/page";
import SkeletonBanner from "@/components/SkeltonBanner/page";
import Dropdown from "@/components/Dropdown/page";

const CardYachts = dynamic(() => import("@/components/CardYachtsSub/page"), { ssr: false });
const FilterSection = dynamic(() => import("@/features/SubCategories/components/CategoryList/Fillter/page"), { ssr: false });
const Pagination = dynamic(() => import("@/components/page").then(mod => mod.Pagination), { ssr: false });

export const MostPoplure = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useSWRHook(API_SERVICES_URLS.GET_ALL_LISTINGS);
  const mostPoplure = data?.isSuccess ? data?.data?.data : [];
  const pageSize = 10;
  const totalEntries = data?.isSuccess ? data?.data.totalRecords : 0;
  const totalPages = Math.ceil(totalEntries / pageSize);

  const handlePageChange = (page:any) => {
    setCurrentPage(page);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(prev => !prev);
  };

  return (
    <section className="lg:mx-[100px] xs:mx-[30px]">
      {isLoading ? (
        <SkeletonBanner />
      ) : (
        <section className="mt-10 flex justify-center relative">
          <Image
            src={mostpoplur}
            alt="bestDeal"
            width={1240}
            height={393}
            className="rounded-xl w-full"
            priority
            placeholder="blur"
            blurDataURL={mostpoplur + "?w=10&q=10"}
          />
          <div className="absolute lg:top-[30%] xs:top-[20%] right-10 xs:right-12 custom:right-16 custom2:right-20 z-40">
            <h1 className="text-xl xs:text-xs custom:text-lg custom2:text-2xl lg:text-5xl font-bold text-highlight font-Kalnia py-2 custom:py-3 custom2:py-5">
              Top Destinations For,
            </h1>
            <h1 className="text-xl xs:text-xs custom:text-xl custom2:text-2xl lg:text-5xl font-bold text-highlight font-Kalnia">
              Your Next Vacation,
            </h1>
            <h1 className="text-base xs:text-[10px] ss:text-xs custom:text-xs custom2:text-lg lg:text-[1.4rem] text-white py-3 custom:py-5 opacity-75">
              Decide Your destination and plan <br />& Your Next Vacation Now
            </h1>
          </div>
        </section>
      )}

            {/* ---------------------<SearchBar raisuble component>--------------- */}

<section className="flex justify-center items-center py-6 mt-5 mb-2">
        <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
          {/* City Dropdown */}
          <Dropdown label="City" icon={location} placeholder="Enter City" />
          {/* Activity Dropdown */}
          <Dropdown label="Activity" icon={activity} placeholder="Enter Activity" />
          {/* Date & Time Dropdown */}
          <Dropdown label="Date & Time" icon={dataTime} inputType="datetime-local" />
          {/* Guest Dropdown */}
          <Dropdown label="Guest" icon={Guest} inputType="number" placeholder="Enter number of guests" />
          {/* Search Button */}
          <button
            className="bg-primary text-white px-5 sm:px-10 py-2 rounded-lg hover:bg-h1Color transition w-full sm:w-auto"
            type="button"
          >
            Search
          </button>
        </div>
      </section>


      {/* ------------------------horiesntal line----------------  */}
      <div className="w-full border-b bg-h6Color "></div>

      {/* ------------------------Icons----------------  */}
      <div className="flex justify-end gap-3 my-3 relative">
        <Image
          src={toggleMenu}
          alt="toggle menu"
          width={34}
          height={34}
          className="cursor-pointer"
          onClick={toggleFilterVisibility}
        />
        <div
          className={`absolute right-[5%] top-5 mt-5 sm:w-auto rounded-lg shadow-lg z-50 border border-gray-300 bg-white transition-all duration-300 ${
            isFilterVisible ? "block" : "hidden"
          }`}
        >
          <FilterSection />
        </div>
        <Image src={sort} alt="sort" width={34} height={34} />
      </div>
      {/* ---------------- {Deals}-------------- */}
      <section className="grid grid-cols-1  ss:grid-cols-2  custom:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 sm:gap-7 py-8 sm:py-12">
        {isLoading
          ? // Show skeleton loaders while loading
            [...Array(6)].map((_, index) => <SkeletonCategory key={index} />)
          : mostPoplure.map((most: any) => (
              <div key={most.id}>
                <CardYachts activity={most} />
                {/* <CardMost activity={most} /> */}
              </div>
            ))}
      </section>
      <section>
        {mostPoplure.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalEntries={totalEntries}
          />
        )}
      </section>
      <section className="">
        <ExploreMore />
      </section>
    </section>
  );
};

export default MostPoplure;
