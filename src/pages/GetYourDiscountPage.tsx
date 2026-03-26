import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/c53B26PcZFpdhgC5tp5U/webhook-trigger/a73eec65-d51a-488a-8aee-8e1a2d635aaf";

const GetYourDiscountPage = () => {
  useSEO({
    title: "Get Your Discount | Nello's Flooring",
    description: "Claim your exclusive discount on professional flooring services from Nello's Flooring.",
    canonical: "https://nellosflooring.lovable.app/get-your-discount",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    summary: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.summary.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (formData.phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!formData.consent) {
      toast.error("Please accept the terms & conditions.");
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.fullName.trim(),
          phone: formData.phone.trim(),
          summary: formData.summary.trim(),
          consent: formData.consent,
        }),
      });
      setIsSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">
          {isSubmitted ? (
            <div className="rounded-2xl border-2 border-secondary p-8 shadow-2xl bg-primary flex flex-col items-center justify-center text-center min-h-[400px]">
              <h2 className="font-heading font-bold text-white text-3xl mb-4">THANK YOU!</h2>
              <p className="text-white/80 text-lg">We got your request and will be in touch shortly!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border-2 border-secondary p-8 space-y-6 shadow-2xl bg-primary">
              <div className="text-center space-y-2 pb-2">
                <h1 className="font-heading font-bold text-white text-3xl">Nello's Flooring</h1>
                <p className="font-heading font-bold text-secondary text-xl">Get Your Discount!</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-white font-semibold">
                  Full Name <span className="text-secondary">*</span>
                </Label>
                <Input
                  id="fullName"
                  placeholder="John Smith"
                  required
                  maxLength={100}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white font-semibold">
                  Phone <span className="text-secondary">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="(888) 123-4567"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData({ ...formData, phone: digits });
                  }}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary" className="text-white font-semibold">
                  Short summary of the work you need! <span className="text-secondary">*</span>
                </Label>
                <Textarea
                  id="summary"
                  placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                  required
                  maxLength={1000}
                  rows={4}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked === true })}
                  className="mt-1 border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                />
                <Label htmlFor="consent" className="text-white/70 text-xs leading-relaxed font-normal cursor-pointer">
                  I agree to the terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-bold text-lg py-6 hover:opacity-90 transition-opacity bg-accent text-accent-foreground rounded-[10px]"
              >
                {isSubmitting ? "Sending..." : "🎟️ GET MY DISCOUNT"}
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetYourDiscountPage;
