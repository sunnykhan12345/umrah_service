import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import DropdownMenus from "./DropDowns";
const Links = [
  {
    id: 1,
    name: "home",
    url: "/",
  },
  {
    id: 2,
    name: "flight",
    url: "/flights",
  },
  {
    id: 3,
    name: <DropdownMenus />,
    url: "/",
  },
  {
    id: 4,
    name: "tours",
    url: "/tours",
  },
  {
    id: 5,
    name: "visa",
    url: "/visa",
  },
  {
    id: 6,
    name: "contact ",
    url: "/contact",
  },
];

const TopBar = () => {
  return (
    <div className="lg:py-3 py-0 bg-gradient-to-r top-0 left-0 w-full sticky from-blue-200 to-white z-20 ">
      <div className="lg:container mx-auto px-5">
        <div className="lg:flex justify-between gap-4  hidden">
          <Link href="/" className="lg:block flex">
            <Image
              src={logo}
              alt="logo"
              width={160}
              height={60}
              className="md:w-[160px] md:h-[60px] h-[60px] w-[60px] object-contain"
            />
          </Link>
          {/*  */}
          <ul className="lg:hidden gap-4 flex items-center">
            {Links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="capitalize text-sm  font-medium font-Helvetica  text-white hover:border-b-4 hover:border-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/*  */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-50">
              <FaPhone className="text-blue-600 w-5 h-5" />
              <h5>+923085342445</h5>
            </Link>
            <p>|</p>
            <Link href="/" className="flex items-center gap-2 hover:opacity-50">
              <FaWhatsapp className="text-green-600 w-5 h-6" />
              <h5>+923085342445</h5>
            </Link>
            <p>|</p>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-blue-400 hover:opacity-50">
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link href="/" className="text-orange-400 hover:opacity-50">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="/" className="text-red-400 hover:opacity-50">
                <FaYoutube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
