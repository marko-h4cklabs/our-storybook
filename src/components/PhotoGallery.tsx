import { Heart, Image, Play } from "lucide-react";

const PhotoGallery = () => {
  const placeholders = Array(6).fill(null);

  return (
    <section id="gallery" className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-4">
          Gallery
        </h2>
        <div className="flex justify-center mb-12">
          <Heart className="text-primary" size={24} fill="currentColor" strokeWidth={0} />
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className={`
                aspect-square bg-card border border-border rounded-lg
                flex flex-col items-center justify-center gap-2
                hover:border-primary/50 transition-colors cursor-pointer
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              `}
            >
              {index === 2 ? (
                <>
                  <Play className="text-primary/50" size={28} />
                  <p className="text-xs text-muted-foreground">Add video</p>
                </>
              ) : (
                <>
                  <Image className="text-primary/50" size={28} />
                  <p className="text-xs text-muted-foreground">Add photo</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;