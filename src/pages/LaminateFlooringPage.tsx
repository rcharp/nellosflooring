import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const LaminateFlooringPage = () => {
  useSEO({
    title: "Laminate Flooring Installation | Nello's Flooring",
    description: "Professional laminate flooring installation. Affordable, stylish, and durable. Over 40 years of experience. Call (727) 644-2305.",
    canonical: "https://example.com/services/laminate-flooring",
  });

  return (
    <ServicePage
      title="Laminate Flooring Installation"
      subtitle="Affordable Elegance"
      intro="Laminate flooring offers the look of real wood at an affordable price point. Nello's Flooring provides expert laminate installation with precision and care for homes and businesses throughout our service area."
      sections={[
        {
          heading: "Our Laminate Installation Services",
          content: [
            "Full-home laminate flooring installation",
            "Wide variety of wood-look and tile-look options",
            "Floating floor and click-lock systems",
            "Underlayment selection and installation",
            "Transitions, baseboards, and trim work",
          ],
        },
        {
          heading: "Why Choose Laminate Flooring?",
          content: "Laminate flooring is one of the most cost-effective ways to transform your space. It's scratch-resistant, fade-resistant, and comes in an incredible range of styles. Modern laminate is virtually indistinguishable from real wood and offers excellent durability for busy households.",
        },
      ]}
      benefits={{
        heading: "Benefits of Laminate Flooring",
        items: [
          "Most affordable wood-look flooring option",
          "Scratch, stain, and fade resistant",
          "Quick and clean installation process",
          "Wide variety of styles, colors, and textures",
          "Easy to clean and maintain",
          "Great for rentals and budget-conscious projects",
        ],
      }}
    />
  );
};

export default LaminateFlooringPage;
