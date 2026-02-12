import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";

const CTASection = () => {
  const { openQuoteModal } = useQuoteModal();

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
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              (941) 258-4006
            </a>
            <button
              onClick={openQuoteModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full border border-secondary hover:opacity-90 transition-opacity"
            >
              Get Free Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
