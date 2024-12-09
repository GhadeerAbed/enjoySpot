"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { useSWRHook } from "@/hooks/page";
import { API_SERVICES_URLS } from "@/data/page";
import {
  exclusiveBanner,
  leftArrow,
  sort,
} from "../../../../../public/images/page";
import PackageSkeleton from "@/components/SkeltonPackages/page";

const Button = dynamic(() => import("@/components/page").then(mod => mod.Button), {
  loading: () => <div className="loading">Loading...</div>,
});

export const ExclusivePackages = () => {
  const { data,isLoading,error } = useSWRHook(API_SERVICES_URLS.GET_All_packages);

  const packages = useMemo(() => data?.isSuccess ? data?.data?.data : [], [data]);
  console.log(packages);

if(!data) return <PackageSkeleton/>
  return (
    <section className="mt-10 lg:mx-[100px] xs:mx-[30px]">
      {/* --------------------Banner-------------- */}
      <div className="flex justify-center relative">
        <Image src={exclusiveBanner} alt="exclusiveBanner" className="w-full" />
        <div className="absolute lg:top-1/4 lg:bottom-3/4 xs:top-[20%] z-40 text-center">
          <h1 className="text-white font-abel lg:pb-5 sm:text-xl xs:pb-0 opacity-75 ">
            Tailored Experiences For Every Adventure
          </h1>
          <h1 className="lg:text-5xl font-bold sm:text-2xl text-highlight font-Kalnia lg:pb-5">
            Discover Our,
          </h1>
          <h1 className="lg:text-5xl font-bold sm:text-3xl text-highlight font-Kalnia">
            Exclusive Packages,
          </h1>
        </div>
      </div>
      {/*----------------Button-------------------*/}
      <div className="flex relative text-center justify-center my-5">
        <div className="flex space-x-5 mt-10 text-primary font-Sans">
          {[
            "City Name ",
            "City Name ",
            "City Name ",
            "City Name ",
            "City Name ",
            "City Name ",
            "City Name ",
          ].map((city, index) => (
            <div
              key={index}
              className={`border rounded-full p-1 lg:px-5 mx-2 bg-white w-[132px] xs:p-2 hover:bg-h5Color cursor-pointer
        ${index >= 2 ? "hidden lg:block" : ""}`}
            >
              {city}
            </div>
          ))}
        </div>

        <div className="absolute right-7 bottom-1">
          <Image src={sort} alt="sortButton" />
        </div>
      </div>

      {/* --------------------Cards-------------- */}

      {packages.map((offer: any, id: any) => (
        <div
          key={id}
          className="grid xs:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 justify-center my-10 w-full relative"
        >
          {offer.attachments
            .slice(0, 3)
            .map((attachment: any, index: number) => (
              <div
                key={index}
                className={`relative overflow-hidden ${
                  index === 0
                    ? "rounded-l-lg"
                    : index === 2
                    ? "rounded-r-lg"
                    : ""
                }`}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(197, 236, 252, 0) 0%, rgba(91, 126, 155, 0.662432) 40.54%, #25466A 100%)",
                }}
              >
                <Image
                  src={`https://enjoyspot.premiumasp.net${attachment.attachmentPath}`}
                  alt={`Attachment ${index}`}
                  width={400}
                  height={240}
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
          <div className="absolute lg:bottom-5 lg:left-3 space-y-2 mx-5">
            <h1 className="font-bold font-Sans text-2xl text-white">{offer.name}</h1>
            <p className="font-Sans text-gray-200 text-sm  custom2:max-w-[500px]">
              {offer.summary}
            </p>
          </div>
          {/* {offer.salePrice}
          {offer.originalPriceAED} AED */}

          <div className="absolute bottom-5 right-3 hidden md:block lg:block custom2:block">
            <div className="flex bg-white bg-opacity-50 rounded-full px-3 space-x-5">
              <div className="flex space-x-1">
                <h1 className="font-bold font-Sans text-white">
                  {offer.salePrice}
                </h1>
                <span className="text-xs mt-2 text-white font-bold z-40 ">
                  AED
                </span>
              </div>
              <div className="line-through text-white ">
                {offer.originalPriceAED} AED
              </div>
            </div>
            <Button className="bg-white text-primary flex justify-center items-center gap-3  pr-10 pl-5 font-bold mt-2">
              <span>Check Availability</span>
              <Image src={leftArrow} alt="leftArrow" width={20} height={20} />
            </Button>
          </div>
          <div className="xs:flex font-Sans lg:hidden md:hidden  xs:justify-between  custom2:hidden   my-5  col-span-3 ">
            <Button className="bg-h5Color w-[35%] text-primary flex justify-center items-center gap-3 font-Sans  pr-10 pl-5 font-bold text-xl mt-2">
              <span>
                {offer.priceAfter}
                <span className="text-[15px] mx-2 ">AED</span>
              </span>
            </Button>
            <Button className="bg-primary w-[60%] text-white flex justify-center items-center gap-3 font-Sans pr-10 pl-5 text-lg mt-2">
              <span className="font-Sans">Check Availability</span>
              <Image src={leftArrow} alt="leftArrow" width={20} height={20} />
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExclusivePackages;