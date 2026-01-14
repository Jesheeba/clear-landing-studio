import { Hero } from "@/components/landing/Hero";
import { Qualification } from "@/components/landing/Qualification";
import { Problem } from "@/components/landing/Problem";
import { WhatYouLearn } from "@/components/landing/WhatYouLearn";
import { WhyItWorks } from "@/components/landing/WhyItWorks";
import { About } from "@/components/landing/About";
import { WhatHappensNext } from "@/components/landing/WhatHappensNext";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Qualification />
      <Problem />
      <WhatYouLearn />
      <WhyItWorks />
      <About />
      <WhatHappensNext />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
