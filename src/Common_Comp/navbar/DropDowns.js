// // "use client"

// // import * as React from "react"
// // import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

// // import { Button } from "@/components/ui/button"
// // import {
// //     DropdownMenu,
// //     DropdownMenuCheckboxItem,
// //     DropdownMenuContent,
// //     DropdownMenuLabel,
// //     DropdownMenuSeparator,
// //     DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu"

// // // type Checked = DropdownMenuCheckboxItemProps["checked"]

// // export const DropdownMenus = () => {
// //     const [showStatusBar, setShowStatusBar] = React.useState(true)
// //     const [showActivityBar, setShowActivityBar] = React.useState(false)
// //     const [showPanel, setShowPanel] = React.useState(false)

// //     return (
// //         <DropdownMenu>
// //             <DropdownMenuTrigger asChild>
// //                 <Button variant="outline border-none" className="">Open </Button>
// //             </DropdownMenuTrigger>
// //             <DropdownMenuContent className="w-56">
// //                 <DropdownMenuLabel>Appearance</DropdownMenuLabel>
// //                 <DropdownMenuSeparator />
// //                 <DropdownMenuCheckboxItem
// //                     checked={showStatusBar}
// //                     onCheckedChange={setShowStatusBar}
// //                 >
// //                     Status Bar
// //                 </DropdownMenuCheckboxItem>
// //                 <DropdownMenuCheckboxItem
// //                     checked={showActivityBar}
// //                     onCheckedChange={setShowActivityBar}
// //                     disabled
// //                 >
// //                     Activity Bar
// //                 </DropdownMenuCheckboxItem>
// //                 <DropdownMenuCheckboxItem
// //                     checked={showPanel}
// //                     onCheckedChange={setShowPanel}
// //                 >
// //                     Panel
// //                 </DropdownMenuCheckboxItem>
// //             </DropdownMenuContent>
// //         </DropdownMenu>
// //     )
// // }


// // export default DropdownMenus

// "use client"; // Ensures the component is rendered on the client side

// import * as React from "react";
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
// import { Button } from "@/components/ui/button";
// import {
//     DropdownMenu,
//     DropdownMenuCheckboxItem,
//     DropdownMenuContent,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { FaChevronDown } from "react-icons/fa"; // Importing an arrow icon from React Icons

// // type Checked = DropdownMenuCheckboxItemProps["checked"]

// export const DropdownMenus = () => {
//     const [showStatusBar, setShowStatusBar] = React.useState(true);
//     const [showActivityBar, setShowActivityBar] = React.useState(false);
//     const [showPanel, setShowPanel] = React.useState(false);

//     return (
//         <div>
//             <DropdownMenu className="container mx-auto ">
//                 <DropdownMenuTrigger asChild >
//                     <Button variant="outline border-none" className="flex items-center text-[17px] opacity-90 font-medium font-Helvetica">
//                         Flights <FaChevronDown className="ml-2 " /> {/* Add arrow icon here */}
//                     </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className=" container mx-auto ">
//                     <DropdownMenuLabel>Appearance</DropdownMenuLabel>
//                     <ul className="w-[600px]">
//                         <li>hello hellohellohellohellohellohellohellohello ohellohellohelohellohellohelohellohellohel</li>
//                     </ul> <ul className="w-[600px]">
//                         <li>hello hellohellohellohellohellohellohellohello ohellohellohelohellohellohelohellohellohel</li>
//                     </ul> <ul className="w-[600px]">
//                         <li>hello hellohellohellohellohellohellohellohello ohellohellohelohellohellohelohellohellohel</li>
//                     </ul> <ul className="w-[600px]">
//                         <li>hello hellohellohellohellohellohellohellohello ohellohellohelohellohellohelohellohellohel</li>
//                     </ul> <ul className="w-[600px]">
//                         <li>hello hellohellohellohellohellohellohellohello ohellohellohelohellohellohelohellohellohel</li>
//                     </ul> <ul className="w-[600px]">
//                         <li>hello hellohellohellohellohellohellohellohello ohellohellohelohellohellohelohellohellohel</li>
//                     </ul> <ul className="w-[600px]">
//                         <li>hello hellohellohellohellohellohellohellohello ohellohellohelohellohellohelohellohellohel</li>
//                     </ul> <ul className="w-[600px]">
//                         <li>hello hellohellohellohellohellohellohellohello ohellohellohelohellohellohelohellohellohel</li>
//                     </ul> <ul className="w-[600px]">
//                         <li>hello hellohellohellohellohellohellohellohello ohellohellohelohellohellohelohellohellohel</li>
//                     </ul> <ul className="w-[600px]">
//                         <li>hello hellohellohellohellohellohellohellohello ohellohellohelohellohellohelohellohellohel</li>
//                     </ul> <ul className="w-[600px]">
//                         <li>hello hellohellohellohellohellohellohellohello ohellohellohelohellohellohelohellohellohel</li>
//                     </ul>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuCheckboxItem
//                         checked={showStatusBar}
//                         onCheckedChange={setShowStatusBar}
//                     >
//                         Status Bar
//                     </DropdownMenuCheckboxItem>
//                     <DropdownMenuCheckboxItem
//                         checked={showActivityBar}
//                         onCheckedChange={setShowActivityBar}
//                         disabled
//                     >
//                         Activity Bar
//                     </DropdownMenuCheckboxItem>
//                     <DropdownMenuCheckboxItem
//                         checked={showPanel}
//                         onCheckedChange={setShowPanel}
//                     >
//                         Panel
//                     </DropdownMenuCheckboxItem>
//                 </DropdownMenuContent>
//             </DropdownMenu>
//         </div>
//     );
// };

// export default DropdownMenus;


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
                        umrah <FaChevronDown className="ml-2 " /> {/* Add arrow icon here */}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="mt-5 ml-2 left- bg-customBackground text-base
                     z-10 w-full" // Adjusting position with ml-2 for some space
                    align="start" // Ensures it aligns with the left of the trigger button
                    sideOffset={5} // Adds some offset space from the button
                >
                    {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                    <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
                    <ul className="flex gap-4 p-3">
                        <li className="">
                            <Link href="/umrah-packages/exective" className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg">
                                exective umrah packages
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg">
                                exective umrah packages
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg">
                                exective umrah packages
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg">
                                exective umrah packages
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex gap-4 p-3">
                        <li>
                            <Link href="/umrah-packages/economy" className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg">
                                economy umrah packages
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg">
                                exective umrah packages
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg">
                                exective umrah packages
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg">
                                exective umrah packages
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex gap-4 p-3">
                        <li>
                            <Link href="/" className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg">
                                exective umrah packages
                            </Link>
                        </li>
                        <li >
                            <Link href="/" className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg">
                                exective umrah packages
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg">
                                exective umrah packages
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="capitalize text-[13px] hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg">
                                exective umrah packages
                            </Link>
                        </li>
                    </ul>
                    {/* Additional content */}
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                    >
                        Status Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                        checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                        disabled
                    >
                        Activity Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                        checked={showPanel}
                        onCheckedChange={setShowPanel}
                    >
                        Panel
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default DropdownMenus;
