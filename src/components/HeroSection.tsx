import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import QuoteForm from "./QuoteForm";
import heroBg from "@/assets/hero-flooring.jpg";

const HeroSection = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
    <section className="relative overflow-hidden max-w-[100vw]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-[2.6rem] lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-primary-foreground text-center lg:text-left">
                Beautiful Floors.{" "}
                <span className="text-secondary-color">Expert Craft.</span>
                <br />
                <span className="block mt-5 lg:mt-0">Results You Can{" "}
                <span className="text-secondary-color">Trust.</span></span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-primary-foreground/70 max-w-lg leading-relaxed break-words"
            >
              Whether you're upgrading your home with stunning hardwood or refreshing worn floors with a professional sand and refinish, you deserve a team that treats your home like their own.
              <br /><br />
              <strong>Nello's Flooring</strong> has been providing high-quality flooring installation, refinishing, and cleaning services for hundreds of families and businesses across Manatee, Sarasota, and Pinellas counties for over 40 years.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-primary bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-base text-primary-foreground/70">Trusted by 100+ happy customers!</span>
              </div>
            </motion.div>

            {/* Review badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6 pt-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-primary-foreground">Facebook</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="quote-form"
            className="w-full lg:w-[520px] lg:ml-auto"
          >
            <QuoteForm style={{ backgroundColor: "rgba(15, 23, 42, 0.6)" }} />
          </motion.div>
        </div>

      </div>
    </section>
    </>
  );
};

export default HeroSection;
