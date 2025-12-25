import { Heart, Calendar, MapPin, Star } from "lucide-react";

const storyMoments = [
  {
    icon: Star,
    title: "The Day We Met",
    date: "A Special Day",
    description: "The universe conspired to bring us together, and from that moment, everything changed. Your smile lit up my world.",
  },
  {
    icon: Heart,
    title: "Our First Date",
    date: "A Magical Evening",
    description: "Nervous butterflies, endless conversations, and the realization that I wanted to spend every moment with you.",
  },
  {
    icon: Calendar,
    title: "The Moment I Knew",
    date: "Forever Starts",
    description: "Looking into your eyes, I saw my future. Every laugh we shared, every tear we wiped, made our bond unbreakable.",
  },
  {
    icon: MapPin,
    title: "Our Adventures",
    date: "Many Beautiful Days",
    description: "From quiet nights at home to spontaneous adventures, every moment with you is my favorite memory.",
  },
];

const OurStorySection = () => {
  return (
    <section className="py-24 px-6 bg-card relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
            Our Story
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Every chapter of us is written with love, laughter, and endless memories
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

          {storyMoments.map((moment, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="bg-background p-8 rounded-lg shadow-soft hover:shadow-romantic transition-shadow duration-300">
                  <span className="text-accent font-body text-sm uppercase tracking-wider">
                    {moment.date}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mt-2 mb-4">
                    {moment.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {moment.description}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-romantic shadow-romantic">
                <moment.icon className="text-primary-foreground" size={24} />
              </div>

              {/* Spacer for alignment */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
