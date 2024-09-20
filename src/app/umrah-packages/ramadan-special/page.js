import React from "react";
import Ramadan_specPackage from "./components/Ramadan_specPackage";
import Image from "next/image";
import ramdan from "../../../../public/images/ramadan.jpg";
const page = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={ramdan}
          alt="Ramadan Umrah Packages"
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />
        <h2
          className="md:-mt-10 -mt-5 text-center text-white font-semibold lg:text-3xl md:text-2xl text-base"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          Ramadan Umrah Packages 2024
        </h2>
      </div>
      <div className="lg:pb-20 pb-5 lg:pt-20 pt-10  ">
        <div className="lg:container mx-auto px-5 ">
          <Ramadan_specPackage />
        </div>
      </div>
    </>
  );
};

export default page;
