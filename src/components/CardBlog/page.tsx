"use client";
import React from "react";
import Image from "next/image";
import {
  arrowBlue,
} from "../../../public/images/page";
import Link from "next/link";

export const CardBlog = ({ post }: { post: any }) => {
  if (!post) return null;

  return (
    <>
      <div className="p-3 shadow-cardShadow rounded-lg overflow-hidden relative bg-white">
        {/* Main Image */}
        <a href="#" className="block relative">
          <img
            alt="Activity Image"
            src={post.thumbnail}
            className="h-48 w-full  object-cover rounded-[20px]" 
            width={500}
            height={400}
          />
        </a>

        {/* Title */}
        <div className="mt-3">
          <div className="font-bold font-sans  text-primary line-clamp-2">
            {post.title}
          </div>
        </div>

        {/* Date and Time */}
        <div className="flex  mt-2 max-sm:flex-col">
          <span className="text-h6Color text-sm">2 days ago, 5 min</span>
          <span className="bg-h5Color text-xs rounded-full mx-auto px-2 text-center  sm:mx-1 whitespace-nowrap ">
            {post.category}
          </span>
        </div>

        {/* Arrow Icon */}
        <div className="w-12 h-12  rounded-tl-full absolute bottom-0 right-0 shadow-lg cursor-pointer">
          <div  className="relative">
            <Link  href={post.link}>
            <Image
              src={arrowBlue}
              width={70}
              height={57}
              alt=""
              className="absolute left-0 top-1 mx-1"
            />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBlog;
