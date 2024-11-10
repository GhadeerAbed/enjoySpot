"use client";
import { Button } from "@/components/page";
import { API_SERVICES_URLS } from "@/data/page";
import { useSWRHook } from "@/hooks/page";
import Image from "next/image";
import Link from "next/link";
import { profile } from "../../../../public/images/page";

export const Header = () => {
  const { data } = useSWRHook(API_SERVICES_URLS.GET_ALL_LISTING_TYPES);
  // console.log(data)
  const listingTypes = data?.isSuccess ? data.data : [];
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
        <div className="flex">
          <Button buttonSize={"small"} className=" hidden ss:flex px-10">
            Login
          </Button>
          <Image src={profile} alt="profile" width={27} height={27} className="flex ss:hidden"/>
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
              <p className="group-hover:text-[#00ADEE] max-ss:text-sm ">{item.name}</p>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
