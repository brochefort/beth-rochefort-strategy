import { motion } from "framer-motion";

const Perspective = () => (
  <section id="perspective" className="py-20 lg:py-28 bg-primary text-primary-foreground">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My Perspective
        </h2>
        <blockquote className="text-lg sm:text-xl leading-relaxed italic opacity-90 mb-8">
          "I see the invisible infrastructure of how work actually gets done — not the org chart version, but the real handoffs, translations, and trust-building that make collaboration work. My contrarian belief: technology adoption isn't a training problem, it's a relationship problem. I connect dots others don't see, spotting where one team has already solved what another is struggling with, or where the real blocker is misaligned incentives rather than missing skills. As AI accelerates technical change, organizations will increasingly need people who can build the human infrastructure for sustainable adoption — which is exactly where I thrive."
        </blockquote>
        <p className="text-right font-semibold text-base opacity-80">
          — Beth Rochefort
        </p>
      </motion.div>
    </div>
  </section>
);

export default Perspective;
