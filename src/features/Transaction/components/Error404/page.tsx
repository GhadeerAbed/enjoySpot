import React from "react";
import { pana } from "../../../../../public/images/page";
import Button from "@/components/Button/page";

export const Error404 = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center mx-auto mt-20"
        style={{
          backgroundImage: `url(${pana.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "500px",
          height: "320px",
        }}
      >
        <h1 className="font-Sans text-primary text-6xl text-center font-bold   ">
          404
        </h1>
        <h1 className="font-Sans text-primary text-xl text-center font-bold ">
          Oops!
        </h1>
        <h1 className="font-Sans text-primary text-center  ">
          Something went wrong
        </h1>
      </div>
      <Button className="flex justify-center items-center mx-auto mt-10 w-[340px]">
        Back to Home
      </Button>
    </>
  );
};

export default Error404;
