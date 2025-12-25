import { Heart } from "lucide-react";
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

const photos = [
  { src: gallery1, span: "md:col-span-2 md:row-span-2" },
  { src: gallery2, span: "" },
  { src: gallery3, span: "" },
  { src: gallery4, span: "" },
  { src: gallery5, span: "md:col-span-2" },
  { src: gallery6, span: "" },
  { src: gallery7, span: "" },
  { src: gallery8, span: "md:col-span-2" },
  { src: gallery9, span: "" },
  { src: gallery10, span: "" },
];

const PhotoGallery = () => {
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
    </section>
  );
};

export default PhotoGallery;
