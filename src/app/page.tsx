// Main page component - Pokemon Portfolio
// This is the entry point that brings together all our Pokemon-themed components

import Navigation from "@/components/Navigation";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation - Fixed header that follows user scroll */}
      <Navigation />
      
      {/* Main Content - All sections stacked vertically */}
      <main>
        {/* About Section - Hero section with personal introduction */}
        <AboutSection />
        
        {/* Skills Section - Programming skills with Pokemon representations */}
        <SkillsSection />
        
        {/* Projects Section - Portfolio projects with Pokemon themes */}
        <ProjectsSection />
        
        {/* Contact Section - Contact form and information */}
        <ContactSection />
      </main>
      
      {/* Footer - Additional information and links */}
      <Footer />
    </div>
  );
}
