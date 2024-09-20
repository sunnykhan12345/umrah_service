import Economy_Packages from "./components/Economy_Packages";

const page = () => {
  return (
    <>
      {/* <div className="bg-pack bg-cover h-[50vh] bg-center flex flex-col justify-center items-center">
        <div className="text-white lg:text-6xl text-3xl text-center font-bold">
          Rabi Ul Awal Umrah Packages
        </div>
      </div> */}
      <div className="bg-customBackground py-10">
        <div className="lg:container mx-auto px-5">
          <div className="bg-customBackground">
            <Economy_Packages />
          </div>
          <h2 class="text-2xl font-bold text-blue-500 mt-4 mb-2">
            Our Heading
          </h2>
        </div>
      </div>
    </>
  );
};

export default page;
