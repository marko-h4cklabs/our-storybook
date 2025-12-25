import StarsBackground from "@/components/StarsBackground";
import BackButton from "@/components/BackButton";
import TripsSection from "@/components/TripsSection";

const TripsPage = () => {
  return (
    <>
      <StarsBackground />
      <BackButton />
      <main className="relative z-10 min-h-screen pt-20">
        <TripsSection />
      </main>
    </>
  );
};

export default TripsPage;
