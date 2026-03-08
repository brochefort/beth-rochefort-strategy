import { BookOpen, RefreshCw, Network } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const cards = [
  {
    icon: BookOpen,
    title: "Learning Design & Educational Technology",
    text: "I design learning experiences that work — from graduate programs to AI upskilling workshops. My approach is grounded in adult learning principles and the belief that technology should remove barriers, not create them. Currently designing online courses and micro credentials at Brandeis University while consulting on AI adoption for nonprofits and K-12 organizations.",
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation & Change Management",
    text: "I've spent 17+ years helping organizations adopt new technologies sustainably. That means evaluating tools rigorously, building stakeholder buy-in, and designing the operational processes that make adoption stick. My contrarian belief: technology adoption isn't a training problem, it's a relationship problem.",
  },
  {
    icon: Network,
    title: "Strategy & Ecosystem Building",
    text: "I co-developed and co-led a 30-member global advisory network connecting academic, IT, and administrative leaders across Northeastern's international campuses. I build the connective tissue between academic, technical, and strategic stakeholders — translating requirements across groups so organizations reach common understanding faster.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const WhatIDo = () => (
  <section id="what-i-do" className="py-20 lg:py-28">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-14">
        What I Do
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={i}
          >
            <Card className="h-full border-border/60 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-3">
                  <c.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {c.text}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIDo;
