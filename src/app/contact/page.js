import Link from "next/link";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Contact from "@/components/Contact";
const page = () => {
  return (
    <>
      <div
        className="bg-[#26355D] lg:h-72 sm:h-40 h-[136px]
       flex flex-col justify-center items-center"
      >
        <div>
          <h2 className=" text-gray-100 lg:text-5xl text-3xl  lg:font-bold font-semibold">
            Contact
          </h2>
          <h3 className="text-white lg:text-base text-sm lg:font-normal  font-thin flex gap-2 items-center pt-3 justify-center">
            <Link href="/">Home</Link>
            <FaArrowRight className="text-gray-300" />
            Contact
          </h3>
        </div>
      </div>
      <div className="bg-customBackground">
        <Contact />
      </div>
    </>
  );
};

export default page;
