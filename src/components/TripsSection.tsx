import { Heart, MapPin, Image } from "lucide-react";

const trips = [
  { location: "Poljska", date: "31st of December 2024" },
  { location: "Albanija", date: "23th of September 2024" },
  { location: "Primošten", date: "27th of June 2024" },
];

const TripsSection = () => {
  return (
    <section id="trips" className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-4">
          Our Trips
        </h2>
        <div className="flex justify-center mb-12">
          <Heart className="text-primary" size={24} fill="currentColor" strokeWidth={0} />
        </div>

        {/* Trips grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Image className="mx-auto mb-2 text-primary/50" size={32} />
                  <p className="text-xs">Add trip photo</p>
                </div>
              </div>
              
              {/* Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <MapPin size={16} />
                  <h3 className="font-display text-lg">{trip.location}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{trip.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripsSection;