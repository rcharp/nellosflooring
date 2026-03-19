import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import heroServices from "@/assets/hero-bg.png";
import useSEO from "@/hooks/useSEO";

const ContactPage = () => {
  useSEO({
    title: "Contact Us | Get a Free Quote | (888) 244-4513",
    description: "Contact Nello's Flooring for a free quote. Hardwood, LVP, laminate installation, sand & refinish. Call (888) 244-4513. Mon-Fri 8am-5pm.",
    canonical: "https://example.com/contact",
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
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Get In Touch</span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground mt-3">Contact Us</h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">
                Ready to transform your floors or have a question? We're here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Let's Talk
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you need <a href="/services/hardwood-flooring" className="text-secondary hover:underline">hardwood installation</a>, <a href="/services/sand-and-refinish" className="text-secondary hover:underline">floor refinishing</a>, or just have questions about your flooring options — we're here for you. We also offer <a href="/services/luxury-vinyl-plank" className="text-secondary hover:underline">luxury vinyl plank</a>, <a href="/services/laminate-flooring" className="text-secondary hover:underline">laminate</a>, and <a href="/services/floor-cleaning" className="text-secondary hover:underline">floor cleaning</a> services. Reach out and we'll get back to you as quickly as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+18882444513" className="text-muted-foreground hover:text-secondary transition-colors">
                        (888) 244-4513
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:nellosflooring@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors">
                        nellosflooring@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">2508 6th Ct E, Ellenton, FL 34222</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 8am - 5pm</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden border border-border shadow-md" style={{ height: 250 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5!2d-82.527!3d27.522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMxJzE5LjIiTiA4MsKwMzEnMzcuMiJX!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nello's Flooring Location"
                  />
                </div>
              </motion.div>

              {/* Quote Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <QuoteForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
