import { Check, Zap, Crown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      icon: Zap,
      price: "29",
      period: "month",
      description: "Perfect for getting started",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 guest pass per month",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Pro",
      icon: Crown,
      price: "59",
      period: "month",
      description: "Most popular choice",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Personal trainer consultation",
        "Nutrition planning",
        "Priority booking",
        "5 guest passes per month",
      ],
      popular: true,
    },
    {
      name: "Elite",
      icon: Sparkles,
      price: "99",
      period: "month",
      description: "Ultimate fitness experience",
      features: [
        "Everything in Pro",
        "24/7 gym access",
        "Private training sessions (4/month)",
        "Spa & sauna access",
        "Recovery massage (2/month)",
        "Unlimited guest passes",
        "Premium locker",
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-background" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm tracking-wider uppercase mb-4 block">
            Membership Plans
          </span>
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            Choose Your <span className="text-gradient">Power</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your fitness journey. All plans include access to our premium facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`card-3d relative p-8 bg-card border-2 ${
                plan.popular ? "border-primary scale-105" : "border-border"
              } overflow-hidden group`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-destructive text-primary-foreground px-4 py-1 text-sm font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="relative z-10">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                    plan.popular ? "bg-primary/20" : "bg-primary/10"
                  } group-hover:scale-110 transition-transform`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? "text-primary" : "text-primary/70"}`} />
                  </div>
                  <h3 className="text-3xl font-black mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-gradient">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-primary" : "bg-primary/20"
                      }`}>
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={`w-full font-bold py-6 ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-destructive hover:shadow-glow"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  Get Started
                </Button>
              </div>

              <div className={`absolute -right-12 -bottom-12 w-48 h-48 rounded-full blur-3xl opacity-20 ${
                plan.popular ? "bg-primary" : "bg-primary/50"
              } group-hover:scale-150 transition-transform duration-700`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
