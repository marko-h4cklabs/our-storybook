import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import CelestialBackground from "./CelestialBackground";

const navItems = [
  { label: "Our Story", href: "/our-story" },
  { label: "Gallery", href: "/gallery" },
  { label: "Timeline", href: "/timeline" },
  { label: "Trips", href: "/trips" },
  { label: "Notes", href: "/notes" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Celestial background art */}
      <CelestialBackground />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Heart icon */}
        <div className="opacity-0 animate-fade-in-up">
          <Heart 
            className="mx-auto mb-8 text-primary animate-pulse-glow rounded-full" 
            size={40} 
            fill="currentColor"
            strokeWidth={0}
          />
        </div>
        
        {/* Main headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 opacity-0 animate-fade-in-up animation-delay-100 tracking-wide">
          Keona & Marko
        </h1>
        
        <p className="font-display text-xl sm:text-2xl md:text-3xl text-primary italic mb-12 opacity-0 animate-fade-in-up animation-delay-200">
          — love story —
        </p>
        
        {/* Navigation buttons */}
        <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 opacity-0 animate-fade-in-up animation-delay-300">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base font-body font-medium
                         border border-border rounded-full
                         text-foreground/80 hover:text-foreground
                         hover:border-primary hover:bg-primary/10
                         transition-all duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
