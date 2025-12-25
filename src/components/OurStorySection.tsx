import { Heart } from "lucide-react";

const OurStorySection = () => {
  return (
    <section id="our-story" className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-4">
          Our Story
        </h2>
        <div className="flex justify-center mb-12">
          <Heart className="text-primary" size={24} fill="currentColor" strokeWidth={0} />
        </div>

        <div className="space-y-8">
          {/* Story card placeholder */}
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
            <h3 className="font-display text-xl sm:text-2xl text-primary mb-4">How We Met</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our story didn’t start with a plan. It started with a night that felt ordinary—until it wasn’t.

On March 6th, 2016, we met at a friend’s house. We spent the evening the simplest way: laughing, playing games, sharing a space without knowing it would matter. And right before the night ended, Marko did something brave in the most honest way. He looked at Keona and said, “I like you… do you like me?” (In Croatian: “Sviđaš mi se, a ja tebi?”) It was sweet, direct, and unforgettable—the kind of moment that stays in your mind even when life moves on.

And life did move on. For the next year or two, we barely had contact. Our story paused, quietly, without any dramatic ending—just time and distance doing what they do.

Then, in a way that feels like it could only happen to us, we found each other again. Keona moved to the same city where Marko lived, and suddenly our paths weren’t separate anymore. We started going to the same church. We began spending time together again. And little by little, we built a rhythm—one that returned every year in a special tradition: skiing trips that became “our thing,” a familiar chapter we kept choosing.

But even that chapter wasn’t the final one yet. High school came, and we lost contact again—another pause, another stretch of life happening in parallel.

Two years later, everything changed because of something simple: a ride to Zagreb.

We had both moved there, and somehow ended up in the same car heading to the same city. That one ride turned into a real reconnection—conversation flowing like the time between us didn’t exist. By the second ride, we “made the deal” for our first date. Not a grand cinematic moment—just two people finally choosing the same direction at the same time.

Two dates later, we had our first kiss. And from that point on, it wasn’t a pause anymore. It was the beginning.

Looking back, our story has chapters of meeting, losing touch, and finding each other again—like life kept testing whether we’d return to the same place. And we did. Not once, but over and over, until it finally became clear:

Some people don’t just cross your path. They come back—until they become home.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Heart className="mx-auto mb-2 text-primary/50" size={32} />
              <p className="text-sm">Add your photo here</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStorySection;