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
    <section className="my-[150px] bg-blue-50 flex justify-around items-center  h-[350px] px-10">
      {/* Header section */}
      <div>
        <h1 className="uppercase text-xl font-Sans text-primary">Our packages</h1>
        <h2 className="text-5xl font-medium font-Kalnia text-primary w-[400px] py-1">CHOOSE WHAT YOU ENJOY MOST</h2>
        <p className="text-primary w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button className="mt-4 ">
          Explore All
        </Button>
      </div>

      {/* Grid of packages */}
      <div className="grid grid-cols-3 gap-4 w-[700px]">

  <div className="col-span-1">
    <PackageCard
      key={packages[0].id}
      imageSrc={packages[0].imageSrc}
      title={packages[0].title}
      price={packages[0].price}
    />
  </div>

  <div className="col-span-2">
    <PackageCard
      key={packages[1].id}
      imageSrc={packages[1].imageSrc}
      title={packages[1].title}
      price={packages[1].price}
    />
  </div>

  <div className="col-span-2">
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

    </section>
  );
};

export default PackagesSection;
