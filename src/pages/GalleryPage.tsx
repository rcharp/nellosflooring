import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import useSEO from "@/hooks/useSEO";
import { X } from "lucide-react";

import grandFireplace from "@/assets/gallery/grand-fireplace-hardwood.jpg";
import grandLiving from "@/assets/gallery/grand-living-columns.jpg";
import fireplaceRoom from "@/assets/gallery/fireplace-living-room.jpg";
import stoneArchway from "@/assets/gallery/stone-archway-staircase.jpg";
import hallwayArches from "@/assets/gallery/hardwood-hallway-arches.jpg";
import openFloor from "@/assets/gallery/open-floor-chandelier.jpg";
import grandChandelier from "@/assets/gallery/grand-room-chandelier.jpg";
import bedroomHardwood from "@/assets/gallery/bedroom-hardwood.jpg";
import tileTransition from "@/assets/gallery/hardwood-tile-transition.jpg";
import commercialGym from "@/assets/gallery/commercial-gym-floor.jpg";

const galleryImages = [
  { src: grandFireplace, alt: "Grand living room with fireplace and hardwood flooring", category: "Hardwood" },
  { src: grandLiving, alt: "Open floor plan with hardwood and stone columns", category: "Hardwood" },
  { src: fireplaceRoom, alt: "Living room with ornate fireplace and hardwood floors", category: "Hardwood" },
  { src: stoneArchway, alt: "Stone archway with hardwood flooring and staircase", category: "Hardwood" },
  { src: hallwayArches, alt: "Elegant hallway with hardwood flooring and stone arches", category: "Hardwood" },
  { src: openFloor, alt: "Spacious room with chandelier and hardwood flooring", category: "Hardwood" },
  { src: grandChandelier, alt: "Grand room with chandelier and rich hardwood floors", category: "Hardwood" },
  { src: bedroomHardwood, alt: "Bedroom with beautiful hardwood flooring", category: "Hardwood" },
  { src: tileTransition, alt: "Hardwood to tile flooring transition detail", category: "Hardwood" },
  { src: commercialGym, alt: "Commercial gym rubber flooring installation", category: "Commercial" },
];

const categories = ["All", "Hardwood", "Commercial"];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useSEO({
    title: "Flooring Project Gallery | Nello's Flooring",
    description: "Browse photos of hardwood, LVP, and laminate flooring installations by Nello's Flooring. See our quality work firsthand.",
    canonical: "https://example.com/gallery",
  });

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-20 lg:pb-28 section-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Work</span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
                Project Gallery
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Browse photos from our recent flooring installations, refinishing, and cleaning projects.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.alt}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-xl overflow-hidden aspect-[4/3] relative group cursor-pointer"
                  onClick={() => setLightboxIndex(galleryImages.indexOf(img))}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">{img.alt}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
