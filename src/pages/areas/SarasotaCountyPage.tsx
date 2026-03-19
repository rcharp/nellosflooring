import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const SarasotaCountyPage = () => {
  useSEO({
    title: "Flooring Services Sarasota County | Nello's Flooring",
    description: "Professional flooring services in Sarasota County. Hardwood, LVP, laminate installation, sand & refinish, and floor cleaning. Call (888) 244-4513.",
    canonical: "https://example.com/areas/sarasota-county",
  });

  return (
    <ServiceAreaPage
      city="Sarasota County"
      tagline="Your Flooring Experts"
      intro="Nello's Flooring serves homeowners and businesses throughout Sarasota County with expert flooring installation, refinishing, and cleaning services. Family owned and operated with over 40 years of experience."
    />
  );
};

export default SarasotaCountyPage;
