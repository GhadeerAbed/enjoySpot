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


export const ViewPage = () => {
  return (
    <div className="flex items-center justify-center w-full my-10">
    <div className=" w-[370px] h-[385px]  rounded-lg bg-white shadow-lg">
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
      
        <Button className="w-1/2 mx-auto bg-primary mt-10 text-white">
          Done
        </Button>
      </div>
    </div>

  )
}

export default ViewPage
