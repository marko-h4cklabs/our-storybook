import StarsBackground from "@/components/StarsBackground";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import TimelineSection from "@/components/TimelineSection";

const TimelinePage = () => {
  return (
    <>
      <StarsBackground />
      <BackButton />
      <PageTransition>
        <main className="relative z-10 min-h-screen pt-20">
          <TimelineSection />
        </main>
      </PageTransition>
    </>
  );
};

export default TimelinePage;
