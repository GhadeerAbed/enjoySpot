"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  hour,
  location,
  duration,
  visa,
  masterCard,
  menu,
} from "../../../../../public/images/page";
import { booking } from "@/data/layoutData/booking";
import Link from "next/link";

export const MangeBooking = () => {
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState<number | null>(
    null
  );

  // Function to toggle dropdown
  const toggleDropdown = (index: number) => {
    setDropdownOpenIndex(dropdownOpenIndex === index ? null : index);
  };

  return (
    <section className="my-10 mx-[80px]">
      <h2 className="text-center font-Sans text-4xl font-bold text-h1Color ">
        MANAGE BOOKING
      </h2>

      {booking.map((booking, index) => (
        <div
          className="border rounded-lg w-full bg-h5Color h-[100px] my-8 flex relative"
          key={index}
        >
          {/* ---------------------SECTION1------------ */}
          <div className="w-1/7 text-center border-r flex flex-col justify-center items-center px-10 my-2">
            <h1 className="text-3xl font-bold text-h1Color">{booking.day}</h1>
            <h2 className="text-h1Color text-xs">{booking.date}</h2>
          </div>

          {/* ---------------------SECTION2------------ */}
          <div className="mx-5 my-2 w-2/3">
            <div>
              <span className="text-xl text-primary font-bold">
                {booking.name}
              </span>
              <span className="text-xs text-h6Color mx-3">{booking.code}</span>
              <span className="text-xs rounded-full bg-cyanColor px-5 py-1">
                {booking.status}
              </span>
            </div>
            <div className="my-3 flex">
              <div className="flex mr-3">
                <Image src={hour} alt="" className="mr-2" />
                <span> {booking.time}PM</span>
              </div>
              <div className="flex mx-3">
                <Image src={duration} alt="dataTime" className="mr-2" />
                <span> {booking.duration} </span>
              </div>
              <div className="flex mx-3">
                <Image src={location} alt="location" className="mr-2" />
                <span> {booking.location} </span>
              </div>
            </div>
          </div>

          {/* ----------------------SECTION3------------------- */}
          <div className="font-Sans ml-10 mx-1/5">
            <h1 className="text-h6Color my-1 font-bold">Total Cost</h1>
            <div className="flex">
              <span className="text-h6Color">{booking.price} </span>
              <span className="text-xs text-h6Color mx-1 my-2">AED</span>
            </div>
            <div className="flex">
              <Image src={masterCard} alt="masterCard" />
              <Image src={visa} alt="visa" />
            </div>
          </div>

          {/* ----------------------SECTION4 (Dropdown)------------------- */}
          <div className="font-Sans ml-10 flex justify-center items-center relative">
            <Image
              src={menu}
              alt="menu"
              className="cursor-pointer"
              onClick={() => toggleDropdown(index)}
            />

            {/* Dropdown Menu */}
            {dropdownOpenIndex === index && (
              <div className="absolute bottom-16 right-3 bg-white z-50 border rounded-lg shadow-md w-[200px]">
                <ul className="text-primary">
                  {/* Conditionally render dropdown items */}
                  {booking.status === "UPCOMING" && (
                    <>
                      <li className="px-4 py-2 hover:bg-h5Color">
                        <Link href="/transaction/view-page">View</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-h5Color">
                        <Link href="/transaction/cancel">Cancel Reservation</Link>
                      </li>
                    </>
                  )}
                  {booking.status === "Enjoyed" && (
                    <>
                      <li className="px-4 py-2 hover:bg-h5Color">
                        <Link href="/transaction/view-page">View</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-h5Color">
                        <Link href="/transaction/review">Write a Review</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default MangeBooking;
