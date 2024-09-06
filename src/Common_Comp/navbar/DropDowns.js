"use client"; // Ensures the component is rendered on the client side

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
import { FaChevronDown } from "react-icons/fa"; // Importing an arrow icon from React Icons
import Link from "next/link";

// type Checked = DropdownMenuCheckboxItemProps["checked"]

export const DropdownMenus = () => {
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
            Umrah <FaChevronDown className="ml-2 " />
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-3">
            {/* First row with 3 items */}
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  href="/umrah-packages/exective"
                  className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
                >
                  executive umrah packages
                </Link>
              </li>
              <li>
                <Link
                  href="/umrah-packages/5-star"
                  className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
                >
                  5 star umrah
                </Link>
              </li>
              <li>
                <Link
                  href="/umrah-packages/4-star"
                  className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
                >
                  4 star umrah
                </Link>
              </li>
            </ul>

            {/* Second row with 3 items */}
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  href="/umrah-packages/economy"
                  className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
                >
                  economy umrah
                </Link>
              </li>
              <li>
                <Link
                  href="/umrah-packages/budget"
                  className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
                >
                  budget umrah
                </Link>
              </li>
              <li>
                <Link
                  href="/umrah-packages/rabbi-ul-awal"
                  className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
                >
                  rabbi ul awal promotion
                </Link>
              </li>
            </ul>

            {/* Third row with 1 item */}
            <ul className="flex flex-col space-y-3">
              <li className="lg:col-span-1">
                <Link
                  href="/umrah-packages/ramadan-special"
                  className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
                >
                  ramadan special
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional content */}
          <DropdownMenuSeparator />
          {/* <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                    >
                        Status Bar
                    </DropdownMenuCheckboxItem> */}
          {/* <DropdownMenuCheckboxItem
                        checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                        disabled
                    >
                        Activity Bar
                    </DropdownMenuCheckboxItem> */}
          {/* <DropdownMenuCheckboxItem
                        checked={showPanel}
                        onCheckedChange={setShowPanel}
                    >
                        Panel
                    </DropdownMenuCheckboxItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownMenus;
