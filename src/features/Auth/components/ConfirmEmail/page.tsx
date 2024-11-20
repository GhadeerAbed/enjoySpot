"use client";
import Input from "@/components/Input/page";
import { Button } from "@/components/page";
import React, { useState } from "react";

export const ConfirmEmail = () => {
  // Add state for password
  const [password, setPassword] = useState("");

  return (
    <div className="my-10 w-full flex items-center justify-center">
      <div className="h-[421px] w-[500px] bg-white rounded-lg shadow-lg">
        <div className="p-10">
          <h1 className="text-4xl font-bold text-primary font-Kalnia">
            New Password
          </h1> 
          <p className="text-sm text-primary my-5">Enter a New Password</p>
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md relative space-y-4 my-4">
              <Input
                placeholder="Enter Password"
                label="Password"
                type="password"
                className="w-full max-w-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder="Enter Password"
                label="Re-enter Password"
                type="password"
                className="w-full max-w-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button className="w-full max-w-md mt-10">Done</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
