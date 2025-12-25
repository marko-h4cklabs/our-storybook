import StarsBackground from "@/components/StarsBackground";
import BackButton from "@/components/BackButton";
import OurStorySection from "@/components/OurStorySection";

const OurStoryPage = () => {
  return (
    <>
      <StarsBackground />
      <BackButton />
      <main className="relative z-10 min-h-screen pt-20">
        <OurStorySection />
      </main>
    </>
  );
};

export default OurStoryPage;
