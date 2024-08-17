import Image from "next/image"
import plan from "../../public/images/plan.jpg"
const PlanTravel = () => {
    return (
        <div className='lg:mt-16 mt-8'>
            <div className="lg:container mx-auto px-5 relative">
                <Image src={plan} alt="" className="object-cover rounded-2xl bg-center bg-no-repeat" />
                <div className="absolute top-1/2 -translate-y-1/2 2xl:pl-20 lg:pl-10 md:pl-6 pl-4">
                    <h3 className="2xl:text-[60px] lg:text-[50px] md:text-3xl pt-5 text-lg text-white font-bold xl:max-w-[790px] w-full lg:leading-[70px]">Plan your trip with a travel expert</h3>
                    <p className="lg:text-4xl md:text-2xl text-base font-normal text-white lg:mt-6 md:mt-3 pb-5">Our professional advisors can craft your perfect itinerary</p>
                </div>
            </div>
        </div>
    )
}

export default PlanTravel
