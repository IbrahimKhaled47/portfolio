import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, Terminal, Network, Globe, 
  Bug, Key, FileSearch, AlertTriangle 
} from "lucide-react";

const skillCategories = [
  {
    title: "Penetration Testing",
    icon: Shield,
    skills: [
      { name: "Web Application Testing", level: 95 },
      { name: "Network Penetration", level: 90 },
      { name: "Mobile App Security", level: 85 },
      { name: "API Security Testing", level: 88 },
    ],
  },
  {
    title: "Security Tools",
    icon: Terminal,
    skills: [
      { name: "Metasploit", level: 95 },
      { name: "Burp Suite", level: 92 },
      { name: "Nmap", level: 90 },
      { name: "Wireshark", level: 87 },
    ],
  },
  {
    title: "Programming & Scripting",
    icon: FileSearch,
    skills: [
      { name: "Python", level: 90 },
      { name: "Bash/Shell", level: 88 },
      { name: "PowerShell", level: 82 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Frameworks & Standards",
    icon: Network,
    skills: [
      { name: "OWASP Top 10", level: 95 },
      { name: "NIST Framework", level: 90 },
      { name: "ISO 27001", level: 85 },
      { name: "PTES Methodology", level: 88 },
    ],
  },
];

const technicalSkills = [
  "Vulnerability Assessment", "Social Engineering", "Cryptography",
  "Incident Response", "Forensics", "Reverse Engineering", "Malware Analysis",
  "Cloud Security (AWS/Azure)", "Docker/Kubernetes Security", "DevSecOps"
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise across cybersecurity domains and methodologies
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="animated-border cyber-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="w-6 h-6 text-accent" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 animate-glow-pulse 
                                 bg-neutral-200 dark:bg-neutral-800 
                                 [&>div]:bg-accent" 
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technical Skills */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-bold text-center mb-8">
            Additional <span className="text-accent">Expertise</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technicalSkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="cyber-hover animate-scale-in text-sm py-2 px-4"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
