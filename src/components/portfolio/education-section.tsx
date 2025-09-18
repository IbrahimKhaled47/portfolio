import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Penetration Tester Intern",
    school: "Ministry of Communications and Information Technology",
    year: "2025",
    gpa: "3.0/4.0",
    highlights: ["Training in core cybersecurity domains", "Developing knowledge of security standards"],
  },
  {
    degree: "Bachelor of Biomedical Engineering",
    school: "Faculty of Engineering, Helwan University",
    year: "2021-Present",
    gpa: "3.4/4.0",
    highlights: ["Biomedical Engineering", "Radiology"],
  },
];

const certifications = [
  { name: "Certified Ethical Hacker (CEH)", org: "EC-Council", year: "2021" },
  { name: "CISSP", org: "ISC²", year: "2022" },
  { name: "OSCP", org: "Offensive Security", year: "2020" },
  { name: "Security+", org: "CompTIA", year: "2019" },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Education & <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and professional development in cybersecurity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-accent" />
              Education
            </h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <Card key={index} className="animated-border cyber-hover">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="font-semibold">{edu.school}</span>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3">
                      <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="animated-border cyber-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-lg">{cert.name}</h4>
                        <p className="text-muted-foreground">{cert.org}</p>
                      </div>
                      <Badge variant="outline" className="animate-glow-pulse">
                        {cert.year}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}