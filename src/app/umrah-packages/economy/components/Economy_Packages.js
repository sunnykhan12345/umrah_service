import React from "react";
import { Economy } from "./Ecompmy_Data";
import Image from "next/image";
import tag from "../../../../../public/images/tag.png";
import { RiCheckboxCircleFill } from "react-icons/ri";
const Economy_Packages = () => {
  return (
    <>
      <h2 class="lg:text-3xl text-lg font-semibold text-blue-600 lg:mt-6 mb-4">
        7 Days Economy Umrah Packages
      </h2>

      {/* <h2 className="text-2xl font-medium pb-5">
        7 Days Economy Umrah Packages
      </h2> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3">
        {Economy.map((data) => (
          <>
            <div
              key={data.id}
              className="bg-white shadow-lg rounded-lg px-2 py-8 mt-3 relative"
            >
              <div className="flex items-center gap-3 lg:pb-10 pb-5">
                <Image
                  src={data.makkah}
                  alt="makkhak"
                  height={50}
                  width={50}
                  className="object-cover border border-yellow-400 rounded-full p-1"
                />
                <div className="">
                  <h5 className="text-lg">{data.makkah_name}</h5>
                  <div className="">
                    <span className="text-sm">{data.makkah_distance}</span>
                    <span className="text-sm">{data.makkh_dire}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 pb-5">
                <Image
                  src={data.madina}
                  alt="makkhak"
                  height={50}
                  width={50}
                  className="object-cover border border-yellow-400 rounded-full p-1"
                />
                <div className="">
                  <h5 className="text-lg">{data.madina_name}</h5>
                  <div className="">
                    <span className="text-sm">{data.madina_distance}</span>
                    <span className="text-sm">{data.madina_dire}</span>
                  </div>
                </div>
              </div>
              <p className="absolute capitalize bg-blue-100 border  px-3 py-1 rounded-3xl text-sm -top-3 left-5">
                Economy
              </p>
              <div className="flex flex-col gap-4 px-4 py-2">
                <div className="flex items-center gap-3">
                  <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                  <p className="text-lg">Flights</p>
                </div>
                <div className="flex items-center gap-3">
                  <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                  <p className="text-lg">Hotel</p>
                </div>
                <div className="flex items-center gap-3">
                  <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                  <p className="text-lg">Visa</p>
                </div>
                <div className="flex items-center gap-3">
                  <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                  <p className="text-lg">Transport</p>
                </div>
              </div>

              <p className="pt-7 text-xl font-bold text-blue-600">
                RS.<span className="text-2xl">{data.price}</span>
              </p>
              {/* <div className="flex justify-between lg:flex-nowrap flex-wrap ">
                <div className="grid sm:grid-cols-2 grid-cols-2 gap-10">
                  <div className="flex ">
                    <Image
                      width={30}
                      height={30}
                      src={tag}
                      alt="tag"
                      className="object-cover"
                    />
                    <h6>flight</h6>
                  </div>
                  <div className="flex">
                    <Image
                      width={30}
                      height={30}
                      src={tag}
                      alt="tag"
                      className="object-cover"
                    />
                    <h6>flight</h6>
                  </div>
                  <div className="flex">
                    <Image
                      width={30}
                      height={30}
                      src={tag}
                      alt="tag"
                      className="object-cover"
                    />
                    <h6>flight</h6>
                  </div>
                  <div className="flex">
                    <Image
                      width={30}
                      height={20}
                      src={tag}
                      alt="tag"
                      className="object-cover"
                    />
                    <h6>flight</h6>
                  </div>
                </div>
              </div> */}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Economy_Packages;
