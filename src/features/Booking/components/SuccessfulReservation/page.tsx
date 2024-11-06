import Link from "next/link";
import React from "react";
import { loadDot } from "../../../../../public/images/page";
import Image from "next/image";

const SuccessfulReservation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5">
      <Image src={loadDot} alt="Load" />

      <h2 className="text-2xl font-bold text-primary">
        Successful Reservation !
      </h2>
      <h4 className="text-primary">
        Enjoy your holiday, reservation <span className="font-bold">ID #46692</span>
      </h4>
      <h5 className="text-primary">
        Manage your bookings <Link href="/" className="underline">here</Link>
      </h5>

      <button className="bg-primary text-white px-4 py-2 rounded-lg w-[340px] border flex items-center justify-center gap-2">
        <Link href="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default SuccessfulReservation;
