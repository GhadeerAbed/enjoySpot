"use client";
import Image from "next/image";
import React from "react";

import {
  birds,
  owelCover,
  mosPopular,
  rightSlide,
  leftSlide,
  bird,
  like,
  dislike,
  whatsapp1,
  insta,
  facebook1,
} from "../../../../../public/images/page";
import { Button } from "@/components/page";
import Slider from "react-slick";
import { activities } from "@/data/layoutData/activite";
import CardVistor from "@/components/CardVistor/page";
import { relatedCard } from "@/data/layoutData/relatedCard";
import CardRelated from "@/components/CardRelated/page";
import { ExpoloreMore } from '@/features/MainHome/components/page';


const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-0 left-0  z-10 cursor-pointer "
      onClick={onClick}
    >
      <Image src={leftSlide} alt="leftArrow" width={24} height={24} />
    </div>
  );
};

// Custom Right Arrow
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-0   right-0  z-10 cursor-pointer"
      onClick={onClick}
    >
      <Image src={rightSlide} alt="leftArrow" width={24} height={24} />
    </div>
  );
};

const DubaiBirds = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true, // Enables the partial card display
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const related = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="mx-[80px]">
      {/* -------------  {Banner}------------------------ */}
      <div className=" mt-10 mb-10  ">
        <div className=" relative ">
          <div className="relative">
            <div className="flex justify-center text-center">
              <Image src={birds} alt="birdsDubai" className="rounded-lg" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-85 rounded-lg"></div>
          </div>

          <div className="absolute top-10  left-20  space-y-5  z-40 ">
            <div className=" lg:text-5xl  sm:text-2xl text-xl text-highlight font-Kalnia font-bold ">
              The rarest species of
            </div>
            <div className=" lg:text-5xl  sm:text-2xl text-xl text-highlight font-Kalnia font-bold ">
              birds in the Dubai
            </div>
            <div className=" lg:text-5xl  sm:text-2xl text-xl text-highlight font-Kalnia font-bold ">
              Dubai desert
            </div>

            <div className="space-x-5 my-5">
              <span className="font-Sans text-white text-xs">
                2days ago. 5min read
              </span>
              <span className="font-Sans text-primary bg-white rounded-full p-2 text-xs ">
                Category 1
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------ArticleButton------------------------------ */}
      <div className="flex  relative h-[1000px] mb-20">
        {/* //leftside */}
        <div className="w-2/3 h-[570px] relative">
          <div className="  mx-20 ">
            <div className="text-h1Color">
              <span className="text-5xl">.</span>Related article 1
            </div>
            <div className="text-h1Color">
              <span className="text-5xl">.</span>Related article 1
            </div>
            <div className="text-h1Color">
              <span className="text-5xl">.</span>Related article 1
            </div>
            <div className="text-h1Color">
              <span className="text-5xl my-5">.</span>Related article 1
            </div>
          </div>
        </div>
        {/* //rightside */}

        <div className="flex flex-col items-center space-y-3 mx-3 relative">
          <div className="absolute left-0 top-0 font-Sans font-bold text-primary  ">
            Most Pouplur
          </div>
          <div
            className="w-full max-w-sm font-abel rounded-lg shadow-borderShadow flex justify-between h-[95px] items-center "
            style={{ marginTop: 50 }}
          >
            <Image src={mosPopular} alt="Most Popular" className="w-1/4" />
            <div className="flex-col w-3/4 p-2 ">
              <div className=" text-primary mt-3">
                The best 10 things to do on yours in next trip.
              </div>
              <div className="flex mt-3 justify-between">
                <div className=" text-h6Color text-xs py-2">
                  2 days ago, 5 min read .
                </div>
                <span className="border rounded-full bg-slate-200 px-3 py-1 mb-3 text-xs mr-2 text-primary">
                  Category 1
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm font-abel rounded-lg shadow-borderShadow flex justify-between h-[95px] items-center ">
            <Image src={mosPopular} alt="Most Popular" className="w-1/4" />
            <div className="flex-col w-3/4 p-2 ">
              <div className=" text-primary mt-3">
                The best 10 things to do on yours in next trip.
              </div>
              <div className="flex mt-3 justify-between">
                <div className=" text-h6Color text-xs py-2">
                  2 days ago, 5 min read .
                </div>
                <span className="border rounded-full bg-slate-200 px-3 py-1 mb-3 text-xs mr-2 text-primary">
                  Category 1
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm font-abel rounded-lg shadow-borderShadow flex justify-between h-[95px] items-center ">
            <Image src={mosPopular} alt="Most Popular" className="w-1/4" />
            <div className="flex-col w-3/4 p-2 ">
              <div className=" text-primary mt-3">
                The best 10 things to do on yours in next trip.
              </div>
              <div className="flex mt-3 justify-between">
                <div className=" text-h6Color text-xs py-2">
                  2 days ago, 5 min read .
                </div>
                <span className="border rounded-full bg-slate-200 px-3 py-1 mb-3 text-xs mr-2 text-primary">
                  Category 1
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm font-abel rounded-lg shadow-borderShadow flex justify-between h-[95px] items-center ">
            <Image src={mosPopular} alt="Most Popular" className="w-1/4" />
            <div className="flex-col w-3/4 p-2 ">
              <div className=" text-primary mt-3">
                The best 10 things to do on yours in next trip.
              </div>
              <div className="flex mt-3 justify-between">
                <div className=" text-h6Color text-xs py-2">
                  2 days ago, 5 min read .
                </div>
                <span className="border rounded-full bg-slate-200 px-3 py-1 mb-3 text-xs mr-2 text-primary">
                  Category 1
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-36 w-3/2 h-[600px]   ">
          <h1 className="font-Sans text-primary text-lg font-bold space-y-3">
            Lorem Ipsum{" "}
          </h1>
          <p className=" text-h6Color font-asap my-3 max-w-[680px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            tenetur nisi sequi, quos laborum laboriosam dolorem totam quibusdam
            natus ratione nesciunt at provident dignissimos aliquids tenetur
            nisi sequi, quos laborum laboriosam dolorem tota tenetur nisi sequi,
            quos laborum laboriosam dolorem tota tenetur nisi sequi, quos
            laborum laboriosam dolorem tota tenetur nisi sequi, quos laborum
            laboriosam dolorem tota exercitationem esse voluptas hic.nisi sequi
          </p>
          <p className=" text-h6Color font-asap my-3 max-w-[680px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            tenetur nisi sequi, quos laborum laboriosam dolorem totam quibusdam
            natus ratione nesciunt at provident dignissimos aliquids tenetur
            nisi sequi, quos laborum laboriosam dolorem tota tenetur nisi sequi,
            quos laborum laboriosam dolorem tota tenetur nisi sequi, quos
            laborum laboriosam dolorem tota tenetur nisi sequi, quos laborum
            laboriosam dolorem tota exercitationem esse voluptas hic.nisi sequi
          </p>
          <p className="max-w-[680px] text-h6Color font-asap my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            tenetur nisi sequi, quos laborum laboriosam dolorem totam quibusdam
            natus ratione nesciunt at provident dignissimos aliquids tenetur
            nisi sequi, quos laborum laboriosam dolorem tota tenetur nisi sequi,
            quos laborum laboriosam dolorem tota tenetur nisi sequi, quos
            laborum laboriosam dolorem tota tenetur nisi sequi, quos laborum
            laboriosam dolorem tota exercitationem esse voluptas hic.nisi sequi
          </p>
          <div className="">
            <Image src={owelCover} alt="owelCover" />
            <div className="justify-center text-center text-h6Color">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
              perferendis?
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------Carsoul------------------------------- */}
      <div className=" w-2/3   my-[40px]  ">
        <h1 className="font-Sans text-primary text-lg font-bold space-y-3">
          Lorem Ipsum{" "}
        </h1>
        <p className=" text-h6Color font-asap my-3 max-w-[680px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur
          nisi sequi, quos laborum laboriosam dolorem totam quibusdam natus
          ratione nesciunt at provident dignissimos aliquids tenetur nisi sequi,
          quos laborum laboriosam dolorem tota tenetur nisi sequi, quos laborum
          laboriosam dolorem tota tenetur nisi sequi, quos laborum laboriosam
          dolorem tota tenetur nisi sequi, quos laborum laboriosam dolorem tota
          exercitationem esse voluptas hic.nisi sequi
        </p>
        <p className=" text-h6Color font-asap my-3 max-w-[680px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur
          nisi sequi, quos laborum laboriosam dolorem totam quibusdam natus
          ratione nesciunt at provident dignissimos aliquids tenetur nisi sequi,
          quos laborum laboriosam dolorem tota tenetur nisi sequi, quos laborum
          laboriosam dolorem tota tenetur nisi sequi, quos laborum laboriosam
          dolorem tota tenetur nisi sequi, quos laborum laboriosam dolorem tota
          exercitationem esse voluptas hic.nisi sequi
        </p>
        <p className="max-w-[680px] text-h6Color font-asap my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur
          nisi sequi, quos laborum laboriosam dolorem totam quibusdam natus
          ratione nesciunt at provident dignissimos aliquids tenetur nisi sequi,
          quos laborum laboriosam dolorem tota tenetur nisi sequi, quos laborum
          laboriosam dolorem tota tenetur nisi sequi, quos laborum laboriosam
          dolorem tota tenetur nisi sequi, quos laborum laboriosam dolorem tota
          exercitationem esse voluptas hic.nisi sequi
        </p>

        <div className=" w-[700px]">
          <div className="mt-10 ">
            <Slider {...related}>
              {activities.map((activity) => (
                <div key={activity.id} className=" mx-2 py-10">
                  <CardVistor activity={activity} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* --------------------Paragraph------------------------- */}
      <div className="flex items-center justify-between w-2/3 ">
        <div className="w-1/2 pr-5 my-3">
          <h1 className="font-Sans text-primary text-lg font-bold">
            Lorem Ipsum
          </h1>
          <p className="text-h6Color font-asap my-3 max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            tenetur nisi sequi, quos laborum laboriosam dolorem totam quibusdam
            natus ratione nesciunt at provident dignissimos aliquids tenetur
            nisi sequi, quos laborum laboriosam dolorem tota tenetur nisi sequi,
          </p>
          <p className="text-h6Color font-asap my-3 max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            tenetur nisi sequi, quos laborum laboriosam dolorem totam quibusdam
            natus ratione nesciunt at provident dignissimos aliquids tenetur
            nisi sequi, quos laborum laboriosam dolorem tota tenetur nisi sequi,
          </p>
        </div>
        <div className="w-1/2">
          <Image src={bird} alt="bird" />
        </div>
      </div>

      {/* ---------------------------Social Icons------------------ */}
      <div className="flex w-2/3 justify-between">
        <div className="flex py-10 items-center font-Sans w-1/2">
          <div className="font-bold text-primary ">
            Was The article helpful:
          </div>
          <div className="flex text-center justify-center">
            <Image src={like} alt="Emarite flag" className="mx-2" />
            <Image src={dislike} alt="US flag" className="mx-2" />
          </div>
        </div>

        <div className="flex py-10 items-center font-Sans w-[330px] ">
          <div className="font-bold text-primary mr-1">Share:</div>
          <div className="flex text-center justify-center">
            <Image src={whatsapp1} alt="" className="mx-1" />
            <Image src={insta} alt="" className="mx-1" />
            <Image src={facebook1} alt="" className="mx-1" />
          </div>
        </div>
      </div>

      {/* ------------------------------------- */}

      <div className=" w-2/3">
        <form className="bg-white rounded-md ">
          <h3 className="text-lg font-semibold mb-4">Leave a comment:</h3>
          <textarea
            className="w-full p-2 border border-h6Color rounded-md mb-4"
            placeholder="Write your comment"
            value=""
            required
          ></textarea>

          <div className="grid grid-cols-2 gap-4 mb-4 ">
            <label
              htmlFor="UserEmail"
              className="relative block overflow-hidden border-b border-h6Color bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Email"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h6Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Email
              </span>
            </label>
            <label
              htmlFor="UserName"
              className="relative block overflow-hidden border-b border-h6Color bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="UserName"
                placeholder="Name"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h6Color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                UserName
              </span>
            </label>
          </div>

          <div className="flex justify-end">
            <Button className="bg-primary text-white flex justify-center items-center gap-3   font-bold sm:mt-5 mt-1 cursor-pointer z-50 w-1/4">
              <span>Submit</span>
            </Button>
          </div>
        </form>
        <div className="mt-8">
          <div className="text-lg font-semibold mb-4">Comments:</div>
          <div className="">
            <div className="font-bold text-primary">
              Name Name . <span className="text-h6Color">2 Hours</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              numquam quos facere voluptate soluta nam atque, repudiandae,
              doloribus qui omnis voluptatum temporibus est consectetur
              aspernatur.
            </p>
          </div>
          <div className="my-5">
            <div className="font-bold text-primary">
              Name Name . <span className="text-h6Color">6 Hours</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              numquam quos facere voluptate soluta nam atque, repudiandae,
              doloribus qui omnis voluptatum temporibus est consectetur
              aspernatur.
            </p>
          </div>
        </div>
      </div>

      <div className="w-2/3">
        <div className="mt-20 ">
          <div className=" font-bold  text-primary my-3">Related Articles</div>
          <Slider {...related}>
            {relatedCard.map((activity) => (
              <div key={activity.id} className="px-3 py-10 font-abel">
                <CardRelated activity={activity} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="w-2/3 ">
        <ExpoloreMore />
      </div>

      
    </section>
  );
};

export default DubaiBirds;
