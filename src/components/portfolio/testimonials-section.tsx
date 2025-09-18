import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Building } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CISO",
    company: "TechCorp Industries",
    rating: 5,
    content:
      "Alex's penetration testing revealed critical vulnerabilities we never knew existed. Their detailed reporting and remediation guidance helped us significantly improve our security posture. Exceptional work!",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    title: "Security Manager",
    company: "Financial Services Group",
    rating: 5,
    content:
      "Professional, thorough, and incredibly knowledgeable. Alex's social engineering assessment opened our eyes to human factor risks. The training recommendations were spot-on and well-received by our team.",
    avatar: "MC",
  },
  {
    name: "Lisa Rodriguez",
    title: "CTO",
    company: "HealthTech Solutions",
    rating: 5,
    content:
      "Outstanding mobile app security assessment. Alex identified HIPAA compliance gaps we missed and provided clear, actionable solutions. Their expertise in healthcare security is impressive.",
    avatar: "LR",
  },
  {
    name: "David Park",
    title: "IT Director",
    company: "E-commerce Platform",
    rating: 5,
    content:
      "The web application penetration test was comprehensive and revealed several critical SQL injection vulnerabilities. Alex's ability to explain technical findings to non-technical stakeholders was invaluable.",
    avatar: "DP",
  },
  {
    name: "Amanda Foster",
    title: "Security Architect",
    company: "Cloud Services Inc",
    rating: 5,
    content:
      "Alex's cloud security assessment was exactly what we needed. They identified misconfigurations across our AWS environment and provided a clear roadmap for remediation. Highly recommended!",
    avatar: "AF",
  },
  {
    name: "Robert Kim",
    title: "VP of Engineering",
    company: "SaaS Startup",
    rating: 5,
    content:
      "Fantastic network penetration testing service. Alex demonstrated how an attacker could gain domain admin access, which was eye-opening. Their methodology is thorough and professional.",
    avatar: "RK",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Client <span className="text-accent">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading organizations for comprehensive cybersecurity
            assessments
          </p>
        </div>

        {/* Overall Rating Display */}
        <div className="text-center mb-12 animate-scale-in">
          <Card className="animated-border max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-3xl font-bold mb-1 glow-text">4.9/5.0</div>
              <p className="text-muted-foreground">
                Average client satisfaction rating
              </p>
              <Badge variant="secondary" className="mt-2">
                Based on 50+ reviews
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="animated-border cyber-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  {/* ✅ Avatar text adapts to light/dark */}
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center font-bold icon">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      {/* ✅ Building icon adapts now */}
                      <Building className="w-3 h-3 icon" />
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center animate-fade-in-up">
          <h3 className="text-xl font-semibold mb-6">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "Fortune 500 Financial",
              "Leading E-commerce",
              "Healthcare Tech",
              "Cloud Services",
              "SaaS Platforms",
              "Government Agencies",
            ].map((client, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cyber-hover text-sm py-2 px-4"
              >
                {client}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
