import { Heart, Quote } from "lucide-react";

const loveNotes = [
  {
    note: "You are my today and all of my tomorrows.",
    author: "Leo Christopher",
  },
  {
    note: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    author: "Maya Angelou",
  },
  {
    note: "I love you not only for what you are, but for what I am when I am with you.",
    author: "Roy Croft",
  },
];

const LoveNotesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-accent/10">
        <Heart size={120} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-10 text-primary/10">
        <Heart size={80} fill="currentColor" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
            Words of Love
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Quotes that remind me of us, of you, of everything we share
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {loveNotes.map((item, index) => (
            <div
              key={index}
              className="relative bg-background p-8 rounded-lg shadow-soft hover:shadow-romantic transition-all duration-300 hover:-translate-y-1 group"
            >
              <Quote className="absolute top-4 right-4 text-accent/20 group-hover:text-accent/40 transition-colors duration-300" size={32} />
              
              <p className="font-display text-lg md:text-xl text-foreground italic leading-relaxed mb-6">
                "{item.note}"
              </p>
              
              <div className="flex items-center gap-2">
                <Heart className="text-accent" size={14} fill="currentColor" />
                <span className="text-muted-foreground font-body text-sm">
                  {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Personal note */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-romantic p-8 md:p-12 rounded-lg shadow-romantic">
            <Heart className="mx-auto mb-4 text-primary-foreground" size={32} fill="currentColor" />
            <p className="font-display text-xl md:text-2xl text-primary-foreground italic max-w-2xl">
              "To my love: You are my greatest adventure, my safest place, and my forever person. Thank you for being you."
            </p>
            <p className="text-primary-foreground/80 font-body mt-4 text-sm">
              — With all my love
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveNotesSection;
