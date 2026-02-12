import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const ReviewPage = () => {
  useSEO({
    title: "Leave a Review | Emmons Air | Palmetto FL",
    description: "Share your experience with Emmons Air. Your feedback helps us improve and helps others find quality HVAC service in Palmetto & Bradenton.",
    canonical: "https://emmonsair.com/review",
  });

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
              src="https://api.juniesystems.com/widget/form/UPF7Y8V1WfGW9dBEhSu1"
              style={{ width: "100%", height: "600px", border: "none", borderRadius: "10px" }}
              id="inline-UPF7Y8V1WfGW9dBEhSu1"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Review Form"
              data-height="600"
              data-layout-iframe-id="inline-UPF7Y8V1WfGW9dBEhSu1"
              data-form-id="UPF7Y8V1WfGW9dBEhSu1"
              title="Review Form"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewPage;
