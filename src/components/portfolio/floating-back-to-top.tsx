import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function FloatingBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled more than 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50
        transition-all duration-300 cursor-pointer
        ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
      `}
      onClick={scrollToTop}
    >
      <div
        className="w-12 h-12 rounded-full bg-accent flex items-center justify-center 
                   text-white dark:text-black shadow-lg hover:scale-110 
                   transition-transform animate-bounce"
      >
        <ChevronUp className="w-6 h-6" />
      </div>
    </div>
  );
}
