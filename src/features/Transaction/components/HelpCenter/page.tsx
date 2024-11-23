import { Input } from "@/components/page";
import React from "react";
import {
  bag,
  card,
  contact,
  leftArrow,
  searchIcon,
} from "../../../../../public/images/page";
import Image from "next/image";

export const HelpCenter = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <title>Help Center</title>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-h1Color ">
          HELP CENTER
        </h1>
        <p className="text-center text-lg text-primary font-bold  mt-2">
          ENJOYMENT MADE SIMPLE — WE'RE HERE TO HELP
        </p>
        <div className="mt-8 flex justify-center items-center">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search here"
              className="w-[520px] p-4 border border-h4Color rounded-[20px] shadow-sm focus:outline-none focus:ring focus:border-h1Color"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Image src={searchIcon} alt="search" />
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 text-primary lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-center flex items-center justify-between space-x-4">
              <div className="flex flex-col items-center space-y-4">
                <Image src={bag} alt="contact" />
                <h3 className="text-xl font-medium">Bookings</h3>
              </div>
              <Image src={leftArrow} alt="arrowDown" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-center flex items-center justify-between space-x-4">
              <div className="flex flex-col items-center space-y-4">
                <Image src={card} alt="contact" />
                <h3 className="text-xl font-medium">PaymentS</h3>
              </div>
              <Image src={leftArrow} alt="arrowDown" />
            </div>
          </div>
          <div className="bg-white p-6  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-center flex items-center justify-between space-x-4">
              <div className="flex flex-col items-center space-y-4">
                <Image src={contact} alt="contact" />
                <h3 className="text-xl font-medium">Account</h3>
              </div>
              <Image src={leftArrow} alt="arrowDown" />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-primary mb-10">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg text-primary font-medium mb-2">
                  Title Title Title
                </h3>
                <p className="text-h6Color mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incid
                </p>
                <a href="#" className="text-h1Color hover:underline">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
