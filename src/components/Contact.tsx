import { useState } from "react";
import { z } from "zod";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Interested in working together? Drop me a line.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5"
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5"
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={sending}>
              {sending ? "Sending…" : "Send Message"}
            </Button>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="https://www.linkedin.com/in/bethrochefort/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:beth.rochefort@gmail.com">
              <Button variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                beth.rochefort@gmail.com
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
