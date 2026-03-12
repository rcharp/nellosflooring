import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
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
import stairsAfterTop from "@/assets/gallery/stairs-after-top.jpg";
import stairsAfterDown from "@/assets/gallery/stairs-after-down.jpg";
import stairsAfterBottom from "@/assets/gallery/stairs-after-bottom.jpg";
import waterfrontAfter from "@/assets/gallery/waterfront-after.jpg";
import waterfrontAfterWide from "@/assets/gallery/waterfront-after-wide.jpg";
import waterfrontLiving from "@/assets/gallery/waterfront-living.jpg";
import lightOakStairs from "@/assets/gallery/light-oak-stairs.jpg";
import stairsBefore from "@/assets/gallery/stairs-before.jpg";
import waterfrontBefore from "@/assets/gallery/waterfront-before.jpg";
import fireplaceBefore from "@/assets/gallery/fireplace-before.jpg";

const galleryImages = [
  { src: grandFireplace, alt: "Grand living room with fireplace and hardwood flooring", category: "Hardwood" },
  { src: grandLiving, alt: "Open floor plan with hardwood and stone columns", category: "Hardwood" },
  { src: waterfrontAfter, alt: "Waterfront living room with new hardwood floors", category: "Hardwood" },
  { src: waterfrontAfterWide, alt: "Waterfront home wide angle hardwood flooring", category: "Hardwood" },
  { src: fireplaceRoom, alt: "Living room with ornate fireplace and hardwood floors", category: "Hardwood" },
  { src: stoneArchway, alt: "Stone archway with hardwood flooring and staircase", category: "Hardwood" },
  { src: hallwayArches, alt: "Elegant hallway with hardwood flooring and stone arches", category: "Hardwood" },
  { src: openFloor, alt: "Spacious room with chandelier and hardwood flooring", category: "Hardwood" },
  { src: grandChandelier, alt: "Grand room with chandelier and rich hardwood floors", category: "Hardwood" },
  { src: bedroomHardwood, alt: "Bedroom with beautiful hardwood flooring", category: "Hardwood" },
  { src: waterfrontLiving, alt: "Coastal living room with hardwood floors", category: "Hardwood" },
  { src: stairsAfterBottom, alt: "Staircase with dark hardwood treads - finished", category: "Stairs" },
  { src: stairsAfterTop, alt: "Hardwood staircase from top view", category: "Stairs" },
  { src: stairsAfterDown, alt: "Hardwood staircase looking down", category: "Stairs" },
  { src: lightOakStairs, alt: "Light oak staircase with white risers", category: "Stairs" },
  { src: tileTransition, alt: "Hardwood to tile flooring transition detail", category: "Hardwood" },
  { src: commercialGym, alt: "Commercial gym rubber flooring installation", category: "Commercial" },
];

const beforeAfterPairs = [
  {
    before: stairsBefore,
    after: stairsAfterBottom,
    beforeAlt: "Worn stairs before renovation",
    afterAlt: "Beautiful dark hardwood stairs after installation",
    label: "Staircase Renovation",
  },
  {
    before: waterfrontBefore,
    after: waterfrontAfterWide,
    beforeAlt: "Living room with old carpet",
    afterAlt: "Living room with new hardwood flooring",
    label: "Waterfront Home Transformation",
  },
  {
    before: fireplaceBefore,
    after: grandFireplace,
    beforeAlt: "Grand room before floor refinishing",
    afterAlt: "Grand room with refinished hardwood floors",
    label: "Grand Room Refinish",
  },
];

const categories = ["All", "Hardwood", "Stairs", "Commercial"];

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
        {/* Before & After Section */}
        <section className="pt-32 pb-16 section-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Transformations</span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
                Before & After
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Drag the slider to see the dramatic transformation. Our work speaks for itself.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {beforeAfterPairs.map((pair, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <BeforeAfterSlider {...pair} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Gallery */}
        <section className="pb-20 lg:pb-28 section-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Work</span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
                Project Gallery
              </h2>
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
