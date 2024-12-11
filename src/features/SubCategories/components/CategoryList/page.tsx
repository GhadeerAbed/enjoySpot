"use client";

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { useSWRHook } from "@/hooks/page";
import { API_SERVICES_URLS } from "@/data/page";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { Pagination } from "@/components/page";
import {
  arrowDown,
  dataTime,
  Guest,
  location,
  sort,
  toggleMenu,
} from "../../../../../public/images/page";
import SkeletonCategory from "@/components/SkeltonCategory/page";
import SkeletonPaCategory from "@/components/SkeltonPageCategory/page";
import Dropdown from "@/components/DropSearchBar/page";

const CardYachts = dynamic(() => import("@/components/CardYachtsSub/page"), {
  loading: () => <SkeletonCategory />,
});
const FilterSection = dynamic(() => import("./Fillter/page"), {
  loading: () => <div className="loading">Loading...</div>,
});

interface CategoryListProps {
  id?: string;
  id1?: string;
}

export const CategoryList: React.FC<CategoryListProps> = ({ id, id1 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const pageSize = 10;

  // Construct API URL
  const constructApiUrl = useMemo(() => {
    let url = `${API_SERVICES_URLS.GET_ALL_LISTINGS}?PageNumber=${currentPage}&PageSize=${pageSize}`;
    if (id) url += `&listingTypeId=${id}`;
    if (id1) url += `&listingCategoryId=${id1}`;
    return url;
  }, [currentPage, id, id1]);

  const {
    data: activitiesResponse,
    error,
    isLoading,
  } = useSWRHook(constructApiUrl);

  // Handle Loading State
  if (!activitiesResponse && !error) {
    return (
      <div>
        <SkeletonPaCategory />
      </div>
    );
  }
  if (!activitiesResponse) return <SkeletonPaCategory />;
  // Handle Error State
  if (error || !activitiesResponse?.isSuccess) {
    return <div>Failed to load activities. Please try again later.</div>;
  }

  // Extract data from response
  const activities = activitiesResponse.data.data;
  const totalEntries = activitiesResponse.data.totalRecords;
  const totalPages = Math.ceil(totalEntries / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <div>
      {/* ---------------------<SearchBar raisuble component>--------------- */}
      <section className="flex justify-center items-center py-6 mt-5 mb-2">
        <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
          {/* City Dropdown */}
          <Dropdown label="City" icon={location} placeholder="Enter City" />

          {/* Date & Time Dropdown */}
          <Dropdown
            label="Date & Time"
            icon={dataTime}
            inputType="datetime-local"
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
      <div className="w-full border-b bg-h6Color "></div>

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
        {isLoading
          ? // Show skeleton loaders while loading
            [...Array(6)].map((_, index) => <SkeletonCategory key={index} />)
          : activities.map((activity: any) => (
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
