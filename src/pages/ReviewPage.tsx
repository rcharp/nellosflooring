import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ReviewPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.juniesystems.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">We Appreciate You</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Leave Us A Review
            </h1>
            <p className="text-muted-foreground mt-4">
              Your feedback helps us improve and helps others find quality HVAC service.
            </p>
          </div>
          <div className="bg-card rounded-2xl border border-border card-elevated overflow-hidden">
            <iframe
              src="https://api.juniesystems.com/widget/survey/GDi5S8ill5dR5K4tNV1Q"
              style={{ border: "none", width: "100%", minHeight: "600px" }}
              scrolling="no"
              id="GDi5S8ill5dR5K4tNV1Q"
              title="Review Survey"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewPage;
