import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Dumbbell } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection("hero")}>
            <div className="relative">
              <Dumbbell className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-2xl font-black tracking-tight">
              Power<span className="text-gradient">Gym</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["about", "services", "pricing", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground/80 hover:text-primary transition-colors font-semibold capitalize relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="bg-gradient-to-r from-primary to-destructive hover:shadow-glow font-bold px-8"
            >
              Join Now
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {["about", "services", "pricing", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors font-semibold capitalize"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="w-full bg-gradient-to-r from-primary to-destructive hover:shadow-glow font-bold"
            >
              Join Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
