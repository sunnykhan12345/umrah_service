
import Navbar from "@/Common_Comp/navbar/Navbar";
import HomeSlider from "../components/sliders/HomeSlider";

const Home = () => {
    return (
        <>
            <div className="">
                <HomeSlider />
            </div>
            {/* <div className="">
                <section className="">
                    <div className="inset-0 bg-home bg-no-repeat bg-cover  lg:h-[791px] h-[620px] ">
                        <Navbar />
                        <div className="md:container mx-auto px-5 lg:py-[114px] py-14">
                            <h1 className="text-white font-bold lg:text-[79px] sm:text-[50px] text-[30px] lg:leading-[91px] sm:leading-[60px]">
                                Umrah Packages <br /> 2024
                            </h1>
                            <div className="lg:mt-8 mt-5">
                                <button className="bg-[#2379BD] sm:py-4 sm:px-[35px] py-3 px-6 text-8 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500" >
                                    Let's Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}
        </>
    );
};

export default Home;
