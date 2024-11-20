import React from "react";
import Image from "next/image";
import { Input, SelectFloat } from "@/components/page";
import PhoneInputWithSearch from "@/components/PhoneInput/page";


export const Profile = () => {
  return (
    // ------------------------------------comment------------------------
    <section className="flex justify-center items-center flex-col mt-10 font-Sans max-md:mx-5">
      <form className="bg-h5Color rounded-lg p-3 w-full max-w-5xl ">
        <h3 className="text-lg font-semibold text-secondary pl-5 py-5">
          Profile
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-4 mx-5">
          <Input
            label="First Name"
            id="firstName"
            type="text"
            endIcon={
              <Image src="/images/pen.svg" alt="icon" width={24} height={24} />
            }
          />
          <Input
            label="Last Name"
            id="lastName"
            type="text"
            endIcon={
              <Image src="/images/pen.svg" alt="icon" width={24} height={24} />
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-5">
          <SelectFloat
            label="Nationality"
            id="nationality"
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
          />
            <Input
            id="dateOfBirth"
            type="date"
            inputClassName="text-primary"
          />
        </div>
      </form>

      {/* Account Details Form */}
      <form className="bg-h5Color rounded-lg p-3 w-full  max-w-5xl my-10">
        <h3 className="text-lg font-semibold  text-secondary pl-5 py-5">
          Account Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-4 mx-5">
          <Input
            label="Email"
            id="email"
            type="email"
            endIcon={
              <Image src="/images/pen.svg" alt="icon" width={24} height={24} />
            }
          />
          <Input
            label="Password"
            id="password"
            type="password"
            endIcon={
              <Image src="/images/pen.svg" alt="icon" width={24} height={24} />
            }
          />
          <PhoneInputWithSearch/>
        </div>
        
      </form>

      <div className="underline text-red-600 mx-7 font-bold text-center">
        Delete Account
      </div>
    </section>
  );
};

export default Profile;
