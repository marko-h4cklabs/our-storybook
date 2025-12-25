import StarsBackground from "@/components/StarsBackground";
import BackButton from "@/components/BackButton";
import PhotoGallery from "@/components/PhotoGallery";

const GalleryPage = () => {
  return (
    <>
      <StarsBackground />
      <BackButton />
      <main className="relative z-10 min-h-screen pt-20">
        <PhotoGallery />
      </main>
    </>
  );
};

export default GalleryPage;
