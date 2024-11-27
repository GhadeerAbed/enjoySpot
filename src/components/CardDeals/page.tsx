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

const CardDeals = ({
  deal,
  loading,
  error,
}: {
  deal: any;
  loading: boolean;
  error: any;
}) => {
  console.log(deal);
  const mediaAttachments =
    deal.attachments?.filter(
      (attachment: any) => attachment.attachmentType === "media"
    ) || [];
  console.log(mediaAttachments);
  // if (loading) return <p className="text-center">Loading...</p>;
  // if (error || !deal?.data?.data?.length)
  // return <p className="text-center text-red-500">No data available.</p>;

  const priceAfter =
    deal.price && deal.priceDiscountValue
      ? deal.price - deal.priceDiscountValue
      : null; // console.log(discount)

  const attachmentsLoop = [...mediaAttachments].filter(Boolean);

  console.log(attachmentsLoop);

  return (
    <div className="relative max-w-[392px]  ">
      {/* Main image */}
      <Link href="" className="absolute right-3 top-3 z-10">
        <Image src={convert} width={40} height={40} alt="convert" />
      </Link>

      <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-85 z-10 rounded-[20px]"></div>

      {mediaAttachments.length > 0 ? (
        <Image
          alt="Activity Image"
          src={`https://enjoyspot.premiumasp.net${mediaAttachments[0].attachmentPath}`}
          width={392}
          height={400}
          className="w-full  object-cover rounded-[20px] h-[400px]"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">No Image Available</p>
        </div>
      )}

      {/* Gradient overlay */}

      <div className="absolute left-[3%] bottom-[3%]  w-[110px] max-w-[110px]  z-50 rounded-[12px]  h-[124px] font-sans bg-highlight text-primary text-center border">
        <div className="flex flex-col justify-center my-3">
          {/* priceAfter */}
          {priceAfter && (
            <>
              <h2 className="text-2xl font-bold ">{priceAfter}</h2>
              <h5 className="text-xs ">AED/H</h5>
            </>
          )}
          {/* priceBefore with line-through */}
          <h2 className="text-2xl  font-bold  line-through text-h6Color ">
            {deal.price}
          </h2>
          <h2 className="text-xs ">AED/H</h2>
        </div>
      </div>

      <div className="absolute left-[30%] bottom-[1%]   z-50 rounded-[12px]  w-[70%] max-w-[70%]  h-[135px] text-white    ">
        <div className="flex flex-col ">
          {/* priceAfter */}
          <div className="">
            <h2 className="text-2xl   font-bold text-highlight ml-3">
              {deal.name}
            </h2>
          </div>

          <div className=" flex  my-3 ">
            <h2 className="text-xs  mt-2  flex ml-3 ">
              <Image src={seats} width={18} height={19} alt="seats" />{" "}
              {deal.seats}
            </h2>
            <div className="border-r mx-3  bg-h6Color h-[15px] mt-3 "></div>
            <h2 className="text-xs  mt-2 flex ">
              <Image src={timer} width={18} height={19} alt="seats" />{" "}
              {deal.durations}
            </h2>
          </div>

          {/* priceBefore with line-through */}
          <Button className=" bg-white text-primary       transition flex justify-center items-center w-[250px]   font-bold mt-1 py-2  mx-2">
            <span>Book Now</span>
          </Button>
        </div>
      </div>

      <div className="absolute right-[8%] bottom-[28%]  z-10 ">
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
  );
};

export default CardDeals;
