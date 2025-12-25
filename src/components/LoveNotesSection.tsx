import { Heart, Quote } from "lucide-react";

const notes = [
  { text: "Add your love note here...", from: "Keona" },
  { text: "Add your love note here...", from: "Marko" },
  { text: "Add your love note here...", from: "Keona" },
];

const LoveNotesSection = () => {
  return (
    <section id="notes" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-4">
          Love Notes
        </h2>
        <div className="flex justify-center mb-12">
          <Heart className="text-primary" size={24} fill="currentColor" strokeWidth={0} />
        </div>

        {/* Notes grid */}
        <div className="space-y-6">
          {notes.map((note, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-md bg-card border border-border rounded-lg p-5 sm:p-6 ${
                index % 2 === 0 ? 'rounded-tl-none' : 'rounded-tr-none'
              }`}>
                <Quote className="text-primary/30 mb-3" size={24} />
                <p className="text-foreground/90 italic mb-4 leading-relaxed">
                  "{note.text}"
                </p>
                <p className="text-primary text-sm font-medium">— {note.from}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveNotesSection;