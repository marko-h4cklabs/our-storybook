import StarsBackground from "@/components/StarsBackground";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import OurStorySection from "@/components/OurStorySection";

const OurStoryPage = () => {
  return (
    <>
      <StarsBackground />
      <BackButton />
      <PageTransition>
        <main className="relative z-10 min-h-screen pt-20">
          <OurStorySection />
        </main>
      </PageTransition>
    </>
  );
};

export default OurStoryPage;
