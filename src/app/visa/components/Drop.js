"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

export const Drop = () => {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline border-none"
            className="flex items-center text-[17px] opacity-90 font-medium font-Helvetica"
          >
            Visa <FaChevronDown className="ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="mt-5 ml-2 left- bg-white text-base
                     z-10 w-full"
          align="start"
          sideOffset={5}
        >
          {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                    <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
          <ul className="flex gap-4 p-3">
            <li className="">
              <Link
                href="/dubai"
                className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
              >
                dubai visit visa
              </Link>
            </li>
            <li>
              <Link
                href="/singapore"
                className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
              >
                singapore visit visa
              </Link>
            </li>
          </ul>
          <ul className="flex gap-4 p-3">
            <li className="">
              <Link
                href="/thailand"
                className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
              >
                thailand visit visa
              </Link>
            </li>
            <li>
              <Link
                href="/malaysia"
                className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
              >
                malaysia visit visa
              </Link>
            </li>
          </ul>
          <ul className="flex gap-4 p-3">
            <li className="">
              <Link
                href="/balu"
                className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
              >
                balu visit visa
              </Link>
            </li>
            <li>
              <Link
                href="/turkey"
                className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
              >
                tureky visit visa
              </Link>
            </li>
          </ul>

          {/* Additional content */}
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Drop;
