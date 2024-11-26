  import React from "react";
  import Image from "next/image";
import { Activity } from '../../types/page';
import { location, pepole ,star ,test} from "../../../public/images/page";
import Link from "next/link";

  const Card = ({ activity }: { activity: Activity }) => {
    if (!activity) return null;

    return (
      <div className="">
        <div className="p-2 shadow-cardShadow  rounded-lg">
          <Link href={`/activities/${activity.id}`} className="relative">
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
              src={test} 
              className="h-56 w-full rounded-lg object-cover"
              width={40}
              height={45}
            />
          </Link>

          <div className="flex justify-between mt-3">
            <div className=" font-bold font-sans text-xl text-primary">
              {activity.name}
            </div>

            <div className="flex items-center justify-center space-x-2">
              <div className="text-sm font-sans font-bold text-primary">{activity.rating}/5</div>
              <Image src={star} alt="people" width={18} height={18} />
            </div>
          </div>

          <div className="flex  items-center my-2 ">
            <div className="flex items-center space-x-2 pr-3 border-r border-h6Color">
            <Image src={location} alt="people" width={18} height={18} />
              <span className="text-h6Color">{activity.location}location</span>
            </div>

            <div className="flex items-center space-x-2 pl-3">
                <Image src={pepole} alt="people" width={18} height={18} />
              <span className="text-h6Color">{activity.people}people</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card;
