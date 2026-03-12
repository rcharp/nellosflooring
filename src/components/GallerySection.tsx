import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

import grandFireplace from "@/assets/gallery/grand-fireplace-hardwood.jpg";
import waterfrontAfterWide from "@/assets/gallery/waterfront-after-wide.jpg";
import stairsAfterBottom from "@/assets/gallery/stairs-after-bottom.jpg";
import waterfrontAfter from "@/assets/gallery/waterfront-after.jpg";
import stairsBefore from "@/assets/gallery/stairs-before.jpg";
import waterfrontBefore from "@/assets/gallery/waterfront-before.jpg";

const featuredImages = [
  { src: grandFireplace, alt: "Grand living room with fireplace and hardwood flooring" },
  { src: waterfrontAfterWide, alt: "Waterfront home with new hardwood flooring" },
  { src: stairsAfterBottom, alt: "Staircase with dark hardwood treads" },
  { src: waterfrontAfter, alt: "Waterfront living room with hardwood floors" },
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

      {/* Featured photos grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px] mb-12">
        {featuredImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`rounded-xl overflow-hidden relative group ${i < 2 ? "col-span-2 row-span-2" : ""}`}
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

      {/* Before & After Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-8">Before & After</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <BeforeAfterSlider
            before={stairsBefore}
            after={stairsAfterBottom}
            beforeAlt="Worn stairs before renovation"
            afterAlt="Beautiful dark hardwood stairs after"
            label="Staircase Renovation"
          />
          <BeforeAfterSlider
            before={waterfrontBefore}
            after={waterfrontAfterWide}
            beforeAlt="Living room with old carpet"
            afterAlt="Living room with new hardwood"
            label="Waterfront Home"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center"
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
