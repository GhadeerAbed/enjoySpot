"use client";
import React from "react";
import Image from "next/image";
import {
  convert,
  gradBlue,
  seats,
  stars,
  test3,
  timer,
} from "../../../public/images/page";
import Link from "next/link";
import { Button } from "../page";

const CardDeals = ({ deal }: { deal: any }) => {
  if (!deal) return null;
  console.log(deal.attachments);
  return (
    <div className="">
      <div className="">
        <div className="relative ">
          {/* Main image */}
          <Link href="" className="absolute right-3 top-3 z-10">
            <Image src={convert} width={40} height={40} alt="convert" />
          </Link>

          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-85 rounded-lg z-10"></div>
          {/* {deal.} */}
          {/* {deal.attachments.map((attachment: any, index: number) => {
            const isImage =
              attachment.attachmentPath &&
              attachment.attachmentPath.match(/\.(jpeg|jpg|png|gif)$/i);
              <Image
              alt="Activity Image"
              src={`https://enjoyspot.premiumasp.net${attachment.attachmentPath}`}
              width={100}
              height={100}
              className="border-none shadow-sm rounded-[20px] object-cover w-full"
            />

            return (
              <div key={index}>
                {isImage ? (
                 
                  <Image
                    alt="Activity Image"
                    src={`https://enjoyspot.premiumasp.net${attachment.attachmentPath}`}
                    width={100}
                    height={100}
                    className="border-none shadow-sm rounded-[20px] object-cover w-full"
                  />
                ) : (
                 
                  <iframe
                    width="100%"
                    height="200"
                    src={attachment.attachmentPath}
                    // frameBorder="0"
                    allowFullScreen
                    className="rounded-[20px]"
                  ></iframe>
                )}
              </div>
            );
          })} */}

          {/* Gradient overlay */}

          <div className="absolute lg:left-3 lg:bottom-3 md:left-3 md:bottom-3 md:w-[120px] md:h-[125px] xs:left-3 xs:bottom-3  xs:w-[110px] xs:h-[120px]  custom:w-[70px] custom:h-[90px] custom:left-2 custom2:w-[90px] custom2:h-[100px]  z-50 rounded-[12px] lg:w-[102px] lg:h-[124px]   font-sans bg-highlight text-primary text-center border    ">
            <div className="flex flex-col justify-center ">
              {/* priceAfter */}
              <h2 className="lg:text-lg font-bold custom:text-[15px] custom2:text-[25px] xs:text-[20px] ">
                {deal.priceAfter}
              </h2>
              <h5 className="lg:text-xs lg:mb-2 custom2:text-[10px] custom:text-[10px] xs:text-[10px]">
                AED/H
              </h5>

              {/* priceBefore with line-through */}
              <h2 className="lg:text-lg custom2:text-[20px] font-bold custom:text-[15px] line-through text-h6Color xs:text-[20px]">
                {deal.price}
              </h2>
              <h2 className="lg:text-xs custom:text-[10px]   custom2:text-[10px] xs:text-[10px]">
                AED/H
              </h2>
            </div>
          </div>

          <div className="absolute lg:left-[30%] xs:bottom-0 custom:h-[85px] custom:bottom-6 custom:left-[33%]  lg:bottom-1 left-[40%] bottom-2   z-50 rounded-[12px] lg:w-3/4 w-[70%] lg:h-[135px] h-[135px] text-white ss:left-[33%] custom2:h-[95px] md:h-[110px]   ">
            <div className="flex flex-col ">
              {/* priceAfter */}
              <div className="">
                <h2 className="text-lg custom:text-[15px] ss:text-[25px] md:text-[25px] custom2:text-[20px] font-bold text-highlight ml-1">
                  {deal.name}
                </h2>
              </div>

              <div className=" flex  lg:my-3 xs:my-3 custom:my-0 md:my-3 custom2:my-1 ">
                <h2 className="text-xs  lg:mt-2 xs:mt-2  custom:mx-1 custom2:mr-5 flex ml-1 ">
                  <Image src={seats} width={18} height={19} alt="seats" />{" "}
                  {deal.seats}
                </h2>
                <div className="border-r lg:mx-3 xs:mx-3 custom2:mr-5  custom:mx-1 bg-h6Color h-[15px] mt-3 "></div>
                <h2 className="text-xs  mt-2 flex ">
                  <Image src={timer} width={18} height={19} alt="seats" />{" "}
                  {deal.durations}
                </h2>
              </div>

              {/* priceBefore with line-through */}
              <Button className=" bg-white text-primary   ss:w-[260px] custom:w-[137px] custom2:w-[200px]  hover:bg-primary hover:text-white transition flex justify-center items-center gap-3 w-[180px]  lg:w-[250px]   md:w-[250px]   font-bold mt-1 py-2 lg:mx-2 mx-2">
                <span>Book Now</span>
              </Button>
            </div>
          </div>

          <div className="absolute lg:right-7 lg:bottom-28 xs:right-7 xs:bottom-28 z-10 custom:right-2  custom:bottom-[35%] custom2:right-3  custom2:bottom-[28%]  md:right-10  md:bottom-[24%] ss:right-10  ">
            <h2 className="flex text-white text-xs">
              {deal.rating}/5
              <Image
                src={stars}
                width={16}
                height={17}
                alt="stars"
                className="mx-1"
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeals;
