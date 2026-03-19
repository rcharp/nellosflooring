import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const HardwoodFlooringPage = () => {
  useSEO({
    title: "Hardwood Flooring Installation | Nello's Flooring",
    description: "Expert hardwood flooring installation. Solid and engineered wood floors. Over 40 years of experience. Call (888) 244-4513.",
    canonical: "https://example.com/services/hardwood-flooring",
  });

  return (
    <ServicePage
      title="Hardwood Flooring Installation"
      subtitle="Timeless Beauty"
      intro="Nothing matches the warmth and elegance of real hardwood floors. Whether you prefer solid wood or engineered hardwood, Nello's Flooring delivers expert installation with over 40 years of craftsmanship."
      sections={[
        {
          heading: "Our Hardwood Flooring Services",
          content: [
            "Solid hardwood installation — oak, maple, hickory, walnut, and more",
            "Engineered hardwood installation — ideal for Florida's humidity",
            "Wide plank and specialty wood installations",
            "Subfloor preparation and leveling",
            "Transitions and trim work for a polished finish",
          ],
        },
        {
          heading: "Why Choose Hardwood Floors?",
          content: "Hardwood floors add timeless beauty and value to any home. They're durable, long-lasting, and can be refinished multiple times throughout their lifetime. With proper care, hardwood floors can last 50+ years, making them one of the best long-term investments for your home.",
        },
        {
          heading: "Why Choose Nello's Flooring?",
          content: [
            "Over 40 years of experience in the flooring industry",
            "Fully insured for residential and commercial projects",
            "Family-owned and locally operated",
            "Expert craftsmanship on every project",
            "Upfront, transparent pricing — no hidden fees",
          ],
        },
      ]}
      benefits={{
        heading: "Benefits of Hardwood Flooring",
        items: [
          "Increases home value and buyer appeal",
          "Extremely durable — lasts 50+ years with proper care",
          "Can be sanded and refinished multiple times",
          "Hypoallergenic — doesn't trap dust or allergens",
          "Timeless aesthetic that never goes out of style",
          "Wide variety of species, colors, and finishes",
        ],
      }}
    />
  );
};

export default HardwoodFlooringPage;
