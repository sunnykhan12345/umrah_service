import Gallery from "@/components/Gallery";
import Home from "@/components/Home";
import Offers from "@/components/Offers";
import PlanTravel from "@/components/PlanTravel";
import PopularToures from "@/components/PopularToures";
import ServiceProvide from "@/components/ServiceProvide";
import VisaConsultance from "@/components/VisaConsultance";
export default function HomePage() {
  return (
    <>
      <Home />
      <PopularToures />
      <Offers />
      <ServiceProvide />
      <PlanTravel />
      <VisaConsultance />
      <Gallery />
    </>
  );
}
