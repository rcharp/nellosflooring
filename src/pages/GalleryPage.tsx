import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import useSEO from "@/hooks/useSEO";
import { Image } from "lucide-react";

const placeholderImages = [
  "Hardwood installation",
  "Floor refinishing project",
  "Luxury vinyl plank install",
  "Laminate flooring",
  "Sand and refinish",
  "Completed hardwood",
  "Kitchen flooring",
  "Living room floors",
  "Commercial flooring",
  "Engineered hardwood",
  "Custom stain work",
  "Before and after",
  "Bedroom flooring",
  "Hallway installation",
  "Wide plank hardwood",
  "LVP bathroom install",
  "Entryway flooring",
  "Dining room floors",
];

const GalleryPage = () => {
  useSEO({
    title: "Flooring Project Gallery | Nello's Flooring",
    description: "Browse photos of hardwood, LVP, and laminate flooring installations by Nello's Flooring. See our quality work firsthand.",
    canonical: "https://example.com/gallery",
  });

  return (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="pt-32 pb-20 lg:pb-28 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Work</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Project Gallery
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Browse photos from our recent flooring installations, refinishing, and cleaning projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {placeholderImages.map((label, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-xl overflow-hidden aspect-[4/3] bg-muted flex flex-col items-center justify-center gap-3 border border-border"
              >
                <Image className="w-10 h-10 text-muted-foreground/30" />
                <span className="text-xs text-muted-foreground/50 font-medium px-4 text-center">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
    <Footer />
  </div>
  );
};

export default GalleryPage;
