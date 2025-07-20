// Navigation component - provides navigation between different sections
// Uses a Pokemon-themed design with smooth scrolling

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { animationVariants } from "@/utils/pokemon";
import { ThemeToggle } from "@/components/ThemeToggle";

// Define the navigation items
const navItems = [
  { id: "about", label: "About", icon: "👨‍💻" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "contact", label: "Contact", icon: "📧" }
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events to update active section and navigation style
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Change navigation style when scrolled
      setIsScrolled(scrollTop > 50);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navigation
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="text-2xl">⚡</div>
            <span className="font-bold text-xl">PokéFolio</span>
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 cursor-pointer hover:cursor-pointer"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Button>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                // Simple mobile menu - you could expand this with a proper mobile menu
                const mobileMenu = document.getElementById("mobile-menu");
                if (mobileMenu) {
                  mobileMenu.classList.toggle("hidden");
                }
              }}
              className="text-2xl cursor-pointer hover:cursor-pointer"
            >
              ☰
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => {
                  scrollToSection(item.id);
                  document.getElementById("mobile-menu")?.classList.add("hidden");
                }}
                className="flex items-center space-x-2 px-4 py-2 rounded-full justify-start cursor-pointer hover:cursor-pointer"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Button>
            ))}
            
            {/* Mobile Theme Toggle */}
            <div className="px-4 py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
