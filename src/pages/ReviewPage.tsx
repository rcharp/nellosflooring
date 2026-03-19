import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const ReviewPage = () => {
  useSEO({
    title: "Leave a Review | Nello's Flooring",
    description: "Share your experience with Nello's Flooring. Your feedback helps us improve and helps others find quality flooring service.",
    canonical: "https://nellosflooring.lovable.app/review",
  });

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
              Your feedback helps us improve and helps others find quality flooring service.
            </p>
          </div>
          <div className="bg-card rounded-2xl border border-border card-elevated p-12 text-center">
            <p className="text-muted-foreground">Review form placeholder — connect your review platform here.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewPage;
