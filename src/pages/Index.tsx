import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveNotesSection from "@/components/LoveNotesSection";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";

const Index = () => {
  return (
    <main className="relative overflow-hidden">
      <FloatingHearts />
      <HeroSection />
      <OurStorySection />
      <PhotoGallery />
      <LoveNotesSection />
      <Footer />
    </main>
  );
};

export default Index;
