import { Heart, MapPin } from "lucide-react";
import tripPoland from "@/assets/trip-poland.png";
import tripAlbania from "@/assets/trip-albania.png";
import tripPrimosten from "@/assets/trip-primosten.png";

const trips = [
  { location: "Poljska", date: "31st of December 2024", image: tripPoland, objectPosition: "center 70%" },
  { location: "Albanija", date: "23th of September 2025", image: tripAlbania, objectPosition: "center" },
  { location: "Primošten", date: "27th of June 2025", image: tripPrimosten, objectPosition: "center" },
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
              {/* Trip image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={trip.image}
                  alt={`Trip to ${trip.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: trip.objectPosition }}
                />
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