import { Heart, Calendar } from "lucide-react";

const timelineEvents = [
  { date: "6th of March 2016", title: "First Met", description: "First met at friends house..." },
  { date: "5th of December 2024", title: "Started Dating", description: "Started dating in Zagreb..." },
  { date: "5th of December 2025", title: "Engagement", description: "Engaged one year later..." },
  { date: "to be continued...", title: "Wedding", description: "Yet to come..." },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-4">
          Timeline
        </h2>
        <div className="flex justify-center mb-12">
          <Heart className="text-primary" size={24} fill="currentColor" strokeWidth={0} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />

          <div className="space-y-8 sm:space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-4 sm:gap-8 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 sm:-translate-x-1.5 mt-1.5 z-10" />

                {/* Content */}
                <div className={`ml-10 sm:ml-0 sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                  <div className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-primary/30 transition-colors">
                    <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-2 ${index % 2 === 0 ? 'sm:justify-end' : ''}`}>
                      <Calendar size={14} />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl text-primary mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;