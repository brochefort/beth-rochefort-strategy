import { useState } from "react";
import { Menu, X, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "What I Do", href: "#what-i-do" },
  { label: "Perspective", href: "#perspective" },
  { label: "Current Work", href: "#working-on" },
  { label: "Highlights", href: "#highlights" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo("#hero")}
            className="text-lg font-bold tracking-tight text-primary"
          >
            Beth Rochefort
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://www.linkedin.com/in/bethrochefort/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button size="sm" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://www.linkedin.com/in/bethrochefort/"
              target="_blank"
              rel="noopener noreferrer"
              className="block pt-2"
            >
              <Button size="sm" className="w-full gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
