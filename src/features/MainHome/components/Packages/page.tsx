import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image as NextUIImage,
  
} from "@nextui-org/react";
import Image  from "next/image";

import { Button } from "@/components/page";

import Link from "next/link";
import { arrowUpR, rightArrow } from "../../../../../public/images/page";

export const Packages = () => {
  return (
    <>
    <div className="relative mb-10 mt-10 h-full  ">

    <div className="max-w-[800px] gap-2 grid grid-cols-12 sm:grid-rows-2 grid-rows-2 px-8 absolute bottom-0  right-0 z-50">
        <Card className="col-span-12 sm:col-span-4 h-[300px]" isFooterBlurred>
          <NextUIImage
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover "
            src="https://nextui.org/images/card-example-2.jpeg"
          />
          {/* <CardFooter className="absolute bottom-0 z-10 backdrop-blur-xl bg-blureColor bg-opacity-50  ">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Breathing App</p>
              <p className="text-tiny text-white/60">
                Get a good night's sleep.
              </p>
            </div>
          </div>
          <Link
            href=""
            className="rounded-full w-9 h-9 bg-slate-200 opacity-25 text-center"
          >
            <ArrowUpRightIcon />
          </Link>
        </CardFooter> */}

          <div className="absolute left-5 text-highlight bottom-5 ">
            <h1 className="text-white line-clamp-4 text-xl">
              Free range Rover with yahcts...{" "}
            </h1>
            <div className="flex">
              <h1 className=" line-clamp-5 text-highlight text-xl ">2500 </h1>
              <span className="text-highlight text-sm  ml-2 mt-2"> AED/H</span>
            </div>
          </div>

          <div className="absolute right-5 text-white bottom-5 ">
            <div className="absolute right-5 bottom-5">
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="lucide lucide-arrow-up-right bg-blureColor rounded-full "
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Card>

        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <NextUIImage
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-5.jpeg"
          />

          <div className="absolute left-5 text-highlight bottom-5 ">
            <h1 className="text-white line-clamp-4 text-xl">
              Free range Rover with yahcts...{" "}
            </h1>
            <div className="flex">
              <h1 className=" line-clamp-5 text-highlight text-xl ">2500 </h1>
              <span className="text-highlight text-sm  ml-2 mt-2"> AED/H</span>
            </div>
          </div>

          <div className="absolute right-5 text-white bottom-5 ">
            <div className="absolute right-5 bottom-5">
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-up-right bg-blureColor rounded-full "
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Card>

        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <NextUIImage
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-5.jpeg"
          />
          <div className="absolute left-5 text-highlight bottom-5 ">
            <h1 className="text-white line-clamp-4 text-xl">
              Free range Rover with yahcts...{" "}
            </h1>
            <div className="flex">
              <h1 className=" line-clamp-5 text-highlight text-xl ">2500 </h1>
              <span className="text-highlight text-sm  ml-2 mt-2"> AED/H</span>
            </div>
          </div>

          <div className="absolute right-5 text-white bottom-5 ">
            <div className="absolute right-5 bottom-5">
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-up-right bg-blureColor rounded-full "
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Card>

        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <NextUIImage
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-2.jpeg"
          />
          <div className="absolute left-5 text-highlight bottom-5 ">
            <h1 className="text-white line-clamp-4 text-xl">
              Free range Rover with yahcts...{" "}
            </h1>
            <div className="flex">
              <h1 className=" line-clamp-5 text-highlight text-xl ">2500 </h1>
              <span className="text-highlight text-sm  ml-2 mt-2"> AED/H</span>
            </div>
          </div>

          <div className="absolute right-5 text-white bottom-5 ">
            <div className="absolute right-5 bottom-5">
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-up-right bg-blureColor rounded-full "
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Card>
      </div>



                {/* Packages Background */}
       <div className="w-full h-[400px] bg-[#e5f6fc] flex items-center relative">
        <div className=" absolute left-14 top-13">
          <h1 className="text-xl font-Sans text-gray-700">OUR PACKAGES</h1>
          <h2 className="font-Kalnia text-5xl font-bold   text-primary">
            CHOOSE <br />
            WHAT YOU
            <br />
            ENJOY MOST
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />Nihil
            blanditiis in nesciunt porro natus exercitationem <br />voluptas impedit!
            Incidunt recusandae .
          </p>
          <Button className=" bg-primary text-white flex justify-center items-center gap-3 pr-10 pl-5 font-bold mt-5">
         <span>Book Now</span> 
         <div className="text-white">
         <Image src= {rightArrow} alt="leftArrow" width={20} height={20} className="text-white " />
         </div>
        </Button>
        </div>
      </div>
 
    </div>
      
      
    </>
  );
};

export default Packages;
