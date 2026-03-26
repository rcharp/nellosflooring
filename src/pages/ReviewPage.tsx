import { useState } from "react";
import { Star, ArrowLeft, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import useSEO from "@/hooks/useSEO";

const FEEDBACK_WEBHOOK = "https://services.leadconnectorhq.com/hooks/GIStSvIcFqux99Wx6sGI/webhook-trigger/d912b6e3-8144-4331-93c8-4faf86e98104";
const GOOGLE_REVIEW_URL = "https://g.page/r/CWxVXQZ2ofJsEAE/review";

const ratings = [
  { stars: 5, label: "Excellent" },
  { stars: 4, label: "Great" },
  { stars: 3, label: "Okay" },
  { stars: 2, label: "Poor" },
  { stars: 1, label: "Terrible" },
];

const ReviewPage = () => {
  useSEO({
    title: "Leave a Review | Nello's Flooring",
    description: "Share your experience with Nello's Flooring.",
    canonical: "https://nellosflooring.lovable.app/review",
  });

  const [view, setView] = useState<"rating" | "redirect" | "feedback" | "thanks">("rating");
  const [selectedRating, setSelectedRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleRating = (stars: number) => {
    setSelectedRating(stars);
    if (stars >= 4) {
      window.open(GOOGLE_REVIEW_URL, "_blank");
    } else {
      setView("feedback");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch(FEEDBACK_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating: selectedRating,
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });
      setView("thanks");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="overflow-hidden relative">
          {/* Rating View */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              view === "rating"
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="bg-card rounded-2xl border border-border shadow-lg p-8 md:p-12 text-center space-y-8">
              <div className="space-y-2">
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  How was your experience?
                </h1>
                <p className="text-muted-foreground">We'd love to hear your feedback</p>
              </div>

              <div className="space-y-3">
                {ratings.map(({ stars, label }) => (
                  <button
                    key={stars}
                    onClick={() => handleRating(stars)}
                    className="w-full flex items-center gap-4 px-6 py-4 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i < stars
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Feedback Form View */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              view === "feedback"
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="bg-card rounded-2xl border border-border shadow-lg p-8 md:p-12 space-y-6">
              <div className="text-center space-y-2">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Tell us more
                </h2>
                <p className="text-muted-foreground">
                  We're sorry to hear that. Please let us know how we can improve.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-semibold text-foreground">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reviewPhone" className="font-semibold text-foreground">Phone</Label>
                  <Input
                    id="reviewPhone"
                    type="tel"
                    inputMode="numeric"
                    placeholder="Your phone number"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => {
                      const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setFormData({ ...formData, phone: digits });
                    }}
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reviewMessage" className="font-semibold text-foreground">Message</Label>
                  <Textarea
                    id="reviewMessage"
                    placeholder="Tell us what happened..."
                    maxLength={1000}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg font-bold rounded-full"
                >
                  {isSubmitting ? "Sending..." : "Submit Feedback"}
                </Button>
              </form>

              <button
                onClick={() => setView("rating")}
                className="flex items-center gap-1 mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to ratings
              </button>
            </div>
          </div>

          {/* Thank You View */}
          {view === "thanks" && (
            <div className="bg-card rounded-2xl border border-border shadow-lg p-12 text-center space-y-4">
              <h2 className="font-heading text-3xl font-bold text-foreground">Thank You!</h2>
              <p className="text-muted-foreground">Your feedback helps us improve. We appreciate you taking the time.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
