import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield, Globe, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Financial Institution Security Audit",
    type: "Network Penetration Testing",
    icon: Shield,
    description:
      "Comprehensive security assessment of a major bank's network infrastructure, identifying critical vulnerabilities and providing remediation strategies.",
    highlights: [
      "Discovered 15+ critical vulnerabilities",
      "Achieved domain admin access in 48 hours",
      "Implemented custom payload bypass techniques",
      "Provided comprehensive remediation roadmap",
    ],
    technologies: [
      "Metasploit",
      "Cobalt Strike",
      "Python",
      "PowerShell",
      "BloodHound",
    ],
    impact: "Prevented potential $2M+ in fraud losses",
    client: "Fortune 500 Financial Institution",
    duration: "3 weeks",
  },
  {
    title: "E-commerce Platform Security Review",
    type: "Web Application Testing",
    icon: Globe,
    description:
      "In-depth security testing of a high-traffic e-commerce platform handling sensitive customer data and payment information.",
    highlights: [
      "Identified SQL injection vulnerabilities",
      "Discovered authentication bypass flaws",
      "Tested payment processing security",
      "Evaluated data protection compliance",
    ],
    technologies: ["Burp Suite", "OWASP ZAP", "SQLMap", "Nmap", "Custom Scripts"],
    impact: "Protected 100K+ customer records",
    client: "Leading E-commerce Company",
    duration: "2 weeks",
  },
  {
    title: "Healthcare Mobile App Assessment",
    type: "Mobile Security Testing",
    icon: Smartphone,
    description:
      "Security evaluation of a healthcare mobile application storing patient data and medical records.",
    highlights: [
      "Analyzed data storage encryption",
      "Tested API security mechanisms",
      "Evaluated HIPAA compliance",
      "Performed runtime security testing",
    ],
    technologies: [
      "MobSF",
      "Frida",
      "Charles Proxy",
      "Android Studio",
      "Xcode",
    ],
    impact: "Ensured HIPAA compliance for 50K+ patients",
    client: "Healthcare Technology Startup",
    duration: "1 week",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing successful security assessments and penetration testing
            engagements
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="animated-border cyber-hover animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-accent rounded-lg flex-shrink-0">
                      {/* ✅ Icon now respects light/dark mode */}
                      <project.icon className="w-6 h-6 icon" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mb-2">
                        {project.type}
                      </Badge>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 lg:items-end">
                    <Badge variant="outline">{project.duration}</Badge>
                    <p className="text-sm text-muted-foreground">
                      {project.client}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Highlights */}
                <div>
                  <h4 className="font-semibold mb-3 text-accent">
                    Key Highlights
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-accent mt-1">•</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-accent">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="cyber-hover">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-gradient-accent/10 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-semibold mb-2 text-accent">
                    Business Impact
                  </h4>
                  <p className="text-sm font-medium">{project.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Card className="animated-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Secure Your Infrastructure?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help identify vulnerabilities and
                strengthen your organization's security posture through
                comprehensive testing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="cyber-hover animate-glow-pulse">
                  Start Your Security Assessment
                </Button>
                <Button variant="outline" size="lg" className="cyber-hover">
                  View Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
