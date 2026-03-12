import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import grandFireplace from "@/assets/gallery/grand-fireplace-hardwood.jpg";
import grandLiving from "@/assets/gallery/grand-living-columns.jpg";
import fireplaceRoom from "@/assets/gallery/fireplace-living-room.jpg";
import stoneArchway from "@/assets/gallery/stone-archway-staircase.jpg";
import hallwayArches from "@/assets/gallery/hardwood-hallway-arches.jpg";
import openFloor from "@/assets/gallery/open-floor-chandelier.jpg";

const galleryImages = [
  { src: grandFireplace, alt: "Grand living room with fireplace and hardwood flooring", featured: true },
  { src: grandLiving, alt: "Open floor plan with hardwood and stone columns", featured: true },
  { src: fireplaceRoom, alt: "Living room with ornate fireplace and hardwood floors", featured: false },
  { src: stoneArchway, alt: "Stone archway with hardwood flooring and staircase", featured: false },
  { src: hallwayArches, alt: "Elegant hallway with hardwood flooring and stone arches", featured: false },
  { src: openFloor, alt: "Spacious room with chandelier and hardwood flooring", featured: false },
];

const GallerySection = () => (
  <section className="py-20 lg:py-28 section-gradient">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-primary uppercase tracking-wider">Our Work</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
          See Us In Action
        </h2>
      </motion.div>

      {/* Masonry-style grid: 2 large + 4 smaller */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`rounded-xl overflow-hidden relative group ${
              img.featured ? "col-span-2 row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12"
      >
        <Link to="/gallery">
          <Button variant="secondary" size="lg" className="group text-lg px-10 py-6 h-auto">
            View Full Gallery
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default GallerySection;
