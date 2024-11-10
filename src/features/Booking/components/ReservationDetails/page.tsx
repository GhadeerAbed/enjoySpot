"use client";
import React from "react";
import Image from "next/image";
import {
  arrowDown,
  check,
  ships,
  smallEma,
  checkBlack,
  jetski,
  jetCar,
  flyBorad,
  parasilling,
  extra,
  packages,
  bananaBoat,
  donutBoat,
  leftArrow,
  leftSlide,
  rightArrow,
} from "../../../../../public/images/page";

export const ReservationDetails = () => {
  return (
    <div className="  lg:pl-[167px] lg:pr-[100px] xs:px-[20px] py-8 w-full  ">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        Reservation Details
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 ">
        {/* Booking Form */}
        <div className="lg:w-3/4 xs:w-full  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-7">
            <label
              htmlFor="firstname"
              className="relative block overflow-hidden border-b border-h4Color bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="firstname"
                placeholder="Email"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                First Name
              </span>
            </label>

            <label
              htmlFor="lastName"
              className="relative block overflow-hidden border-b border-h4Color bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="lastName"
                placeholder="Name"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Last Name
              </span>
            </label>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 my-7">
            <label
              htmlFor="email"
              className="relative block overflow-hidden border-b border-h4Color bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Email
              </span>
            </label>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 my-7">
            <label
              htmlFor="phone"
              className="relative block overflow-hidden border-b border-h4Color bg-transparent pt-3 focus-within:border-blue-600"
            >
              <div className="flex items-center">
                <div className="flex items-center gap-2 mr-2">
                  <Image
                    src={smallEma}
                    alt="Country flag"
                    className="w-6 h-4 object-cover"
                  />
                  <Image
                    src={arrowDown}
                    alt="Select country"
                    className="w-4 h-4"
                  />
                </div>
                <span className="text-h6Color">+971</span>
                <input
                  type="number"
                  id="phone"
                  placeholder="Phone"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
              </div>
              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Phone
              </span>
            </label>
          </div>
          <div className="border-b border-h6Color my-20"></div>{" "}
          <h1 className="text-primary text-xl font-bold my-7">
            Additional Services
          </h1>
          <div className="border rounded-lg p-4 mt-4 border-h1Color flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={check} alt="Check" />
              <span className="text-primary font-medium mx-3">Photography</span>
            </div>
            <span className="text-primary border  bg-h5Color rounded-full px-2 ">
              1200 AED
            </span>
          </div>
          <div className="border rounded-lg p-4 mt-4 border-h1Color  items-center justify-between">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Image src={checkBlack} alt="Check" />
                <span className="text-primary font-medium mx-3">
                  WaterSport
                </span>
              </div>
              <span className="text-primary border bg-h5Color rounded-full px-2">
                1200 AED
              </span>
            </div>

            <div className="flex items-center justify-center my-4 space-x-8">
              <div className="flex flex-col items-center gap-2">
                <Image src={jetski} alt="Check" />
                <div className="text-center">Jet Ski</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={jetCar} alt="Check" />
                <div className="text-center">Jet Car</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={flyBorad} alt="Check" />
                <div className="text-center">Fly Board</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={parasilling} alt="Check" />
                <div className="text-center">Parasilling</div>
              </div>
            </div>
            <div className="flex items-center justify-center my-3 space-x-8">
              <div className="flex flex-col items-center gap-2">
                <Image src={bananaBoat} alt="Check" />
                <div className="text-center">Banana Boat</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={donutBoat} alt="Check" />
                <div className="text-center">Donut Boat</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={packages} alt="Check" />
                <div className="text-center">Packages</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={extra} alt="Check" />
                <div className="text-center">Extra</div>
              </div>
            </div>
            <div className="border-b border-h4Color mt-10"></div>

            <div className="flex items-center space-x-4 font-medium my-4 mx-10 ">
              <span className="text-primary">Guests:</span>
              <span className="text-h6Color">1</span>
              <Image src={arrowDown} alt="Arrow" className="text-primary" />
            </div>
          </div>
          <div className="my-7 flex justify-between font-bold gap-4">
            <button className="bg-white text-primary px-4 py-2 rounded-lg w-[140px] border flex items-center justify-center gap-2">
              <Image
                src={leftSlide}
                alt="Arrow"
                className="text-primary w-4 h-4"
              />
              Back
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg w-[140px] border flex items-center justify-center gap-2">
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
