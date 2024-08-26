import Image from "next/image"
import hotel from "../../public/images/hotel.jpg"
import v_cons from "../../public/images/visa_consultance.jpg"
import ticketing from "../../public/images/ticketing.jpg"
import trans from "../../public/images/trans.jpg"

const serCard = [
    {
        id: 1,
        img: hotel,
        title: "hotel",
    },
    {
        id: 2,
        img: v_cons,
        title: "hotel",
    },
    {
        id: 3,
        img: ticketing,
        title: "ticketing",
    },
    {
        id: 4,
        img: v_cons,
        title: "transportation",
    },
]

const ServiceProvide = () => {
    return (
        <div className='lg:mt-20 mt-8'>
            <div className="lg:container mx-auto px-5 ">
                <h2 className='lg:text-[35px] text-2xl font-bold font-Helvetica text-black capitalize lg:mb-10 mb-6 sm:text-start text-center border-l-8  border-blue-300 sm:py-2 py-1 sm:pl-2 pl-1 '

                >service we provide</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:gap-8'>
                    {
                        serCard.map((card) => (
                            <div className='flex-shrink-0 w-full relative group cursor-pointer'
                            >
                                <div key={card.id} className="overflow-hidden rounded-2xl">
                                    <Image src={card.img} alt='' className='w-full object-cover rounded-2xl shadow-2xl relative' />
                                </div>
                                <h5 className="absolute -mt-14 left-5  text-2xl font-medium font-Helvetica text-white cursor-pointer capitalize">{card.title}</h5>
                                <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default ServiceProvide