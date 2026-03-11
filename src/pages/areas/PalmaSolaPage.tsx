import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const PalmaSolaPage = () => {
  useSEO({
    title: "HVAC Services Palma Sola FL | AC Repair & Install",
    description: "Professional HVAC services in Palma Sola FL. AC repair, installation, maintenance & duct cleaning. Family owned, licensed & insured. Call (555) 123-4567.",
    canonical: "https://example.com/areas/palma-sola",
  });

  return (
    <ServiceAreaPage
      city="Palma Sola, FL"
      tagline="Your HVAC Solution Experts"
      intro="We offer reliable and professional HVAC services in Palma Sola, FL. Whether you need heating, cooling, or ventilation services, our experienced technicians are ready to assist you with installations, repairs, and maintenance."
    />
  );
};

export default PalmaSolaPage;
