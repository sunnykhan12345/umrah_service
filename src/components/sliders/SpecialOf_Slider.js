'use client'
import Image from "next/image";
import gallery1 from "../../../public/images/gallery.png"

const offercard = [
    {
        id: 1,
        img: gallery1,
        title: "15 Days Umrah Package",
        para: "umrah e-visa | return air ticket | hotel | transport",
        price: "PKR 195,000",
    },
    {
        id: 2,
        img: gallery1,
        title: "15 Days Umrah Package",
        para: "umrah e-visa | return air ticket | hotel | transport",
        price: "PKR 195,000",
    },
]
const SpecialOf_Slider = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            {
                offercard.map((offercard) => (
                    <div className="flex sm:flex-row flex-col gap-5 py-6 px-4 bg-white cursor-pointer rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        data-aos={window.innerWidth >= 600 ? "fade-up" : null}
                        data-aos-duration={window.innerWidth >= 600 ? "1000" : null}
                        data-aos-easing={window.innerWidth >= 600 ? "ease-in-out-quad" : null}
                    >
                        <Image src={offercard.img} alt="" width={367} height={245} className="w-[347px] h-[245px] object-cover rounded-[23px] mx-auto" />
                        <div className="sm:text-start text-center">
                            <h5 className="md:text-[26px] text-[20px] font-medium font-Helvetica pb-4">{offercard.title}</h5>
                            <p className="md:text-[17px] text-base font-medium pb-4 font-Helvetica text-[#2c3e50]">{offercard.para}</p>
                            <h6 className="pb-7 md:text-[17px] text-base font-medium font-Helvetica"><b>{offercard.price}</b></h6>
                            <button className="lg:py-4 lg:px-8 py-3 px-7 bg-[#2379BD] text-white rounded-[35px] font-normal font-Helvetica capitalize hover:opacity-50 duration-500 ease-in-out">book now</button>
                        </div>
                    </div>
                ))
            }

        </div>

    )
}

export default SpecialOf_Slider