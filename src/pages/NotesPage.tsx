import StarsBackground from "@/components/StarsBackground";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import LoveNotesSection from "@/components/LoveNotesSection";
import Footer from "@/components/Footer";

const NotesPage = () => {
  return (
    <>
      <StarsBackground />
      <BackButton />
      <PageTransition>
        <main className="relative z-10 min-h-screen pt-20">
          <LoveNotesSection />
          <Footer />
        </main>
      </PageTransition>
    </>
  );
};

export default NotesPage;
