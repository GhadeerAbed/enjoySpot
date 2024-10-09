  'use client';


  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import Slider from 'react-slick';
  import { activities } from "@/data/layoutData/activite";
  import Card from "@/components/Card/page";

  // Custom Left Arrow
// Custom Left Arrow
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-0 transform -translate-y-1/2 left-0 ml-4 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-left"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    </div>
  );
};

// Custom Right Arrow
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-0 transform -translate-y-1/2 right-0 mr-4 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-right"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </div>
  );
};


  const Activities = () => {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow />, // Adding custom right arrow
      prevArrow: <PrevArrow />, // Adding custom left arrow
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,    
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <section className=" ">
        <h2 className="text-center font-serif text-midFont font-normal uppercase m-10">
          Explore
        </h2>
        <h2 className="text-center font-Sans text-BigFont font-bold text-blue-600 uppercase">
          MOST POPULAR ACTIVITIES
        </h2>

        <div className="relative mt-8">
          <Slider {...settings}>
            {activities.map((activity) => (
              <div key={activity.id}>
                <Card activity={activity} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center mt-8">
          <a href="#" className="text-blue-600 font-semibold">
            View All
          </a>
        </div>
      </section>
    );
  };

  export default Activities;
