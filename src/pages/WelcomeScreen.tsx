import { useNavigate } from "react-router-dom";
import { Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const scrollToInfo = () => {
    document.getElementById("info-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-24">
          <h1 className="text-[40px] font-semibold text-primary mb-2">Udaan</h1>
          <div className="space-y-4">
            <h2 className="text-[32px] font-semibold text-foreground leading-tight">
              Your AI Career Coach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your skills into the office job you deserve - in weeks, not years
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-md mx-auto pt-8">
            <Button
              onClick={() => navigate("/onboarding")}
              className="w-full py-6 text-base font-semibold"
            >
              Start Your Journey
            </Button>
            <Button
              onClick={scrollToInfo}
              variant="outline"
              className="w-full py-6 text-base font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Info Section */}
        <div id="info-section" className="grid grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4 p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">AI-Powered Learning</h3>
            <p className="text-sm text-muted-foreground">
              Personalized lessons that adapt to your schedule and pace
            </p>
          </div>

          <div className="text-center space-y-4 p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Job-Ready in Weeks</h3>
            <p className="text-sm text-muted-foreground">
              Focused training for real office jobs paying ₹25-35k/month
            </p>
          </div>

          <div className="text-center space-y-4 p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Track Your Progress</h3>
            <p className="text-sm text-muted-foreground">
              See exactly how close you are to landing your dream role
            </p>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            1,243 learners • 82% completion rate • ₹32,000 avg. starting salary
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
