import Link from "next/link";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
function Tours_Location() {
  return (
    <div className="flex items-center flex-wrap gap-10">
      <Link href="#" className="flex items-center gap-2 text-blue-500 ">
        <FaPhoneVolume className="md:w-8 md:h-8 w-5 h-5 " />{" "}
        <span className="md:text-lg">+92 3085342445</span>
      </Link>
      <Link href="#" className="flex items-center gap-2  ">
        <FaWhatsapp className="md:w-8 md:h-8 w-5 h-5  text-green-500" />{" "}
        <span className="md:text-lg">+92 3085342445</span>
      </Link>
      <Link href="#" className="flex items-center gap-2 w-80 hover:underline">
        <IoLocation className="md:w-8 md:h-8 w-5 h-5 flex-shrink-0 text-red-500" />{" "}
        <p className="md:text-lg">
          Binham Travels Office No 34 Second Floor, Office Tower Gulberg Green
          Islamabad, Luxus Mall, 44000, Pakistan
        </p>
      </Link>
    </div>
  );
}

export default Tours_Location;
