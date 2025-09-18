import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, Target, Star, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Top Performer",
    description: "Recognized as top penetration tester for 3 consecutive years",
    value: "2021-2023",
    color: "text-yellow-500",
  },
  {
    icon: Target,
    title: "Critical Vulnerabilities Found",
    description: "Discovered and helped remediate high-impact security flaws",
    value: "500+",
    color: "text-red-500",
  },
  {
    icon: Users,
    title: "Organizations Secured",
    description: "Successfully completed security assessments",
    value: "150+",
    color: "text-blue-500",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Featured in cybersecurity publications and conferences",
    value: "25+",
    color: "text-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Security Improvement",
    description: "Average security posture improvement for clients",
    value: "85%",
    color: "text-green-500",
  },
  {
    icon: Star,
    title: "Client Satisfaction",
    description: "Consistently high ratings from satisfied clients",
    value: "4.9/5",
    color: "text-accent",
  },
];

const awards = [
  {
    title: "Cybersecurity Excellence Award",
    organization: "InfoSec Institute",
    year: "2023",
    description: "Outstanding contribution to cybersecurity research and practice",
  },
  {
    title: "Ethical Hacker of the Year",
    organization: "Security Weekly",
    year: "2022",
    description: "Recognition for exceptional penetration testing methodologies",
  },
  {
    title: "Research Innovation Award",
    organization: "BSides SF",
    year: "2021",
    description: "Novel approach to automated vulnerability discovery",
  },
];

const publications = [
  {
    title: "Advanced Persistence Techniques in Modern Networks",
    venue: "Black Hat USA 2023",
    type: "Conference Talk",
  },
  {
    title: "Automating Web Application Security Testing",
    venue: "Journal of Cybersecurity",
    type: "Research Paper",
  },
  {
    title: "Social Engineering in the Digital Age",
    venue: "DEF CON 30",
    type: "Workshop",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Achievements & <span className="text-accent">Recognition</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional milestones, industry recognition, and contributions to the cybersecurity community
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="animated-border cyber-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-accent/10 mb-4`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2 glow-text">
                  {achievement.value}
                </div>
                <h3 className="font-semibold mb-2 text-accent">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards & Publications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Awards */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" />
              Awards & Honors
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card key={index} className="animated-border cyber-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-lg">{award.title}</h4>
                      <Badge variant="outline" className="animate-glow-pulse">
                        {award.year}
                      </Badge>
                    </div>
                    <p className="text-accent font-medium mb-2">{award.organization}</p>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-accent" />
              Publications & Talks
            </h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="animated-border cyber-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-lg">{pub.title}</h4>
                      <Badge variant="secondary">{pub.type}</Badge>
                    </div>
                    <p className="text-accent font-medium">{pub.venue}</p>
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