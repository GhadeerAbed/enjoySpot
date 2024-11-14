"use client";
import Image from "next/image";
import React from "react";
import {

  arrowDown,
  dataTime,
  Guest,
  location,
  sort,
  toggleMenu,
} from "../../../../../public/images/page";
import { activities } from "@/data/layoutData/activite";
import CardYachts from "@/components/CardYachtsSub/page";
import Pagination from "@/components/Pagination/page";


const YachtsCategory = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalEntries = activities.length;
  const itemsPerPage = 12; // Set the number of items per page
  const activite = activities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ); // Get the activities for the current page

  const totalPages = 5; // Set this to the actual total pages you have
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Add any additional logic for fetching new data based on the page change
  };
  return (
    <div className="lg:mx-[70px]">
      {/* ------------------------search---------------------- */}
      <div className="flex justify-center items-center lg:shadow-none xs:shadow-md">
        <section className="flex justify-center items-center lg:w-[910px] xs:w-[500px] py-6 mt-5 mb-2">
          <div className="flex gap-4 sm:gap-8 items-center">
            {/* City Dropdown */}
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

            {/* Date & Time Dropdown */}
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

            {/* Guest Dropdown */}
            <div className="relative w-full sm:w-auto px-0 sm:px-5">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-2 border-r border-gray-200 pb-1 text-h6Color transition hover:border-h6Color">
                  <Image src={Guest} width={18} height={18} alt="location" />
                  <span className=" text-h6Color pr-10">Guest</span>
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
              className="bg-primary text-white px-5 sm:px-10 py-2 rounded-lg hover:bg-h1Color transition w-full sm:w-auto"
              type="button"
            >
              Search
            </button>
          </div>
        </section>
      </div>

      {/* ------------------------horiesntal line----------------  */}
      <div className="flex justify-center items-center">
        <div className="w-[1240px] border-b flex justify-center items-center bg-h6Color"></div>
      </div>

      {/* ------------------------Icons----------------  */}
      <section className="flex justify-end  mt-5 space-x-3 lg:mx-10 xs:mx-3 ">
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

      {/* ----------------------------------Cards----------------------------- */}
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 custom2:grid-cols-3 gap-4 w-full  ">
        {activite.map(
          (
            activity // Use paginatedActivities instead of activities
          ) => (
            <div key={activity.id} className="px-2 py-12">
              <CardYachts activity={activity} />
            </div>
          )
        )}
      </section>
      {/* -----------------------------------------Pagination---------------------------------- */}
      <section className="my-3">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalEntries={totalEntries}
        />
      </section>

      
    </div>
  );
};

export default YachtsCategory;
