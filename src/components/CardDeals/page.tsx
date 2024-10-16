import React from "react";
import Image from "next/image";
import { BestDeal } from "../../types/page";
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

const CardDeals = ({ deal }: { deal: BestDeal }) => {
  if (!deal) return null;

  return (
    <div className="">
      <div className="">
      <div className="relative w-[392px] h-[395px]">
  {/* Main image */}
  <Link href="" className="absolute right-3 top-3 z-10">
    <Image src={convert} width={40} height={40} alt="convert" />
  </Link>
  <Image
    alt="Activity Image"
    src={test3}
    className="border-none shadow-sm rounded-[16px] object-cover"
    width={392}
    height={400}
  />
  
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-85 rounded-lg"></div>

    

          <div className="absolute left-5 bottom-5 z-50 rounded-[12px] w-20 h-30 font-sans bg-highlight text-primary text-center border ">
            <div className="flex flex-col justify-center">
              {/* priceAfter */}
              <h2 className="text-lg font-bold">{deal.priceAfter}</h2>
              <h2 className="text-xs mb-2">AED/H</h2>

              {/* priceBefore with line-through */}
              <h2 className="text-lg font-bold line-through text-h6Color">
                {deal.priceBefore}
              </h2>
              <h2 className="text-xs">AED/H</h2>
            </div>
          </div>

          <div className="absolute left-1/4 mx-2 bottom-5 z-50 rounded-[12px] w-3/4 h-1/4 text-white  ">
            <div className="flex flex-col ">
              {/* priceAfter */}
              <div className="">
                <h2 className="text-lg font-bold text-highlight ml-2">
                  {deal.name}
                </h2>
              </div>

              <div className=" flex ">
                <h2 className="text-xs  mt-2 flex ml-2 ">
                  <Image src={seats} width={18} height={19} alt="seats" />{" "}
                  {deal.seats}
                </h2>
                <div className="border-r mx-3 bg-h6Color h-[15px] mt-2"></div>
                <h2 className="text-xs  mt-2 flex ">
                  <Image src={timer} width={18} height={19} alt="seats" />{" "}
                  {deal.durations}
                </h2>
              </div>

              {/* priceBefore with line-through */}
              <Button className=" bg-white text-primary  hover:bg-primary hover:text-white transition flex justify-center items-center gap-3 w-[255px] font-bold mt-1 py-2 mx-2">
                <span>Book Now</span>
              </Button>
            </div>
          </div>

          <div className="absolute right-5 bottom-24">
            <h2 className="flex text-white text-xs">
              {deal.rating}
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
