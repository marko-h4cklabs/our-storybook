import StarsBackground from "@/components/StarsBackground";
import BackButton from "@/components/BackButton";
import LoveNotesSection from "@/components/LoveNotesSection";
import Footer from "@/components/Footer";

const NotesPage = () => {
  return (
    <>
      <StarsBackground />
      <BackButton />
      <main className="relative z-10 min-h-screen pt-20">
        <LoveNotesSection />
        <Footer />
      </main>
    </>
  );
};

export default NotesPage;
