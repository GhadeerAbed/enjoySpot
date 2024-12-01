"use client";

import React, { useState } from "react";
import { useSWRHook } from "@/hooks/page";
import { API_SERVICES_URLS } from "@/data/page";
import Image from "next/image";
import { Button } from "@headlessui/react";
import CardYachts from "@/components/CardYachtsSub/page";
import { Pagination } from "@/components/page";
import FilterSection from "./Fillter/page";
import {
  arrowDown,
  dataTime,
  Guest,
  location,
  sort,
  toggleMenu,
} from "../../../../../public/images/page";

interface CategoryListProps {
  id?: string;
  id1?: string;
}

export const CategoryList: React.FC<CategoryListProps> = ({ id, id1 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const pageSize = 10;

  // Construct API URL
  const constructApiUrl = () => {
    let url = `${API_SERVICES_URLS.GET_ALL_LISTINGS}?PageNumber=${currentPage}&PageSize=${pageSize}`;
    if (id) url += `&listingTypeId=${id}`;
    if (id1) url += `&listingCategoryId=${id1}`;
    return url;
  };

  const { data: activitiesResponse, error } = useSWRHook(constructApiUrl());

  // Handle Loading State
  if (!activitiesResponse && !error) {
    return <div>Loading...</div>;
  }

  // Handle Error State
  if (error || !activitiesResponse?.isSuccess) {
    return <div>Failed to load activities. Please try again later.</div>;
  }

  // Extract data from response
  const activities = activitiesResponse.data.data;
  // console.log(activities);
  const totalEntries = activitiesResponse.data.totalRecords;
  console.log(totalEntries);
  const totalPages = Math.ceil(totalEntries / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev); // Toggle visibility
  };

  return (
    <div>
      {/* Filters Section */}
      <div className="flex justify-center items-center lg:shadow-none xs:shadow-md border-b">
        <div className="flex justify-center items-center lg:w-[910px] xs:w-[500px] py-6 mt-5 mb-2">
          <div className="flex gap-4 sm:gap-8 items-center">
            {/* Dropdown 1 */}
            <div className="relative w-full sm:w-auto">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-2 border-r border-gray-200 pb-1 text-h6Color transition hover:border-h6Color">
                  <Image src={location} width={18} height={18} alt="location" />
                  <span className="pr-10 text-h6Color">City</span>
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

            {/* Other Dropdowns */}
            <div className="relative w-full sm:w-auto px-0 sm:px-5">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-2 border-r border-gray-200 pb-1 text-h6Color transition hover:border-h6Color">
                  <Image src={dataTime} width={18} height={18} alt="dataTime" />
                  <span className="text-h6Color pr-10">Date&Time</span>
                  <span className="transition group-open:-rotate-180 pr-3">
                    <Image
                      src={arrowDown}
                      width={20}
                      height={20}
                      alt="arrowDown"
                    />
                  </span>
                </summary>
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

      {/* Dropdown Menu Toggle */}
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

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 custom2:grid-cols-3 gap-6 w-full">
        {activities.map((activity: any) => (
          <div key={activity.id}>
            <CardYachts activity={activity} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {activities.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalEntries={totalEntries}
        />
      )}
    </div>
  );
};

export default CategoryList;
