import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChallengeSection from "@/components/ChallengeSection";
import ApproachSection from "@/components/ApproachSection";
import ServicesSection from "@/components/ServicesSection";
import FrameworkSection from "@/components/FrameworkSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import AudienceSection from "@/components/AudienceSection";
import OutcomesSection from "@/components/OutcomesSection";
import WhySection from "@/components/WhySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ChallengeSection />
        <ApproachSection />
        <ServicesSection />
        <FrameworkSection />
        <DifferentiatorsSection />
        <AudienceSection />
        <OutcomesSection />
        <WhySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
