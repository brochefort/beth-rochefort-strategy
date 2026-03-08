import { motion } from "framer-motion";

const lessons = [
  {
    problem: "Vendor promised AWS integration support that didn't materialize.",
    lesson: "Get technical promises in writing, even when they seem clear in sales conversations.",
  },
  {
    problem: "Competency-based MS Project Management program had excellent content but couldn't be operationalized within existing university systems.",
    lesson: "Pilot the operational infrastructure, not just the pedagogy.",
  },
  {
    problem: "A bootcamp partnership was innovative but operationally unsustainable.",
    lesson: "Scalability matters more than innovation if you can't sustain it.",
  },
  {
    problem: "Evaluated too many \"shiny platforms\" that didn't solve real problems.",
    lesson: "Technology has to enhance existing workflows, not require everyone to change how they work.",
  },
];

const WhatDidntWork = () => (
  <section className="py-20 lg:py-28">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-border bg-card p-8 sm:p-10 border-l-4 border-l-accent"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          What Didn't Work — and What I Learned
        </h2>
        <ul className="space-y-6">
          {lessons.map((l, i) => (
            <li key={i}>
              <p className="text-foreground/90 text-sm leading-relaxed">
                {l.problem}
              </p>
              <p className="text-accent font-medium text-sm mt-1">
                Learned: {l.lesson}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default WhatDidntWork;
