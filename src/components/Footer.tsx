import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <Heart 
          className="mx-auto mb-4 text-primary" 
          size={20} 
          fill="currentColor" 
          strokeWidth={0}
        />
        <p className="font-display text-lg text-muted-foreground">
          Keona & Marko
        </p>
        <p className="text-sm text-muted-foreground/60 mt-2">
          Forever & Always
        </p>
      </div>
    </footer>
  );
};

export default Footer;