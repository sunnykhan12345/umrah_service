"use client";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import DropdownMenus from "./DropDowns";
import { usePathname } from "next/navigation";
import { Drop } from "@/app/visa/components/Drop";

const Links = [
  { id: 1, name: "home", url: "/" },
  {
    id: 2,
    name: "flight",
    url: "/flights",
  },
  { id: 3, name: <DropdownMenus />, url: "/" },
  {
    id: 4,
    name: "tours",
    url: "/tours",
  },
  { id: 5, name: <Drop />, url: "/visa" },
  {
    id: 6,
    name: "contact ",
    url: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="bg-blue-400  z-20 lg:py-5 py-1">
        <div className="px-5 lg:px-40 text-white">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link href="/" className="lg:hidden flex filter-white-logo">
              <Image
                src={logo}
                alt="logo"
                width={160}
                height={60}
                className="md:w-[160px] md:h-[60px] h-[60px] w-[60px] object-contain"
              />
            </Link>
            <ul className="lg:flex gap-10 hidden items-center">
              {Links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className={`capitalize text-base  font-bold font-Helvetica pb-6 text-white  ${
                      pathname == link.url
                        ? "text-green-600 border-b-4 border-white"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
