import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern gym interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-destructive/10 rounded-full blur-3xl float-animation" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary">Transform Your Life Today</span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-none animate-fade-in">
            Get Body in
            <br />
            <span className="text-gradient italic">Shape</span> & Stay
            <br />
            <span className="text-foreground/60">Healthy</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experience the ultimate fitness journey with cutting-edge equipment, expert trainers, and a
            community that pushes you to achieve greatness.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-gradient-to-r from-primary to-destructive hover:shadow-glow font-bold px-8 py-6 text-lg group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 font-bold px-8 py-6 text-lg group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl">
            {[
              { number: "150+", label: "Expert Trainers" },
              { number: "254K", label: "Happy Members" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${0.6 + i * 0.1}s` }}
              >
                <div className="text-4xl font-black text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
