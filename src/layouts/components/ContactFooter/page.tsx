import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, whatsapp } from "../../../../public/images/page";

export const ContactFooter = () => {
  return (
    <footer className="bg-primary py-10 px-6">
      <div className="mx-20 flex justify-between items-center text-white">
        <div>
          <Image
            src="logo1.svg"
            alt="Enjoy Spot Logo"
            width={200}
            height={180}
            className="object-cover"
          />
        </div>

        <div className="flex space-x-6 text-lg">
          <Link href="/contact">Contact Us</Link>
          <Link href="/manage-booking">Manage Booking</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/help-center">Help Center</Link>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-4">
          <Link href="">
            <Image
              src={whatsapp}
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </Link>
          <Link href="">
            <Image
              src={Instagram}
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link href="https://facebook.com/your-facebook">
            <Image
              src={Facebook}
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
