import StarsBackground from "@/components/StarsBackground";
import BackButton from "@/components/BackButton";
import TimelineSection from "@/components/TimelineSection";

const TimelinePage = () => {
  return (
    <>
      <StarsBackground />
      <BackButton />
      <main className="relative z-10 min-h-screen pt-20">
        <TimelineSection />
      </main>
    </>
  );
};

export default TimelinePage;
