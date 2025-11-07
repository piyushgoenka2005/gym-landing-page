import { Dumbbell, Heart, Apple, Users2 } from "lucide-react";
import { Card } from "./ui/card";

export const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle and increase strength with our comprehensive weight training programs and state-of-the-art equipment.",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Heart,
      title: "Cardio Programs",
      description: "Improve your cardiovascular health with our high-intensity interval training and endurance programs.",
      gradient: "from-red-500 to-pink-600",
    },
    {
      icon: Apple,
      title: "Nutrition Coaching",
      description: "Get personalized meal plans and nutritional guidance to fuel your fitness journey and achieve optimal results.",
      gradient: "from-orange-600 to-amber-600",
    },
    {
      icon: Users2,
      title: "Group Classes",
      description: "Join our energetic group fitness classes including yoga, spinning, HIIT, and more with certified instructors.",
      gradient: "from-red-600 to-orange-500",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/50" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            Transform Your <span className="text-gradient">Lifestyle</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of fitness services designed to help you achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <Card
              key={i}
              className="card-3d bg-card border-border hover:border-primary/50 p-8 group overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110 group-hover:rotate-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
