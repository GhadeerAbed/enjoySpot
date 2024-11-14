import React from "react";
import Image from "next/image";
import { Activity } from "../../types/page";
import Button from "../Button/page";
import {
  cabin,
  convert,
  Guest,
  location,
  pepole,
  star,
  table,
  yachtsRoom,
} from "../../../public/images/page";

const CardYachts = ({ activity }: { activity: Activity }) => {
  if (!activity) return null;

  return (
    <div className="lg:w-[305px] ">
      <div className="p-3 shadow-cardShadow  rounded-xl">
        <a href="#" className="relative">
          <div className="absolute bottom-0 right-0 border-l-0 rounded-t-lg  w-24 h-[88px]  bg-white">
            <div className="relative">
              <div className="absolute mt-2 mr-2 right-0 rounded-[12px] w-20 h-20 bg-h1Color text-white text-center">
                <div className="flex flex-col justify-center mt-2">
                  <h2 className="text-lg font-bold">{activity.price}</h2>
                  <p>AED/H</p>
                </div>
              </div>
            </div>
          </div>

          {/* Increased image height */}
          <Image
            alt="Activity Image"
            src={yachtsRoom}
            className="h-56 w-full rounded-[20px] object-cover"
            width={40}
            height={45}
          />
        </a>

        <div className="flex justify-between mt-3">
          <div className=" font-bold font-sans text-xl text-primary">
            {activity.name}
          </div>

          <div className="flex items-center justify-center space-x-2">
            <div className="text-sm font-sans font-bold text-primary">
              {activity.rating}/5
            </div>
            <Image src={star} alt="people" width={18} height={18} />
          </div>
        </div>

        <div className="flex  items-center my-2 ">
          <div className="flex items-center space-x-2 lg:pr-3 border-r border-h6Color lg:px-1 xs:px-1">
            <Image src={Guest} alt="people" width={18} height={18} />
            <span className="text-h6Color xs:text-[10px] lg:text-[15px]">{activity.guest} Guests</span>
          </div>

          <div className="flex items-center space-x-2 lg:pl-3 border-r lg:px-1 xs:px-1">
            <Image src={cabin} alt="people" width={18} height={18} />
            <span className="text-h6Color xs:text-[10px] lg:text-[15px]">{activity.cabins} Cabins</span>
          </div>
          <div className="flex items-center space-x-2 lg:pl-3 ">
            <Image src={table} alt="people" width={18} height={18} />
            <span className="text-h6Color xs:text-[10px] lg:text-[15px]">{activity.size} ft</span>
          </div>
        </div>

        <div className="flex space-x-2 py-2">
          <Button className=" text-primary bg-white w-full border-secondary"  >
            Book Now
          </Button>
          <Image  src={convert} alt="convert" />
        </div>
      </div>
    </div>
  );
};

export default CardYachts;
