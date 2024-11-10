// components/PackagesSection.js
import React from "react";
import { Button } from "@/components/page";
import PackageCard from "../PackageCard/page";

export const PackagesSection = () => {
  // Sample data for packages
  const packages = [
    {
      id: 1,
      title: "FREE Range Rover With Yacht Cruise",
      price: 2500,
      imageSrc: "/images/package1.svg", // Replace with your image paths
    },
    {
      id: 2,
      title: "FREE Range Rover With Yacht Cruise",
      price: 2500,
      imageSrc: "/images/package2.svg",
    },
    {
      id: 3,
      title: "FREE Range Rover With Yacht Cruise",
      price: 2500,
      imageSrc: "/images/package3.svg",
    },
    {
      id: 4,
      title: "FREE Range Rover With Yacht Cruise",
      price: 2500,
      imageSrc: "/images/package4.svg",
    },
  ];

  return (
    <section className=" my-[150px] bg-blue-50  px-10 py-2">
      {/* Header section */}
      <div className="max-w-7xl mx-auto flex flex-row max-custom2:flex-col justify-around items-center   custom2:h-[350px]">
      <div>
        <h1 className="uppercase sm:text-xl text-lg font-Sans text-primary">
          Our packages
        </h1>
        <h2 className="sm:text-5xl text-2xl font-medium font-Kalnia text-primary max-w-[400px] py-1">
          CHOOSE WHAT YOU ENJOY MOST
        </h2>
        <p className="text-primary max-w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button className="mt-4 ">Explore All</Button>
      </div>

      {/* Grid of packages */}
      {/* Grid of packages */}
      <div className="grid ss:grid-cols-3 grid-cols-1 gap-4 lg:max-w-[700px] xs:max-w-[410px] max-custom2:mt-10">
        <div className="col-span-1">
          <PackageCard
            key={packages[0].id}
            imageSrc={packages[0].imageSrc}
            title={packages[0].title}
            price={packages[0].price}
          />
        </div>

        <div className="ss:col-span-2 col-span-1">
          <PackageCard
            key={packages[1].id}
            imageSrc={packages[1].imageSrc}
            title={packages[1].title}
            price={packages[1].price}
          />
        </div>

        <div className="ss:col-span-2 col-span-1">
          <PackageCard
            key={packages[2].id}
            imageSrc={packages[2].imageSrc}
            title={packages[2].title}
            price={packages[2].price}
          />
        </div>

        <div className="col-span-1">
          <PackageCard
            key={packages[3].id}
            imageSrc={packages[3].imageSrc}
            title={packages[3].title}
            price={packages[3].price}
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default PackagesSection;
