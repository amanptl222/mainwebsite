import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Founder } from "@/components/sections/Founder";
import { Trust } from "@/components/sections/Trust";
import { Services } from "@/components/sections/Services";
import { DevelopmentExpertise } from "@/components/sections/DevelopmentExpertise";
import { TechnologyStack } from "@/components/sections/TechnologyStack";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { WhyUs } from "@/components/sections/WhyUs";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Founder />
      <Trust />
      <Services />
      <DevelopmentExpertise />
      <TechnologyStack />
      <EngagementModels />
      <WhyUs />
      <Industries />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}
