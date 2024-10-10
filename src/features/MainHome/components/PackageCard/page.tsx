// components/PackageCard.js
import Image from "next/image";
import React from "react";

export const PackageCard = ({ imageSrc, title, price }:{imageSrc: string, title: string, price: number}) => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
      <Image
        src={imageSrc}
        alt={title}
        layout="responsive" 
        width={100} 
        height={100} 
        className="w-full !h-56 object-cover transform hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
      <div className="absolute bottom-4 left-4 text-white z-10">
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        <p className=" text-highlight mt-2">{price} AED/H</p>
      </div>
      <div className="absolute inset-0 hover:bg-black hover:bg-opacity-10 transition-all duration-500"></div>
    </div>
  );
};

export default PackageCard;

