import StarsBackground from "@/components/StarsBackground";
import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import PhotoGallery from "@/components/PhotoGallery";
import TimelineSection from "@/components/TimelineSection";
import TripsSection from "@/components/TripsSection";
import LoveNotesSection from "@/components/LoveNotesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <StarsBackground />
      <main className="relative z-10">
        <HeroSection />
        <OurStorySection />
        <PhotoGallery />
        <TimelineSection />
        <TripsSection />
        <LoveNotesSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;