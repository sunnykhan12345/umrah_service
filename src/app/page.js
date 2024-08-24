'use client'
import Home from "@/Common_Comp/Home";
import Gallery from "@/components/Gallery";
import Offers from "@/components/Offers";
import PlanTravel from "@/components/PlanTravel";
import PopularToures from "@/components/PopularToures";
import ServiceProvide from "@/components/ServiceProvide";
import VisaConsultance from "@/components/VisaConsultance";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Home />
      <div className="bg-customBackground">
        <PopularToures />
        <Offers />
        <ServiceProvide />
        <PlanTravel />
        <VisaConsultance />
        <Gallery />
      </div>
    </>
  );
}
