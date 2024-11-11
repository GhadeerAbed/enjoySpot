"use client";
import { Button } from "@/components/page";
import { API_SERVICES_URLS } from "@/data/page";
import { useSWRHook } from "@/hooks/page";
import Image from "next/image";
import Link from "next/link";
import { blueArrowDown, EmFlag, profile } from "../../../../public/images/page";
import { useState } from "react";
import { getAuthData } from "@/utils/page";

export const Header = () => {
  const languages = [
    { id: 1, name: "English" },
    { id: 2, name: "Arabic" },
    // Add more languages as needed
  ];

  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const authData = getAuthData();
  const accessToken = authData?.token;

  const { data } = useSWRHook(API_SERVICES_URLS.GET_ALL_LISTING_TYPES);
  const { data: currencyData } = useSWRHook(
    API_SERVICES_URLS.GET_All_currencies)

  const currencies = currencyData?.isSuccess ? currencyData.data : [];
  const listingTypes = data?.isSuccess ? data.data : [];

  const handleCurrencyClick = () => {
    setIsCurrencyOpen(!isCurrencyOpen);
  };

  const handleLanguageClick = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <header className="bg-white/30 backdrop-blur-lg shadow-borderShadow">
      <div className="lg:mx-20 mx-5  pt-4 pb-2 flex justify-between items-center">
        <Image
          src="logo.svg"
          alt="Logo"
          width={180}
          height={160}
          className="object-cover"
        />
        <div className="flex space-x-5">
          <div className="flex space-x-5">
            <div className="flex items-center relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={handleLanguageClick}
              >
                <h1 className="text-primary font-semibold">En</h1>
                <Image src={blueArrowDown} alt="down-arrow" />
              </div>

              {isLanguageOpen && (
                <div className="absolute top-full mt-2 bg-white shadow-lg p-4 rounded-lg py-2 w-40 z-10">
                  <div className="text-primary font-semibold">Languages:</div>
                  {languages.map((language) => (
                    <div
                      key={language.id}
                      className=" p-1  hover:bg-gray-100 hover:rounded-full cursor-pointer flex items-center justify-center "
                    >
                      <span>{language.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>{" "}
            <div className="border-l-2 border-h4Color"></div>
            {/* Currency dropdown - updated */}
            <div className="flex items-center relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={handleCurrencyClick}
              >
                <div className="text-h4Color rounded-full w-8 h-8 border border-h4Color flex items-center justify-center">
                  {/* {currencies[0]?.image || "$"} */}
                </div>
                <Image src={blueArrowDown} alt="down-arrow" />
              </div>

              {isCurrencyOpen && (
                <div className="absolute top-full mt-2 bg-white shadow-lg p-4 rounded-lg py-2 w-40 z-10">
                  <div className="text-primary font-semibold">Currencies:</div>
                  {currencies.map((currency: any) => (
                    <div
                      key={currency.id}
                      className="px-4 py-2 space-x-2  hover:bg-gray-100 hover:rounded-full cursor-pointer flex items-center"
                    >
                      <div className="text-h4Color rounded-full w-8 h-8 border border-h4Color flex items-center justify-center">
                        {/* {currency.image} */}
                        <Image src={EmFlag} alt="currency" />
                      </div>
                      <span className="mr-2">{currency.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <Button buttonSize={"small"} className=" hidden ss:flex px-10">
            Login
          </Button>
          <Image
            src={profile}
            alt="profile"
            width={27}
            height={27}
            className="flex ss:hidden"
          />
        </div>
      </div>

      <nav className="flex justify-center items-center ss:gap-10 gap-4 text-secondary pb-6 mt-5">
        {listingTypes.map((item: any) => {
          const modifiedIcon = item.webIcon.replace(
            /fill=".*?"/g,
            'fill="currentColor"'
          );
          return (
            <Link
              key={item.id}
              href={item.name}
              className="flex items-center flex-col gap-2 group "
            >
              <div
                className="icon group-hover:text-[#00ADEE]"
                dangerouslySetInnerHTML={{ __html: modifiedIcon }}
              />
              <p className="group-hover:text-[#00ADEE] max-ss:text-sm ">
                {item.name}
              </p>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
