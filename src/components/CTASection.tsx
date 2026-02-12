import { useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
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
    <section id="contact" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get Started</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're Here When You Need Us. Call us or request a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+19412584006"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              (941) 258-4006
            </a>
          </div>

          {/* GHL Quote Form Embed */}
          <div
            id="quote-form"
            className="mt-12 bg-card rounded-2xl border border-border card-elevated max-w-xl mx-auto overflow-hidden"
          >
            <iframe
              src="https://api.juniesystems.com/widget/form/P2loR2dW6LgPnGhKf4Px"
              style={{ width: "100%", height: "883px", border: "none", borderRadius: "10px" }}
              id="inline-P2loR2dW6LgPnGhKf4Px"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Get A Quote Form"
              data-height="883"
              data-layout-iframe-id="inline-P2loR2dW6LgPnGhKf4Px"
              data-form-id="P2loR2dW6LgPnGhKf4Px"
              title="Get A Quote Form"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
