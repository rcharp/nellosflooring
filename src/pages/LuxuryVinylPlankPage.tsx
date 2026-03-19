import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const LuxuryVinylPlankPage = () => {
  useSEO({
    title: "Luxury Vinyl Plank Installation | Nello's Flooring",
    description: "Professional luxury vinyl plank (LVP) installation. Waterproof, durable, and beautiful. Over 40 years of experience. Call (888) 244-4513.",
    canonical: "https://nellosflooring.lovable.app/services/luxury-vinyl-plank",
  });

  return (
    <ServicePage
      title="Luxury Vinyl Plank Installation"
      subtitle="Modern & Durable"
      intro="Luxury vinyl plank (LVP) combines the beauty of natural wood with the durability and water resistance your Florida home needs. Nello's Flooring provides expert LVP installation throughout Manatee, Sarasota, and Pinellas counties."
      sections={[
        {
          heading: "Our LVP Installation Services",
          content: [
            "Full-home luxury vinyl plank installation",
            "Waterproof flooring for kitchens, bathrooms, and laundry rooms",
            "Realistic wood and stone looks with advanced printing technology",
            "Click-lock and glue-down installation methods",
            "Subfloor preparation and moisture testing",
          ],
        },
        {
          heading: "Why Choose Luxury Vinyl Plank?",
          content: "LVP is one of the fastest-growing flooring options for good reason. It's 100% waterproof, scratch-resistant, and incredibly easy to maintain. Modern LVP looks and feels remarkably like real hardwood at a fraction of the cost, making it perfect for families with kids and pets.",
        },
      ]}
      benefits={{
        heading: "Benefits of Luxury Vinyl Plank",
        items: [
          "100% waterproof — perfect for Florida homes",
          "Scratch and dent resistant for high-traffic areas",
          "Realistic wood and stone visuals",
          "Comfortable underfoot with built-in padding options",
          "Easy to clean and maintain",
          "Budget-friendly alternative to hardwood",
        ],
      }}
    />
  );
};

export default LuxuryVinylPlankPage;
