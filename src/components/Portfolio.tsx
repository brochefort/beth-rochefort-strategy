import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const Portfolio = () => (
  <section id="portfolio" className="py-20 lg:py-28 bg-muted/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
        Case Studies
      </h2>
      <p className="text-center text-muted-foreground mb-14">
        Detailed project stories in progress. Check back soon.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: n * 0.1 }}
          >
            <Card className="h-48 flex items-center justify-center border-dashed border-2 border-border/60 bg-card/50">
              <CardContent className="flex flex-col items-center gap-3 text-muted-foreground">
                <FileText className="h-8 w-8" />
                <span className="text-sm font-medium">Coming Soon</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
