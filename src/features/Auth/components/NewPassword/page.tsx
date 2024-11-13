import Input from "@/components/Input/page";
import { Button } from "@/components/page";
import React, { useState } from "react";

export const NewPassword = () => {
  return (
    <div className=" my-10 w-full flex items-center justify-center">
      <div className="  h-[341px] w-[500px] bg-white rounded-lg shadow-lg">
        <div className="p-10">
          <h1 className="text-4xl  font-bold text-primary font-Kalnia">
            New Password
          </h1>
          <p className="text-sm  text-gray-500 my-3">Enter a New Password </p>
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md relative">
              <Input
                placeholder="Enter Password "
                label="Password"
                type="password"
                className="w-full max-w-md "
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              {/* <span className=" absolute top-0 left-0 text-sm text-gray-500">
            Enter E-mail
          </span> */}
            </div>

            <Button className="w-full max-w-md mt-10"> Send OTP</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
