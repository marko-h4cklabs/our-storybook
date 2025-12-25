import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <Heart 
          className="mx-auto mb-4 text-accent animate-pulse-soft" 
          size={32} 
          fill="currentColor"
        />
        
        <p className="font-display text-2xl md:text-3xl mb-4">
          Forever & Always
        </p>
        
        <p className="font-body text-primary-foreground/80 text-sm">
          Made with love, for the love of my life
        </p>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="font-body text-xs text-primary-foreground/60">
            Our love story continues... ♡
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
