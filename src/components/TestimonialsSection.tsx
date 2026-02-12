import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";

const GOOGLE_REVIEW_URL = "https://share.google/W7fsLxWgOy8fWOhTQ";

const testimonials = [
  {
    text: "David the owner has been out to my house several times to help diagnose and fix issues with my AC. He's always easily accessible which is important, and even better he's honest and knowledgeable. We also have him do annual maintenance for us. I wouldn't trust anyone else with keeping my house Cool.",
    name: "Mitchell S.",
    rating: 5,
  },
  {
    text: "David came out today to service our unit. He came out and discovered that our fan had been running non stop because the modular was bad. He got the parts needed the same day and made all repairs. He also cleaned dust and mold from the unit for us. He was very thorough and knowledgeable. We will call him for AC needs.",
    name: "Jessica O.",
    rating: 5,
  },
  {
    text: "I have lived in Florida for over 30 years. I have had many different companies for AC service and support. The very best is Emmons Air. Dave is amazing and exhibits the highest level of customer service I have ever experienced in the AC industry. You would be making a great decision to meet with Dave and see how he can help you.",
    name: "Jeff K.",
    rating: 5,
  },
  {
    text: "I had an issue with my a/c unit and heard about Emmons air through a friend. I called David (Owner) and he was quick to come out, diagnose, and fix my issue. David was very professional and very accommodating. Would highly recommend his business to anyone with a/c issues big or small.",
    name: "Jeremy P.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
            What Our Customers Are Saying
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-5"
            />
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-medium">5.0 Rating</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-10 card-elevated border border-border relative"
            >
              <Quote className="w-10 h-10 text-secondary/15 absolute top-8 right-8" />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: testimonials[current].rating }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-secondary/15 flex items-center justify-center font-heading font-bold text-secondary text-sm">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">{testimonials[current].name}</div>
                  <div className="text-xs text-muted-foreground">Google Review</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-secondary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-secondary hover:underline"
            >
              See All Reviews →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
