import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const BradentonPage = () => {
  useSEO({
    title: "HVAC Services Bradenton FL | AC Repair & Install",
    description: "Professional HVAC services in Bradenton FL. AC repair, installation, maintenance & duct cleaning. Family owned, licensed & insured. Call (555) 123-4567.",
    canonical: "https://example.com/areas/bradenton",
  });

  return (
    <ServiceAreaPage
      city="Bradenton, FL"
      tagline="Your Trusted HVAC Partner"
      intro="We offer reliable and professional HVAC services in Bradenton, FL. Whether you need heating, cooling, or ventilation services, our experienced technicians are ready to assist you with installations, repairs, and maintenance."
    />
  );
};

export default BradentonPage;
