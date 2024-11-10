// import Image from "next/image";
// import React from "react";
// import { Button } from "@/components/page";
// import { hero, leftArrow } from "../../../../../public/images/page";

// export const Hero = () => {
//   return (
//     <section className="mt-10 relative max-w-7xl mx-auto">
//       {/* Hero Image */}
//       <Image
//         src={hero}
//         alt="hero"
//         width={1200}
//         height={600}
//         className="rounded-xl w-full h-auto object-cover max-sm:h-[300px]"
//         priority={true} // Optimize for faster loading
//       />

//       <div className="absolute inset-0 flex flex-col items-start justify-center p-10  lg:p-28 space-y-2 lg:space-y-6 xl:space-y-8 max-sm:items-center">
//         <strong className="text-highlight font-Kalnia text-4xl  lg:text-5xl xl:text-6xl">
//           Get 20% OFF
//         </strong>

//         <h1 className="text-white font-Kalnia text-3xl  lg:text-4xl xl:text-5xl">
//           Prime Week
//         </h1>
        
//         <h1 className="text-white font-Kalnia text-3xl  lg:text-4xl xl:text-5xl">
//           19/9 - 26/9
//         </h1>

//         {/* Book Now Button */}
//         <Button className="bg-white text-primary flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded font-bold cursor-pointer">
//           <span>Book Now</span>
//           {/* Left Arrow Image */}
//           <Image
//             src={leftArrow}
//             alt="leftArrow"
//             width={20}
//             height={20}
//             className="w-4 h-4 md:w-5 md:h-5"
//           />
//         </Button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick"; 
import { Button } from "@/components/page";
import { leftArrow } from "../../../../../public/images/page";
import { API_SERVICES_URLS } from "@/data/page";
import { useSWRHook } from "@/hooks/page";



export const Hero = () => {
  // Use useSWR to fetch data from the API
  const { data, error } = useSWRHook(API_SERVICES_URLS.HOME_SLIDER);

  // Handle loading and error states
  if (error) return <div>Error loading slider data</div>;
  if (!data) return <div>Loading...</div>;

  const sliderItems = data?.data?.slider?.items || []; 

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <div className="slick-next" />,
    prevArrow: <div className="slick-prev" />,
  };

  return (
    <section className="mt-10 relative max-w-7xl mx-auto">
      <Slider {...settings}>
        {sliderItems.map((item: any, index: number) => (
          <div key={index}>
            <div className="relative">
              {/* Hero Image */}
              <Image
                src={process.env.NEXT_PUBLIC_API_ENDPOINT+item.imagePath}
                alt={`slider-image-${index}`}
                width={1200}
                height={600}
                className="rounded-xl w-full h-auto object-cover max-sm:h-[300px]"
                priority={true}
              />

              <div className="absolute inset-0 flex flex-col items-start justify-center p-10 lg:p-28 space-y-2 lg:space-y-6 xl:space-y-8 max-sm:items-center">
                <strong className="text-highlight font-Kalnia text-4xl lg:text-5xl xl:text-6xl">
                  {item.title}
                </strong>

                <h1 className="text-white font-Kalnia text-3xl lg:text-4xl xl:text-5xl">
                  {item.description}
                </h1>

                {/* Book Now Button */}
                <Button className="bg-white text-primary flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded font-bold cursor-pointer">
                  <span>{item.button}</span>
                  {/* Left Arrow Image */}
                  <Image
                    src={leftArrow}
                    alt="leftArrow"
                    width={20}
                    height={20}
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
