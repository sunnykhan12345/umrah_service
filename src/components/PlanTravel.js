"use client";
import Image from "next/image";
import plan from "../../public/images/plan.jpg";
const PlanTravel = () => {
  return (
    <div className="lg:mt-20 mt-8 mb-10">
      <div className="lg:container mx-auto px-5 relative">
        <Image
          src={plan}
          alt=""
          className=" sm:min-h-[437px] h-[400px] bg-cover rounded-2xl  bg-no-repeat"
        />
        <div className="absolute top-1/2 -translate-y-1/2 2xl:pl-20 lg:pl-10 md:pl-6 px-4">
          <h3
            className="2xl:text-[60px] lg:text-[50px] text-4xl   text-white font-bold font-Helvetica xl:max-w-[790px] w-full lg:leading-[70px] md:pb-0 pb-5 "
            // data-aos={window?.innerWidth >= 600 ? "zoom-in-up" : null}
            // data-aos-duration={window?.innerWidth >= 600 ? "1000" : null}
            //   data-aos-easing="ease-in-out-quad"
          >
            Plan your trip with a travel expert
          </h3>
          <p
            className="lg:text-4xl md:text-2xl text-base font-normal font-Helvetica  text-white lg:mt-6 md:mt-3 "
            // data-aos={window?.innerWidth >= 600 ? "zoom-in-up" : null}
            // data-aos-duration={window?.innerWidth >= 600 ? "1000" : null}

            //   data-aos-easing="ease-in-out-quad"
          >
            Our professional advisors can craft your perfect itinerary
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanTravel;
