import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const FloorCleaningPage = () => {
  useSEO({
    title: "Floor Cleaning Services | Nello's Flooring",
    description: "Professional floor cleaning services. Keep your floors looking their best. Over 40 years of experience. Call (888) 244-4513.",
    canonical: "https://example.com/services/floor-cleaning",
  });

  return (
    <ServicePage
      title="Floor Cleaning Services"
      subtitle="Keep Them Beautiful"
      intro="Regular professional cleaning extends the life and beauty of your floors. Nello's Flooring offers expert floor cleaning services for hardwood, vinyl, and laminate floors throughout our service area."
      sections={[
        {
          heading: "Our Floor Cleaning Services",
          content: [
            "Deep cleaning for hardwood, engineered, and laminate floors",
            "Professional-grade products safe for all floor types",
            "Removal of built-up grime, wax, and residue",
            "Buff and polish services for a renewed shine",
            "Spot treatment for stubborn stains and marks",
          ],
        },
        {
          heading: "Why Professional Cleaning Matters",
          content: "Regular professional cleaning removes dirt and grime that household mopping can't reach. Over time, improper cleaning products and techniques can dull your floors and damage the finish. Our professional-grade equipment and products are specifically designed for each floor type, ensuring a deep clean without harm.",
        },
      ]}
      benefits={{
        heading: "Benefits of Professional Floor Cleaning",
        items: [
          "Extends the life of your flooring investment",
          "Restores shine and luster to dull floors",
          "Removes deep-set dirt and buildup",
          "Safe, floor-specific cleaning products",
          "Prepares floors for recoating or refinishing",
          "Maintains your home's beauty between refinishing",
        ],
      }}
    />
  );
};

export default FloorCleaningPage;
