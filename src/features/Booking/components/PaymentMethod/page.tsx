"use client";
import React from "react";
import Image from "next/image";
import {
  eye,
  ships,
  leftSlide,
  rightArrow,
} from "../../../../../public/images/page";

export const PaymentMethod = () => {
  return (
    <div className="  lg:pl-[167px] lg:pr-[100px] xs:px-[20px] py-8 w-full  ">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        Payment Method
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 ">
        {/* Booking Form */}
        <div className="lg:w-3/4 xs:w-full relative  ">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 my-7">
            <label
              htmlFor="nameOnCard"
              className="relative block overflow-hidden border-b border-h4Color bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="nameOnCard"
                placeholder="Name on Card"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Name on Card
              </span>
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-7">
            <label
              htmlFor="expiryDate"
              className="relative block overflow-hidden border-b border-h4Color bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="expiryDate"
                placeholder="Expiry Date"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Expiry Date
              </span>
            </label>

            <label
              htmlFor="cvv"
              className="relative block overflow-hidden border-b border-h4Color bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="cvv"
                placeholder="CVV"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                CVV
              </span>
              <Image
                src={eye}
                alt="eye"
                className="w-4 h-4 absolute right-0 top-1/2 transform -translate-y-1/2"
              />
            </label>
          </div>

          <div className="">
            <h2 className="text-[15px]  font-bold text-h6Color">
              Free cancellation before 9:00 AM on October 9 (tour local time)
            </h2>
            <p className="text-h6Color text-[12px] my-4">
              By clicking "Complete Booking", you acknowledge that you have read
              and are bound by EnjoySpot's Terms & Privacy and Cookies
              Statement; Viator's Terms; plus the tour operator's rules &
              regulations (see listing for more details).
            </p>
          </div>
          <div className="my-7 flex justify-between  font-bold gap-4 ">
            <button className=" absolute bottom-0 left-0 bg-white text-primary px-4 py-2 rounded-lg w-[140px] border flex items-center justify-center gap-2">
              <Image
                src={leftSlide}
                alt="Arrow"
                className="text-primary w-4 h-4"
              />
              Back
            </button>
            <button className="bg-primary absolute bottom-0 right-0 text-white px-4 py-2 rounded-lg w-[140px] border flex items-center justify-center gap-2">
              Next
              <Image
                src={rightArrow}
                alt="Arrow"
                className="text-white w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="bg-white p-4 md:p-6 w-full border-l-2 border-l-h4Color ">
          <Image
            src={ships}
            alt="Package Image"
            className="w-full h-auto object-cover"
          />
          <div className="space-y-4 my-3 text-sm md:text-base lg:text-lg">
            <div className="flex flex-wrap justify-between gap-2">
              <span className="text-h6Color">Reservation Date & Time</span>
              <span className="font-medium text-primary">
                Monday 12-05-2024 10:00 pm
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-h6Color">Duration</span>
              <span className="font-medium text-primary">2 Hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-h6Color">Reservation Type</span>
              <span className="font-medium text-primary">
                Yachts-Royal Yacht
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-h6Color">Location</span>
              <span className="font-medium text-primary">Location Name</span>
            </div>

            <div className=" flex justify-center text-primary font-medium ">
              --Free Cancellation Guaranteed before Time & Date
            </div>
            <div className="flex justify-between">
              <span className="text-h6Color">Coast (2500*2)</span>
              <span className="font-medium text-primary">5000 AED</span>
            </div>
            <div className="flex justify-between">
              <span className="text-h6Color">Photography Service</span>
              <span className="font-medium text-primary">1200 AED</span>
            </div>

            <hr />
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-h6Color">Total Coast</span>
              <span className="text-primary">6200 AED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
