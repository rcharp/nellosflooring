import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const ManateeCountyPage = () => {
  useSEO({
    title: "Flooring Services Manatee County | Nello's Flooring",
    description: "Expert flooring services in Manatee County. Hardwood, LVP, laminate installation, sand & refinish, and floor cleaning. Call (888) 244-4513.",
    canonical: "https://example.com/areas/manatee-county",
  });

  return (
    <ServiceAreaPage
      city="Manatee County"
      tagline="Your Trusted Flooring Partner"
      intro="Nello's Flooring provides professional flooring installation, refinishing, and cleaning services throughout Manatee County. With over 40 years of experience, we deliver beautiful results for homes and businesses."
    />
  );
};

export default ManateeCountyPage;
