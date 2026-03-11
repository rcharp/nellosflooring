import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const PalmettoPage = () => {
  useSEO({
    title: "HVAC Services Palmetto FL | AC Repair & Install",
    description: "Trusted HVAC services in Palmetto FL. AC repair, installation, maintenance & duct cleaning. Family owned, licensed & insured. Call (555) 123-4567.",
    canonical: "https://example.com/areas/palmetto",
  });

  return (
    <ServiceAreaPage
      city="Palmetto, FL"
      tagline="Your Trusted HVAC Partner"
      intro="We offer reliable and professional HVAC services in Palmetto, FL. Whether you need heating, cooling, or ventilation services, our experienced technicians are ready to assist you with installations, repairs, and maintenance."
    />
  );
};

export default PalmettoPage;
