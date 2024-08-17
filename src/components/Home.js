
// import Navbar from "@/components/navbar/Navbar";
// const Home = () => {
//     return (
//         <>
//             <div className="">
//                 <section className="relative">
//                     <div className="absolute inset-0 bg-home bg-no-repeat bg-cover  lg:h-[631px] h-[calc(100vh-20px)]">
//                         <Navbar />
//                         <div className="md:container mx-auto px-5 lg:py-[114px] py-14 ">
//                             <h1 className="text-white font-bold lg:text-[79px] text-[50px] lg:leading-[91px] leading-[60px]">Umrah Packages <br /> 2024</h1>
//                             <div className='lg:mt-8 mt-5'>
//                                 <button className='bg-blue-400 py-3 px-8 text-base rounded-full text-white'>Let's Get Started</button>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     )
// }

// export default Home

import Navbar from "@/components/navbar/Navbar";

const Home = () => {
    return (
        <>
            <div className="">
                <section className="">
                    <div className=" inset-0 bg-he bg-no-repeat bg-cover lg:h-[631px] h-[calc(100vh-20px)]">
                        <Navbar />
                        <div className="md:container mx-auto px-5 lg:py-[114px] py-14">
                            <h1 className="text-white font-bold lg:text-[79px] text-[50px] lg:leading-[91px] leading-[60px]">
                                Umrah Packages <br /> 2024
                            </h1>
                            <div className="lg:mt-8 mt-5">
                                <button className="bg-[#2379BD] py-4 px-[35px] text-8 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500" >
                                    Let's Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
