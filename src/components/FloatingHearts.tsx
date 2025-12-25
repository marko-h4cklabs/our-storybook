import { Heart } from "lucide-react";

const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Heart 
        className="absolute top-20 left-[10%] text-accent/30 animate-float" 
        size={24} 
        fill="currentColor"
      />
      <Heart 
        className="absolute top-40 right-[15%] text-primary/20 animate-float-delayed" 
        size={32} 
        fill="currentColor"
      />
      <Heart 
        className="absolute top-60 left-[20%] text-dark-pink-soft/40 animate-float" 
        size={18} 
        fill="currentColor"
        style={{ animationDelay: '2s' }}
      />
      <Heart 
        className="absolute bottom-40 right-[25%] text-accent/25 animate-float-delayed" 
        size={28} 
        fill="currentColor"
      />
      <Heart 
        className="absolute bottom-60 left-[8%] text-primary/15 animate-float" 
        size={20} 
        fill="currentColor"
        style={{ animationDelay: '3s' }}
      />
    </div>
  );
};

export default FloatingHearts;
