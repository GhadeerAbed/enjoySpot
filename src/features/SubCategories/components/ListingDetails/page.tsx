"use client";
import { API_SERVICES_URLS } from "@/data/page";
import { useSWRHook } from "@/hooks/page";
import { Magnification } from "@/lib/@heroicons/page";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { stars } from "../../../../../public/images/page";

export const ListingDetails = ({ id }: { id: string | number }) => {
  const {
    data: listingDetails,
    isLoading,
    error,
  } = useSWRHook(API_SERVICES_URLS.GET_ALL_LISTINGS_BY_ID(id));
  const [currentSlide, setCurrentSlide] = useState(1);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error || !listingDetails?.data?.data?.length)
    return <p className="text-center text-red-500">No data available.</p>;

  const listing = listingDetails.data.data[0];
  console.log(listing);
  // Separate attachments based on type
  const mediaAttachments =
    listing.attachments?.filter(
      (attachment) => attachment.attachmentType === "media"
    ) || [];
  const routesMap = listing.attachments?.find(
    (attachment) => attachment.attachmentType === "RoutesMap"
  );
  const youtubeVideo = listing.attachments?.find(
    (attachment) => attachment.attachmentType === "YouTubeVideoIframe"
  );
  const attachmentsLoop = [...mediaAttachments, youtubeVideo].filter(Boolean);
  console.log(attachmentsLoop);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    afterChange: (index: number) => setCurrentSlide(index + 1),
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-7">
          {attachmentsLoop.length > 0 ? (
            <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
              <Slider {...settings}>
                {attachmentsLoop.map((media, index) => {
                  if (media.attachmentType === "YouTubeVideoIframe") {
                    // Render YouTube video
                    return (
                      <div
                        key={index}
                        className="relative w-full h-[400px] rounded-lg"
                      >
                        <iframe
                          width="100%"
                          height="400"
                          src={media.attachmentPath}
                          title={`YouTube Video ${index + 1}`}
                          className="rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    );
                  } else {
                    // Render image
                    return (
                      <div
                        key={index}
                        className="relative w-full h-[400px] rounded-lg"
                      >
                        <Image
                          src={`https://enjoyspot.premiumasp.net${media.attachmentPath}`}
                          alt={`Media ${index + 1}`}
                          fill
                          priority
                          className="object-cover"
                        />
                        <button className="absolute top-2 right-2 bg-white opacity-50 p-1 rounded-full shadow-md">
                          <Magnification className="h-6 w-6" />
                        </button>
                      </div>
                    );
                  }
                })}
              </Slider>
              <div className="absolute bottom-4 right-4 bg-white bg-opacity-50 text-primary text-sm px-3 py-1 rounded-full">
                {currentSlide}/{attachmentsLoop.length}
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No attachments available.
            </p>
          )}
        </div>

        <div className="col-span-12 sm:col-span-5 grid grid-cols-2 gap-2">
          {attachmentsLoop.length > 1 ? (
            attachmentsLoop.slice(1, 5).map((media, index) => {
              if (media.attachmentType === "YouTubeVideoIframe") {
                // Render YouTube video
                return (
                  <div
                    key={index}
                    className="col-span-1 relative w-full h-[190px] rounded-lg overflow-hidden"
                  >
                    <iframe
                      width="100%"
                      height="190"
                      src={media.attachmentPath}
                      title={`YouTube Video ${index + 1}`}
                      className="rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              } else {
                // Render media thumbnail
                return (
                  <div
                    key={index}
                    className="relative w-full h-[190px] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={`https://enjoyspot.premiumasp.net${media.attachmentPath}`}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <button className="absolute top-2 right-2 bg-white opacity-50 p-1 rounded-full shadow-md">
                      <Magnification className="h-6 w-6" />
                    </button>
                  </div>
                );
              }
            })
          ) : (
            <p className="text-center text-gray-500 col-span-2">
              No thumbnails available.
            </p>
          )}
        </div>
      </div>

      {/* Listing Details */}
      <div className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:items-start">
        <div className="space-y-4">
          <div className="flex items-center">
          <h1 className="text-4xl font-bold text-primary">{listing.name}</h1>
          <div className=" text-h6Color flex flex-row px-5 pt-3">
            <p className="ml-5">{listing.rating}/5 (128 Review)</p> 
            <Image src={stars} alt={"star"}/>   
          </div>
          </div>
          <div className="flex gap-6">
          <p className=" text-primary">
            <span className="text-3xl font-bold">{listing.price}</span> <span className="font-medium"> AED/Hour</span>
          </p>
          <p className="bg-[#00ADEE1A] py-2 px-3 rounded-full text-primary text-sm">
           Minimum rental hours: {listing.minimumBookingHours} Hours
          </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-600">{listing.overview}</p>
      </div>

      {/* Routes Map */}
      {routesMap && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Routes Map</h2>
          <Image
            src={`https://enjoyspot.premiumasp.net${routesMap.attachmentPath}`}
            alt="Routes Map"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ListingDetails;
