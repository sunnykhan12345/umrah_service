"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenuLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import DropdownMenus from "./DropDowns";
import { Drop } from "@/app/visa/components/Drop";
import { usePathname } from "next/navigation";

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

const MobileMenu = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="lg:hidden flex items-center relative z-10">
        <button
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-greenishblue"
          onClick={() => setOpen(!open)}
        >
          <RiMenuLine className="w-5 h-5 text-white" />
        </button>
        {open && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-0"
            onClick={() => setOpen(false)}
          />
        )}
        {/* Mobile menu panel */}
        <div
          className={`fixed top-0 right-0 bg-white rounded-md h-full w-[300px] flex flex-col justify-center items-center gap-5 transform transition-transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          } z-20`}
        >
          {/* Close button */}
          <div
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-greenishblue absolute top-4 right-4"
            onClick={() => setOpen(!open)}
          >
            <IoMdClose className="w-4 h-4 text-black" />
          </div>

          {/* Navigation links */}
          <ul className="flex flex-col gap-6 items-center">
            {Links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className={`capitalize text-base  font-bold font-Helvetica pb-6 text-black  ${
                    pathname == link.url ? " border-white" : ""
                  }`}
                  onClick={handleLinkClick} // Close the menu on click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
