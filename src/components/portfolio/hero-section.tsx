import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Terminal, Lock, FileSearch } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cover"
      className="min-h-screen relative overflow-hidden gradient-cyber"
    >
      {/* Matrix Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="matrix-rain-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyber-green text-sm font-mono animate-matrix-rain opacity-60"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {Math.random().toString(36).substring(2, 15)}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto animate-fade-in-up">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-[380px] md:h-[380px] rounded-full border-4 border-accent shadow-[0_0_28px_hsl(var(--accent))] overflow-hidden">
              <img
                src="https://ibrahimkhaled47.github.io/portfolio/images/ibrahim.png"
                alt="Ibrahim Khaled"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex flex-col justify-center">
            {/* Status Badge */}
            <Badge
              variant="outline"
              className="mb-4 animate-glow-pulse border-accent text-accent"
            >
              <Terminal className="w-4 h-4 mr-2" />
              Available for Security Assessments
            </Badge>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-bold mb-3 glow-text leading-tight">
              Ibrahim Khaled
              <span className="block text-accent text-2xl md:text-3xl mt-2">
                Penetration Testing Junior
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
              Securing digital landscapes through ethical hacking, vulnerability
              assessments, and advanced penetration testing methodologies.
            </p>

            {/* Skills Icons */}
            <div className="flex justify-center md:justify-start gap-6 mb-6">
              <div className="flex flex-col items-center cyber-hover">
                <Shield className="w-7 h-7 text-accent mb-1" />
                <span className="text-xs">Security</span>
              </div>
              <div className="flex flex-col items-center cyber-hover">
                <Lock className="w-7 h-7 text-accent mb-1" />
                <span className="text-xs">Penetration</span>
              </div>
              <div className="flex flex-col items-center cyber-hover">
                <FileSearch className="w-7 h-7 text-accent mb-1" />
                <span className="text-xs">Analysis</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:justify-start justify-center">
              <Button
                size="lg"
                className="cyber-hover animate-glow-pulse"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="cyber-hover border-accent"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
