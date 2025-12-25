import StarsBackground from "@/components/StarsBackground";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import PhotoGallery from "@/components/PhotoGallery";

const GalleryPage = () => {
  return (
    <>
      <StarsBackground />
      <BackButton />
      <PageTransition>
        <main className="relative z-10 min-h-screen pt-20">
          <PhotoGallery />
        </main>
      </PageTransition>
    </>
  );
};

export default GalleryPage;
