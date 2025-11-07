import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-2xl font-black">
                Power<span className="text-gradient">Gym</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform your body and mind with PowerGym. Join thousands of members who have already
              achieved their fitness goals with us.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Mon - Fri: 5:00 AM - 11:00 PM</li>
              <li>Saturday: 6:00 AM - 10:00 PM</li>
              <li>Sunday: 7:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} PowerGym. All rights reserved. Built with passion for fitness.</p>
        </div>
      </div>
    </footer>
  );
};
