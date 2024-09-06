import Image from "next/image";
import React from "react";
import banner from "../../../../public/images/umrrah.jpg";
const Banner = () => {
  return (
    <div className="">
      <Image
        src={banner}
        alt=""
        className="relative object-cover md:h-[500px] h-[calc(100vh-100px)] bg-fixed"
      />
      <div className="lg:container mx-auto px-5">
        <div className="absolute top-1/2  -translate-y-1/2  ">
          <h1 className="font-bold lg:text-[79px] sm:text-[50px] text-white text-[30px]  lg:leading-[91px] sm:leading-[60px]">
            Umrah Packages <br /> 2024
          </h1>
          <button className="bg-[#2379BD] lg:mt-10 mt-7 text-white  sm:py-4 sm:px-[35px] py-3 px-6 rounded-[30px]  hover:opacity-80 ease-in-out duration-500">
            Let&apos;s Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
