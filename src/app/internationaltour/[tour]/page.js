import Image from "next/image";
import { RiCheckboxCircleFill } from "react-icons/ri";
import TourForm from "@/Common_Comp/TourForm";
import CountryFlag from "@/Common_Comp/CountryFlag";
import Thialind_Desciption from "@/Common_Comp/tour_desciptions/Thialind_Desciption";
import Dubai_Desciption from "@/Common_Comp/tour_desciptions/Dubai_Desciption";
import SingaPore_Desciption from "@/Common_Comp/tour_desciptions/SingaPore_Description";
import Malaysia_Desciption from "@/Common_Comp/tour_desciptions/Malaysia_Desciption";
import Balu_Sescription from "@/Common_Comp/tour_desciptions/Balu_Sescription";
import Turkey_Desciption from "@/Common_Comp/tour_desciptions/Turkey_Desciption";
import { popularcard } from "../Components/MockdataDynamic";

const Page = ({ params: { tour } }) => {
  console.log(tour);
  const tourData = popularcard.find((t) => t.title.toLowerCase() === tour);

  if (!tourData) {
    return <div>Tour not found.</div>;
  }

  return (
    <>
      <div className="relative">
        <Image
          src={tourData.img}
          alt=""
          className="object-cover w-full h-[40vh]"
        />
        <h2 className="absolute top-1/2 left-1/2 capitalize transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-6xl text-3xl font-bold">
          {tourData.title} visit visa
        </h2>
      </div>
      <div className="bg-customBackground py-10 ">
        <div className="lg:container mx-auto px-5">
          <div className="">
            <div className="flex items-start flex-wrap gap-5">
              {/* First Card */}
              <div className="w-full md:w-[100%] lg:w-[70%] bg-white shadow-lg rounded-lg  lg:p-4 p-2 ">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mx-auto">
                  <div className="rounded-lg shadow-lg " key={tourData.id}>
                    <h4 className="py-2 text-[20px] font-semibold bg-blue-500 relative text-white rounded-tl-md rounded-tr-md text-center">
                      {tourData.day}
                    </h4>
                    <span className="bg-blue-700 opacity-70 font-bold   absolute -rotate-6 -mt-16  p-3 rounded-tl-2xl text-white">
                      {tourData.day}
                    </span>
                    <p className="text-center py-3 border-b text-lg font-bold capitalize">
                      {tourData.name}
                    </p>
                    <ul className="lg:px-3 px-1 my-5 border-b pb-5">
                      <div className="flex items-center gap-3">
                        <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                        <li className="text-base text-center py-3 font-medium text-black">
                          {tourData.lis}
                        </li>
                      </div>
                      <div className="flex items-center gap-3">
                        <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                        <li className="text-base text-center py-3 font-medium text-black ">
                          {tourData.lis2}
                        </li>
                      </div>
                      <div className="flex items-center gap-3">
                        <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                        <li className="text-base text-center py-3 font-medium text-black">
                          {tourData.list3}
                        </li>
                      </div>
                      <div className="flex items-center gap-3">
                        <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                        <li className="text-base text-center py-3 font-medium text-black">
                          {tourData.list4}
                        </li>
                      </div>
                      <div className="flex items-center gap-3">
                        <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                        <li className="text-base text-center py-3 font-medium text-black">
                          {tourData.list4}
                        </li>
                      </div>
                      <div className="flex items-center gap-3">
                        <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                        <li className="text-base text-start py-3 font-medium text-black">
                          {tourData.list6}
                        </li>
                      </div>
                    </ul>
                    <div className="px-3 pb-3">
                      <h6 className="text-2xl font-semibold text-center">
                        {tourData.price}{" "}
                        <sub className="text-base font-light text-gray-400">
                          / per person
                        </sub>
                      </h6>
                    </div>
                  </div>
                  {tourData.subCards &&
                    tourData.subCards.map((subCard) => (
                      <div key={subCard.id} className="rounded-lg shadow-lg ">
                        <h4 className="py-2 text-[20px] font-semibold bg-blue-500 text-white rounded-tl-md rounded-tr-md text-center">
                          {subCard.day}
                        </h4>
                        <span className="bg-blue-700 opacity-70 font-bold   absolute -rotate-6 -mt-16  p-3 rounded-tl-2xl text-white">
                          {subCard.day}
                        </span>
                        <p className="text-center py-3 border-b text-lg font-bold capitalize">
                          {subCard.name}
                        </p>
                        <ul className="lg:px-3 px-1 my-5 border-b pb-5">
                          <div className="flex items-center gap-3">
                            <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                            <li className="text-base text-center py-3 font-medium text-black">
                              {subCard.lis}
                            </li>
                          </div>
                          <div className="flex items-center gap-3">
                            <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                            <li className="text-base text-center py-3 font-medium text-black">
                              {subCard.lis2}
                            </li>
                          </div>
                          <div className="flex items-center gap-3">
                            <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                            <li className="text-base text-center py-3 font-medium text-black">
                              {subCard.lis3}
                            </li>
                          </div>
                          <div className="flex items-center gap-3">
                            <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                            <li className="text-base text-center py-3 font-medium text-black">
                              {subCard.lis4}
                            </li>
                          </div>
                          <div className="flex items-center gap-1">
                            <RiCheckboxCircleFill className="text-blue-500 w-6 h-6 flex  flex-shrink-0" />
                            <li className="text-base text-center py-3  font-medium text-black">
                              {subCard.lis5}
                            </li>
                          </div>
                          <div className="flex items-center gap-3">
                            <RiCheckboxCircleFill className="text-blue-500 w-6 h-6" />
                            <li className="text-base text-center py-3 font-medium text-black">
                              {subCard.lis6}
                            </li>
                          </div>
                        </ul>
                        <div className="px-3 pb-3">
                          <h6 className="text-2xl font-semibold text-center">
                            {subCard.price}{" "}
                            <sub className="text-base font-light text-gray-400">
                              / per person
                            </sub>
                          </h6>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="">
                  {tour === "dubai" && <Dubai_Desciption />}
                  {tour === "singapore" && <SingaPore_Desciption />}
                  {tour === "thailand" && <Thialind_Desciption />}
                  {tour === "malaysia" && <Malaysia_Desciption />}
                  {tour === "balu" && <Balu_Sescription />}
                  {tour === "turkey" && <Turkey_Desciption />}
                </div>
                {/* add desciption here all tours eg dubai singapore thialnd etc so on 6th data */}
              </div>

              {/* Second Card */}
              <div className="lg:flex flex-col  hidden w-full md:w-[48%] lg:w-[28%] ">
                <TourForm />
                <CountryFlag />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

{
  /* <Link href="/">
<h6 className="mt-4 flex items-center text-blue-600 hover:text-blue-800">
    Go Back <FaArrowRight className="ml-2" />
</h6 >
</Link > */
}
