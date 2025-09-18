import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Penetration Tester",
    company: "CyberDefense Corp",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "Full-time",
    achievements: [
      "Led security assessments for Fortune 500 companies, identifying critical vulnerabilities",
      "Developed custom testing methodologies that increased efficiency by 40%",
      "Mentored junior penetration testers and conducted security training workshops",
      "Collaborated with development teams to implement secure coding practices",
    ],
    technologies: ["Metasploit", "Burp Suite", "Cobalt Strike", "Python", "PowerShell"],
  },
  {
    title: "Cybersecurity Analyst",
    company: "SecureNet Solutions",
    location: "Palo Alto, CA",
    period: "2020 - 2022",
    type: "Full-time",
    achievements: [
      "Conducted vulnerability assessments and penetration tests for 50+ clients",
      "Reduced false positives in security scans by 30% through improved methodologies",
      "Created comprehensive security reports and remediation strategies",
      "Participated in red team exercises and incident response activities",
    ],
    technologies: ["Nessus", "Nmap", "Wireshark", "Kali Linux", "OWASP ZAP"],
  },
  {
    title: "Junior Security Consultant",
    company: "TechGuard Inc",
    location: "San Jose, CA",
    period: "2019 - 2020",
    type: "Full-time",
    achievements: [
      "Assisted in penetration testing engagements for web applications and networks",
      "Performed security assessments following OWASP and NIST guidelines",
      "Developed automation scripts for vulnerability scanning and reporting",
      "Contributed to security policy development and compliance audits",
    ],
    technologies: ["Burp Suite", "Nmap", "Python", "Bash", "SQL"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Work <span className="text-accent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional journey in cybersecurity and penetration testing
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="animated-border cyber-hover animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-accent font-semibold">
                      <Building className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="w-fit flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </Badge>
                    <Badge variant="secondary" className="w-fit flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Achievements */}
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="cyber-hover">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}