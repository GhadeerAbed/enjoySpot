  import React from "react";
  import Image from "next/image";
import { Activity } from '../../types/page';

  const Card = ({ activity }: { activity: Activity }) => {
    if (!activity) return null;

    return (
      <div className="flex justify-center">
        {/* Adjusted height and shadow */}
        <div className="max-w-sm relative mx-auto block rounded-lg p-2 w-80 shadow-lg shadow-indigo-300 border h-50">
          <a href="#" className="relative">
            <div className="absolute bottom-0 right-0 border-l-0 rounded-t-lg w-24 h-20 bg-white">
              <div className="relative">
                <div className="absolute mt-2 mr-2 right-0 rounded w-20 h-20 bg-primary text-white text-center">
                  <div className="flex flex-col justify-center mt-2">
                    <h2 className="text-lg font-bold">{activity.price}</h2>
                    {/* <h2 className="text-xs">AED/H</h2> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Increased image height */}
            <Image
              alt="Activity Image"
              src={activity.imageUrl || "/logo.svg"} // Fallback image in case no URL is provided
              className="h-56 w-full rounded-lg object-cover" // Adjusted image height to match new card height
              width={40}
              height={45}
            />
          </a>

          <div className="flex justify-between mt-3">
            <div className="ml-2 font-bold font-sans text-explore text-primary">
              {activity.name}
            </div>

            <div className="flex items-center justify-center space-x-2">
              <div className="text-sm font-sans font-bold text-gray-600">{activity.rating}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="yellow"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
          </div>

          <div className="flex mt-4 mb-3">
            <div className="flex items-center space-x-2 pr-4 border-r border-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin ml-1"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-gray-600">{activity.location}</span>
            </div>

            <div className="flex items-center space-x-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="text-gray-600">{activity.people}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card;
