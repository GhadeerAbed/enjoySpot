import Image from "next/image";
import React from "react";
import Button from "../../../../components/Button/page";
import {
  duration,
  hour,
  location,
  masterCard,
  visa,
} from "../../../../../public/images/page";

export const CancelPage = () => {
  return (
    <div className="flex items-center justify-center w-full my-10">
      <div className=" w-[370px] h-[550px]  rounded-lg bg-white shadow-lg">
        <div className="flex w-full my-5 ">
          <div className=" text-center w-1/3 h-[72px]   border-r">
            <div className="text-3xl font-medium text-h1Color">07</div>
            <div className="text-h1Color font-medium">Oct,Mon</div>
          </div>
          <div className="w-2/3 px-10">
            <div className="text-primary text-xl font-bold">
              Helicoptar Ride
            </div>
            <div className="text-xs text-h6Color">#717254</div>
          </div>
        </div>
        <div className="mb-3 flex justify-center  space-x-7 ">
          <div className=" flex ">
            <Image src={hour} alt="" className="mr-2" />
            <span className="text-h6Color"> 10:30 PM</span>
          </div>
          <div className=" flex ">
            <Image src={duration} alt="dataTime" className="mr-2" />
            <span className="text-h6Color"> 20 Mins </span>
          </div>
          <div className=" flex ">
            <Image src={location} alt="location" className="mr-2" />
            <span className="text-h6Color">location </span>
          </div>
        </div>

        <div className="flex justify-between mx-7 mt-10">
          <div className="text-h6Color font-medium">Total Coast</div>
          <div className="text-h6Color font-medium">
            850 <span className="text-h6Color text-xs">AED</span>
          </div>
        </div>
        <div className="flex justify-between mx-7 my-5">
          <div className="text-h6Color font-medium">Payment</div>
          <div className=" font-medium flex space-x-2">
            <Image src={masterCard} alt="image" />
            <Image src={visa} alt="image" />
          </div>
        </div>
        <div className="flex flex-col mx-7 my-5">
          <div className="text-h6Color font-medium">Policy</div>
          <div className="flex pl-4 space-x-2">
            <span className="text-2xl text-h6Color font-bold">.</span>
            <span className="text-h6Color mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </span>
          </div>
          <div className="flex pl-4 space-x-2">
            <span className="text-2xl text-h6Color font-bold">.</span>
            <span className="text-h6Color mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor
              sit amet consectetur .
            </span>
          </div>
          <Button className="w-1/2 mx-auto bg-h7Color mt-5 text-white">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
