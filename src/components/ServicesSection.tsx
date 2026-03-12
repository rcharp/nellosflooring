import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import hardwoodImg from "@/assets/gallery/fireplace-living-room.jpg";
import lvpImg from "@/assets/gallery/hotworx-lobby.jpg";
import refinishImg from "@/assets/gallery/grand-fireplace-hardwood.jpg";
import laminateImg from "@/assets/gallery/waterfront-living-wide.jpg";

const services = [
  {
    image: hardwoodImg,
    title: "Hardwood Flooring",
    href: "/services/hardwood-flooring",
    features: [
      "Solid and engineered wood installation",
      "Wide variety of wood species and finishes",
      "Expert craftsmanship for lasting beauty",
      "Residential and commercial projects",
    ],
  },
  {
    image: heroInstall,
    title: "Luxury Vinyl Plank",
    href: "/services/luxury-vinyl-plank",
    features: [
      "Waterproof and durable flooring solution",
      "Realistic wood and stone looks",
      "Perfect for high-traffic areas",
      "Quick and clean installation",
    ],
  },
  {
    image: serviceMaintenance,
    title: "Sand & Refinish",
    href: "/services/sand-and-refinish",
    features: [
      "Restore worn hardwood floors to like-new",
      "Custom stain colors available",
      "Dustless sanding technology",
      "Extend the life of your existing floors",
    ],
  },
  {
    image: serviceDuct,
    title: "Laminate Flooring",
    href: "/services/laminate-flooring",
    features: [
      "Affordable and stylish flooring option",
      "Scratch and dent resistant",
      "Easy maintenance and cleaning",
      "Wide range of styles and textures",
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-primary uppercase tracking-wider">What We Do</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
          Homeowners Across Manatee, Sarasota & Pinellas Counties Trust Nello's Flooring
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Complete flooring solutions for your home and business needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden card-elevated border border-secondary/30 group"
            style={{ backgroundColor: "#0f172a" }}
          >
            <a href={service.href} className="block aspect-[16/9] overflow-hidden cursor-pointer">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </a>
            <div className="p-8">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">{service.title}</h3>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-primary-foreground/80">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-base font-semibold text-secondary hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
