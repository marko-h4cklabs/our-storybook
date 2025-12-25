import { useState } from "react";
import { Heart, X } from "lucide-react";

const placeholderPhotos = [
  {
    id: 1,
    caption: "Our favorite moment together",
    gradient: "from-primary/20 to-accent/30",
  },
  {
    id: 2,
    caption: "Adventures with you",
    gradient: "from-accent/30 to-secondary/20",
  },
  {
    id: 3,
    caption: "Lazy Sunday mornings",
    gradient: "from-secondary/20 to-primary/30",
  },
  {
    id: 4,
    caption: "Celebrating us",
    gradient: "from-primary/30 to-accent/20",
  },
  {
    id: 5,
    caption: "Your beautiful smile",
    gradient: "from-accent/20 to-secondary/30",
  },
  {
    id: 6,
    caption: "Forever and always",
    gradient: "from-secondary/30 to-primary/20",
  },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
            Our Memories
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            A collection of moments that make my heart skip a beat
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo.id)}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer shadow-soft hover:shadow-romantic transition-all duration-500 hover:-translate-y-2"
            >
              {/* Placeholder gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${photo.gradient}`} />
              
              {/* Heart icon placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart 
                  className="text-primary/40 group-hover:text-primary/60 transition-colors duration-300" 
                  size={48} 
                  fill="currentColor"
                />
              </div>

              {/* Add photo hint */}
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300">
                <span className="text-primary font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add your photo
                </span>
              </div>

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-primary-foreground font-body text-sm">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-body mt-8 text-sm italic">
          Replace these placeholders with your favorite photos together
        </p>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <button 
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full aspect-video bg-gradient-to-br from-primary/30 to-accent/40 rounded-lg flex items-center justify-center">
            <Heart className="text-primary-foreground/50" size={64} fill="currentColor" />
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
