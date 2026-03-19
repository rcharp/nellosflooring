import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Check, Phone, ArrowRight, MapPin } from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModal";
import heroServices from "@/assets/hero-bg.png";
import useSEO from "@/hooks/useSEO";

const AboutPage = () => {
  const { openQuoteModal } = useQuoteModal();

  useSEO({
    title: "About Us | Nello's Flooring | Over 40 Years of Experience",
    description: "Learn about Nello's Flooring — family-owned flooring company with over 40 years of experience. Fully insured. Call (888) 244-4513.",
    canonical: "https://example.com/about",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-black">
          <img
            src={heroServices}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
            onLoad={(e) => { (e.target as HTMLImageElement).style.opacity = '1'; }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Who We Are</span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground mt-3">About Nello's Flooring</h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">
                Family-owned, community-driven flooring services you can count on.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Meet the Owner */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl shadow-xl w-full aspect-[4/3] bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-20 h-20 rounded-full bg-muted-foreground/10 mx-auto mb-4 flex items-center justify-center text-3xl font-bold">👤</div>
                    <p className="font-semibold">Your Photo Here</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Meet the Owner</span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Hey, I'm Angel Antonello!</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I grew up in the flooring business, learning from my father as a young boy. I have always been in the flooring industry and through the years have expanded my knowledge and expertise within the industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At Nello's Flooring, we're a family owned and operated business. My commitment is simple: expert craftsmanship, fair prices, and making sure you're completely satisfied with your new floors. When you call us, you're not just getting a contractor — you're getting a neighbor who cares about your home.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: "#0f172a" }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 order-2 lg:order-1"
              >
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">What We Do</span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground">
                  Top-Quality Products & Exceptional Craftsmanship
                </h2>
                <p className="text-primary-foreground/70 leading-relaxed">
                  We only use industry-leading flooring materials and products. Our professional flooring installers are committed to providing our customers with expert, reliable, and affordable services.
                </p>
                <ul className="space-y-3">
                  {[
                    "Over 40 years of flooring industry experience",
                    "Fully insured for commercial and residential projects",
                    "Family-owned and locally operated",
                    "Expert installation of hardwood, LVP, and laminate",
                    "Professional sand and refinish services",
                    "Satisfaction guaranteed on every job",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-primary-foreground/80">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="rounded-2xl shadow-xl w-full aspect-[4/3] bg-white/5 flex items-center justify-center border border-white/10">
                  <div className="text-center text-primary-foreground/50">
                    <p className="font-semibold">Your Work Photo Here</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services & Areas Links */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Services</h2>
                <p className="text-muted-foreground mb-6">We offer comprehensive flooring solutions for homes and businesses.</p>
                <ul className="space-y-3">
                  {[
                    { label: "Hardwood Flooring — solid and engineered wood", href: "/services/hardwood-flooring" },
                    { label: "Luxury Vinyl Plank — waterproof and durable", href: "/services/luxury-vinyl-plank" },
                    { label: "Laminate Flooring — affordable elegance", href: "/services/laminate-flooring" },
                    { label: "Sand & Refinish — restore your hardwood", href: "/services/sand-and-refinish" },
                    { label: "Floor Cleaning — keep them beautiful", href: "/services/floor-cleaning" },
                  ].map((s) => (
                    <li key={s.href}>
                      <a href={s.href} className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                        <ArrowRight className="w-4 h-4 text-secondary shrink-0" />
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Areas We Serve</h2>
                <p className="text-muted-foreground mb-6">Proudly serving these communities and beyond. <a href="/contact" className="text-secondary hover:underline">Contact us</a> to see if we cover your area.</p>
                <ul className="space-y-3">
                  {[
                    { label: "Manatee County", href: "/areas/manatee-county" },
                    { label: "Sarasota County", href: "/areas/sarasota-county" },
                    { label: "Pinellas County", href: "/areas/pinellas-county" },
                  ].map((a) => (
                    <li key={a.href}>
                      <a href={a.href} className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                        <MapPin className="w-4 h-4 text-secondary shrink-0" />
                        {a.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
