import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const items = [
  {
    title: "AI-Powered Course Redevelopment",
    text: "Most faculty use AI for one-off tasks. I'm exploring something deeper: can AI help maintain pedagogical coherence across an entire course during significant revisions? I'm testing workflows where AI holds the \"big picture\" of learning outcomes, scaffolding, and assessment alignment while I iterate on individual modules — and documenting what works, what doesn't, and where human judgment is non-negotiable.",
  },
  {
    title: "Women Applying AI — Building While Flying",
    text: "As a founding member, I'm simultaneously building organizational infrastructure, designing learning experiences, and developing content — startup-mode work in a volunteer context. It's teaching me how to move fast, test ideas publicly, and adjust based on real feedback. Skills that translate directly to agile L&D environments.",
  },
  {
    title: "Career Transition as Learning Lab",
    text: "I'm deliberately using my own job search as a testing ground for AI-powered workflows — building this site, automating research, experimenting with consistent messaging across materials. I'm living the challenges organizations face when adopting AI, not just reading about them.",
  },
  {
    title: "Learning Design at Brandeis University",
    text: "Currently designing online courses and micro credentials for Brandeis Online — working directly with faculty across disciplines including computational biology, nonprofit financial management, and industrial-organizational psychology.",
  },
  {
    title: "L&D Consulting for Nonprofits",
    text: "eLearning development, AI upskilling, and train-the-trainer programs for mission-driven organizations including the Brazelton Institute and others.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const WorkingOn = () => (
  <section id="working-on" className="py-20 lg:py-28">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-14">
        What I'm Working On Now
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={i}
          >
            <Card className="h-full border-border/60 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkingOn;
