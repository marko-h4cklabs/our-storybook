import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <Heart 
            className="mx-auto mb-6 text-accent animate-pulse-soft" 
            size={48} 
            fill="currentColor"
          />
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 animate-fade-in-up animation-delay-200">
          Our Love Story
        </h1>
        
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 italic mb-8 animate-fade-in-up animation-delay-400">
          "Every love story is beautiful, but ours is my favorite"
        </p>
        
        <div className="flex items-center justify-center gap-4 text-primary-foreground/80 animate-fade-in-up animation-delay-600">
          <span className="font-display text-lg md:text-xl">You</span>
          <Heart className="text-accent" size={20} fill="currentColor" />
          <span className="font-display text-lg md:text-xl">Me</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
