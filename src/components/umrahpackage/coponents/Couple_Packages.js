"use client";

import Image from "next/image";
import pop1 from "../../../../public/images/pop1.jpg";

import { Heart } from "../../../../public/icons/icons";
import { Star } from "../../../../public/icons/icons";
import { Visa } from "../../../../public/icons/icons";
import { Flight } from "../../../../public/icons/icons";
import { Hoteling } from "../../../../public/icons/icons";
import { Travels } from "../../../../public/icons/icons";

const couplepcard = [
  {
    id: 1,
    img: pop1,
    title: "mecca",
    ring: 4.7,
    para: "15 days umrah package",
    desc1: "Tour combo with return airport transfer",
    desc2: "City Tour",
    desc3: "Curioius Corner",
    old_price: "PKR 188,952",
    new_price: "PKR 188,952",
    sub: "per person",
  },
  {
    id: 2,
    img: pop1,
    title: "mecca",
    ring: 2.1,
    para: "15 days umrah package",
    desc1: "Tour combo with return airport transfer",
    desc2: "City Tour",
    desc3: "Curioius Corner",
    old_price: "PKR 188,952",
    new_price: "PKR 188,952",
    sub: "per person",
  },
  {
    id: 3,
    img: pop1,
    title: "mecca",
    ring: 3.7,
    para: "15 days umrah package",
    desc1: "Tour combo with return airport transfer",
    desc2: "City Tour",
    desc3: "Curioius Corner",
    old_price: "PKR 188,952",
    new_price: "PKR 188,952",
    sub: "per person",
  },
];
const Couple_Packages = () => {
  return (
    <>
      <div className="lg:mt-20 mt-8 mb-20">
        <div className="lg:container mx-auto px-5">
          <h2 className="lg:text-[35px] text-2xl font-bold text-black  relative capitalize pb-8 sm:text-start  text-center ">
            Couple Special
          </h2>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {couplepcard.map((card) => (
              <div className="w-full" key={card.id}>
                <div className="bg-white py-3 px-5 rounded-2xl shadow-2xl relative">
                  <div className="relative">
                    <Image
                      src={card.img}
                      width={380}
                      height={262}
                      alt=""
                      className="object-cover relative rounded-xl w-full"
                    />
                    <h6 className="absolute right-5 top-5 ">
                      <Heart />
                    </h6>
                  </div>
                  <div className="flex justify-between pt-6 pl-2 ">
                    <h5 className="font-normal text-[26px]">{card.title}</h5>
                    <div className="flex items-center gap-[10px]">
                      <Star className="lg:h-[26px] lg:w-[26px] h-[20px] w-[20px]" />
                      <h5 className="font-normal lg:text-[26px] text-[20px]">
                        {card.ring}
                      </h5>
                    </div>
                  </div>
                  <p className="lg:text-[17px] text-base font-normal py-2">
                    {card.para}
                  </p>
                  <div className="flex items-center justify-between pt-3">
                    <div className="flex flex-col  items-center">
                      <Visa />
                      <h6 className="text-[13px] font-normal pt-2">visa</h6>
                    </div>
                    <div className="flex flex-col  items-center">
                      <Flight />
                      <h6 className="text-[13px] font-normal pt-2">flight</h6>
                    </div>
                    <div className="flex flex-col  items-center">
                      <Hoteling />
                      <h6 className="text-[13px] font-normal pt-2">Hoteling</h6>
                    </div>
                    <div className="flex flex-col items-center">
                      <Travels />
                      <h6 className="text-[13px] font-normal pt-2">Travels</h6>
                    </div>
                  </div>
                  <div className="py-6 pl-2 ">
                    <li className="lg:text-[17px] text-[15px] font-normal  ">
                      {card.desc1}
                    </li>
                    <li className="lg:text-[17px] text-[15px] font-normal  pt-2">
                      {card.desc2}
                    </li>
                    <li className="lg:text-[17px] text-[15px] font-normal pt-2">
                      {card.desc3}
                    </li>
                  </div>
                  <div className="flex lg:gap-4 gap-1 items-center cursor-pointer">
                    <del className="sm:text-base text-xs font-light">
                      {card.old_price}
                    </del>
                    <h6 className="lg:text-[22px] text-base font-medium">
                      {card.new_price}{" "}
                      <sub className="sm:text-[13px] text-[11px] font-light">
                        {card.sub}
                      </sub>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Couple_Packages;
