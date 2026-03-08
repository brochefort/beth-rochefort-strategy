import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import headshot from "@/assets/headshot.png";

const taglines = [
  "Where messy stakeholders become aligned teams",
  "Strategic thinking, hands-on execution, genuine relationships",
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-center pt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-start gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="shrink-0"
        >
          <img
            src={headshot}
            alt="Beth Rochefort"
            className="w-48 h-56 md:w-56 md:h-64 object-cover rounded-lg shadow-md"
          />
        </motion.div>
        <div className="text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4"
        >
          Beth Rochefort
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg sm:text-xl text-accent font-medium mb-3"
        >
          Learning Technology Strategist · Digital Transformation Leader · L&D Specialist
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center md:justify-start gap-1 text-muted-foreground mb-8"
        >
          <MapPin className="h-4 w-4" />
          <span className="text-sm">Watertown, MA</span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-foreground/80 italic max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          "I build the human infrastructure for technology adoption — connecting people, translating across teams, and making complex change actually stick."
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap justify-center md:justify-start gap-3"
        >
          {taglines.map((t) => (
            <span
              key={t}
              className="px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full border border-accent/30 bg-accent/10 text-accent"
            >
              {t}
            </span>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
