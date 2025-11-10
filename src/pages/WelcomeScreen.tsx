import { useNavigate } from "react-router-dom";
import { Zap, Target, TrendingUp, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TaraMascot } from "@/components/TaraMascot";
import heroBackground from "@/assets/hero-background.png";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const scrollToInfo = () => {
    document.getElementById("info-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-background/70" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Your Path to a Better Career Starts Here
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your skills into a stable office job — in weeks, not years
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-8">
            <Button
              onClick={() => navigate("/onboarding")}
              size="lg"
              className="w-full"
            >
              Start Learning Free
            </Button>
            <Button
              onClick={scrollToInfo}
              variant="outline"
              size="lg"
              className="w-full"
            >
              Learn More
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>

        <TaraMascot 
          message="Let's find the right path for you."
          position="bottom-right"
          emotion="happy"
        />
      </div>

      {/* How It Works Section */}
      <div id="info-section" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">How It Works</h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Three simple steps to your new career
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-card rounded-2xl border-2 border-border p-8 text-center space-y-4 hover:shadow-xl transition-all duration-200 hover:scale-105 animate-scale-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-2">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">1. Set Your Goal</h3>
            <p className="text-muted-foreground leading-relaxed">
              Tell us what job you're preparing for and we'll create your personalized learning path
            </p>
          </div>

          <div className="bg-card rounded-2xl border-2 border-border p-8 text-center space-y-4 hover:shadow-xl transition-all duration-200 hover:scale-105 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20 text-secondary mb-2">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">2. Learn by Doing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Master practical skills through short, job-focused exercises you can complete anytime
            </p>
          </div>

          <div className="bg-card rounded-2xl border-2 border-border p-8 text-center space-y-4 hover:shadow-xl transition-all duration-200 hover:scale-105 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 text-accent mb-2">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">3. Land Your Job</h3>
            <p className="text-muted-foreground leading-relaxed">
              Build your resume and get matched with real office jobs paying ₹25-35k/month
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-card rounded-2xl border-2 border-primary/30 p-12 text-center space-y-8">
          <h3 className="text-3xl font-bold text-foreground mb-8">Trusted by Learners</h3>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Learners Placed</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-success">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-foreground">85%</p>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-accent">
                <Clock className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-foreground">12k+</p>
              <p className="text-sm text-muted-foreground">Skills Practiced</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center space-y-6">
          <h3 className="text-3xl font-bold text-foreground">Ready to Begin Your Journey?</h3>
          <Button 
            onClick={() => navigate("/onboarding")}
            size="lg"
            className="px-12"
          >
            Start Learning Free
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Udaan. Empowering careers, one skill at a time.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">About</button>
              <button className="hover:text-primary transition-colors">Contact</button>
              <button className="hover:text-primary transition-colors">Privacy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomeScreen;
