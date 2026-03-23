import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of flooring do you install?",
    a: "We install solid hardwood, engineered hardwood, luxury vinyl plank (LVP), and laminate flooring. Whether you're looking for the timeless beauty of real wood or the durability of vinyl, we have the expertise to handle any flooring project.",
  },
  {
    q: "Do you offer financing options for flooring projects?",
    a: "Yes! We offer flexible financing plans with quick approval to help you get the beautiful floors you want without breaking your budget. Whether it's a full home installation or a refinishing project, our financing options make it affordable.",
  },
  {
    q: "Do you provide free estimates for flooring installation?",
    a: "Yes! We provide free, no-obligation estimates for all flooring projects. We'll assess your space, discuss your options, and provide upfront, transparent pricing with no hidden fees.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, Nello's Flooring is fully insured for both commercial and residential projects. With over 40 years of experience, you can trust that your home is in expert hands.",
  },
  {
    q: "What areas do you serve?",
    a: "We proudly serve Manatee County, Sarasota County, and Pinellas County. As a family owned and operated business, we're invested in our local community.",
  },
  {
    q: "How long does a typical flooring installation take?",
    a: "Most residential installations can be completed in 1-3 days depending on the size of the area and the type of flooring. Sand and refinish projects typically take 3-5 days including drying time. We'll give you a detailed timeline during your free estimate.",
  },
];

const FAQSection = () => (
  <section className="py-20 lg:py-28 bg-primary">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-secondary uppercase tracking-wider">Still Not Sure?</span>
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
