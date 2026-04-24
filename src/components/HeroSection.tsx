import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import QuoteForm from "./QuoteForm";
import heroBg from "@/assets/hero-bg-new.jpg";

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

      <div className="container mx-auto px-4 lg:px-8 pt-32 lg:pt-44 pb-16 lg:pb-24 relative z-10">
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
                <span className="text-secondary-color">Expert Workmanship.</span>
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

          </div>

          {/* Right - Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="quote-form"
            className="w-full lg:w-[520px] lg:ml-auto"
          >
            <QuoteForm style={{ backgroundColor: "hsla(42, 35%, 18%, 0.6)" }} />
          </motion.div>
        </div>

      </div>
    </section>
    </>
  );
};

export default HeroSection;
