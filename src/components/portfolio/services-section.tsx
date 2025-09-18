import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, Network, Globe, Smartphone, 
  Cloud, Users, FileText, AlertTriangle 
} from "lucide-react";

const services = [
  {
    title: "Network Penetration Testing",
    icon: Network,
    description: "Comprehensive assessment of network infrastructure to identify vulnerabilities and security weaknesses.",
    features: [
      "External & Internal Network Testing",
      "Wireless Network Security Assessment",
      "Firewall Configuration Review",
      "Network Segmentation Analysis",
    ],
    price: "Starting at $5,000",
    duration: "1-2 weeks",
  },
  {
    title: "Web Application Security Testing",
    icon: Globe,
    description: "In-depth security evaluation of web applications using both automated and manual testing techniques.",
    features: [
      "OWASP Top 10 Vulnerability Testing",
      "Authentication & Authorization Testing",
      "Business Logic Flaw Analysis",
      "API Security Assessment",
    ],
    price: "Starting at $3,500",
    duration: "1 week",
  },
  {
    title: "Mobile Application Security",
    icon: Smartphone,
    description: "Security assessment of mobile applications across iOS and Android platforms.",
    features: [
      "Static & Dynamic Code Analysis",
      "Runtime Application Self-Protection",
      "Data Storage Security Review",
      "Communication Security Testing",
    ],
    price: "Starting at $4,000",
    duration: "1-2 weeks",
  },
  {
    title: "Cloud Security Assessment",
    icon: Cloud,
    description: "Evaluation of cloud infrastructure and services for security misconfigurations and vulnerabilities.",
    features: [
      "AWS/Azure/GCP Configuration Review",
      "Container Security Assessment",
      "IAM Policy Analysis",
      "Data Encryption Validation",
    ],
    price: "Starting at $6,000",
    duration: "1-2 weeks",
  },
  {
    title: "Social Engineering Testing",
    icon: Users,
    description: "Human factor security testing through phishing campaigns and social engineering simulations.",
    features: [
      "Phishing Campaign Simulation",
      "Physical Security Assessment",
      "Employee Security Awareness",
      "Security Training Recommendations",
    ],
    price: "Starting at $2,500",
    duration: "2-3 weeks",
  },
  {
    title: "Vulnerability Assessment",
    icon: AlertTriangle,
    description: "Systematic identification and classification of security vulnerabilities in your environment.",
    features: [
      "Automated Vulnerability Scanning",
      "Manual Verification & Analysis",
      "Risk Prioritization Matrix",
      "Remediation Roadmap",
    ],
    price: "Starting at $2,000",
    duration: "3-5 days",
  },
];

export function ServicesSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Offered <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive cybersecurity services to protect your digital assets and strengthen your security posture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="animated-border cyber-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-accent rounded-lg">
                    {/* ✅ Fixed: use icon utility class */}
                    <service.icon className="w-6 h-6 icon" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-accent mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing & Duration */}
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div>
                    <Badge variant="secondary" className="mb-1">
                      {service.duration}
                    </Badge>
                    <p className="font-semibold text-accent">{service.price}</p>
                  </div>
                  <Button 
                    size="sm" 
                    className="cyber-hover"
                    onClick={() => scrollToSection('contact')}
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Card className="animated-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Security Assessment?</h3>
              <p className="text-muted-foreground mb-6">
                Every organization has unique security requirements. Let's discuss a tailored 
                security testing approach that fits your specific needs and compliance requirements.
              </p>
              <Button 
                size="lg" 
                className="cyber-hover animate-glow-pulse"
                onClick={() => scrollToSection('contact')}
              >
                Schedule Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
