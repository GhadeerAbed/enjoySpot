"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneInputWithSearch() {
  const handlePhoneChange = (value: string) => {
    console.log("Phone Number:", value);
  };

  return (
    <div className="flex items-center justify-start border-b border-h6Color ">
      <PhoneInput
        country={"ae"}
        preferredCountries={["ae", "ps", "uk"]}
        enableSearch={true}
        onChange={handlePhoneChange}
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
      />
    </div>
  );
}
