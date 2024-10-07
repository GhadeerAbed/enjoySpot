"use client";
import {
  Button,
  Desert,
  Helicopter,
  WaterSports,
  Yachts,
} from "@/components/page";
import Image from "next/image";
import Link from "next/link";


export const Header = () => {
  return (
    <header className="bg-white/30 backdrop-blur-lg shadow-borderShadow">
      <div className=" mx-20  pt-4 pb-2 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="logo.svg"
            alt="Logo"
            width={180}
            height={160}
            className="object-cover"
          />
        </div>
        <div className="flex items-center space-x-4">
          {/* Login Button */}
          <Button buttonSize={"small"} className="  px-10">
            Login
          </Button>
        </div>
      </div>

      <nav className="flex justify-center items-center gap-10 text-secondary pb-6">
        <Link
          href="#"
          className="hover:text-h1Color flex flex-col justify-center items-center"
        >
          <Yachts />
          Yachts
        </Link>
        <Link
          href="#"
          className="hover:text-h1Color flex flex-col justify-center items-center"
        >
          <WaterSports />
          <span className="pt-1">WaterSports</span>
        </Link>
        <Link
          href="#"
          className="hover:text-h1Color flex flex-col justify-center items-center"
        >
          <Helicopter />
          <span className="pt-[6px]">Helicopter</span>
        </Link>
        <Link
          href="#"
          className="hover:text-h1Color flex flex-col justify-center items-center"
        >
          <Desert />
          Desert
        </Link>
      </nav>
    </header>
  );
};

export default Header;
