import StarsBackground from "@/components/StarsBackground";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import TripsSection from "@/components/TripsSection";

const TripsPage = () => {
  return (
    <>
      <StarsBackground />
      <BackButton />
      <PageTransition>
        <main className="relative z-10 min-h-screen pt-20">
          <TripsSection />
        </main>
      </PageTransition>
    </>
  );
};

export default TripsPage;
