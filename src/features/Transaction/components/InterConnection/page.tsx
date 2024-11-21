import { Button } from "@/components/page";
import React from "react";
import { netCon } from "../../../../../public/images/page";
import Image from "next/image";

const InterConnection = () => {
  return (
    <>
      <div className="flex flex-col justify-center space-y-5 items-center mx-auto mt-20">
        <h1 className="font-Sans text-primary text-3xl text-center font-bold   ">
          Oops!{" "}
        </h1>
        <h1 className="font-Sans text-primary text text-center ">
          check your Internet Connection{" "}
        </h1>
        
        <Image src={netCon} alt="netCon" />
      </div>
    </>
  );
};

export default InterConnection;
