"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { leftSlide, rightSlide } from "../../../../../public/images/page";
import { CardBlog } from "@/components/page";
import BlogSkeleton from "@/components/SkeltonBlog/page";
import Link from "next/link";

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-0 transform -translate-y-1/2 left-0 z-10 cursor-pointer"
      onClick={onClick}
    >
      <Image src={leftSlide} alt="leftArrow" width={24} height={24} />
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-0 transform -translate-y-1/2 right-0 z-10 cursor-pointer"
      onClick={onClick}
    >
      <Image src={rightSlide} alt="rightArrow" width={24} height={24} />
    </div>
  );
};

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://myspot.enjoyspot.com/wp-json/custom-api/v1/popular-posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-20 max-w-7xl mx-auto max-md:mx-5">
      <h1 className="text-center text-xl uppercase py-2 font-Kalnia">
        DISCOVER MORE
      </h1>
      <h2 className="text-center font-Sans text-4xl font-bold text-h1Color">
        OUR BLOG
      </h2>

        {loading ? ( // Check for loading state
          <BlogSkeleton /> // Show skeleton while loading
        ) : (<>
            <div className="mt-20">
          <Slider {...settings}>
            {posts.map((post, index) => (
              <div key={index} className="lg:px-3 px-2 py-10">
                <CardBlog post={post} />
              </div>
            ))}
          </Slider>
      </div>

      <div className="text-center -mt-3">
        <Link href="#" className="text-primary font-semibold underline">
          View All
        </Link>
      </div>
      </>
      )}

    </section>
  );
};

export default Blog;