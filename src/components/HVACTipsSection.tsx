import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { motion } from "framer-motion";
import flooringTips from "@/data/hvacTips";

const HVACTipsSection = () => {
  const featured = flooringTips.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-base font-semibold text-primary uppercase tracking-wider">Expert Advice</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Flooring Tips & Guides
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Helpful articles from our experienced flooring professionals to keep your floors looking their best.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {featured.map((tip, i) => (
            <motion.a
              key={tip.slug}
              href={`/tips/${tip.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl p-7 border border-secondary/30 hover:border-secondary/60 transition-all bg-primary"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-secondary uppercase">{tip.category}</span>
                <span className="text-xs text-primary-foreground/40">•</span>
                <span className="flex items-center gap-1 text-xs text-primary-foreground/50">
                  <Clock className="w-3 h-3" />
                  {tip.readTime}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-primary-foreground mb-3 group-hover:text-secondary transition-colors leading-snug">
                {tip.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4 line-clamp-3">
                {tip.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary group-hover:gap-3 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="/tips"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-secondary border border-secondary hover:bg-secondary/10 transition-colors"
            style={{ borderRadius: "10px" }}
          >
            View All Tips <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HVACTipsSection;
