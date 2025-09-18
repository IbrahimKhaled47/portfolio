import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { id: "cover", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("cover");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl glow-text">
            Sec47<span className="text-accent">.</span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Desktop nav items */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-smooth ${
                    activeSection === item.id
                      ? "animate-glow-pulse"
                      : "hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-black"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Mobile Menu Shortcut */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden cyber-hover"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
