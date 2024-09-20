import React from "react";

import TourForm from "@/Common_Comp/TourForm";
import { FiveStar_Table } from "../../5-star/components/FiveStar_Table";
const Packages = () => {
  return (
    <>
      <div className="bg-customBackground py-10 ">
        <div className="lg:container mx-auto px-5">
          <div className="">
            <div className="flex items-start flex-wrap gap-5">
              {/* First Card */}
              <div className="w-full md:w-[100%] lg:w-[70%] bg-white shadow-lg rounded-lg  lg:p-4 p-2  ">
                <h3 className="text-lg font-semibold text-blue-500 leading-8 pb-5">
                  Rabi Ul Awal Umrah Packages <br /> Perform Umrah and visit
                  Dubai:
                </h3>
                <FiveStar_Table />
              </div>

              {/* Second Card */}
              <div className="lg:flex flex-col  hidden w-full md:w-[48%] lg:w-[28%] ">
                <TourForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
