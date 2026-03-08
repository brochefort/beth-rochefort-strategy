import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "17+ years leading cross-functional technical and learning projects to successful completion",
  "Graduate adjunct instructor since 2008 across Ed.D., MS Project Management, and M.Ed. programs",
  "Delivered generative AI adoption workshops to hundreds of educators across higher education and K-12",
  "Curated and facilitated \"Learning in the Age of AI\" for Boston AI Week",
  "Founding member of Women Applying AI — learning design lead, community builder, workshop developer",
  "Currently designing online courses and micro credentials at Brandeis University",
  "L&D consulting for nonprofits — eLearning development, AI upskilling, train-the-trainer programs",
  "Leader in scaling digital credentialing from pilot to 9,300+ badges awarded across all university campuses",
  "Co-developed and co-led a 30-member global advisory network bridging academic, IT, and administrative leadership to drive university-wide educational technology strategy",
  "Smartsheet implementation consolidating 3 project management tools for large team enterprise adoption",
  "Built quality assurance system supporting 4,000+ course sections annually",
  "Doctoral research validating \"just-in-time\" learning approach for faculty professional development",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06 },
  }),
};

const CareerHighlights = () => (
  <section id="highlights" className="py-20 lg:py-28 bg-muted/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-14">
        Career Highlights
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={i}
            className="flex gap-3 items-start bg-card rounded-lg p-4 border border-border/50"
          >
            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/90 leading-relaxed">{h}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CareerHighlights;
