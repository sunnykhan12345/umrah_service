'use client'
import Home from "@/Common_Comp/Home";
import Combos from "@/components/Combos";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Home_Banner from "@/components/Home_Banner";
import Offers from "@/components/Offers";
import PlanTravel from "@/components/PlanTravel";
import PopularToures from "@/components/PopularToures";
import ServiceProvide from "@/components/ServiceProvide";
import VisaConsultance from "@/components/VisaConsultance";
// import ServiceSlider from "@/components/sliders/ServiceSlider"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      {/* <Home /> */}
      <div className="bg-customBackground">
        <Home_Banner />
        <Offers />
        <PopularToures />
        <Combos />
        {/* <ServiceSlider /> */}
        <ServiceProvide />
        <PlanTravel />
        <VisaConsultance />
        <Gallery />
        <Contact />
      </div>
    </>
  );
}
