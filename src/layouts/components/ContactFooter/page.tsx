import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, snapchat, tictoc, whatsapp } from "../../../../public/images/page";

export const ContactFooter = () => {
  return (
    <footer className="bg-primary py-10 mt-5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between text-white space-y-6 lg:space-y-0 ">
        
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src="logo1.svg"
            alt="Enjoy Spot Logo"
            width={200}
            height={180}
            className="object-cover"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 text-lg text-center lg:text-left">
          <Link href="/contact">Contact Us</Link>
          <Link href="/manage-booking">Manage Booking</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/help-center">Help Center</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 justify-center lg:justify-start">
          <Link href="" aria-label="WhatsApp">
            <Image
              src={whatsapp}
              alt="WhatsApp"
              width={24}
              height={24}
              className="w-8 h-8"
            />
          </Link>
          <Link href="" aria-label="Instagram">
            <Image
              src={Instagram}
              alt="Instagram"
              width={24}
              height={24}
              className="w-8 h-8"
            />
          </Link>
          <Link href="https://facebook.com/your-facebook" aria-label="Facebook">
            <Image
              src={Facebook}
              alt="Facebook"
              width={24}
              height={24}
              className="w-8 h-8"
            />
          </Link>
          <Link href="" aria-label="TikTok">
            <Image
              src={tictoc}
              alt="TikTok"
              width={24}
              height={24}
              className="w-8 h-8"
            />
          </Link>
          <Link href="" aria-label="Snapchat">
            <Image
              src={snapchat}
              alt="Snapchat"
              width={24}
              height={24}
              className="w-8 h-8"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
