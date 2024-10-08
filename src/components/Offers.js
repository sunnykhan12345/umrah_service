"use client";
import Multi_Carasul from "./sliders/Multi_Carasul";
import SpecialOf_Slider from "./sliders/SpecialOf_Slider";
const Offers = () => {
  return (
    <div className="lg:mt-20 mt-8 from-blue-200 to-white">
      <div className="lg:container mx-auto px-5 from-blue-200 to-white">
        <h2
          className="lg:text-[35px] text-2xl font-bold font-Helvetica text-black capitalize sm:py-6 lg:my-10 sm:text-start text-center mb-2 border-l-8  border-blue-300 py-1 sm:pl-2 pl-1 "
          // data-aos={window?.innerWidth >= 600 ? "zoom-in" : null}
          // data-aos-duration={window?.innerWidth >= 600 ? "1200" : null}
          // data-aos-easing={window?.innerWidth >= 600 ? "ease-in-out" : null}
        >
          special umrah packages 2024{" "}
        </h2>
        {/* <SpecialOf_Slider /> */}
        <Multi_Carasul />
      </div>
    </div>
  );
};

export default Offers;
