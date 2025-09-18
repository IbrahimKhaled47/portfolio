import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, Phone, MapPin, Calendar, 
  Shield, Clock, CheckCircle, MessageSquare 
} from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Ready to <span className="text-accent">Secure</span> Your Systems?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss how I can help strengthen your security posture through comprehensive penetration testing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="animated-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-accent" />
                  Start Your Security Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="cyber-hover" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="cyber-hover" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="cyber-hover" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" className="cyber-hover" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background cyber-hover">
                    <option>Network Penetration Testing</option>
                    <option>Web Application Security</option>
                    <option>Mobile App Security</option>
                    <option>Cloud Security Assessment</option>
                    <option>Social Engineering Testing</option>
                    <option>Vulnerability Assessment</option>
                    <option>Custom Security Consultation</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your security testing requirements..."
                    className="min-h-32 cyber-hover"
                  />
                </div>
                
                <Button size="lg" className="w-full cyber-hover animate-glow-pulse">
                  Send Security Assessment Request
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  I'll respond within 24 hours with a customized assessment proposal
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Process */}
          <div className="animate-slide-in-right space-y-8">
            {/* Contact Information */}
            <Card className="animated-border">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>ibrahimkhaled4747@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>+20 100 287 7299</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Giza, Egypt (Available Globally)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>Available for new projects</span>
                </div>
              </CardContent>
            </Card>

            {/* Process Steps */}
            <Card className="animated-border">
              <CardHeader>
                <CardTitle>Assessment Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[ 
                  { step: 1, title: "Initial Consultation", desc: "Discuss your security requirements and scope" },
                  { step: 2, title: "Proposal & Planning", desc: "Customized testing methodology and timeline" },
                  { step: 3, title: "Security Testing", desc: "Comprehensive assessment execution" },
                  { step: 4, title: "Detailed Reporting", desc: "Executive summary and technical findings" }
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 text-black dark:text-white">
                      {step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="animated-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold">Available for New Projects</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>24h Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>NDA Ready</span>
                  </div>
                </div>
                <Badge variant="secondary" className="mt-4 animate-glow-pulse">
                  Currently booking for Q1 2024
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
