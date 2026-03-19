import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const PinellasCountyPage = () => {
  useSEO({
    title: "Flooring Services Pinellas County | Nello's Flooring",
    description: "Expert flooring services in Pinellas County. Hardwood, LVP, laminate installation, sand & refinish, and floor cleaning. Call (888) 244-4513.",
    canonical: "https://nellosflooring.lovable.app/areas/pinellas-county",
  });

  return (
    <ServiceAreaPage
      city="Pinellas County"
      tagline="Quality Floors, Expert Service"
      intro="Nello's Flooring brings over 40 years of flooring expertise to Pinellas County. From hardwood installation to floor refinishing, we deliver beautiful, lasting results for every project."
    />
  );
};

export default PinellasCountyPage;
