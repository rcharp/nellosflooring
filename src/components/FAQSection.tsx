import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How quickly can you respond to an emergency AC repair?",
    a: "We offer same-day service for emergency air conditioning repairs throughout Palmetto, Bradenton, Sarasota, and Manatee County. When your AC breaks down during Florida's heat, we understand it's urgent. Call us and we'll get a certified technician to your home as quickly as possible.",
  },
  {
    q: "Do you offer financing options for AC installation and repairs?",
    a: "Yes! We offer flexible financing plans with quick approval to help you get the comfort you need without breaking your budget. Whether you need a major repair or a complete system replacement, our financing options make it affordable.",
  },
  {
    q: "Do you provide free estimates for AC installation?",
    a: "Yes! We provide free, no-obligation estimates for all air conditioning installations and system replacements. We'll assess your home's cooling needs, discuss your options, and provide upfront, transparent pricing with no hidden fees.",
  },
  {
    q: "Are your technicians licensed and insured?",
    a: "All Emmons Air technicians are fully licensed, certified, and insured to protect you and your property. Our team undergoes continuous training to stay current with the latest HVAC technology and best practices.",
  },
  {
    q: "What areas do you service?",
    a: "We proudly serve Palmetto, Bradenton, Sarasota, and all of Manatee County. As a locally owned and operated family business with over 12 years in the area, we're invested in our community.",
  },
  {
    q: "Do you offer warranties on your work?",
    a: "Yes, we stand behind all our work with warranties on both parts and labor. New AC installations come with comprehensive manufacturer warranties, and we provide additional warranty coverage on our workmanship.",
  },
];

const FAQSection = () => (
  <section className="py-20 lg:py-28" style={{ backgroundColor: "#0f172a" }}>
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Still Not Sure?</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mt-3">
          Frequently Asked Questions
        </h2>
        <p className="text-primary-foreground/70 mt-4">What else would you like to know?</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-primary-foreground py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground/70 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
