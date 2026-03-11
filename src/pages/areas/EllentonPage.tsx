import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const EllentonPage = () => {
  useSEO({
    title: "HVAC Services Ellenton FL | AC Repair & Install",
    description: "Expert HVAC services in Ellenton FL. AC repair, installation, maintenance & duct cleaning. Family owned, licensed & insured. Call (555) 123-4567.",
    canonical: "https://example.com/areas/ellenton",
  });

  return (
    <ServiceAreaPage
      city="Ellenton, FL"
      tagline="Your Trusted HVAC Partner"
      intro="We offer reliable and professional HVAC services in Ellenton, FL. Whether you need heating, cooling, or ventilation services, our experienced technicians are ready to assist you with installations, repairs, and maintenance."
    />
  );
};

export default EllentonPage;
