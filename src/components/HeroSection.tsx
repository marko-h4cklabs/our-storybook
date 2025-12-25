import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

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
      {/* Celestial decorations */}
      {/* Floating circle around headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse-slow" />
        <div className="absolute inset-4 rounded-full border border-primary/5" />
        <div className="absolute inset-8 rounded-full border border-primary/5" />
      </div>
      
      {/* Corner celestial symbols */}
      {/* Top left */}
      <div className="absolute top-8 left-8 opacity-30">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary">
          <circle cx="20" cy="20" r="3" fill="currentColor" />
          <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="0.3" fill="none" />
        </svg>
      </div>
      
      {/* Top right */}
      <div className="absolute top-8 right-8 opacity-30">
        <svg width="50" height="50" viewBox="0 0 50 50" className="text-primary">
          <circle cx="25" cy="25" r="2" fill="currentColor" />
          <circle cx="25" cy="25" r="6" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <ellipse cx="25" cy="25" rx="18" ry="8" stroke="currentColor" strokeWidth="0.3" fill="none" className="origin-center rotate-45" />
        </svg>
      </div>
      
      {/* Bottom left */}
      <div className="absolute bottom-20 left-8 opacity-20">
        <svg width="30" height="30" viewBox="0 0 30 30" className="text-foreground">
          <polygon points="15,2 18,12 28,12 20,18 23,28 15,22 7,28 10,18 2,12 12,12" fill="currentColor" />
        </svg>
      </div>
      
      {/* Bottom right */}
      <div className="absolute bottom-20 right-8 opacity-25">
        <svg width="45" height="45" viewBox="0 0 45 45" className="text-primary/70">
          <circle cx="22" cy="22" r="10" fill="currentColor" />
          <circle cx="18" cy="18" r="3" fill="hsl(var(--background))" opacity="0.5" />
        </svg>
      </div>
      
      {/* Small decorative dots */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-twinkle" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-foreground/30 rounded-full animate-twinkle animation-delay-200" />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/30 rounded-full animate-twinkle animation-delay-400" />

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

      {/* Scroll hint removed since no scrolling */}
    </section>
  );
};

export default HeroSection;
