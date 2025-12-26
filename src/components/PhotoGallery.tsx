import { useState } from "react";
import { Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";
import gallery9 from "@/assets/gallery-9.png";
import gallery10 from "@/assets/gallery-10.png";
import gallery11 from "@/assets/gallery-11.png";
import gallery12 from "@/assets/gallery-12.png";
import gallery13 from "@/assets/gallery-13.png";
import gallery14 from "@/assets/gallery-14.png";

const photos = [
  { src: gallery11, span: "md:col-span-2 md:row-span-2" },
  { src: gallery2, span: "" },
  { src: gallery3, span: "" },
  { src: gallery4, span: "" },
  { src: gallery5, span: "md:col-span-2" },
  { src: gallery6, span: "" },
  { src: gallery1, span: "" },
  { src: gallery7, span: "" },
  { src: gallery12, span: "md:col-span-2" },
  { src: gallery8, span: "" },
  { src: gallery13, span: "" },
  { src: gallery9, span: "" },
  { src: gallery14, span: "" },
  { src: gallery10, span: "md:col-span-2" },
];

const PhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1);
    }
  };

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
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`
                aspect-square bg-card border border-border rounded-lg overflow-hidden
                hover:border-primary/50 transition-all cursor-pointer group
                ${photo.span}
              `}
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.src}
                alt={`Gallery photo ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-sm border-border">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {selectedIndex !== null && (
            <div className="flex items-center justify-center w-full h-[90vh] p-8">
              <img
                src={photos[selectedIndex].src}
                alt={`Gallery photo ${selectedIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PhotoGallery;
