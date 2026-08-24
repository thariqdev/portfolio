import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TechSection from "@/components/TechSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationSection from "@/components/EducationSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-grain">
      <BackgroundEffects />
      <CustomCursor />
      <ScrollProgress />
      <SiteNav />

      <main>
        <Hero />
        <AboutSection />
        <TechSection />
        <ExperienceTimeline />
        <EducationSection />
        <ProjectShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
