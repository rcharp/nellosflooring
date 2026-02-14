import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import QuoteForm from "@/components/QuoteForm";
import heroServices from "@/assets/hero-services.jpg";
import useSEO from "@/hooks/useSEO";

const TestQuotePage = () => {
  useSEO({
    title: "Get A Quote | Emmons Air | (941) 258-4006",
    description:
      "Request a free HVAC quote from Emmons Air. AC repair, installation, and maintenance in Palmetto & Bradenton FL.",
    canonical: "https://emmonsair.com/testquote",
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
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Free Estimate
              </span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground mt-3">
                Get A Free Quote
              </h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">
                Fill out the form below and we'll get back to you with a free
                quote as fast as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestQuotePage;
