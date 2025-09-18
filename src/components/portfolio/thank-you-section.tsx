import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, Shield, Users, Linkedin, 
  Github, Mail 
} from "lucide-react";

export function ThankYouSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 gradient-cyber">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in-up space-y-8">
          {/* Main Message */}
          <div className="space-y-6">
            <div className="inline-flex p-6 bg-gradient-accent/20 rounded-full mb-6">
              <Heart className="w-12 h-12 text-accent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Thank You for Your Trust
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your security is my priority. Together, we can build a more secure digital world, 
              one assessment at a time.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <Card className="animated-border cyber-hover">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold glow-text">150+</div>
                <p className="text-sm text-muted-foreground">Organizations Protected</p>
              </CardContent>
            </Card>
            
            <Card className="animated-border cyber-hover">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold glow-text">500K+</div>
                <p className="text-sm text-muted-foreground">Users Secured</p>
              </CardContent>
            </Card>
            
            <Card className="animated-border cyber-hover">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold glow-text">99.9%</div>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Message */}
          <Card className="animated-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                "Security is not a destination, it's a journey. I'm honored to be part of 
                your organization's security journey and look forward to helping you stay 
                ahead of emerging threats."
              </p>
              <Badge variant="secondary" className="animate-glow-pulse">
                - Ibrahim Khaled, Penetration Testing Junior
              </Badge>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Stay Connected</h3>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.linkedin.com/in/ibrahimkhaled47/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="cyber-hover">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a 
                href="https://github.com/IbrahimKhaled47" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="cyber-hover">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:ibrahimkhaled4747@gmail.com">
                <Button variant="outline" size="icon" className="cyber-hover">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-accent/20 text-sm text-muted-foreground">
            <p>© 2025 Ibrahim Khaled - Cybersecurity Portfolio. All rights reserved.</p>
            <p className="mt-2">
              Built with security in mind. This portfolio demonstrates my commitment to 
              both cybersecurity excellence and modern web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
