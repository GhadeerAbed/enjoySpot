"use cient";
import React from "react";
import { pen } from "../../../../../public/images/page";
import Image from "next/image";

export const Profile = () => {
  return (
    <section className="mx-[220px] my-10 ">
      <form className="bg-h5Color rounded-lg p-3 ">
        <h3 className="text-lg font-semibold m-6"> Profile</h3>
        <div className="grid grid-cols-2 gap-4 mb-4  mx-5 ">
          <label
            htmlFor="firstName"
            className="relative block overflow-hidden border-b border-h6Color bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h6Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              First Name
            </span>
            <span className="absolute  right-0 ">
              <Image src={pen} alt="pen" />
            </span>
          </label>
          <label
            htmlFor="LastName"
            className="relative block overflow-hidden border-b border-h6Color bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="LastName"
              placeholder="Last Name"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h6Color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Last Name
            </span>
            <span className="absolute  right-0 ">
              <Image src={pen} alt="pen" />
            </span>
          </label>
        </div>
        <div className="grid grid-cols-2 gap-4 my-10  mx-5 ">
          <label
            htmlFor="nationality"
            className="relative block overflow-hidden border-b border-h6Color bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="nationality"
              placeholder="Nationality"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h6Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Nationality
            </span>
            <span className="absolute  right-0 ">
              <Image src={pen} alt="pen" />
            </span>
          </label>

          <label
            htmlFor="Date"
            className="relative block overflow-hidden border-b border-h6Color bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="Date"
              placeholder="Date of Birth "
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h6Color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Date of Birth DD/MM/YY
            </span>

            <span className="absolute  right-0 ">
              <Image src={pen} alt="pen" />
            </span>
          </label>
        </div>
      </form>

      {/* -----------------------------AccountDetails---------------- */}


      <form className="bg-h5Color rounded-lg p-3  my-10">
        <h3 className="text-lg font-semibold m-6"> Account Details</h3>
        <div className="grid grid-cols-2 gap-4 mb-4  mx-5 ">
          <label
            htmlFor="Email"
            className="relative block overflow-hidden border-b border-h6Color bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="email"
              id="Email"
              placeholder="Email"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h6Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Email
            </span>
            <span className="absolute  right-0 ">
              <Image src={pen} alt="pen" />
            </span>
          </label>
          <label
            htmlFor="Password"
            className="relative block overflow-hidden border-b border-h6Color bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="password"
              id="Password"
              placeholder="Password"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h6Color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              ************
            </span>
            <span className="absolute  right-0 ">
              <Image src={pen} alt="pen" />
            </span>
          </label>
        </div>
        <div className="grid grid-cols-2 gap-4 my-10  mx-5 ">
          <label
            htmlFor="nationality"
            className="relative block overflow-hidden border-b border-h6Color bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="nationality"
              placeholder="Nationality"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h6Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Nationality
            </span>
            <span className="absolute  right-0 ">
              <Image src={pen} alt="pen" />
            </span>
          </label>

         
        </div>
      </form>   

      <div className="underline text-red-600 mx-7 font-bold">Delete Account</div>
    </section>
  );
};

export default Profile;
