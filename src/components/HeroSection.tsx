import { useState, useEffect } from "react";
import { ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import heroHvac from "@/assets/hero-hvac.jpg";
import heroRepair from "@/assets/hero-ac-repair.jpg";
import heroInstall from "@/assets/hero-ac-install.jpg";

const images = [heroHvac, heroRepair, heroInstall];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
                Comfort You Can{" "}
                <span className="text-gradient">Count On.</span>
                <br />
                Service You Can{" "}
                <span className="text-accent-gradient">Trust.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              When your AC breaks down in July or your furnace fails in January, you need someone who shows up—fast. We're your neighbors, and we treat your home like our own.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-bold text-primary"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Trusted by 100+ happy customers!</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={openQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-base"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+19412584006"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card text-foreground font-semibold rounded-full border border-border hover:bg-secondary transition-colors text-base"
              >
                (941) 258-4006
              </a>
            </motion.div>

            {/* Review badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 pt-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">Google</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">Facebook</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="HVAC service"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentImage ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
