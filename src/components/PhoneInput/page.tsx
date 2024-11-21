"use client";

import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneInputWithSearch({ setValue }:{setValue:any}) {
  return (
    <div className="flex items-center justify-start border-b border-h6Color focus-within:border-black">
      <PhoneInput
        country={"ae"}
        preferredCountries={["ae", "ps", "uk"]}
        enableSearch={true}
        inputStyle={{
          width: "100%",
          fontSize: "16px",
          border: "none",
          outline: "none",
          paddingLeft: "48px",
          backgroundColor: "transparent",
        }}
        buttonStyle={{
          border: "none",
          backgroundColor: "transparent",
        }}
        dropdownStyle={{
          fontSize: "14px",
        }}
        searchPlaceholder="Search for a country..."
        inputProps={{
          className: "peer focus:outline-none focus:ring-0 focus:border-transparent",
        }}
        onChange={(value) => {
          setValue("phoneNumber" , value, { shouldValidate: true });
        }}
      />
    </div>
  );
}
