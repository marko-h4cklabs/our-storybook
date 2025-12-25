import { Heart } from "lucide-react";

const OurStorySection = () => {
  return (
    <section id="our-story" className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-4">
          Our Story
        </h2>
        <div className="flex justify-center mb-12">
          <Heart className="text-primary" size={24} fill="currentColor" strokeWidth={0} />
        </div>

        <div className="space-y-8">
          {/* Story card placeholder */}
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
            <h3 className="font-display text-xl sm:text-2xl text-primary mb-4">How We Met</h3>
            <p className="text-muted-foreground leading-relaxed">
              [Your story about how you two met goes here. This is a placeholder for your beautiful love story...]
            </p>
          </div>

          {/* Image placeholder */}
          <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Heart className="mx-auto mb-2 text-primary/50" size={32} />
              <p className="text-sm">Add your photo here</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
            <h3 className="font-display text-xl sm:text-2xl text-primary mb-4">Our First Date</h3>
            <p className="text-muted-foreground leading-relaxed">
              [Describe your first date here. What did you do? How did you feel? Add your memories...]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;