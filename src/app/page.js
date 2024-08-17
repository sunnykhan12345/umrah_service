import Gallery from "@/components/Gallery";
import Home from "@/components/Home";
import PlanTravel from "@/components/PlanTravel";
import ServiceProvide from "@/components/ServiceProvide";
import VisaConsultance from "@/components/VisaConsultance";
export default function HomePage() {
  return (
    <>
      <Home />
      <ServiceProvide />
      <PlanTravel />
      <VisaConsultance />
      <Gallery />
    </>
  );
}
