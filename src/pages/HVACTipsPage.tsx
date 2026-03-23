import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import heroServices from "@/assets/hero-bg.png";
import flooringTips from "@/data/hvacTips";
import useSEO from "@/hooks/useSEO";

const categoryColors: Record<string, string> = {
  Maintenance: "bg-green-500/10 text-green-400 border-green-500/30",
  Installation: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "Buying Guide": "bg-purple-500/10 text-purple-400 border-purple-500/30",
  "Home Value": "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Refinishing: "bg-red-500/10 text-red-400 border-red-500/30",
  Trends: "bg-teal-500/10 text-teal-400 border-teal-500/30",
};

const HVACTipsPage = () => {
  useSEO({
    title: "Flooring Tips & Guides | Nello's Flooring",
    description:
      "Expert flooring tips. Learn about hardwood care, flooring trends, installation advice, and when to refinish your floors.",
    canonical: "https://nellosflooring.lovable.app/tips",
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
            onLoad={(e) => {
              (e.target as HTMLImageElement).style.opacity = "1";
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-secondary" />
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                  Expert Advice
                </span>
              </div>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground">
                Flooring Tips & Guides
              </h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">
                Practical advice from our experienced flooring professionals to help you choose, maintain, and care for your floors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tips Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {flooringTips.map((tip, i) => (
                <motion.a
                  key={tip.slug}
                  href={`/tips/${tip.slug}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl p-8 border border-secondary/30 hover:border-secondary/60 transition-all bg-primary"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${categoryColors[tip.category] || "bg-secondary/10 text-secondary border-secondary/30"}`}
                    >
                      {tip.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-primary-foreground/50">
                      <Clock className="w-3 h-3" />
                      {tip.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl font-bold text-primary-foreground mb-3 group-hover:text-secondary transition-colors">
                    {tip.title}
                  </h2>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
                    {tip.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 lg:py-16 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <p className="text-muted-foreground text-lg">
              Need professional help? Explore our{" "}
              <a href="/services/hardwood-flooring" className="text-secondary hover:underline font-semibold">hardwood</a>,{" "}
              <a href="/services/luxury-vinyl-plank" className="text-secondary hover:underline font-semibold">LVP</a>,{" "}
              <a href="/services/sand-and-refinish" className="text-secondary hover:underline font-semibold">sand & refinish</a>, and{" "}
              <a href="/services/floor-cleaning" className="text-secondary hover:underline font-semibold">floor cleaning</a>{" "}
              services, or <a href="/contact" className="text-secondary hover:underline font-semibold">contact us</a> for a free quote.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HVACTipsPage;
