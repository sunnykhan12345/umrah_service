import Image from "next/image";
import Link from "next/link";
import React from "react";
import gallery1 from "../../public/images/gallery1.png";
import visa from "../../public/images/visa.jpg";
import visa1 from "../../public/images/visa1.jpg";
import duba from "../../public/images/singapore.jpg";
import { FaArrowRight } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";

const viscard = [
  {
    id: 1,
    img: gallery1,
    title: "canada Visit Visa",
    para: "Starting From",
    price: "150",
    view: "view details",
  },
  {
    id: 2,
    img: visa,
    title: "usa Visit Visa",
    para: "Starting From",
    price: "450",
    view: "view details",
  },
  {
    id: 3,
    img: visa1,
    title: "uk Visit Visa",
    para: "Starting From",
    price: "560",
    view: "view details",
  },
  {
    id: 4,
    img: duba,
    title: "dubai Visit Visa",
    para: "Starting From",
    price: "190",
    view: "view details",
  },
];
const VisaConsultance = () => {
  return (
    <div className="lg:mt-20 mt-8">
      <div className="lg:container mx-auto px-5">
        <h2 className="lg:text-[35px] text-2xl font-bold font-Helvetica text-black capitalize lg:mb-10 mb-6 sm:text-start text-center border-l-8  border-blue-300 sm:py-2 py-1 sm:pl-2 pl-1 ">
          visa consultancy service
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
          {viscard.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-md  shadow-md hover:shadow-lg overflow-hidden relative"
            >
              <Image
                src={card.img}
                alt=""
                className="w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-105  "
              />
              <span className="bg-blue-700 opacity-70  font-bold   absolute right-0 top-0  px-5 py-2 rounded-bl-2xl text-white ">
                <sup>$</sup>
                {card.price}
              </span>
              <div className="px-5 mb-6">
                <h3 className="my-3 text-[20px] font-medium capitalize">
                  {card.title}
                </h3>
                <h6 className="mt-2">{card.para}</h6>
                <div className="flex justify-between py-3">
                  <p className="text-[20px] font-bold text-green-500">
                    ${" "}
                    <span>
                      {card.price} <sup>*</sup>
                    </span>
                  </p>
                  <Link href="#" className="flex items-center gap-2 mb-4">
                    <p>View Details </p>
                    <FaArrowRight />
                  </Link>
                </div>
                <div class="flex items-center space-x-4">
                  <i class="fas fa-star text-blue-500">
                    <IoStarHalf />
                  </i>
                  <div class="h-1 w-full max-w-md bg-gradient-to-r from-blue-500 via-blue-400 to-green-400"></div>
                  <i class="fas fa-star text-green-400">
                    <IoStarHalf />
                  </i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaConsultance;
