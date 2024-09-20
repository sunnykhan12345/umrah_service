import React from "react";
import Ramadan_3Star from "./ramadan_3star";
import Ramadan_4Star from "./Ramadan_4Star";
import Ramadan_5Star from "./Ramadan_5Star";
import { FiveStar_Table } from "../../5-star/components/FiveStar_Table";

const Ramadan_specPackage = () => {
  return (
    <>
      <h2 className="border-b-2 border-black text-lg sm:text-start text-center font-bold lg:text-2xl lg:mb-10 mb-5">
        3-Star Ramadan Umrah Packages 2024
      </h2>

      <div className="flex flex-col gap-y-10">
        <Ramadan_3Star />
        <Ramadan_4Star />
        <Ramadan_5Star />
        <FiveStar_Table />
      </div>
    </>
  );
};

export default Ramadan_specPackage;
