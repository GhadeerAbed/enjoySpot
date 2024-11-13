"use client";
import FilterSection from "@/components/Fillter/page";
import { Button } from "@/components/page";
import { Input } from "@/components/page";
import React, { useState } from "react";

export const OTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  function handleChange(e: any, index: number) {
    if (isNaN(e.target.value)) return false;
    setOtp([
      ...otp.map((data, idx) => (idx === index ? e.target.value : data)),
    ]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  }


  return (
    <div>
      {/* <div className=" my-10 w-full  flex items-center justify-center">
        <div className="h-[341px] w-[500px] bg-white rounded-lg shadow-lg">
          <div className="p-10">
            <h1 className="text-4xl font-bold text-primary font-Kalnia">
              Enter OTP
            </h1>
            <p className="text-xs text-primary my-3">
              You will recive an email with an OTP code within 00:30 sec ,{" "}
              <span className="font-bold">Send again</span>
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="w-full flex relative justify-around my-5">
                {otp.map((data, index) => (
                  <input
                    type="text"
                    key={index}
                    maxLength={1}
                    value={data}
                    onChange={(e) => handleChange(e, index)}
                    className="w-14 h-15 rounded-md border border-primary text-center text-2xl focus:outline-none  bg-h4Color"
                  />
                ))}

              </div>
                <Button className="w-full max-w-md mt-10">Enter</Button>
            </div>
          </div>
        </div>
      </div> */}
      <FilterSection />
    </div>
  );
};

export default OTP;
