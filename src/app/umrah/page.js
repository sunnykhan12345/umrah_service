import React from "react";
import Calculator_Umrah from "./components/Calculator_Umrah";

const page = () => {
  return (
    <>
      <div className="bg-pack bg-cover h-[50vh] bg-center ">
        <div className="md:container mx-auto px-5 pb-12 xl:px-24">
          <Calculator_Umrah />
        </div>
      </div>
      {/* <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="bg-pac bg-no-repeat  w-full">
            <div className="md:container mx-auto px-5 pb-12 xl:px-24">
              <Calculator_Umrah />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default page;
