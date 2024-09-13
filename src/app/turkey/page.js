import React from "react";
import Image from "next/image";
import TourForm from "@/Common_Comp/TourForm";
import { Turkey_Data } from "./components/Turkey_Data";
import CountryFlag from "@/Common_Comp/CountryFlag";
import { RiCheckboxCircleFill } from "react-icons/ri";
import malaysia from "../../../public/images/singapore.jpg";
import Turkey_Desciption from "@/Common_Comp/tour_desciptions/Turkey_Desciption";
const page = () => {
  return (
    <>
      <div className="relative">
        <Image src={malaysia} alt="" className="object-cover w-full h-[40vh]" />
        <h2 className="absolute top-1/2 left-1/2 capitalize transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-6xl text-3xl font-bold">
          turkey visit visa
        </h2>
      </div>
      <div className="bg-customBackground py-10 ">
        <div className="lg:container mx-auto px-5">
          <div className="">
            <div className="flex items-start flex-wrap gap-5">
              {/* First Card */}
              <div className="w-full md:w-[100%] lg:w-[70%] bg-white shadow-lg rounded-lg  lg:p-4 p-2 ">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mx-auto">
                  {Turkey_Data.map((data) => (
                    <div className="rounded-lg shadow-lg" key={data.id}>
                      <h4 className="py-2 text-[20px] font-semibold bg-blue-500 relative text-white rounded-tl-md rounded-tr-md text-center">
                        {data.day}
                      </h4>
                      <span className="bg-[#FEF3E2] font-bold   absolute -rotate-6 -mt-16  p-3 rounded-tl-2xl text-black">
                        {data.day}
                      </span>
                      <p className="text-center py-3 border-b text-lg font-bold capitalize">
                        {data.name}
                      </p>
                      <ul className="lg:px-3 px-1 my-5 border-b pb-5">
                        <div className="flex items-center gap-3">
                          <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                          <li className="text-base text-center py-3 font-medium text-black">
                            {data.lis}
                          </li>
                        </div>
                        <div className="flex items-center gap-3">
                          <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                          <li className="text-base text-center py-3 font-medium text-black ">
                            {data.lis2}
                          </li>
                        </div>
                        <div className="flex items-center gap-3">
                          <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                          <li className="text-base text-center py-3 font-medium text-black">
                            {data.list3}
                          </li>
                        </div>
                        <div className="flex items-center gap-3">
                          <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                          <li className="text-base text-center py-3 font-medium text-black">
                            {data.list4}
                          </li>
                        </div>
                        <div className="flex items-center gap-3">
                          <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                          <li className="text-base text-center py-3 font-medium text-black">
                            {data.list4}
                          </li>
                        </div>
                        <div className="flex items-center gap-3">
                          <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                          <li className="text-base text-start py-3 font-medium text-black">
                            {data.list6}
                          </li>
                        </div>
                      </ul>
                      <div className="px-3 pb-3">
                        <h6 className="text-2xl font-semibold text-center">
                          {data.price}{" "}
                          <sub className="text-base font-light text-gray-400">
                            / per person
                          </sub>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
                {/* add desciption here all tours eg dubai singapore thialnd etc so on 6th data */}
                <Turkey_Desciption />
              </div>

              {/* Second Card */}
              <div className="lg:flex flex-col  hidden w-full md:w-[48%] lg:w-[28%] ">
                <TourForm />
                <CountryFlag />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
