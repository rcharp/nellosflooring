import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const SandAndRefinishPage = () => {
  useSEO({
    title: "Hardwood Sand & Refinish | Nello's Flooring",
    description: "Professional hardwood floor sanding and refinishing. Restore your floors to like-new condition. Over 40 years of experience. Call (727) 644-2305.",
    canonical: "https://example.com/services/sand-and-refinish",
  });

  return (
    <ServicePage
      title="Sand & Refinish Services"
      subtitle="Restore Your Floors"
      intro="Don't replace your hardwood floors — restore them! Nello's Flooring specializes in professional sanding and refinishing that brings worn, scratched, or faded hardwood floors back to their original beauty."
      sections={[
        {
          heading: "Our Sand & Refinish Process",
          content: [
            "Thorough inspection and assessment of your existing floors",
            "Professional sanding to remove old finish, scratches, and imperfections",
            "Custom stain color selection to match your décor",
            "Multiple coats of premium polyurethane finish",
            "Final inspection and touch-up for a flawless result",
          ],
        },
        {
          heading: "When Should You Refinish?",
          content: "If your hardwood floors show visible wear, scratches, discoloration, or the finish is wearing through to bare wood, it's time for a refinish. Most hardwood floors should be refinished every 7-10 years depending on traffic. Refinishing costs a fraction of replacement and can make your floors look brand new.",
        },
      ]}
      benefits={{
        heading: "Benefits of Sand & Refinish",
        items: [
          "Fraction of the cost of new hardwood installation",
          "Restores floors to like-new appearance",
          "Custom stain colors to update your home's look",
          "Extends the life of your existing floors by decades",
          "Removes deep scratches, stains, and wear marks",
          "Increases home value and visual appeal",
        ],
      }}
    />
  );
};

export default SandAndRefinishPage;
