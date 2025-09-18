import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ServicesSection } from "@/components/portfolio/services-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { AchievementsSection } from "@/components/portfolio/achievements-section";
import { TestimonialsSection } from "@/components/portfolio/testimonials-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ThankYouSection } from "@/components/portfolio/thank-you-section";
import { FloatingBackToTop } from "@/components/portfolio/floating-back-to-top";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <AchievementsSection />
      <TestimonialsSection />
      <ContactSection />
      <ThankYouSection />
      <FloatingBackToTop />
    </div>
  );
};

export default Index;
