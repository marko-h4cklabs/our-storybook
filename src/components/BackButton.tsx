import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      to="/"
      className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 
                 text-sm font-body text-foreground/70 hover:text-foreground
                 border border-border/50 rounded-full
                 bg-background/50 backdrop-blur-sm
                 hover:border-primary hover:bg-primary/10
                 transition-all duration-300"
    >
      <ArrowLeft size={16} />
      <span>Back</span>
    </Link>
  );
};

export default BackButton;
