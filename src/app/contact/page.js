import Image from "next/image"
// import img from "../../../public/images/cont.png"
import img from "../../../public/images/contact.jpg"
import cat from "../../../public/images/catton.webp"
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
const page = () => {
    return (
        <div className="bg-gray-100 rounded-lg shadow-lg">
            <div className="flex justify-center items-center ">
                <Image src={img} alt="" className="relative w-full  object-cover max-h-[400px] bg-center" />
                <h2 className="absolute -mt-20 text-center lg:text-[70px] text-4xl  font-bold flex justify-center mx-auto">contact us</h2>
            </div>

            <div className="lg:container mx-auto px-5 ">
                <div className="flex flex-col lg:flex-row gap-10 bg-white shadow-lg rounded-lg ">
                    <div className="w-full  flex flex-col py-10 lg:pl-20 pl-5">
                        <h1 className="text-black lg:text-[60px] leading-tight font-extrabold t">Lets talk about Everything!</h1>
                        <div className="flex flex-col gap-5">
                            <p className="text-black pt-10 text-lg font-medium">Send us an Email instead.</p>
                            <h6 className="flex items-center gap-3"><FaPhone /> +923085342445</h6>
                            <h6 className="flex items-center gap-3"><MdOutlineEmail className="w-5 h-5" /> sunnykhan@gmail.com</h6>
                            <h6 className="flex items-center gap-3"><FaMapLocationDot className="w-10 h-10" /> Binham Travels Office No 34 second Floor, Office Tower Gulberg Green Luxus Mall,  Islamabad,  Pakistan</h6>
                            <Image src={cat} alt="" className="relative w-full  object-cover  bg-center" />
                        </div>
                    </div>
                    <div className=" w-full py-10 px-4">
                        <form>
                            <div className="flex flex-col flex-1 max-w-[500px] mb-10">
                                <label className="block text-gray-700 text-base font-bold mb-2 capitalize">
                                    full name
                                </label>
                                <input
                                    type="text"
                                    placeholder="please enter your full name"
                                    className="capitalize px-3 py-3 flex-1 border border-gray-400 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col flex-1 max-w-[500px] mb-10">
                                <label className="block text-gray-700 text-base font-bold mb-2 capitalize">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    placeholder="please enter your Email"
                                    className="capitalize px-3 py-3 flex-1 border border-gray-400 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col flex-1 max-w-[500px] mb-10">
                                <label className="block text-gray-700 text-base font-bold mb-2 capitalize">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    placeholder="please enter your phone no"
                                    className="capitalize px-3 py-3 flex-1 border border-gray-400 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col flex-1 max-w-[500px] mb-10">
                                <label className="block text-gray-700 text-base font-bold mb-2 capitalize">
                                    Message
                                </label>
                                <textarea className="border border-gray-700 px-3 py-3">Entre Your Query.</textarea>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page