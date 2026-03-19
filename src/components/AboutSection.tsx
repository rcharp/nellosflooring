import { MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-base font-semibold text-primary uppercase tracking-wider">About Us</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            Family Owned. Locally Operated.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We are a family owned and operated flooring company. Owner Angel Antonello grew up in the business learning from his father as a young boy. He has always been in the flooring industry and through the years has expanded his knowledge and expertise within the industry.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When you choose Nello's Flooring, you're getting more than just a flooring installer—you're getting a partner who's invested in making your home beautiful. We answer our phones, show up on time, and stand behind every job we complete.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Address</div>
                <div className="text-base font-semibold text-foreground">2508 6th Ct E, Ellenton, FL 34222</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:+18882444513" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                  (888) 244-4513
                </a>
              </div>
           </div>
          </div>
          <a href="/about" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all mt-2">
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-muted flex items-center justify-center" style={{ height: 450 }}>
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
      </div>
    </div>
  </section>
);

export default AboutSection;
