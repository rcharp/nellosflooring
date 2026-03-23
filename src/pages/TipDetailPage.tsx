import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, BookOpen, MapPin } from "lucide-react";
import flooringTips from "@/data/hvacTips";
import useSEO from "@/hooks/useSEO";

const TipDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tip = flooringTips.find((t) => t.slug === slug);
  
  if (!tip) return <Navigate to="/tips" replace />;

  const otherTips = flooringTips.filter((t) => t.slug !== slug).slice(0, 3);

  useSEO({
    title: `${tip.title} | Nello's Flooring`,
    description: tip.excerpt,
    canonical: `https://nellosflooring.lovable.app/tips/${tip.slug}`,
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground transition-colors">Home</a>
              <span>/</span>
              <a href="/tips" className="hover:text-foreground transition-colors">Flooring Tips</a>
              <span>/</span>
              <span className="text-foreground truncate">{tip.title}</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs font-semibold rounded-full border bg-secondary/10 text-secondary border-secondary/30">
                  {tip.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  {tip.readTime}
                </span>
              </div>
              <h1 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {tip.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed italic">
                {tip.excerpt}
              </p>

              <div className="space-y-6">
                {tip.content.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Related Services */}
              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Related Services</h2>
                <div className="flex flex-wrap gap-3">
                  {tip.relatedServices.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-secondary/30 text-sm font-semibold text-foreground hover:bg-secondary/10 transition-colors"
                    >
                      {s.label} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Related Areas */}
              {tip.relatedAreas && (
                <div className="mt-8">
                  <h2 className="font-heading text-xl font-bold text-foreground mb-4">We Serve These Areas</h2>
                  <div className="flex flex-wrap gap-3">
                    {tip.relatedAreas.map((a) => (
                      <a
                        key={a.href}
                        href={a.href}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 text-sm font-medium text-foreground hover:bg-secondary/10 transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5 text-secondary" />
                        {a.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </article>

        {/* More Tips */}
        <section className="py-12 lg:py-16 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">More Flooring Tips</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherTips.map((t) => (
                <a
                  key={t.slug}
                  href={`/tips/${t.slug}`}
                  className="group rounded-xl p-6 border border-secondary/30 hover:border-secondary/60 transition-all bg-primary"
                >
                  <span className="text-xs font-semibold text-secondary uppercase">{t.category}</span>
                  <h3 className="font-heading text-base font-bold text-primary-foreground mt-2 mb-2 group-hover:text-secondary transition-colors leading-snug">
                    {t.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/tips" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                <ArrowLeft className="w-4 h-4" /> View All Flooring Tips
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16 border-t border-border text-center">
          <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
            <p className="text-muted-foreground text-lg">
              Have questions? <a href="/contact" className="text-secondary font-semibold hover:underline">Contact our team</a> or call{" "}
              <a href="tel:+18882444513" className="text-secondary font-semibold hover:underline">(888) 244-4513</a> for expert advice.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TipDetailPage;
