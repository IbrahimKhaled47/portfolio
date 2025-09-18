import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dedicated cybersecurity professional with expertise in penetration
            testing, vulnerability assessment, and ethical hacking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Profile Image + Info */}
          <div className="order-2 md:order-1 h-full">
            <Card className="animated-border cyber-hover h-full flex">
              <CardContent className="p-8 flex flex-col items-center justify-center flex-grow">
                {/* Profile Picture */}
                <div className="w-48 h-48 rounded-full border-4 border-accent shadow-[0_0_25px_hsl(var(--accent))] overflow-hidden mb-6">
                  <img
                    src="images/ibrahim.png"
                    alt="Ibrahim Khaled"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="text-center w-full">
                  <h3 className="text-4xl font-bold mb-3 text-foreground">
                    Ibrahim Khaled
                  </h3>
                  <Badge
                    variant="secondary"
                    className="mb-6 text-lg px-4 py-1 font-medium"
                  >
                    Penetration Testing Junior
                  </Badge>

                  {/* Contact Info */}
                  <div className="space-y-3 text-lg text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>Giza, Egypt</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      <span>ibrahimkhaled4747@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      <span>+20 1002877299</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Overview */}
          <div className="order-1 md:order-2 h-full">
            <Card className="animated-border h-full flex flex-col">
              <CardContent className="p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-accent">
                  Professional Overview
                </h3>
                <div className="space-y-4 text-muted-foreground flex-grow text-base leading-relaxed">
                  <p>
                    Passionate cybersecurity enthusiast specializing in
                    penetration testing and vulnerability assessment. Focused on
                    identifying weaknesses in digital infrastructures and
                    applying ethical hacking practices to strengthen defenses.
                  </p>
                  <p>
                    Experienced with web application testing, network security,
                    and hands-on labs that simulate real-world attack scenarios.
                    Continuously learning and adapting to new security threats
                    and technologies.
                  </p>
                  <p>
                    Committed to building a strong foundation in security
                    testing methodologies, detailed reporting, and effective
                    remediation strategies to support organizations in
                    protecting their assets.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3 text-accent">
                    Core Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Penetration Testing",
                      "Vulnerability Assessment",
                      "Network Security",
                      "Web Application Security",
                      "Threat Modeling",
                      "Incident Response",
                      "Security Auditing",
                    ].map((skill) => (
                      <Badge key={skill} variant="outline" className="cyber-hover">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
