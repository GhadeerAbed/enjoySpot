"use client";
import { useState } from "react"; //remove in static
import Image from "next/image";
import {
  arrowDown,
  bathroom,
  bed,
  chair,
  coach,
  convert,
  dashboard,
  dataTime,
  dining,
  EmFlag,
  emptyStars,
  faceUser,
  flag,
  frFlag,
  grill,
  harbor,
  indFlag,
  ladder,
  lefttSide,
  lefttSideG,
  maps,
  rightSide,
  rightSideG,
  roof,
  roof2,
  roof3,
  room1,
  stars,
  table,
  trFlag,
  umbarla,
  user,
  usFlag,
  yacht1,
  zoom,
} from "../../../../../public/images/page";
import { review } from "@/data/layoutData/reviews";
import { ExploreMore } from "@/features/MainHome/components/page";
import { Button } from "@/components/page";

export const YachtsDetails = () => {
  const [activeTab, setActiveTab] = useState("details"); // remove on static

  return (
    <section className="lg:mx-[100px] xs:mx-[30px] ">
      {/* Banner Yachts Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Large image on the left */}
        <div className="relative w-full h-96 md:h-full col-span-1 xs:mb-[10%]">
          <div className="absolute right-2 top-2 z-50">
            <Image src={zoom} alt="Zoom icon" width={39} height={38} />
          </div>

          {/* Visible on all screens except on extra small (xs) screens */}
          <div className="absolute bottom-3 left-[42%] z-50 xs:hidden sm:flex bg-white bg-opacity-50 rounded-full">
            <Image src={lefttSide} alt="Zoom icon" width={39} height={38} />
            <div className="flex text-center mx-5 justify-center items-center font-bold text-primary">
              1/12
            </div>
            <Image src={rightSide} alt="Zoom icon" width={39} height={38} />
          </div>

          {/* Visible only on extra small (xs) screens */}
          <div className="absolute bottom-[-15%] text-h6Color left-[40%] lg:hidden md:hidden sm:hidden flex bg-white bg-opacity-50 rounded-full">
            <Image
              src={lefttSideG}
              alt="Zoom icon"
              width={30}
              height={25}
              className="text-h6Color"
            />
            <div className="flex text-center mx-5 text-h6Color justify-center items-center font-bold">
              1/12
            </div>
            <Image
              src={rightSideG}
              alt="Zoom icon"
              width={30}
              height={25}
              className=""
            />
          </div>

          <Image
            src={yacht1}
            alt="Yacht main image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Smaller images on the right */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { src: room1, alt: "Small image 1" },
            { src: roof2, alt: "Small image 2" },
            { src: roof, alt: "Small image 3" },
            { src: roof3, alt: "Small image 4" },
          ].map((image, index) => (
            <div className="relative w-full h-40 md:h-46" key={index}>
              <div className="absolute right-2 top-2 z-50">
                <Image src={zoom} alt="Zoom icon" width={39} height={38} />
              </div>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Yacht details */}
      <div className="w-full md:w-1/2  mx-4 font-Sans">
        <div className="flex flex-wrap items-center gap-4 relative">
          <h2 className="text-2xl font-bold text-primary mb-0">
            Yachts Name 0.1
          </h2>
          <h2 className="text-xs text-h6Color">4/5 [128 Reviews]</h2>
          <div className="flex items-center">
            <Image src={stars} alt="Rating stars" className="h-4" />
          </div>
          <div className=" absolute right-6 top-0 flex items-center">
            <Image src={convert} alt="Convert icon" width={24} height={24} />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 my-3">
          <h2 className="text-xl font-bold text-primary">
            2500<span className="text-xs text-primary px-1">AED/H</span>
          </h2>
          <h2 className="text-primary bg-cyanColor border rounded-full px-2 py-1 text-xs">
            Minimum Rental hours: 2 hours
          </h2>
        </div>

        <div className="flex flex-wrap items-center  gap-6 py-2">
          {[
            { icon: harbor, text: "Mars Al Arab", alt: "Harbor icon" },
            { icon: user, text: "12 Guests", alt: "Guests icon" },
            { icon: dashboard, text: "3 Cabins", alt: "Dashboard icon" },
            { icon: table, text: "75 ft", alt: "Table icon" },
          ].map((item, index) => (
            <h2
              className="flex items-center text-gray-600 border-r"
              key={index}
            >
              <Image src={item.icon} alt={item.alt} width={24} height={24} />
              <span className="ml-2 text-xs text-gray-600 mr-3">
                {item.text}
              </span>
            </h2>
          ))}
        </div>
        <div className="flex lg:hidden md:hidden custom:hidden custom2:hidden ss:hidden    w-full justify-center space-x-10 my-5  "> 
          <Button className="bg-white flex w-[60%]  text-primary space-x-3  justify-center items-center border rounded-[15px]  font-Sans pr-3  font-bold ">
            <Image src={dataTime} alt="Arrow right" width={24} height={24} />
            <span>Data&Time</span>
            <Image src={arrowDown} alt="Arrow right" width={24} height={24} />
          </Button>
          <Button className="bg-primary text-white w-[35%]  justify-center items-center  font-Sans pr-3 border rounded-[15px]  font-bold ">
            <span>Book Now</span>
          </Button>
        </div>
        <div className="my-10">
          <h2 className="text-xl font-bold text-primary hidden ss:inline">Overview</h2>
          <p className="text-h6Color text-xs py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            dolorem cumque blanditiis libero perspiciatis saepe iure,Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Sed odio mollitia
            perferendis rerum nemo non sit laboriosam nisi, optio voluptatum
            itaque placeat exercitationem. Odio minima laboriosam debitis!
            Repellendus, consequuntur tempora! beatae recusandae aut! Quibusdam
            quisquam repudiandae saepe illum voluptates ad ipsum magni
            cupiditate iusto.
          </p>
        </div>
      </div>
      
      {/* Dynamic Amenities Tab */} {/* remove in static */}
      <div>
        <div className="text-xl  flex  font-sans lg:w-2/3 ">
          {[
            { name: "details", label: "Details" },
            { name: "amenities", label: "Amenities" },
            { name: "suitable", label: "Suitable For" },
            { name: "complimentary", label: "Complimentary Items" },
          ].map((tab, index) => (
            <h2
              key={index}
              className={`text-sm md:text-lg font-bold border-r px-4 md:px-10 cursor-pointer font-Sans ${
                activeTab === tab.name
                  ? "text-primary"
                  : "text-h6Color hover:text-primary"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.label}
            </h2>
          ))}
        </div>

        {/* Tab content */}
        <div className="content mt-6 ">
          {activeTab === "details" && (
            <div>
              <h1 className="font-bold text-primary">Details</h1>
              <p>Here are the details...</p>
            </div>
          )}

          {activeTab === "amenities" && (
            <div className="gap-4 my-5 mx-5 lg:w-2/3  ">
              <div className=" flex justify-between">
                <h1 className="font-bold text-primary my-7 ">
                  Interior Amenities
                </h1>
                <a className=" lg:hidden md:hidden   underline rounded-lg text-center flex justify-center items-center  h-[80px] w-[100px] text-primary font-bold hover:text-h1Color">
                  View More
                </a>
              </div>

              <div className="grid  xs:grid-cols-2 ss:grid-cols-2 custom:grid-cols-3 custom2:grid-cols-4   lg:grid-cols-5 md:grid-cols-5  gap-3 my-4 justify-items-center font-custom">
                {[
                  { icon: coach, label: "Lounge Area" },
                  { icon: bed, label: "Master Suite" },
                  { icon: bathroom, label: "Bathroom" },
                  { icon: dining, label: "Dining Room" },
                ].map((amenity, index) => (
                  <div
                    key={index}
                    className="border rounded-lg bg-h4Color text-center lg:w-[133px] lg:h-[80px] xs:w-[162px] flex flex-col  justify-center items-center hover:bg-h5Color  transition duration-200"
                  >
                    <Image
                      src={amenity.icon}
                      alt={amenity.label}
                      width={40}
                      height={40}
                    />
                    <p className="text-sm text-gray-700 mt-2">
                      {amenity.label}
                    </p>
                  </div>
                ))}
                <a className="xs:hidden md:flex   underline rounded-lg text-center flex justify-center items-center  h-[80px] w-[100px] text-primary font-bold hover:text-h1Color">
                  View More
                </a>
              </div>

              <div className=" flex justify-between">
                <h1 className="font-bold text-primary my-7">
                  Exterior Amenities
                </h1>

                <a className=" lg:hidden md:hidden   underline rounded-lg text-center flex justify-center items-center  h-[80px] w-[100px] text-primary font-bold hover:text-h1Color">
                  View More
                </a>
              </div>
              <div className="grid  xs:grid-cols-2 ss:grid-cols-2  custom:grid-cols-3 custom2:grid-cols-4   lg:grid-cols-5 md:grid-cols-5   gap-3 my-4 justify-items-center font-custom">
                {[
                  { icon: umbarla, label: "Sun Deck" },
                  { icon: chair, label: "Outdoor Dining" },
                  { icon: grill, label: "Barbecue/Grill" },
                  { icon: ladder, label: "Swimming Pool" },
                ].map((amenity, index) => (
                  <div
                    key={index}
                    className="border rounded-lg bg-h4Color text-center lg:w-[133px] lg:h-[80px] xs:w-[162px] flex flex-col  justify-center items-center hover:bg-h5Color  transition duration-200 "
                  >
                    <Image
                      src={amenity.icon}
                      alt={amenity.label}
                      width={40}
                      height={40}
                    />
                    <p className="text-sm text-gray-700 mt-2">
                      {amenity.label}
                    </p>
                  </div>
                ))}
                <a className="xs:hidden md:flex   underline rounded-lg text-center flex justify-center items-center  h-[80px] w-[100px] text-primary font-bold hover:text-h1Color">
                  View More
                </a>
              </div>
            </div>
          )}

          {activeTab === "suitable" && (
            <div>
              <h1 className="font-bold text-primary">Suitable For</h1>
              <p>Information about who this is suitable for...</p>
            </div>
          )}

          {activeTab === "complimentary" && (
            <div>
              <h1 className="font-bold text-primary">Complimentary Items</h1>
              <p>List of complimentary items...</p>
            </div>
          )}
        </div>
      </div>
      {/* ----------------------Route Detail-------------------- */}
      <div className="flex flex-col xs:flex-col sm:flex-row lg:w-[735px] sm:w-full xs:w-full mt-10 my-5 font-Sans justify-between  ">
        {/* Left Side: Route Details */}
        <div className="w-full sm:w-[324px] text-h6Color mb-5 sm:mb-0">
          <h1 className="font-bold text-primary text-xl xs:text-lg sm:text-xl font-Sans">
            Route Details
          </h1>

          {/* Visible only on extra-small (xs) screens */}
          <div className="w-full sm:w-[338px] relative lg:hidden md:hidden custom:hidden custom2:hidden xs:my-10 ">
            <div className="absolute right-2 top-2 z-50">
              <Image src={zoom} alt="Zoom icon" width={39} height={38} />
            </div>
            <Image src={flag} alt="Map Location" className="w-full" />
          </div>

          <div className="">
            <h2 className="my-3 xs:my-2 sm:my-5">
              <span className="font-bold">2 Hour trip:</span> Marina - JBR -
              Atlantics
            </h2>
            <h2 className="my-3 xs:my-2 sm:my-5">
              <span className="font-bold">3 Hour trip:</span> JBR-Marina Mall-
              marina Yachts club - Dubai Eye - Jumeirah Beach - Atlantics Hotel
            </h2>
            <h2 className="my-3 xs:my-2 sm:my-5">
              <span className="font-bold">4 Hour trip:</span> JBR - Marina - JBR
              - Atlantics- Burj Al Arab
            </h2>
          </div>
        </div>

        {/* Visible on screens larger than xs */}
        <div className="w-full sm:w-[338px] relative hidden custom:flex">
          <div className="absolute right-2 top-2 z-50">
            <Image src={zoom} alt="Zoom icon" width={39} height={38} />
          </div>
          <Image src={flag} alt="Map Location" className="w-full" />
        </div>
      </div>
      {/* -------------------Maps-------------- */}
      <div className="lg:w-[735px] xs:w-full  ">
        <Image src={maps} alt="mapLocation" />
      </div>
      {/* ------------------OurCrew-------------- */}
      <div className="flex mx-4  my-16 items-center font-Sans">
        <div className="font-bold text-primary mr-4">Our Crew Speaks:</div>
        <div className="flex text-center justify-center">
          <Image src={EmFlag} alt="Emarite flag" className="mx-2" />
          <Image src={usFlag} alt="US flag" className="mx-2" />
          <Image src={trFlag} alt="Turkish flag" className="mx-2" />
          <Image src={frFlag} alt="French flag" className="mx-2" />
          <Image src={indFlag} alt="Indian flag" className="mx-2" />
        </div>
      </div>
      {/* ----------------Policey---------- */}
      <div className=" lg:w-[718px] mx-4 font-Sans  text-h6Color xs:w-full">
        <h1 className="text-primary font-bold text-xl py-1">Policy :</h1>
        <p className="text-xs  mt-3">
          1- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="text-xs   my-5 ">
          2- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          quas iure esse eos cupiditate harum id, facere ipsum iste porro
          eligendi blanditiis, vero beatae? Cum!
        </p>
        <p className="text-xs  ">
          3- Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          rem dolores aut consequuntur vero quasi.
        </p>
        <p className="text-xs   my-5 ">
          4- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          totam sapiente temporibus ex iusto quas, corporis dolores nam
          doloribus sit expedita nostrum, eaque exercitationem. Ipsum.{" "}
        </p>
      </div>
      {/* -------------------Reviews--------------------------- */}
      <div className="mx-4 py-10 lg:w-1/2 font-Sans">
        <h1 className="text-primary font-bold text-xl mb-5">Reviews:</h1>
        <div className="flex  sm:flex-row">
          {/* Left side: Average rating */}
          <div className="w-full xs:w-1/2 my-5 sm:my-0 sm:text-center">
            <div className="text-primary font-bold text-5xl text-left sm:text-center">
              4/5
            </div>
            <h1 className="text-h6Color text-left sm:text-center">
              (128 reviews)
            </h1>
          </div>

          {/* Right side: Star ratings breakdown */}
          <div className="w-full sm:w-1/2">
            <div className="flex flex-col gap-1">
              {/* 5 stars */}
              <div className="flex justify-between sm:justify-start items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image src={stars} alt="star" className="m-1" key={i} />
                  ))}
                </div>
                <span className="ml-2 text-h6Color">
                  89/128 <span className="hidden ss:inline">Reviews</span>
                </span>
              </div>

              {/* 4 stars */}
              <div className="flex justify-between sm:justify-start items-center">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Image src={stars} alt="star" className="m-1" key={i} />
                  ))}
                  {[...Array(1)].map((_, i) => (
                    <Image
                      src={emptyStars}
                      alt="empty star"
                      className="m-1"
                      key={i}
                    />
                  ))}
                </div>
                <span className="ml-1 text-h6Color">
                  27/128 <span className="hidden ss:inline">Reviews</span>
                </span>
              </div>

              {/* 3 stars */}
              <div className="flex justify-between sm:justify-start items-center">
                <div className="flex">
                  {[...Array(3)].map((_, i) => (
                    <Image src={stars} alt="star" className="m-1" key={i} />
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <Image
                      src={emptyStars}
                      alt="empty star"
                      className="m-1"
                      key={i}
                    />
                  ))}
                </div>
                <span className="ml-2 text-h6Color">
                  3/128 <span className="hidden ss:inline">Reviews</span>
                </span>
              </div>

              {/* 2 stars */}
              <div className="flex justify-between sm:justify-start items-center">
                <div className="flex">
                  {[...Array(2)].map((_, i) => (
                    <Image src={stars} alt="star" className="m-1" key={i} />
                  ))}
                  {[...Array(3)].map((_, i) => (
                    <Image
                      src={emptyStars}
                      alt="empty star"
                      className="m-1"
                      key={i}
                    />
                  ))}
                </div>
                <span className="ml-2 text-h6Color">
                  0/128 <span className="hidden ss:inline">Reviews</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------USER Reviews--------------- */}
      <div className="  lg:w-[735px] font-Sans mb-20">
        <div className=" space-y-3">
          {review.map((review) => (
            <div
              key={review.id}
              className="bg-h4Color rounded-lg p-4 shadow-md flex   "
            >
              <div className="w-1/5">
                <Image
                  className="ml-3"
                  src={faceUser} // Replace with actual image path
                  alt={review.name}
                />
                <h4 className="font-bold mt-2 text-primary lg:text-lg xs:text-xs">
                  {review.name}
                </h4>
              </div>

              <p className="w-3/5 mt-5 text-xs ">{review.review}</p>

              <div className="w-1/5 flex flex-col items-center justify-center">
                {/* Rating */}
                <h4 className="font-bold text-xl text-primary">
                  {review.rating}/5
                </h4>

                {/* Stars below the rating */}
                <div className="flex mt-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Image
                      key={index}
                      src={index < review.rating ? stars : emptyStars} // Full or empty star based on rating
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          <div className=" lg:w-2/3 xs:w-full hidden ss:inline">
        <ExploreMore />
      </div>
    </section>
  );
};

export default YachtsDetails;
