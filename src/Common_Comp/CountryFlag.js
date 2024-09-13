import React from "react";
import Image from "next/image";
import Link from "next/link";

import dubi from "../../public/images/dflg.png";
import singa from "../../public/images/singa.png";
import thi from "../../public/images/thil.png";
import mal from "../../public/images/mal.png";
import bal from "../../public/images/balu.png";
import tur from "../../public/images/tur.png";

const CountryFlag = () => {
  const countries = [
    {
      src: dubi,
      path: "/dubai",
      alt: "Dubai Visit Visa",
      name: "Dubai Visit Visa",
    },
    {
      src: singa,
      path: "/singapore",
      alt: "Singapore Visit Visa",
      name: "Singapore Visit Visa",
    },
    {
      src: thi,
      path: "/thailand",
      alt: "Thailand Visit Visa",
      name: "Thailand Visit Visa",
    },
    {
      src: mal,
      path: "/malaysia",
      alt: "Malaysia Visit Visa",
      name: "Malaysia Visit Visa",
    },
    {
      src: bal,
      path: "/balu",
      alt: "Balu Visit Visa",
      name: "Balu Visit Visa",
    },
    {
      src: tur,
      path: "/turkey",
      alt: "Turkey Visit Visa",
      name: "Turkey Visit Visa",
    },
  ];

  return (
    <div className="my-10 flex flex-col gap-y-5">
      {countries.map((country, index) => (
        <Link
          key={index}
          href={country.path}
          className="bg-white flex items-center gap-4 border-2 border-gray-200 rounded-lg p-2 transition-shadow duration-300 hover:shadow-lg"
        >
          <Link href={country.path} className="flex-shrink-0">
            <Image
              src={country.src}
              alt={country.alt}
              width={80}
              height={80}
              className="object-cover w-20 h-20 rounded-md"
            />
          </Link>
          <h4 className="text-lg font-semibold capitalize text-gray-800">
            {country.name}
          </h4>
        </Link>
      ))}
    </div>
  );
};

export default CountryFlag;
