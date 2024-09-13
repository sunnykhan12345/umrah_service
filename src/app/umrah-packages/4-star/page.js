import React from "react";
import { MockData } from "./components/MockData";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { FourStar_Table } from "./components/FourStar_Table";
const page = () => {
  return (
    <div className="pb-40 lg:pt-20 pt-10  ">
      <div className="lg:container mx-auto px-5 ">
        <div className="mb-20 text-center">
          <h1 className="text-4xl font-extrabold pb-3 text-gray-800 tracking-wider">
            <span className="text-blue-500">|</span> 4 Star Umrah Packages
          </h1>
          <h2 className="text-lg font-medium text-gray-600 tracking-wide">
            All Inclusive Umrah Packages 2024
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {MockData.map((card) => (
            <div key={card.id}>
              <div className="w-full relative group overflow-hidden cursor-pointer ">
                <Image
                  src={card.img}
                  alt={card.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 "
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                <h6 className="absolute bottom-0 left-0 right-0 bg-black  bg-opacity-60 p-3 text-lg font-medium text-white text-center transition-colors duration-300 hover:text-blue-500">
                  {card.title}
                </h6>
              </div>
              <div className="">
                <div className="flex gap-10">
                  <div className="border-l  flex items-center justify-center flex-col">
                    <Image src={card.icon} alt="" />
                    <h5 className="text-[15px] text-center  font-medium capitalize">
                      {card.makkahday}
                    </h5>
                    <p className="text-[13px] text-center font-normal capitalize py-1">
                      {card.name}
                    </p>
                    <span className="text-xs text-center">{card.para}</span>
                    <div className="flex pt-2 pb-4 gap-1">
                      <FaStar className="text-yellow-500 w-3 h-3" />
                      <FaStar className="text-yellow-500 w-3 h-3" />
                      <FaStar className="text-yellow-500 w-3 h-3" />
                      <FaStar className="text-yellow-500 w-3 h-3" />
                    </div>
                  </div>

                  <div className="border-r border-l p-3 text-center flex items-center justify-center flex-col">
                    <Image src={card.icon2} alt="" />
                    <h5 className="text-[15px] font-medium capitalize">
                      {card.madinaday}
                    </h5>
                    <p className="text-[13px] font-normal capitalize py-1">
                      {card.name}
                    </p>
                    <span className="text-xs">{card.para}</span>
                    <div className="flex pt-2 pb-4 gap-1">
                      <FaStar className="text-yellow-500 w-3 h-3" />
                      <FaStar className="text-yellow-500 w-3 h-3" />
                      <FaStar className="text-yellow-500 w-3 h-3" />
                      <FaStar className="text-yellow-500 w-3 h-3" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 justify-center  items-center bg-gray-200 py-3">
                  <p className="text-center text-black text-lg font-bold">
                    {card.price}
                    <span className="text-black font-normal">\-</span>
                  </p>
                  <p className="text-lg font-bold uppercase">
                    pp <span className="text-black font-normal">|</span>
                  </p>
                  <sub className="text-xs text-gray-600">{card.subday}</sub>
                </div>

                <div></div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 star table */}
        <div className="mt-10">
          <FourStar_Table />
        </div>
      </div>
    </div>
  );
};

export default page;
