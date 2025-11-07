import { Target, Users, Trophy, Zap } from "lucide-react";
import workoutImage from "../assets/workout-1.jpg";

export const About = () => {
  const features = [
    {
      icon: Trophy,
      title: "Best in World",
      description: "Cutting-edge facilities and equipment that set industry standards globally.",
    },
    {
      icon: Users,
      title: "Qualified Instructors",
      description: "Certified trainers with years of experience in transforming lives.",
    },
    {
      icon: Target,
      title: "Personalized Plans",
      description: "Custom workout and nutrition programs tailored to your goals.",
    },
    {
      icon: Zap,
      title: "24/7 Access",
      description: "Train on your schedule with round-the-clock gym access.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            We Raise Your <span className="text-gradient">Confidence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-destructive mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative perspective-container">
            <div className="relative overflow-hidden rounded-2xl tilt-effect">
              <img
                src={workoutImage}
                alt="Intense workout"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-destructive/20 rounded-full blur-3xl" />
          </div>

          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              At PowerGym, we believe fitness is more than just physical transformation. It's about
              building confidence, discipline, and a lifestyle that empowers you to achieve anything.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our world-class facilities combined with expert guidance create the perfect environment
              for you to push your limits and discover your true potential.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="card-3d bg-card border border-border rounded-xl p-6 group hover:border-primary/50 transition-all"
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
