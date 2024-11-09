"use client";
import {
  Button,
} from "@/components/page";
import { API_SERVICES_URLS } from "@/data/page";
import { useSWRHook } from "@/hooks/page";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const { data } = useSWRHook(API_SERVICES_URLS.GET_ALL_LISTING_TYPES);
  const listingTypes = data?.isSuccess ? data.data : [];
  return (
    <header className="bg-white/30 backdrop-blur-lg shadow-borderShadow">
      <div className=" mx-20  pt-4 pb-2 flex justify-between items-center">
        <Image
          src="logo.svg"
          alt="Logo"
          width={180}
          height={160}
          className="object-cover"
        />
        <div className="flex">
          <Button buttonSize={"small"} className="  px-10">
            Login
          </Button>
        </div>
      </div>

      <nav className="flex justify-center items-center gap-10 text-secondary pb-6">
        {listingTypes.map((item: any) => {
          const modifiedIcon = item.webIcon.replace(
            /fill=".*?"/g,
            'fill="currentColor"'
          );

          return (
            <Link
              key={item.id}
              href={item.name}
              className="flex items-center flex-col gap-2 group"
            >
              <div
                className="icon group-hover:text-[#00ADEE]"
                dangerouslySetInnerHTML={{ __html: modifiedIcon }}
              />
              <p className="group-hover:text-[#00ADEE]">{item.name}</p>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
